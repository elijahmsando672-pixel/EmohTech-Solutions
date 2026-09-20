import { Router } from "express";
import { validateContactMessage } from "../utils/validate.js";
import { getStorage } from "../storage/index.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

/**
 * POST /api/messages
 * Public — used by the contact form on the website.
 */
router.post("/", async (req, res, next) => {
  try {
    const { errors, value } = validateContactMessage(req.body || {});
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ error: "Validation failed.", fields: errors });
    }
    const record = await getStorage().saveMessage(value);
    return res.status(201).json({ success: true, message: "Message received.", id: record.id });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/messages — admin only (JWT). */
router.get("/", requireAuth, async (req, res, next) => {
  try {
    const records = await getStorage().listMessages();
    return res.json({ data: records });
  } catch (err) {
    return next(err);
  }
});

export default router;