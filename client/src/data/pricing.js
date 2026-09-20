import { Rocket, Building2, Crown } from "lucide-react";

/**
 * Pricing tiers. `price` is monthly or project-based — keep currency
 * consistent (KES). Set `featured` on the tier to highlight.
 */
export const pricingTiers = [
  {
    icon: Rocket,
    name: "Starter",
    price: "KES 15,000",
    priceNote: "per project",
    description: "Perfect for startups and landing pages that need to launch fast.",
    features: [
      "5-page business website",
      "Mobile-first responsive design",
      "Contact form & WhatsApp button",
      "Basic SEO setup",
      "Social media links",
      "2 rounds of revisions",
      "Delivery in 7–10 days",
    ],
    featured: false,
    cta: "Start a Project",
  },
  {
    icon: Building2,
    name: "Growth",
    price: "KES 45,000",
    priceNote: "per project",
    description: "For growing businesses that need e-commerce, payments and automation.",
    features: [
      "Everything in Starter",
      "Up to 15 pages / full website",
      "E-commerce or M-Pesa integration",
      "WhatsApp chatbot setup",
      "Booking or order system",
      "Admin dashboard",
      "Content management system",
      "30 days free support",
    ],
    featured: true,
    cta: "Get a Quote",
  },
  {
    icon: Crown,
    name: "Custom",
    price: "Custom Quote",
    priceNote: "scoped to your requirements",
    description:
      "For schools, organizations and businesses that need bespoke software.",
    features: [
      "Everything in Growth",
      "Custom business software",
      "SQL database & API design",
      "Advanced automation & integrations",
      "Role-based user access",
      "Training for your team",
      "Priority support & maintenance",
    ],
    featured: false,
    cta: "Talk to Us",
  },
];

export const addOns = [
  { name: "Additional landing page", price: "KES 5,000", unit: "per page" },
  { name: "WhatsApp AI chatbot", price: "KES 15,000", unit: "setup" },
  { name: "M-Pesa / online payments", price: "KES 12,000", unit: "integration" },
  { name: "Monthly maintenance", price: "KES 6,000", unit: "per month" },
  { name: "Copywriting & content", price: "KES 4,000", unit: "per page" },
];

export const pricingFaq = [
  {
    q: "Do you offer payment plans?",
    a: "Yes. Most projects work on a 50% deposit / 50% on completion split. For larger systems, we can agree on milestone-based payments.",
  },
  {
    q: "What does 'per project' mean in Starter and Growth?",
    a: "The price covers the full build as described in the plan. Recurring costs like hosting and optional maintenance are extra and fully quoted upfront.",
  },
  {
    q: "How long does a project take?",
    a: "Landing pages: 7–10 days. Full business sites and chatbots: 2–4 weeks. Custom systems are scoped after a free consultation so you get a realistic timeline.",
  },
  {
    q: "Will I be able to update the website myself?",
    a: "Yes, in most projects we include a simple content management system or dashboard so you can edit text, products and bookings without needing a developer.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every plan includes a free support window after launch. After that, we offer flexible maintenance packages so your system keeps improving.",
  },
];