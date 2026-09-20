import {
  Globe,
  Bot,
  Workflow,
  CreditCard,
  Database,
  Smartphone,
  LineChart,
  ShieldCheck,
} from "lucide-react";

export const serviceCategories = [
  "All",
  "Web Development",
  "AI & Chatbots",
  "Business Automation",
  "Payment Integration",
  "Backend & Databases",
];

/**
 * icon is a Lucide component (imported above).
 * Add or replace services here — the UI updates automatically.
 */
export const services = [
  {
    slug: "website-development",
    category: "Web Development",
    title: "Website Development",
    short: "Fast, professional websites that turn visitors into customers.",
    description:
      "We design and build modern, mobile-first websites that represent your business well and convert visitors into enquiries and sales.",
    features: [
      "Business websites",
      "E-commerce websites",
      "High-converting landing pages",
      "Portfolio websites",
      "SEO-friendly structure",
      "Content management to edit your own site",
    ],
    icon: Globe,
    accent: "from-brand-500 to-accent-500",
  },
  {
    slug: "ai-chatbot-development",
    category: "AI & Chatbots",
    title: "AI & Chatbot Development",
    short: "24/7 chatbots that answer customers and capture leads automatically.",
    description:
      "We build AI-powered WhatsApp and web chatbots that reply instantly, answer common questions and collect customer details while you sleep.",
    features: [
      "WhatsApp AI chatbots",
      "Customer support bots",
      "Automated FAQ systems",
      "Lead-generation bots",
      "Human handoff when needed",
      "Multilingual replies",
    ],
    icon: Bot,
    accent: "from-accent-500 to-brand-600",
  },
  {
    slug: "business-automation",
    category: "Business Automation",
    title: "Business Automation",
    short: "Eliminate repetitive work with systems that run your business.",
    description:
      "We connect your tools and automate the repetitive parts of your business — from responding to customers to managing orders and bookings automatically.",
    features: [
      "Customer response automation",
      "Order management systems",
      "Booking & appointment systems",
      "Business management dashboards",
      "Invoice & receipt generation",
      "Workflow integrations",
    ],
    icon: Workflow,
    accent: "from-violet-500 to-brand-500",
  },
  {
    slug: "payment-integration",
    category: "Payment Integration",
    title: "Payment Integration",
    short: "M-Pesa and online payments — payments confirmed automatically.",
    description:
      "We integrate M-Pesa Daraja and online payment gateways so your business collects money online and confirms payments automatically.",
    features: [
      "M-Pesa paybill & till integration",
      "STK push / Express payments",
      "Online card payments",
      "Automated payment confirmations",
      "Payment receipts & reconciliation",
      "Secure transaction handling",
    ],
    icon: CreditCard,
    accent: "from-emerald-500 to-accent-500",
  },
  {
    slug: "database-backend-development",
    category: "Backend & Databases",
    title: "Database & Backend Development",
    short: "Solid backends and secure databases your software runs on.",
    description:
      "We build reliable APIs, databases and backend systems that keep your business data secure, organized and connected across all your applications.",
    features: [
      "SQL database design",
      "Secure REST APIs",
      "Authentication & role-based access",
      "Back-office & admin panels",
      "Data migration & cleanups",
      "API integrations",
    ],
    icon: Database,
    accent: "from-amber-500 to-brand-500",
  },
  {
    slug: "custom-software-development",
    category: "Backend & Databases",
    title: "Custom Software Development",
    short: "Software built around exactly how your business works.",
    description:
      "Off-the-shelf tools don't fit every business. We build custom web and mobile software sized to your operations — and train your team to use it.",
    features: [
      "Custom business management systems",
      "Web applications & dashboards",
      "Mobile-friendly systems",
      "School & organization systems",
      "Legacy system upgrades",
      "Ongoing maintenance",
    ],
    icon: Smartphone,
    accent: "from-rose-500 to-brand-500",
  },
];

export const whyUs = [
  {
    title: "We Build, Not Just Present",
    text: "No copied templates and no abandonware. You get working software, delivered and supported.",
    icon: LineChart,
  },
  {
    title: "Business-First Approach",
    text: "Every project starts by understanding your customers and your sales — technology is just the means.",
    icon: ShieldCheck,
  },
  {
    title: "Local Payments Expertise",
    text: "Deep experience with M-Pesa and Kenyan business workflows — built for how business runs here.",
    icon: CreditCard,
  },
  {
    title: "Transparent & Fair Pricing",
    text: "Clear quotes, no hidden fees, and honest advice when you don't need the expensive option.",
    icon: Database,
  },
];

export const techStack = [
  "React",
  "Node.js",
  "Microsoft SQL Server",
  "Tailwind CSS",
  "MySQL",
  "Git & GitHub",
  "M-Pesa Daraja API",
  "REST APIs",
  "JWT Auth",
];