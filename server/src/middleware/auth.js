import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { config } from "../config.js";

/** Creates a JWT for a given subject. */
export function signToken(subject) {
  return jwt.sign({ sub: subject }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
}

/** Express middleware: rejects requests without a valid Bearer token. */
export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) {
    return res.status(401).json({ error: "Authentication required." });
  }
  try {
    const payload = jwt.verify(token, config.jwt.secret);
    req.auth = payload;
    return next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
}

let cachedHash = null;

async function getExpectedHash() {
  if (!cachedHash) cachedHash = await bcrypt.hash(config.admin.password, 8);
  return cachedHash;
}

/** Verifies admin credentials (constant-time compare against a bcrypt hash). */
export async function verifyCredentials(username, password) {
  const userOk = username === config.admin.username;
  if (!userOk) return false;
  const hash = await getExpectedHash();
  return bcrypt.compare(password, hash);
}