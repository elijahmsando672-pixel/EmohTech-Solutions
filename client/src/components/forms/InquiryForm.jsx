import { useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../Button.jsx";
import { TextInput, TextArea, Select } from "./Field.jsx";
import { isEmail, isEmpty, ERROR_MESSAGES } from "../../utils/validate.js";
import { apiUrl } from "../../utils/api.js";

const budgets = ["Under KES 15,000", "KES 15,000 – 45,000", "KES 45,000 – 100,000", "Above KES 100,000", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1 month", "1 – 3 months", "Just exploring"];
const serviceOptions = [
  "Website Development",
  "AI / Chatbot Development",
  "Business Automation",
  "Payment Integration",
  "Database & Backend",
  "Custom Software",
];

function validate(form) {
  const errors = {};
  if (isEmpty(form.name)) errors.name = ERROR_MESSAGES.name;
  if (isEmpty(form.email) || !isEmail(form.email)) errors.email = ERROR_MESSAGES.email;
  if (isEmpty(form.phone)) errors.phone = ERROR_MESSAGES.phone;
  if (isEmpty(form.service)) errors.service = ERROR_MESSAGES.service;
  if (isEmpty(form.budget)) errors.budget = ERROR_MESSAGES.budget;
  if (form.company && form.company.trim().length < 2) errors.company = "Please enter your company or school name.";
  return errors;
}

export default function InquiryForm({ defaultService = "" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService,
    budget: "",
    timeline: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

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
      const res = await fetch(apiUrl("/api/inquiries"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ ...form, name: "", email: "", phone: "", company: "", service: "", budget: "", timeline: "", details: "" });
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
        <h3 className="text-xl font-bold">Enquiry received!</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          We've received your project details. You'll hear from us within 24 hours with a free consultation and a clear quote.
        </p>
        <Button onClick={() => setStatus("idle")} variant="secondary" size="sm" className="mt-2">
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="card space-y-5 p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Your Name" id="q-name" name="name" placeholder="e.g. John Kamau" value={form.name} onChange={handleChange} required error={errors.name} autoComplete="name" />
        <TextInput label="Email Address" id="q-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required error={errors.email} autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Phone / WhatsApp" id="q-phone" name="phone" type="tel" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={handleChange} required error={errors.phone} autoComplete="tel" />
        <TextInput label="Company / School (optional)" id="q-company" name="company" placeholder="e.g. Mwamba Traders Ltd" value={form.company} onChange={handleChange} error={errors.company} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Select label="Service Needed" id="q-service" name="service" value={form.service} onChange={handleChange} required error={errors.service}>
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
        <Select label="Budget Range" id="q-budget" name="budget" value={form.budget} onChange={handleChange} required error={errors.budget}>
          <option value="" disabled>
            Choose a budget
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </Select>
      </div>
      <Select label="When Do You Need It?" id="q-timeline" name="timeline" value={form.timeline} onChange={handleChange}>
        <option value="" disabled>
          Select a timeline
        </option>
        {timelines.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Select>
      <TextArea label="Project Details" id="q-details" name="details" rows={5} placeholder="Describe what you want to build — websites, automation, chatbot use cases, payments, etc." value={form.details} onChange={handleChange} />

      {status === "error" && (
        <div role="alert" className="flex items-center gap-2 rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          We couldn't submit your enquiry. Please try again or message us on WhatsApp.
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Submitting...
          </>
        ) : (
          <>
            Request Free Quote <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}