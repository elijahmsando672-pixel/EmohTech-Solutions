import { useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../Button.jsx";
import { TextInput, TextArea, Select } from "./Field.jsx";
import { isEmail, minLength, isEmpty, ERROR_MESSAGES } from "../../utils/validate.js";

const subjects = [
  "Website Development",
  "AI / Chatbot Development",
  "Business Automation",
  "Payment Integration",
  "Database & Backend",
  "Custom Software",
  "Other",
];

function validate(form) {
  const errors = {};
  if (isEmpty(form.name)) errors.name = ERROR_MESSAGES.name;
  if (isEmpty(form.email) || !isEmail(form.email)) errors.email = ERROR_MESSAGES.email;
  if (isEmpty(form.phone) || !/^\+?[0-9 ()-]{7,20}$/.test(form.phone.trim())) errors.phone = ERROR_MESSAGES.phone;
  if (isEmpty(form.subject)) errors.subject = ERROR_MESSAGES.subject;
  if (!minLength(form.message, 10)) errors.message = ERROR_MESSAGES.message;
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold">Message sent successfully!</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Thank you for reaching out to EmohTech Solutions. We usually reply within a few business hours.
        </p>
        <Button onClick={() => setStatus("idle")} variant="secondary" size="sm" className="mt-2">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form className="card space-y-5 p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          label="Full Name"
          id="cf-name"
          name="name"
          placeholder="e.g. Jane Wanjiru"
          value={form.name}
          onChange={handleChange}
          required
          error={errors.name}
          autoComplete="name"
        />
        <TextInput
          label="Email Address"
          id="cf-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
          error={errors.email}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput
          label="Phone / WhatsApp"
          id="cf-phone"
          name="phone"
          type="tel"
          placeholder="+254 7XX XXX XXX"
          value={form.phone}
          onChange={handleChange}
          required
          error={errors.phone}
          autoComplete="tel"
        />
        <Select label="Subject" id="cf-subject" name="subject" value={form.subject} onChange={handleChange} required error={errors.subject}>
          <option value="" disabled>
            Select a topic
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </div>
      <TextArea
        label="Your Message"
        id="cf-message"
        name="message"
        placeholder="Tell us about your project, timeline and anything else we should know..."
        value={form.message}
        onChange={handleChange}
        required
        error={errors.message}
        rows={6}
      />

      {status === "error" && (
        <div role="alert" className="flex items-center gap-2 rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          Something went wrong sending your message. Please try again or reach us on WhatsApp.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
      <p className="text-center text-xs text-slate-400">
        By submitting, you agree to be contacted about your enquiry. We never share your details.
      </p>
    </form>
  );
}