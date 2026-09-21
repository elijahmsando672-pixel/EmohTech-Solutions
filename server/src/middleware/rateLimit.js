import rateLimit from "express-rate-limit";

const standard = { standardHeaders: true, legacyHeaders: false };

/** Public form submissions — prevents spam flooding the storage/email. */
export const formLimiter = rateLimit({
  ...standard,
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many submissions. Please try again in a few minutes." },
});

/** Login — stricter limit to slow credential brute-forcing. */
export const loginLimiter = rateLimit({
  ...standard,
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many login attempts. Please try again later." },
});