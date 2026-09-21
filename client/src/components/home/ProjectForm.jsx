import { useRef, useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "../Button.jsx";
import { TextInput, TextArea, Select } from "../forms/Field.jsx";
import { isEmail, isEmpty } from "../../utils/validate.js";
import { apiUrl } from "../../utils/api.js";
import { track } from "../../lib/analytics.js";

const needOptions = [
  "Website",
  "E-commerce Store",
  "Custom Web Application",
  "Business System",
  "Backend / API",
  "Automation",
  "Not sure yet",
];

const budgetOptions = [
  "Under KSh 20,000",
  "KSh 20,000 – 50,000",
  "KSh 50,000 – 100,000",
  "KSh 100,000+",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "Just exploring",
];

function validate(form) {
  const errors = {};
  if (isEmpty(form.name)) errors.name = "Please enter your name.";
  if (isEmpty(form.email) || !isEmail(form.email)) errors.email = "Please enter a valid email address.";
  if (isEmpty(form.phone)) errors.phone = "Please enter your phone or WhatsApp number.";
  if (isEmpty(form.need)) errors.need = "Please select what you need.";
  if (isEmpty(form.budget)) errors.budget = "Please select a budget range.";
  if (form.details.trim().length < 10) errors.details = "Please tell us a little more about your project (at least 10 characters).";
  return errors;
}

export default function ProjectForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    budget: "",
    timeline: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const startedRef = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!startedRef.current) {
      startedRef.current = true;
      track("contact_form_start", { field: name });
    }
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
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.need,
          budget: form.budget,
          timeline: form.timeline,
          details: form.details,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      track("contact_form_submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15">
          <CheckCircle2 className="h-7 w-7 text-emerald-400" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold">Request received!</h3>
        <p className="max-w-sm text-sm text-slate-400">
          Thanks — your request is in. We&apos;ll reply within 24 hours with a clear plan and an
          honest quote.
        </p>
        <Button onClick={() => setStatus("idle")} variant="secondary" size="sm" className="mt-2">
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form className="card space-y-5 p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Your Name" id="p-name" name="name" placeholder="e.g. John Kamau" value={form.name} onChange={handleChange} required error={errors.name} autoComplete="name" />
        <TextInput label="Business / Organization (optional)" id="p-company" name="company" placeholder="e.g. Mwamba Traders Ltd" value={form.company} onChange={handleChange} autoComplete="organization" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextInput label="Email Address" id="p-email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required error={errors.email} autoComplete="email" />
        <TextInput label="Phone / WhatsApp" id="p-phone" name="phone" type="tel" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={handleChange} required error={errors.phone} autoComplete="tel" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Select label="What Do You Need?" id="p-need" name="need" value={form.need} onChange={handleChange} required error={errors.need}>
          <option value="" disabled>
            Choose an option
          </option>
          {needOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </Select>
        <Select label="Budget Range" id="p-budget" name="budget" value={form.budget} onChange={handleChange} required error={errors.budget}>
          <option value="" disabled>
            Choose a budget
          </option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </Select>
      </div>
      <Select label="When Do You Need It?" id="p-timeline" name="timeline" value={form.timeline} onChange={handleChange}>
        <option value="" disabled>
          Select a timeline
        </option>
        {timelineOptions.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Select>
      <TextArea
        label="Tell Us About Your Project"
        id="p-details"
        name="details"
        rows={5}
        placeholder="What are you trying to build or improve? What's happening now — a website, manual records, nothing yet?"
        value={form.details}
        onChange={handleChange}
        required
        error={errors.details}
      />

      {status === "error" && (
        <div role="alert" className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-300">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          We couldn&apos;t submit your request. Please try again or message us on WhatsApp.
        </div>
      )}

      <Button type="submit" size="lg" variant="accent" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Submitting...
          </>
        ) : (
          <>
            Send Project Request <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
      <p className="text-center text-xs text-slate-500">
        We reply within 24 hours. No spam, ever.
      </p>
    </form>
  );
}