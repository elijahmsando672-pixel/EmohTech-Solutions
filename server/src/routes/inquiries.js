import { Router } from "express";
import { validateInquiry } from "../utils/validate.js";
import { getStorage } from "../storage/index.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

/**
 * POST /api/inquiries
 * Public — used by the service/quote enquiry form on the website.
 */
router.post("/", async (req, res, next) => {
  try {
    const { errors, value } = validateInquiry(req.body || {});
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ error: "Validation failed.", fields: errors });
    }
    const record = await getStorage().saveInquiry(value);
    return res.status(201).json({ success: true, message: "Enquiry received.", id: record.id });
  } catch (err) {
    return next(err);
  }
});

/** GET /api/inquiries — admin only (JWT). */
router.get("/", requireAuth, async (req, res, next) => {
  try {
    const records = await getStorage().listInquiries();
    return res.json({ data: records });
  } catch (err) {
    return next(err);
  }
});

export default router;