/**
 * Storage adapter. Uses SQL Server when available and configured,
 * otherwise transparently falls back to in-memory storage.
 */
import { mssqlStorage } from "./mssql.js";
import { memoryStorage } from "./memory.js";

let mode = "auto"; // auto | memory | mssql
let resolved = null;

export async function initStorage() {
  if (mode === "auto") {
    resolved = (await mssqlStorage.isAvailable()) ? mssqlStorage : memoryStorage;
    mode = resolved === mssqlStorage ? "mssql" : "memory";
    console.log(`[db] Active storage mode: ${mode}`);
  }
  return resolved;
}

export function getStorage() {
  if (!resolved) throw new Error("Storage not initialized. Call initStorage() first.");
  return resolved;
}

export { memoryStorage };