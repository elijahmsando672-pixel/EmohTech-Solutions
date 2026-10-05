import { useState, type ReactNode } from "react"

type IconName = "arrow" | "bot" | "card" | "chat" | "check" | "clock" | "code" | "database" | "globe" | "layers" | "mail" | "menu" | "minus" | "phone" | "pin" | "plus" | "quote" | "shield" | "spark" | "strategy" | "trend" | "workflow" | "x"

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bot: (
      <>
        <rect x="4" y="8" width="16" height="12" rx="3" />
        <path d="M12 4v4" />
        <path d="M9 13.5h.01" />
        <path d="M15 13.5h.01" />
        <path d="M2.5 12.5v3" />
        <path d="M21.5 12.5v3" />
      </>
    ),
    card: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="3" />
        <path d="M2.5 10h19" />
        <path d="M6 15h4" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-5A8 8 0 1 1 21 11.5Z" />
        <path d="M9 11h.01" />
        <path d="M12.5 11h.01" />
        <path d="M16 11h.01" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5V12l3.2 2" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
        <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7.5 8 5.5 8-5.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    minus: <path d="M5 12h14" />,
    phone: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M10.8 18.6h2.4" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21.2s7-5.7 7-11.2a7 7 0 1 0-14 0c0 5.5 7 11.2 7 11.2Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    quote: (
      <>
        <path d="M9.5 6.5C6.6 7.4 5 9.7 5 12.3V18h5.6v-5.2H8.2c.2-1.4 1.1-2.6 2.4-3.3Z" />
        <path d="M19.5 6.5c-2.9.9-4.5 3.2-4.5 5.8V18h5.6v-5.2h-2.4c.2-1.4 1.1-2.6 2.4-3.3Z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5.6c0 4.1 2.9 7.8 7 9.4 4.1-1.6 7-5.3 7-9.4V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3-1.4 4.2a5 5 0 0 1-3.2 3.2L3 12l4.4 1.6a5 5 0 0 1 3.2 3.2L12 21l1.4-4.2a5 5 0 0 1 3.2-3.2L21 12l-4.4-1.6a5 5 0 0 1-3.2-3.2L12 3Z" />
      </>
    ),
    strategy: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="m15 9 5-5" />
        <path d="M16 4h4v4" />
      </>
    ),
    trend: (
      <>
        <path d="M4 19h16" />
        <path d="m5 15 4.5-5.5 3.5 3L20 5.5" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1.6" />
        <rect x="15" y="15" width="6" height="6" rx="1.6" />
        <path d="M9 6h4a2 2 0 0 1 2 2v7" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

const stats = [
  { label: "Projects Delivered", value: "40" },
  { label: "Happy Clients", value: "28" },
  { label: "Hours Saved for Clients / Month", value: "1000+" },
  { label: "Support", value: "24/7" },
]

const portfolioStats = [
  { label: "Projects Shipped", value: "40" },
  { label: "Client Retention", value: "90%" },
  { label: "On-Time Delivery", value: "98%" },
]

const services = [
  {
    number: "01",
    icon: "globe" as IconName,
    category: "Web Development",
    title: "Website Development",
    lead: "Fast, professional websites that turn visitors into customers.",
    copy: "We design and build modern, mobile-first websites that represent your business well and convert visitors into enquiries and sales.",
    tags: [
      "Business websites",
      "E-commerce websites",
      "High-converting landing pages",
      "Portfolio websites",
      "SEO-friendly structure",
      "Content management to edit your own site",
    ],
  },
  {
    number: "02",
    icon: "bot" as IconName,
    category: "AI & Chatbots",
    title: "AI & Chatbot Development",
    lead: "24/7 chatbots that answer customers and capture leads automatically.",
    copy: "We build AI-powered WhatsApp and web chatbots that reply instantly, answer common questions and collect customer details while you sleep.",
    tags: [
      "WhatsApp AI chatbots",
      "Customer support bots",
      "Automated FAQ systems",
      "Lead-generation bots",
      "Human handoff when needed",
      "Multilingual replies",
    ],
  },
  {
    number: "03",
    icon: "workflow" as IconName,
    category: "Business Automation",
    title: "Business Automation",
    lead: "Eliminate repetitive work with systems that run your business.",
    copy: "We connect your tools and automate the repetitive parts of your business — from responding to customers to managing orders and bookings automatically.",
    tags: [
      "Customer response automation",
      "Order management systems",
      "Booking & appointment systems",
      "Business management dashboards",
      "Invoice & receipt generation",
      "Workflow integrations",
    ],
  },
  {
    number: "04",
    icon: "card" as IconName,
    category: "Payment Integration",
    title: "Payment Integration",
    lead: "M-Pesa and online payments — payments confirmed automatically.",
    copy: "We integrate M-Pesa Daraja and online payment gateways so your business collects money online and confirms payments automatically.",
    tags: [
      "M-Pesa paybill & till integration",
      "STK push / Express payments",
      "Online card payments",
      "Automated payment confirmations",
      "Payment receipts & reconciliation",
      "Secure transaction handling",
    ],
  },
  {
    number: "05",
    icon: "database" as IconName,
    category: "Backend & Databases",
    title: "Database & Backend Development",
    lead: "Solid backends and secure databases your software runs on.",
    copy: "We build reliable APIs, databases and backend systems that keep your business data secure, organized and connected across all your applications.",
    tags: [
      "SQL database design",
      "Secure REST APIs",
      "Authentication & role-based access",
      "Back-office & admin panels",
      "Data migration & cleanups",
      "API integrations",
    ],
  },
  {
    number: "06",
    icon: "phone" as IconName,
    category: "Backend & Databases",
    title: "Custom Software Development",
    lead: "Software built around exactly how your business works.",
    copy: "Off-the-shelf tools don't fit every business. We build custom web and mobile software sized to your operations — and train your team to use it.",
    tags: [
      "Custom business management systems",
      "Web applications & dashboards",
      "Mobile-friendly systems",
      "School & organization systems",
      "Legacy system upgrades",
      "Ongoing maintenance",
    ],
  },
]

const whyUs = [
  {
    icon: "trend" as IconName,
    title: "We Build, Not Just Present",
    text: "No copied templates and no abandonware. You get working software, delivered and supported.",
  },
  {
    icon: "shield" as IconName,
    title: "Business-First Approach",
    text: "Every project starts by understanding your customers and your sales — technology is just the means.",
  },
  {
    icon: "card" as IconName,
    title: "Local Payments Expertise",
    text: "Deep experience with M-Pesa and Kenyan business workflows — built for how business runs here.",
  },
  {
    icon: "database" as IconName,
    title: "Transparent & Fair Pricing",
    text: "Clear quotes, no hidden fees, and honest advice when you don't need the expensive option.",
  },
]

const techStack = [
  "React",
  "Node.js",
  "Microsoft SQL Server",
  "Tailwind CSS",
  "MySQL",
  "Git & GitHub",
  "M-Pesa Daraja API",
  "REST APIs",
  "JWT Auth",
]

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    text: "We talk about your business, your customers and what you want to achieve. This is free and has no obligation.",
  },
  {
    step: "02",
    title: "Plan & Quote",
    text: "You get a plain-language plan with clear deliverables, timeline and a fixed price. No surprises later.",
  },
  {
    step: "03",
    title: "Design & Build",
    text: "We design, build and test your website or system, keeping you updated at every milestone.",
  },
  {
    step: "04",
    title: "Launch & Support",
    text: "We deploy your project, train your team, and stay with you through support and future improvements.",
  },
]

