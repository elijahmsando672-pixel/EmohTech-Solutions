/**
 * Client-side validation helpers shared by all forms.
 * The server re-validates everything — these only improve UX.
 */

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isPhone(value) {
  return /^\+?[0-9 ()-]{7,20}$/.test(value.trim());
}

export function isEmpty(value) {
  return typeof value === "string" && value.trim().length === 0;
}

export function minLength(value, length) {
  return value.trim().length >= length;
}

export const ERROR_MESSAGES = {
  name: "Please enter your full name.",
  email: "Please enter a valid email address.",
  phone: "Please enter a valid phone number.",
  subject: "Please add a short subject.",
  message: "Your message should be at least 10 characters.",
  service: "Please select a service.",
  budget: "Please select a budget range.",
};