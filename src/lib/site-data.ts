const githubProfiles = [
  {
    username: "ramesh-raoufi",
    url: "https://github.com/ramesh-raoufi",
  },
  {
    username: "rameshraoufi1",
    url: "https://github.com/rameshraoufi1",
  },
];

export const personalInfo = {
  name: "Ahmad Ramesh Raoufi",
  shortName: "Ramesh Raoufi",
  title: "Frontend Web Developer",
  location: "Herat, Afghanistan",
  dob: "2001-03-21",
  languages: [
    "Dari (Native)",
    "English (Professional)",
    "Turkish (Conversational)",
  ],
  github: githubProfiles[0].url,
  githubProfiles,
  portfolio: "https://rameshraoufi.netlify.app",
  email: "rameshraoufi1@gmail.com",
  summary:
    "Product-minded frontend engineer who pairs design systems and AI-assisted delivery to ship multilingual experiences that feel carefully crafted.",
  interests: [
    "Systems thinking for product discovery",
    "Charisma, storytelling, and leadership craft",
    "Deliberate practice for spoken English",
    "Reading product strategy and personal growth books",
    "Sharing knowledge within local tech communities",
  ],
  learning: [
    "Product discovery with AI copilots",
    "Edge-deployed full-stack TypeScript",
    "React Native for cross-platform apps",
  ],
  availability: {
    status: "Open to remote and hybrid frontend roles",
    responseTime: "Typically responds within 24 hours",
  },
  metrics: [
    {
      label: "Experience",
      value: "3+ yrs",
      helper: "Shipping product-ready web apps",
    },
    {
      label: "Product launches",
      value: "20+",
      helper: "Production-ready web experiences shipped",
    },
    {
      label: "AI automations",
      value: "15+",
      helper: "Custom prompt and workflow integrations",
    },
  ],
  about: [
    "I'm a bilingual frontend specialist partnering with product teams to translate complex ideas into interfaces that feel effortless to use.",
    "Recent focus includes orchestrating AI-assisted design and development pipelines, prototyping faster with reusable components, and mentoring teams on UX craft.",
  ],
};

export function getAge(dateString: string) {
  const dob = new Date(dateString);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const month = now.getMonth() - dob.getMonth();
  if (month < 0 || (month === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

export const experience = [
  {
    company: "Lajward Company",
    role: "Frontend Web Developer",
    period: "2024 - Present",
    points: [
      "Build product and marketing interfaces with Next.js 14, Tailwind CSS, and shadcn/ui.",
      "Document reusable component libraries in Storybook to accelerate handoffs.",
      "Measure Core Web Vitals and drive accessibility fixes with the design team.",
    ],
  },
  {
    company: "HaqNet Company",
    role: "Web Developer & Digital Marketer",
    period: "2022 - 2024",
    points: [
      "Delivered high-converting landing pages and CRM dashboards for regional clients.",
      "Maintained shared codebases across marketing and product initiatives.",
      "Introduced Git workflows, review rituals, and lightweight automation scripts.",
    ],
  },
];

export const education = [
  {
    school: "Herat University",
    field: "Computer Science (Databases Focus)",
    graduation: "2020 - 2024",
  },
];

export const skills = {
  frontend: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Shadcn UI",
    "Storybook",
    "Sass/SCSS",
  ],
  backend: ["Node.js", "Express.js"],
  other: ["REST API Design", "GraphQL", "Git", "GitHub Actions"],
  learning: ["Laravel", "Flask", "React Native"],
};

export const projects = [
  {
    name: "Herat City Tourism Hub",
    url: "https://herat-city.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "Leaflet"],
    highlights: [
      "Interactive city guide with curated attractions, cafes, and cultural hotspots.",
      "Map overlays that help visitors plan routes across historic districts.",
      "Localized Persian copy and imagery tailored for Afghan audiences.",
      "Optimized for GitHub Pages deployment to rameshraoufi1.github.io.",
    ],
  },
  {
    name: "Hospital Queue Portal",
    stack: ["React", "Tailwind"],
    highlights: [
      "Real-time queue monitor with color-coded statuses and escalation states.",
      "Shamsi calendar widgets with localized weekdays and months.",
      "Animated kiosk display with toggles for patient and staff views.",
      "Session state persisted in cookies to retain settings between shifts.",
    ],
  },
  {
    name: "Accounting & Inventory Suite",
    stack: ["React", "Microservices"],
    highlights: [
      "Inventory receipts and product lot tracking across multi-warehouse setups.",
      "Discount engine with flexible name, value, type, and account rules.",
      "Invoice, bill, transfer, and assembly modules for accounting teams.",
      "POS experience translated fully to Persian for frontline sellers.",
      "Barcode and product code search for faster order fulfillment.",
    ],
  },
  {
    name: "Microservices Blog Platform",
    stack: ["Node.js", "Express", "MongoDB"],
    highlights: [
      "User service that handles authentication, registration, and permissions.",
      "Modular post service designed for easy feature additions.",
    ],
  },
  {
    name: "Pharmacy Website",
    stack: ["Full-stack"],
    highlights: ["Built-in accountant reporting module for inventory and sales."],
  },
  {
    name: "Flask + MySQL Exam System (WIP)",
    stack: ["Flask", "MySQL"],
    highlights: [
      "Investigating intermittent NoneType cursor issues to harden reliability.",
      "Designing an online examination workflow with item banks and grading.",
    ],
  },
];

export const productionSites = [
  { name: "Planet Beauty", url: "https://planetbeauty.store" },
  { name: "Afghanistan Export", url: "https://afghanistanexport.com" },
  { name: "Previous Portfolio", url: "https://rameshraoufi.netlify.app" },
  { name: "HaqNet", url: "https://haqnet.com" },
  { name: "Herat City", url: "https://herat-city.vercel.app/" },
];

export const socialLinks = [
  ...githubProfiles.map((profile) => ({
    label: `GitHub (${profile.username})`,
    href: profile.url,
  })),
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aiHighlights = {
  description:
    "I integrate AI at each stage of the product lifecycle -- from ideation and prototyping to content automation -- to help teams move faster without compromising quality.",
  highlights: [
    "Design assistant flows that co-create wireframes, interface copy, and tone variations in minutes.",
    "Build prompt-driven dashboards that surface product metrics and customer sentiment for stakeholders.",
    "Automate QA, localization, and documentation handoffs with tailored GPT workflows.",
  ],
  tools: ["OpenAI", "Claude", "Cursor", "V0", "LangChain", "Zapier"],
};

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: personalInfo.portfolio,
    sameAs: personalInfo.githubProfiles.map((profile) => profile.url),
    homeLocation: personalInfo.location,
    knowsAbout: [...skills.frontend, ...skills.backend, ...skills.other],
    alumniOf: education.map((item) => item.school),
  };
}