const projects = [
  {
    number: "01",
    swatch: "swatch-1",
    title: "Savannah Fresh — E-Commerce Store",
    category: "Web Development",
    summary:
      "A complete online store for a Nairobi grocery supplier with M-Pesa checkout, order tracking and same-day delivery scheduling.",
    tags: ["E-Commerce", "M-Pesa", "Next.js"],
    result: "30% more orders in the first two months",
    year: "2025",
  },
  {
    number: "02",
    swatch: "swatch-2",
    title: "EduManager — School Management System",
    category: "Business Automation",
    summary:
      "A fee-tracking, report-card and parent-messaging system used by a secondary school to run daily operations in one place.",
    tags: ["SQL Server", "Admin Panel", "Reports"],
    result: "Fees collection time cut from 3 days to 4 hours",
    year: "2025",
  },
  {
    number: "03",
    swatch: "swatch-3",
    title: "FikaShops — WhatsApp Support Bot",
    category: "AI & Chatbots",
    summary:
      "An AI chatbot that answers order-status questions and captures leads for a retail chain on WhatsApp, referring complex cases to staff.",
    tags: ["WhatsApp Bot", "OpenAI", "Automation"],
    result: "84% of FAQs answered without an agent",
    year: "2024",
  },
  {
    number: "04",
    swatch: "swatch-4",
    title: "Twende Tours — Booking System",
    category: "Business Automation",
    summary:
      "An online booking and payment flow for a safari company — customers select trips, pay deposits via M-Pesa, and get confirmations automatically.",
    tags: ["Bookings", "Payments", "Automation"],
    result: "Booking confirmations delivered in under 60 seconds",
    year: "2024",
  },
  {
    number: "05",
    swatch: "swatch-5",
    title: "Zawadi Creatives — Portfolio & CRM",
    category: "Web Development",
    summary:
      "A polished portfolio site plus a light CRM that lets a design agency manage client enquiries and quotes from one dashboard.",
    tags: ["Portfolio", "CRM", "React"],
    result: "3x more qualified enquiries per month",
    year: "2023",
  },
  {
    number: "06",
    swatch: "swatch-6",
    title: "KilimoTrack — Farm Record System",
    category: "Custom Software",
    summary:
      "A custom system for a farmers' cooperative that tracks produce, inventory and member payments with role-based access for staff.",
    tags: ["Custom Software", "SQL", "Dashboards"],
    result: "Stock discrepancies down to near zero",
    year: "2023",
  },
]

