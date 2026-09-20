/**
 * Placeholder portfolio projects.
 * Replace the fields below with your real projects — everything renders automatically.
 * `gradient` is a Tailwind gradient string used as a placeholder image.
 */

export const projects = [
  {
    slug: "savannah-fresh-foods",
    title: "Savannah Fresh — E-Commerce Store",
    category: "Web Development",
    summary:
      "A complete online store for a Nairobi grocery supplier with M-Pesa checkout, order tracking and same-day delivery scheduling.",
    gradient: "from-emerald-500 to-teal-600",
    tags: ["E-Commerce", "M-Pesa", "Next.js"],
    result: "30% more orders in the first two months",
    year: "2025",
  },
  {
    slug: "edu-manager",
    title: "EduManager — School Management System",
    category: "Business Automation",
    summary:
      "A fee-tracking, report-card and parent-messaging system used by a secondary school to run daily operations in one place.",
    gradient: "from-brand-500 to-indigo-600",
    tags: ["SQL Server", "Admin Panel", "Reports"],
    result: "Fees collection time cut from 3 days to 4 hours",
    year: "2025",
  },
  {
    slug: "fika-ai-support",
    title: "FikaShops — WhatsApp Support Bot",
    category: "AI & Chatbots",
    summary:
      "An AI chatbot that answers order-status questions and captures leads for a retail chain on WhatsApp, referring complex cases to staff.",
    gradient: "from-accent-500 to-cyan-600",
    tags: ["WhatsApp Bot", "OpenAI", "Automation"],
    result: "84% of FAQs answered without an agent",
    year: "2024",
  },
  {
    slug: "twende-tours",
    title: "Twende Tours — Booking System",
    category: "Business Automation",
    summary:
      "An online booking and payment flow for a safari company — customers select trips, pay deposits via M-Pesa, and get confirmations automatically.",
    gradient: "from-amber-500 to-orange-600",
    tags: ["Bookings", "Payments", "Automation"],
    result: "Booking confirmations delivered in under 60 seconds",
    year: "2024",
  },
  {
    slug: "zawadi-creatives",
    title: "Zawadi Creatives — Portfolio & CRM",
    category: "Web Development",
    summary:
      "A polished portfolio site plus a light CRM that lets a design agency manage client enquiries and quotes from one dashboard.",
    gradient: "from-rose-500 to-pink-600",
    tags: ["Portfolio", "CRM", "React"],
    result: "3x more qualified enquiries per month",
    year: "2023",
  },
  {
    slug: "kilimo-track",
    title: "KilimoTrack — Farm Record System",
    category: "Custom Software",
    summary:
      "A custom system for a farmers' cooperative that tracks produce, inventory and member payments with role-based access for staff.",
    gradient: "from-lime-500 to-green-600",
    tags: ["Custom Software", "SQL", "Dashboards"],
    result: "Stock discrepancies down to near zero",
    year: "2023",
  },
];

export const projectMeta = {
  getBySlug: (slug) => projects.find((p) => p.slug === slug),
};

export const portfolioStats = [
  { label: "Projects Shipped", value: 40 },
  { label: "Client Retention", value: "90%" },
  { label: "On-Time Delivery", value: "98%" },
];