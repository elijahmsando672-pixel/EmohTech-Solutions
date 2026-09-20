import { test } from "node:test";
import assert from "node:assert/strict";
import {
  isEmail,
  isPhone,
  isNonEmptyString,
  validateContactMessage,
  validateInquiry,
} from "../src/utils/validate.js";

test("isEmail accepts valid emails", () => {
  assert.equal(isEmail("hello@emohtech.co.ke"), true);
  assert.equal(isEmail("a.b+c@sub.example.com"), true);
});

test("isEmail rejects invalid emails", () => {
  assert.equal(isEmail("not-an-email"), false);
  assert.equal(isEmail(""), false);
  assert.equal(isEmail("a@b"), false);
  assert.equal(isEmail(42), false);
});

test("isPhone accepts Kenyan and international formats", () => {
  assert.equal(isPhone("+254712345678"), true);
  assert.equal(isPhone("0712 345 678"), true);
  assert.equal(isPhone("+1 (555) 234-5678"), true);
});

test("isPhone rejects wrong formats", () => {
  assert.equal(isPhone("abc"), false);
  assert.equal(isPhone("123"), false);
  assert.equal(isPhone(""), false);
});

test("isNonEmptyString enforces length limits", () => {
  assert.equal(isNonEmptyString("hello", 10), true);
  assert.equal(isNonEmptyString("   hi   ", 10), true);
  assert.equal(isNonEmptyString("", 10), false);
  assert.equal(isNonEmptyString("this is very long", 5), false);
});

test("validateContactMessage accepts a valid submission", () => {
  const { errors, value } = validateContactMessage({
    name: "Jane Wanjiru",
    email: "jane@example.com",
    phone: "+254700000000",
    subject: "Website quote",
    message: "I need a website for my shop, please.",
  });
  assert.deepEqual(errors, {});
  assert.equal(value.name, "Jane Wanjiru");
  assert.equal(value.email, "jane@example.com");
});

test("validateContactMessage rejects an invalid submission", () => {
  const { errors } = validateContactMessage({
    name: "",
    email: "nope",
    phone: "x",
    subject: "",
    message: "hi",
  });
  assert.ok(errors.name);
  assert.ok(errors.email);
  assert.ok(errors.phone);
  assert.ok(errors.subject);
  assert.ok(errors.message);
});

test("validateContactMessage trims and truncates long input safely", () => {
  const long = "x".repeat(10000);
  const { errors, value } = validateContactMessage({
    name: "  A B  ",
    email: "a@b.co",
    phone: "0700000000",
    subject: "hi",
    message: long,
  });
  assert.deepEqual(errors, {});
  assert.equal(value.name, "A B");
  assert.equal(value.message.length, 5000);
});

test("validateInquiry accepts a valid submission", () => {
  const { errors } = validateInquiry({
    name: "John",
    email: "john@example.com",
    phone: "0700123456",
    company: "Mwamba Traders",
    service: "Website Development",
    budget: "KES 15,000 – 45,000",
    timeline: "Within 1 month",
    details: "A simple e-commerce site.",
  });
  assert.deepEqual(errors, {});
});

test("validateInquiry requires budget to be from the allowed list", () => {
  const bad = validateInquiry({ name: "J", email: "j@k.co", phone: "0712345678", service: "x", budget: "Cheap" });
  assert.ok(bad.errors.budget);

  const ok = validateInquiry({ name: "J", email: "j@k.co", phone: "0712345678", service: "x", budget: "Not sure yet" });
  assert.deepEqual(ok.errors, {});
});