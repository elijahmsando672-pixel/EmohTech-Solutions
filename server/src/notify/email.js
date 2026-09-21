/**
 * Email notifications for new form submissions.
 *
 * Uses SMTP via Nodemailer. If SMTP is not configured (config.smtp.host is
 * empty), notifications are skipped silently so the API still runs without
 * email. Notifications are fire-and-forget: a slow or failing SMTP provider
 * never delays or crashes the request that saved the record.
 */
import nodemailer from "nodemailer";
import { config } from "../config.js";

let transporter = null;

function isConfigured() {
  return Boolean(config.smtp.host && config.smtp.user && config.smtp.pass && config.smtp.to);
}

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure,
      auth: { user: config.smtp.user, pass: config.smtp.pass },
    });
  }
  return transporter;
}

/** Common submission fields used for both record types. */
function summary(record) {
  return {
    name: record.name,
    email: record.email,
    phone: record.phone,
  };
}

function sendMail({ subject, text }) {
  return getTransporter().sendMail({
    from: config.smtp.from || config.smtp.user,
    to: config.smtp.to,
    subject,
    text,
  });
}

/** Notify the owner about a new contact-form message. */
export async function notifyNewMessage(record) {
  if (!isConfigured()) return;
  const { name, email, phone } = summary(record);
  try {
    await sendMail({
      subject: `[EmohTech] New contact message from ${name}`,
      text: [
        `A new message was submitted on the EmohTech website.`,
        ``,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone}`,
        `Subject: ${record.subject}`,
        ``,
        `Message:`,
        record.message,
        ``,
        `— Sent via emohtech website (id ${record.id}).`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[notify] Failed to send message notification:", err.message);
  }
}

/** Notify the owner about a new project inquiry. */
export async function notifyNewInquiry(record) {
  if (!isConfigured()) return;
  const { name, email, phone } = summary(record);
  try {
    await sendMail({
      subject: `[EmohTech] New project inquiry from ${name}`,
      text: [
        `A new project inquiry was submitted on the EmohTech website.`,
        ``,
        `Name:     ${name}`,
        `Email:    ${email}`,
        `Phone:    ${phone}`,
        `Company:  ${record.company || "-"}`,
        `Service:  ${record.service}`,
        `Budget:   ${record.budget}`,
        `Timeline: ${record.timeline || "-"}`,
        ``,
        `Details:`,
        record.details || "-",
        ``,
        `— Sent via emohtech website (id ${record.id}).`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[notify] Failed to send inquiry notification:", err.message);
  }
}