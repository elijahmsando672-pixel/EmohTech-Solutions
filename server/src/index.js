import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "./config.js";
import { initStorage } from "./storage/index.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import messagesRouter from "./routes/messages.js";
import inquiriesRouter from "./routes/inquiries.js";
import authRouter from "./routes/auth.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.resolve(__dirname, "../../client/dist");

const app = express();
app.use(cors({ origin: config.clientOrigin, credentials: true }));
app.use(express.json({ limit: "256kb" }));
app.disable("x-powered-by");

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "emohtech-solutions-api" });
});

// Public routes
app.use("/api/messages", messagesRouter);
app.use("/api/inquiries", inquiriesRouter);
app.use("/api/auth", authRouter);

// Serve the built client in production (single-server deployment)
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get(/^\/(?!api\/).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

app.use("/api", notFound);
app.use(errorHandler);

async function start() {
  try {
    await initStorage();
    app.listen(config.port, () => {
      console.log(`[api] EmohTech API running at http://localhost:${config.port}`);
      if (fs.existsSync(clientDist)) {
        console.log(`[api] Serving built client from ${clientDist}`);
      }
    });
  } catch (err) {
    console.error("[api] Failed to start:", err);
    process.exit(1);
  }
}

// Export app for tests; start only when run directly.
if (process.env.NODE_ENV !== "test") {
  start();
}

export default app;