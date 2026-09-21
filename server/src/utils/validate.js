/**
 * Server-side validation. Every public endpoint validates input here —
 * the client-side validation is only for UX, this is the source of truth.
 */

export function isEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isPhone(value) {
  return typeof value === "string" && /^\+?[0-9 ()-]{7,20}$/.test(value.trim());
}

export function isNonEmptyString(value, maxLength = 500) {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
}

export function cleanMessage(value, maxLength = 5000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

/** Validates and normalizes a contact message submission. */
export function validateContactMessage(body) {
  // Normalize (trim + truncate) first, then validate the normalized value.
  const value = {
    name: (body.name || "").trim().slice(0, 120),
    email: (body.email || "").trim().slice(0, 254),
    phone: (body.phone || "").trim().slice(0, 30),
    subject: (body.subject || "").trim().slice(0, 150),
    message: cleanMessage(body.message, 5000),
  };

  const errors = {};
  if (!isNonEmptyString(value.name)) errors.name = "Name is required (max 120 chars).";
  if (!isEmail(value.email)) errors.email = "A valid email is required.";
  if (!isPhone(value.phone)) errors.phone = "A valid phone number is required.";
  if (!isNonEmptyString(value.subject, 150)) errors.subject = "Subject is required.";
  if (value.message.length < 10) errors.message = "Message must be at least 10 characters.";

  return { errors, value };
}

/** Validates and normalizes a service inquiry submission. */
export const INQUIRY_STATUSES = ["new", "contacted", "archived"];

export function isValidInquiryStatus(value) {
  return typeof value === "string" && INQUIRY_STATUSES.includes(value);
}

export function validateInquiry(body) {
  const errors = {};

  if (!isNonEmptyString(body.name, 120)) errors.name = "Name is required (max 120 chars).";
  if (!isEmail(body.email)) errors.email = "A valid email is required.";
  if (!isPhone(body.phone)) errors.phone = "A valid phone number is required.";
  if (!isNonEmptyString(body.service, 120)) errors.service = "A service must be selected.";

  const validBudgets = [
    "Under KSh 20,000",
    "KSh 20,000 – 50,000",
    "KSh 50,000 – 100,000",
    "KSh 100,000+",
    "Not sure yet",
  ];
  if (!validBudgets.includes(body.budget)) errors.budget = "A budget range must be selected.";

  return {
    errors,
    value: {
      name: (body.name || "").trim().slice(0, 120),
      email: (body.email || "").trim().slice(0, 254),
      phone: (body.phone || "").trim().slice(0, 30),
      company: cleanMessage(body.company, 200),
      service: (body.service || "").trim().slice(0, 120),
      budget: (body.budget || "").trim().slice(0, 50),
      timeline: cleanMessage(body.timeline, 100),
      details: cleanMessage(body.details, 5000),
      status: "new",
    },
  };
}