const testimonials = [
  {
    quote:
      "EmohTech built our online store with M-Pesa payment and it changed how we sell. Orders now come in even when we're closed. The WhatsApp auto-reply saves us hours every day.",
    name: "Grace Achieng",
    role: "Owner",
    company: "Nairobi Grocers",
    initials: "GA",
  },
  {
    quote:
      "The automation system they built eliminated our manual work entirely. Fees, report cards, parent messages — all handled in one system. The team is professional and always available.",
    name: "Mr. Peter Kilonzo",
    role: "School Administrator",
    company: "Greenview Secondary",
    initials: "PK",
  },
  {
    quote:
      "Working with EmohTech felt like working with partners, not vendors. They understood our business before writing a single line of code, and the results speak for themselves.",
    name: "Diana Muthoni",
    role: "Founder",
    company: "Twende Tours",
    initials: "DM",
  },
  {
    quote:
      "Our customers get instant answers on WhatsApp at any hour. It pays for itself many times over. I recommend Elijah to every entrepreneur I meet.",
    name: "Brian Otieno",
    role: "Director",
    company: "FikaShops",
    initials: "BO",
  },
]

const faqs = [
  {
    q: "How much does a website or web app cost?",
    a: "It depends on the project — but there are no hidden surprises. After a short discovery call, we give you a fixed, itemised quote before any code is written. Nothing is charged up front for the consultation.",
  },
  {
    q: "How long does it take to build something?",
    a: "A typical business website takes one to three weeks. Custom web applications and larger platforms take longer, and we agree a realistic timeline up front — then hit it.",
  },
  {
    q: "Do you work with clients outside Kenya?",
    a: "Yes. We work with clients across Kenya and internationally, communicating over WhatsApp, email and calls. Time zones are not a problem for our workflow.",
  },
  {
    q: "Do you build websites for schools?",
    a: "Yes — schools are a big part of what we do. Fee tracking, report cards, parent communication and admissions are common projects we build and support.",
  },
  {
    q: "Will I be able to update the content myself?",
    a: "Yes. We build with easy content management in mind and train you on how to make updates — so you're not dependent on us for every small change.",
  },
  {
    q: "What if I need help after the project launches?",
    a: "We provide support after launch and can handle ongoing maintenance, updates and new features as your business evolves.",
  },
]

const capabilities = [
  "Product design",
  "Full-stack development",
  "Cloud architecture",
  "AI automation",
]

const contact = {
  email: "elijahmsando672@gmail.com",
  phones: ["+254 717 732 274", "+254 110 966 572"],
  phoneHref: "tel:+254717732274,+254110966572",
  whatsapp: "https://wa.me/254717732274",
  location: "Nairobi, Kenya",
  hours: "Mon – Sat, 8:00 AM – 6:00 PM EAT",
}

