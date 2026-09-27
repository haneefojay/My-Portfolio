export type FeaturedId = "work" | "experience" | "skills" | "resume" | "contact";

export type FeaturedIcon = "work" | "experience" | "skills" | "resume" | "contact";

export type SocialId = "github" | "linkedin" | "x" | "mail";

export const profile = {
  name: "Haneef Ojutalayo",
  role: "Senior Software Engineer",
  company: "MushakTech Ventures",
  location: "Ibadan, Nigeria",
  bio: "I build production software across backend systems, full-stack products, AI, and developer tools. The stack follows the problem.",
  email: "biolahaneef@gmail.com",
  avatarSrc: "/avatar.jpg",
  availability: "Open to remote roles",
  site: "https://dev-haneef.vercel.app/",
  resumeHref: "/haneef-ojutalayo-cv.pdf",
  languages: ["English", "Yoruba", "Arabic"],
} as const;

export const featuredLinks: Array<{
  id: FeaturedId;
  title: string;
  hint: string;
  icon: FeaturedIcon;
}> = [
  {
    id: "work",
    title: "Selected work",
    hint: "Systems I designed and shipped",
    icon: "work",
  },
  {
    id: "experience",
    title: "Experience",
    hint: "MushakTech Ventures",
    icon: "experience",
  },
  {
    id: "skills",
    title: "Skills",
    hint: "Languages, systems, and practice",
    icon: "skills",
  },
  {
    id: "resume",
    title: "Resume",
    hint: "Download the latest CV",
    icon: "resume",
  },
  {
    id: "contact",
    title: "Contact",
    hint: "Roles, contracts, and products",
    icon: "contact",
  },
];

export const socialLinks: Array<{
  id: SocialId;
  label: string;
  href: string;
}> = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/haneefojay",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/haneef-ojutalayo-505163285",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/hanyjay05",
  },
  {
    id: "mail",
    label: "Email",
    href: `mailto:${profile.email}`,
  },
];

export const projects = [
  {
    id: "atlas",
    title: "Project Atlas",
    kind: "CBT platform",
    role: "Lead Software Engineer",
    problem:
      "A production CBT platform for Nigerian secondary schools: multi-tenant school management, exam delivery, question workflows, moderation, role-based access, and exam integrity.",
    work: "Owned system architecture and implementation across the backend, database design, authentication, tenant isolation, background processing, API contracts, validation, frontend architecture, and production infrastructure.",
    outcome:
      "Built as a production-oriented platform for deployment and pilot use in secondary schools.",
    stack: [
      "TypeScript",
      "NestJS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Next.js",
      "React",
      "Docker",
      "Turborepo",
    ],
    status: "Private · in development",
    links: [] as Array<{ label: string; href: string }>,
  },
  {
    id: "envdoctor",
    title: "EnvDoctor",
    kind: "Open-source CLI",
    role: "Creator",
    problem:
      "Environment configuration drifts between local development, tests, CI, Docker, staging, and production — missing variables, misspellings, stale examples, and accidental secret exposure.",
    work: "A Go CLI that treats environment configuration as a contract. It checks environments against a schema, flags type and format errors, CI and Docker mismatches, and never emits secret values.",
    outcome: "Published as an open-source, local-first developer tool (MIT).",
    stack: ["Go"],
    status: "Open source",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/haneefojay/envdoctor",
      },
    ],
  },
  {
    id: "pulse",
    title: "Pulse News",
    kind: "Aggregator",
    role: "Software Engineer",
    problem:
      "Aggregate news from several providers without duplicates, while respecting API rate limits, caching, and asynchronous work.",
    work: "URL-hash deduplication, Celery workers, Redis caching, PostgreSQL persistence, and integrations with NewsAPI, The Guardian, and The New York Times — plus a PWA client.",
    outcome:
      "A live deployment that shows production backend and background-processing patterns.",
    stack: [
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "JavaScript",
      "PWA",
    ],
    status: "Live",
    links: [
      {
        label: "Live site",
        href: "https://pulse-news-aggregator.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/haneefojay/News-Aggregator-Website",
      },
    ],
  },
] as const;

export const experience = {
  company: "MushakTech Ventures",
  title: "Software Engineer / Full-Stack Engineer",
  dates: "2022 — Present",
  mode: "Hybrid · Oyo State, Nigeria",
  bullets: [
    "Design and ship products across backend systems, full-stack web applications, AI-powered products, and infrastructure.",
    "Choose languages and architectures from the problem: APIs, databases, auth, background processing, integrations, and production web apps.",
    "Contribute to system architecture, technical decisions, implementation, deployment, and product engineering.",
    "Work across education, business applications, AI products, and developer tooling.",
  ],
} as const;

export const skillGroups: Array<{
  title: string;
  items: string[];
}> = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
  },
  {
    title: "Backend and systems",
    items: [
      "Backend architecture",
      "API design",
      "REST",
      "Distributed systems",
      "Event-driven systems",
      "Background processing",
      "AuthN / AuthZ",
      "Database architecture",
      "PostgreSQL",
      "Redis",
      "NestJS",
      "Node.js",
      "FastAPI",
      "Prisma",
      "SQLAlchemy",
      "SQLModel",
      "Pydantic",
      "BullMQ",
      "Celery",
      "RabbitMQ",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud and infrastructure",
    items: [
      "Docker",
      "Linux",
      "VPS",
      "DigitalOcean",
      "AWS",
      "Vercel",
      "CI/CD",
      "Git",
      "GitHub",
      "Production deployment",
    ],
  },
  {
    title: "Data and AI",
    items: [
      "LLM applications",
      "AI agents",
      "Agentic workflows",
      "RAG",
      "MCP",
      "OpenAI",
      "Claude",
      "Gemini",
      "Groq",
      "LangChain",
      "LangGraph",
      "Pandas",
      "Streamlit",
    ],
  },
  {
    title: "Practice",
    items: [
      "System architecture",
      "Monorepos",
      "API contracts",
      "Database design",
      "Testing",
      "Security",
      "Performance",
      "Code quality",
      "Technical documentation",
      "Production readiness",
    ],
  },
];
