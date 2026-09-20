import { Router } from "express";
import { verifyCredentials, signToken } from "../middleware/auth.js";

const router = Router();

/** POST /api/auth/login — exchange credentials for a JWT (admin use). */
router.post("/login", async (req, res, next) => {
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