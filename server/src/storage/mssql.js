/**
 * Microsoft SQL Server storage. Uses parameterized queries only (SQL-injection safe).
 * Tables are created on startup if they don't exist (see database/schema.sql).
 */
import sql from "mssql";
import { config } from "../config.js";

let pool = null;

function isConfigured() {
  return config.enableMssql && config.mssql.password;
}

async function getPool() {
  if (pool) return pool;
  pool = await sql.connect(config.mssql);
  await ensureTables(pool);
  return pool;
}

async function ensureTables(ctx) {
  await ctx.request().query(`
    IF OBJECT_ID('dbo.ContactMessages', 'U') IS NULL
    BEGIN
      CREATE TABLE dbo.ContactMessages (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(120) NOT NULL,
        email NVARCHAR(254) NOT NULL,
        phone NVARCHAR(30) NOT NULL,
        subject NVARCHAR(150) NOT NULL,
        message NVARCHAR(MAX) NOT NULL,
        createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
      );
    END;

    IF OBJECT_ID('dbo.ServiceInquiries', 'U') IS NULL
    BEGIN
      CREATE TABLE dbo.ServiceInquiries (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(120) NOT NULL,
        email NVARCHAR(254) NOT NULL,
        phone NVARCHAR(30) NOT NULL,
        company NVARCHAR(200) NULL,
        service NVARCHAR(120) NOT NULL,
        budget NVARCHAR(50) NOT NULL,
        timeline NVARCHAR(100) NULL,
        details NVARCHAR(MAX) NULL,
        createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
      );
    END;
  `);
}

async function saveMessage(data) {
  const ctx = await getPool();
  const result = await ctx
    .request()
    .input("name", sql.NVarChar, data.name)
    .input("email", sql.NVarChar, data.email)
    .input("phone", sql.NVarChar, data.phone)
    .input("subject", sql.NVarChar, data.subject)
    .input("message", sql.NVarChar(sql.MAX), data.message)
    .query(`
      INSERT INTO dbo.ContactMessages (name, email, phone, subject, message)
      OUTPUT INSERTED.*
      VALUES (@name, @email, @phone, @subject, @message)
    `);
  return result.recordset[0];
}

async function saveInquiry(data) {
  const ctx = await getPool();
  const result = await ctx
    .request()
    .input("name", sql.NVarChar, data.name)
    .input("email", sql.NVarChar, data.email)
    .input("phone", sql.NVarChar, data.phone)
    .input("company", sql.NVarChar, data.company || null)
    .input("service", sql.NVarChar, data.service)
    .input("budget", sql.NVarChar, data.budget)
    .input("timeline", sql.NVarChar, data.timeline || null)
    .input("details", sql.NVarChar(sql.MAX), data.details || null)
    .query(`
      INSERT INTO dbo.ServiceInquiries (name, email, phone, company, service, budget, timeline, details)
      OUTPUT INSERTED.id, INSERTED.name, INSERTED.email, INSERTED.phone, INSERTED.company,
             INSERTED.service, INSERTED.budget, INSERTED.timeline, INSERTED.details, INSERTED.createdAt
      VALUES (@name, @email, @phone, @company, @service, @budget, @timeline, @details)
    `);
  return result.recordset[0];
}

function toCamelCase(row, isInquiry) {
  if (!row) return row;
  const base = { id: row.id, createdAt: row.createdAt };
  if (isInquiry) {
    return { ...base, name: row.name, email: row.email, phone: row.phone, company: row.company, service: row.service, budget: row.budget, timeline: row.timeline, details: row.details };
  }
  return { ...base, name: row.name, email: row.email, phone: row.phone, subject: row.subject, message: row.message };
}

async function listMessages() {
  const ctx = await getPool();
  const result = await ctx.request().query("SELECT * FROM dbo.ContactMessages ORDER BY id DESC");
  return result.recordset.map((r) => toCamelCase(r, false));
}

async function listInquiries() {
  const ctx = await getPool();
  const result = await ctx.request().query("SELECT * FROM dbo.ServiceInquiries ORDER BY id DESC");
  return result.recordset.map((r) => toCamelCase(r, true));
}

export const mssqlStorage = {
  isAvailable: async () => {
    if (!isConfigured()) return false;
    try {
      await getPool();
      return true;
    } catch (err) {
      console.warn(`[db] SQL Server unavailable (${err.code || err.message}). Using in-memory storage.`);
      return false;
    }
  },
  saveMessage,
  saveInquiry,
  listMessages,
  listInquiries,
};