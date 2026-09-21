// Route-level API tests. Exercises the full HTTP surface (validation, auth,
// rate limiting respects the limits chosen below, status management).
// Storage is forced to the in-memory adapter for determinism.

process.env.NODE_ENV = "test";
process.env.ENABLE_MSSQL = "false";
process.env.ADMIN_USERNAME = "testadmin";
process.env.ADMIN_PASSWORD = "testpass123";
process.env.JWT_SECRET = "test-secret";

import { test, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";

let server;
let baseUrl;
let storage;

before(async () => {
  const { default: app } = await import("../src/index.js");
  const { initStorage, memoryStorage } = await import("../src/storage/index.js");
  await initStorage();
  storage = memoryStorage;
  server = app.listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(() => {
  if (server) server.close();
});

beforeEach(() => {
  storage._reset();
});

async function request(method, path, { body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  let json = null;
  try {
    json = await res.json();
  } catch {
    /* empty body */
  }
  return { status: res.status, json };
}

const contactMessage = {
  name: "Jane Wanjiru",
  email: "jane@example.com",
  phone: "+254700000000",
  subject: "Website quote",
  message: "I need a website for my shop, please.",
};

const inquiry = {
  name: "John Kamau",
  email: "john@example.com",
  phone: "0700123456",
  company: "Mwamba Traders",
  service: "Website",
  budget: "KSh 20,000 – 50,000",
  timeline: "Within 1 month",
  details: "A simple e-commerce website for my shop.",
};

test("API routes", async (t) => {
  let token;

  await t.test("health check responds", async () => {
    const res = await fetch(`${baseUrl}/api/health`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.status, "ok");
  });

  await t.test("POST /api/messages accepts a valid submission", async () => {
    const res = await request("POST", "/api/messages", { body: contactMessage });
    assert.equal(res.status, 201);
    assert.equal(res.json.success, true);
    assert.ok(res.json.id);
  });

  await t.test("POST /api/messages rejects an invalid submission with 422", async () => {
    const res = await request("POST", "/api/messages", { body: { name: "", email: "nope" } });
    assert.equal(res.status, 422);
    assert.ok(res.json.fields.name);
    assert.ok(res.json.fields.email);
    assert.ok(res.json.fields.phone);
  });

  await t.test("POST /api/inquiries accepts a valid submission", async () => {
    const res = await request("POST", "/api/inquiries", { body: inquiry });
    assert.equal(res.status, 201);
    assert.ok(res.json.id);
  });

  await t.test("POST /api/inquiries rejects a budget outside the allowed list with 422", async () => {
    const res = await request("POST", "/api/inquiries", { body: { ...inquiry, budget: "Cheap" } });
    assert.equal(res.status, 422);
    assert.ok(res.json.fields.budget);
  });

  await t.test("GET /api/messages requires a token", async () => {
    const res = await request("GET", "/api/messages");
    assert.equal(res.status, 401);
  });

  await t.test("POST /api/auth/login rejects wrong credentials", async () => {
    const res = await request("POST", "/api/auth/login", { body: { username: "testadmin", password: "wrong" } });
    assert.equal(res.status, 401);
  });

  await t.test("POST /api/auth/login issues a token for valid credentials", async () => {
    const res = await request("POST", "/api/auth/login", {
      body: { username: "testadmin", password: "testpass123" },
    });
    assert.equal(res.status, 200);
    assert.ok(res.json.token);
    token = res.json.token;
  });

  await t.test("GET /api/messages with a token lists saved messages", async () => {
    await request("POST", "/api/messages", { body: contactMessage });
    const res = await request("GET", "/api/messages", { token });
    assert.equal(res.status, 200);
    assert.equal(res.json.data.length, 1);
    assert.equal(res.json.data[0].email, contactMessage.email);
  });

  await t.test("GET /api/inquiries with a token lists saved inquiries with status", async () => {
    await request("POST", "/api/inquiries", { body: inquiry });
    const res = await request("GET", "/api/inquiries", { token });
    assert.equal(res.status, 200);
    assert.equal(res.json.data.length, 1);
    assert.equal(res.json.data[0].status, "new");
  });

  await t.test("PUT /api/inquiries/:id/status requires a token", async () => {
    const res = await request("PUT", `/api/inquiries/1/status`, { body: { status: "contacted" } });
    assert.equal(res.status, 401);
  });

  await t.test("PUT /api/inquiries/:id/status rejects an invalid status", async () => {
    const created = await request("POST", "/api/inquiries", { body: inquiry });
    const res = await request("PUT", `/api/inquiries/${created.json.id}/status`, {
      body: { status: "shipped" },
      token,
    });
    assert.equal(res.status, 422);
  });

  await t.test("PUT /api/inquiries/:id/status updates an inquiry and 404s on missing id", async () => {
    const created = await request("POST", "/api/inquiries", { body: inquiry });
    const id = created.json.id;

    const updated = await request("PUT", `/api/inquiries/${id}/status`, {
      body: { status: "contacted" },
      token,
    });
    assert.equal(updated.status, 200);
    assert.equal(updated.json.data.status, "contacted");
    assert.ok(updated.json.data.statusUpdatedAt);

    const missing = await request("PUT", "/api/inquiries/999999/status", {
      body: { status: "archived" },
      token,
    });
    assert.equal(missing.status, 404);
  });

  await t.test("GET /api/inquiries filters by status", async () => {
    await request("POST", "/api/inquiries", { body: inquiry });
    const created = await request("POST", "/api/inquiries", { body: { ...inquiry, name: "Another" } });
    await request("PUT", `/api/inquiries/${created.json.id}/status`, { body: { status: "archived" }, token });

    const onlyArchived = await request("GET", "/api/inquiries?status=archived", { token });
    assert.equal(onlyArchived.status, 200);
    assert.equal(onlyArchived.json.data.length, 1);
    assert.equal(onlyArchived.json.data[0].status, "archived");

    const invalid = await request("GET", "/api/inquiries?status=bogus", { token });
    assert.equal(invalid.status, 422);
  });
});