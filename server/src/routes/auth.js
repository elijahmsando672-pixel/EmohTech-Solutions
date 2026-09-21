import { Router } from "express";
import { verifyCredentials, signToken } from "../middleware/auth.js";
import { loginLimiter } from "../middleware/rateLimit.js";

const router = Router();

/** POST /api/auth/login — exchange credentials for a JWT (admin use). */
router.post("/login", loginLimiter, async (req, res, next) => {
  try {
    const { username = "", password = "" } = req.body || {};
    const ok = await verifyCredentials(String(username), String(password));
    if (!ok) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    const token = signToken(username);
    return res.json({ success: true, token, expiresIn: "12h" });
  } catch (err) {
    return next(err);
  }
});

export default router;