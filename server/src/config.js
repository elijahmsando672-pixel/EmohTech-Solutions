import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",

  enableMssql: process.env.ENABLE_MSSQL === "true",
  mssql: {
    server: process.env.MSSQL_SERVER || "localhost",
    database: process.env.MSSQL_DATABASE || "EmohTechDB",
    user: process.env.MSSQL_USER || "sa",
    password: process.env.MSSQL_PASSWORD || "",
    options: {
      encrypt: process.env.MSSQL_ENCRYPT !== "false",
      trustServerCertificate: process.env.MSSQL_TRUST_SERVER_CERTIFICATE !== "false",
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  },

  admin: {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "change-me-now",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "dev-only-secret-change-me",
    expiresIn: process.env.JWT_EXPIRES_IN || "12h",
  },

  // Email notifications for form submissions. The server starts and runs
  // normally without these — emails are simply skipped until SMTP is set up.
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.SMTP_FROM || "",
    to: process.env.NOTIFY_TO || "",
  },
};