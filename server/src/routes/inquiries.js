import { Router } from "express";
import { validateInquiry, isValidInquiryStatus, INQUIRY_STATUSES } from "../utils/validate.js";
import { getStorage } from "../storage/index.js";
import { requireAuth } from "../middleware/auth.js";
import { formLimiter } from "../middleware/rateLimit.js";
import { notifyNewInquiry } from "../notify/email.js";

const router = Router();

/**
 * POST /api/inquiries
 * Public — used by the service/quote enquiry form on the website.
 */
router.post("/", formLimiter, async (req, res, next) => {
  try {
    const { errors, value } = validateInquiry(req.body || {});
    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ error: "Validation failed.", fields: errors });
    }
    const record = await getStorage().saveInquiry(value);
    void notifyNewInquiry(record);
    return res.status(201).json({ success: true, message: "Enquiry received.", id: record.id });
  } catch (err) {
    return next(err);
  }
});

/**
 * GET /api/inquiries — admin only (JWT).
 * Optional ?status=new|contacted|archived filter.
 */
router.get("/", requireAuth, async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.status) {
      if (!isValidInquiryStatus(req.query.status)) {
        return res.status(422).json({ error: "Invalid status filter.", allowed: INQUIRY_STATUSES });
      }
      filter.status = req.query.status;
    }
    const records = await getStorage().listInquiries(filter);
    return res.json({ data: records });
  } catch (err) {
    return next(err);
  }
});

/**
 * PUT /api/inquiries/:id/status — admin only (JWT).
 * Marks an inquiry as new, contacted or archived.
 */
router.put("/:id/status", requireAuth, async (req, res, next) => {
  try {
    const { status } = req.body || {};
    if (!isValidInquiryStatus(status)) {
      return res.status(422).json({ error: "Invalid status.", allowed: INQUIRY_STATUSES });
    }
    const { id } = req.params;
    const updated = await getStorage().updateInquiryStatus(id, status);
    if (!updated) {
      return res.status(404).json({ error: "Inquiry not found." });
    }
    return res.json({ success: true, data: updated });
  } catch (err) {
    return next(err);
  }
});

export default router;