const founder = {
  name: "Elijah Musando",
  role: "Founder & Lead Developer",
  bio: "Software developer and automation specialist based in Nairobi, Kenya, helping businesses replace manual work with dependable digital systems.",
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EmohTech Solutions home">
          <span className="brand-logo">
            <img src="/logo.png" alt="" />
          </span>
          <span>
            EmohTech
            <small>Solutions</small>
          </span>
        </a>

        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={`mailto:${contact.email}`}>
            Start a project <Icon name="arrow" />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Technology built around your ambition
          </p>
          <h1>
            Smart technology.
            <br />
            <em>Real progress.</em>
          </h1>
          <p className="hero-lede">
            We design and build digital solutions that turn complex challenges
            into simple, scalable experiences.
          </p>
          <p className="hero-lede">
            From professional websites to custom web applications, e-commerce
            platforms and business automation — EmohTech designs, builds and
            launches software that fits how you actually work.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Build with us <Icon name="arrow" />
            </a>
            <a className="text-link" href="#services">
              Explore our expertise <span>↓</span>
            </a>
          </div>
          <p className="hero-note">
            Software. Automation. Digital Solutions. — Based in Nairobi, Kenya,
            working with clients locally and across the world.
          </p>
        </div>

        <div
          className="hero-visual"
          aria-label="EmohTech digital solution visualization"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-card card-code">
            <div className="code-heading">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span>emoh_core.ts</span>
            </div>
            <div className="code-lines">
              <p>
                <b>01</b> <span>const</span> idea = <strong>await</strong>
              </p>
              <p>
                <b>02</b>&nbsp;&nbsp; solve(challenge);
              </p>
              <p>
                <b>03</b>
              </p>
              <p>
                <b>04</b> <span>return</span> impact;
              </p>
            </div>
          </div>
          <div className="visual-card card-status">
            <span className="status-icon">
              <Icon name="spark" />
            </span>
            <span>
              <small>System status</small>
              Ready to scale
            </span>
            <i />
          </div>
          <div className="visual-badge">
            <span>∞</span>
            Built for what’s next
          </div>
        </div>

        <div className="hero-footer">
          <span>Strategy</span>
          <i />
          <span>Design</span>
          <i />
          <span>Engineering</span>
        </div>
      </section>

      <section className="stats-band" aria-label="EmohTech in numbers">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              <span />
              What we do
            </p>
            <h2>From idea to impact.</h2>
          </div>
          <p>
            One team, every critical capability. We partner with ambitious
            businesses to create technology that works harder.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-top">
                <span className="service-icon">
                  <Icon name={service.icon} />
                </span>
                <span className="service-number">{service.number}</span>
              </div>
              <p className="service-category">{service.category}</p>
              <h3>{service.title}</h3>
              <p className="service-lead">{service.lead}</p>
              <p className="service-copy">{service.copy}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why section" aria-labelledby="why-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              <span />
              Why EmohTech
            </p>
            <h2 id="why-heading">Built on trust, not templates.</h2>
          </div>
          <p>
            We Build, Not Just Present. Every engagement starts with your
            customers and your sales — technology is just the means.
          </p>
        </div>

        <div className="why-grid">
          {whyUs.map((item) => (
            <article className="why-card" key={item.title}>
              <span className="why-icon">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement section" id="about">
        <div className="statement-label">
          <span>Our belief</span>
          <div className="statement-orbit">
            <span>ET</span>
          </div>
        </div>
        <div className="statement-copy">
          <p>
            Technology should feel like <em>possibility</em>, not complexity.
          </p>
          <p className="statement-sub">
            That’s why we bring clarity to every challenge, combining strategic
            thinking with technical excellence to create solutions people love
            to use.
          </p>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              <span />
              Selected work
            </p>
            <h2>Software that ships.</h2>
          </div>
          <div className="work-heading-side">
            <p>
              A few of the platforms, stores and systems we have designed, built
              and launched for Kenyan businesses.
            </p>
            <div className="portfolio-stats">
              {portfolioStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.title}>
              <div className={project.swatch}>
                <span>{project.category}</span>
                <i>{project.number}</i>
              </div>
              <div className="work-body">
                <div className="work-meta">
                  <h3>{project.title}</h3>
                  <span>{project.year}</span>
                </div>
                <p>{project.summary}</p>
                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p className="work-result">
                  <Icon name="trend" />
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              <span />
              How we work
            </p>
            <h2>Four steps. No guesswork.</h2>
          </div>
          <p>
            A simple, transparent process from the first free conversation to
            launch and ongoing support.
          </p>
        </div>

        <ol className="process-list">
          {processSteps.map((item) => (
            <li key={item.step}>
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="approach section" id="approach">
        <div className="approach-card">
          <p className="eyebrow">
            <span />
            The EmohTech edge
          </p>
          <h2>
            Small team.
            <br />
            Big capability.
          </h2>
          <p>
            Work directly with senior thinkers and builders from first
            conversation to final launch. No layers. No lost context.
          </p>
          <a className="button button-primary" href={`mailto:${contact.email}`}>
            Meet your technology partner <Icon name="arrow" />
          </a>
        </div>
        <div className="capability-list">
          {capabilities.map((capability, index) => (
            <div key={capability}>
              <span>0{index + 1}</span>
              <strong>{capability}</strong>
              <i>
                <Icon name="check" />
              </i>
            </div>
          ))}
        </div>
      </section>

      <section className="voices section" aria-labelledby="voices-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              <span />
              Client voices
            </p>
            <h2 id="voices-heading">What clients say.</h2>
          </div>
          <p>
            Real feedback from the founders, administrators and owners we build
            with.
          </p>
        </div>

        <div className="quote-grid">
          {testimonials.map((item) => (
            <figure className="quote-card" key={item.name}>
              <span className="quote-mark">
                <Icon name="quote" />
              </span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className="quote-avatar">{item.initials}</span>
                <span>
                  <strong>{item.name}</strong>
                  <small>
                    {item.role} · {item.company}
                  </small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="stack section">
        <div className="stack-inner">
          <div className="stack-copy">
            <p className="eyebrow">
              <span />
              The stack we build with
            </p>
            <h2>Modern tools, carefully chosen.</h2>
            <div className="founder">
              <span className="founder-avatar" aria-hidden="true">
                EM
              </span>
              <div>
                <strong>{founder.name}</strong>
                <span>{founder.role}</span>
                <p>{founder.bio}</p>
              </div>
            </div>
          </div>
          <div className="stack-chips">
            {techStack.map((tool) => (
              <span className="stack-chip" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">
              <span />
              FAQ
            </p>
            <h2>Questions, answered honestly.</h2>
          </div>
          <p>
            The things people usually ask before starting a project — and the
            straight answers.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index

            return (
              <div className="faq-item" key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    {item.q}
                    <span className="faq-toggle">
                      <Icon name={isOpen ? "minus" : "plus"} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={isOpen ? "faq-panel faq-panel-open" : "faq-panel"}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">
            <span />
            Have a challenge in mind?
          </p>
          <h2>Let’s build what’s next.</h2>
          <p className="contact-lede">
            Tell us about your business and what you want to achieve. The first
            consultation is free and has no obligation.
          </p>

          <div className="contact-grid">
            <a className="contact-item" href={`mailto:${contact.email}`}>
              <span className="contact-icon">
                <Icon name="mail" />
              </span>
              <span>
                <small>Email</small>
                <strong>{contact.email}</strong>
              </span>
            </a>
            <a className="contact-item" href={contact.phoneHref}>
              <span className="contact-icon">
                <Icon name="phone" />
              </span>
              <span>
                <small>Phone</small>
                <strong>{contact.phones[0]}</strong>
                <strong>{contact.phones[1]}</strong>
              </span>
            </a>
            <a
              className="contact-item"
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <Icon name="chat" />
              </span>
              <span>
                <small>WhatsApp</small>
                <strong>Chat with us instantly</strong>
              </span>
            </a>
            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="pin" />
              </span>
              <span>
                <small>Location</small>
                <strong>{contact.location}</strong>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="clock" />
              </span>
              <span>
                <small>Hours</small>
                <strong>{contact.hours}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <p className="eyebrow">
              <span />
              Ready when you are
            </p>
            <h2>Start a conversation.</h2>
          </div>
          <a className="footer-cta" href={`mailto:${contact.email}`}>
            <span>
              Start a conversation
              <small>{contact.email}</small>
            </span>
            <Icon name="arrow" />
          </a>
        </div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#top">
            <span className="brand-logo">
              <img src="/logo.png" alt="" />
            </span>
            <span>
              EmohTech
              <small>Solutions</small>
            </span>
          </a>
          <p>
            © {new Date().getFullYear()} EmohTech Solutions. Built for progress.
          </p>
          <div>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href={`mailto:${contact.email}`}>Contact</a>
          </div>
        </div>
      </footer>

      <a
        className="wa-float"
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with EmohTech Solutions on WhatsApp"
      >
        <Icon name="chat" />
      </a>
    </main>
  )
}

export default App
