import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Md. Nayem Hossain",
  roleTitle: "Full-Stack Web Developer",
  tagline: "FULL-STACK WEB DEVELOPER",
  heroHeadline: "Hello, I'm Nayem.",
  heroSubheadline: "Building Modern Next.js & React Web Applications.",
  location: "Bangladesh",
  aboutIntro1:
    "I'm a full-stack web developer focused on building modern, responsive, and practical web applications using Next.js and React.",
  aboutIntro2:
    "I work across frontend development, server-side functionality, database integration, authentication, and e-commerce solutions. I enjoy solving real-world problems and turning business requirements into reliable web applications. My recent work includes an agricultural e-commerce platform, a jewellery storefront, and a digital products platform.",
  socials: {
    github: "https://github.com/MdNayem-Dev/",
    linkedin: "https://www.linkedin.com/in/md-nayem-dev",
    whatsapp: "https://wa.me/?text=Hello%20Nayem",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@mdnayem.dev",
  },
  highlights: [
    {
      icon: "fa-laptop-code",
      category: "Frontend & Full-Stack",
      title: "Next.js & React",
      detail: "Next.js 16, React 19, Server Components, TypeScript & Tailwind CSS",
      badge: "Core Stack",
      accent: "indigo",
    },
    {
      icon: "fa-server",
      category: "Edge & Server-Side",
      title: "Edge SSR & APIs",
      detail: "Cloudflare Workers edge runtime, Server Actions, RESTful APIs & Auth",
      badge: "Server Architecture",
      accent: "emerald",
    },
    {
      icon: "fa-database",
      category: "Database & ORM",
      title: "Prisma & MariaDB / D1",
      detail: "Prisma ORM, relational schema modeling, connection pooling & Cloudflare D1",
      badge: "Data Layer",
      accent: "purple",
    },
    {
      icon: "fa-shopping-bag",
      category: "Practical Impact",
      title: "Production E-Commerce",
      detail: "Agricultural commerce, luxury storefronts, digital products & checkout flows",
      badge: "Real-World Solutions",
      accent: "blue",
    },
  ],
  projects: [
    {
      id: "agro-mart",
      number: "01",
      category: "Full-Stack E-Commerce & Agricultural Machinery",
      title: "AgroMart Platform — Full-Stack Agro Equipment Web App",
      description:
        "Production-grade full-stack E-Commerce & Agro-Equipment platform built with Next.js 16, React 19, Prisma ORM, and high-performance MariaDB connection pooling. Features complete product discovery, relational database modeling, cart state synchronization, and reliable server actions.",
      tags: [
        "Next.js 16",
        "React 19",
        "Prisma ORM",
        "MariaDB",
        "Tailwind CSS",
        "TypeScript",
        "E-Commerce",
      ],
      icon: "fa-tractor",
      color: "emerald",
      githubUrl: "https://github.com/MdNayem-Dev/agro-mart-platform",
      highlights: [
        "High-performance MariaDB connection pooling and relational schema design via Prisma ORM",
        "Full-stack shopping cart, dynamic pricing, and transactional order management pipeline",
        "Next.js App Router server actions with robust validation and error boundaries",
        "Clean, responsive layout optimized for mobile farmers and machinery buyers",
      ],
      pillarsTitle: "Architecture Pillars",
      pillars: [
        {
          title: "Relational Modeling",
          description: "Structured Prisma schema with optimized MariaDB connection pooling.",
          icon: "fa-database",
        },
        {
          title: "Server Actions",
          description: "End-to-end type safety between server mutation handlers and client UI.",
          icon: "fa-bolt",
        },
        {
          title: "E-Commerce Pipeline",
          description: "Full cart architecture, stock validation, and structured checkout flow.",
          icon: "fa-shopping-cart",
        },
      ],
    },
    {
      id: "lumifable",
      number: "02",
      category: "Edge SSR & Luxury Jewellery Storefront",
      title: "LumiFable — Next-Generation Luxury E-Commerce Platform",
      description:
        "Production-grade full-stack luxury jewellery storefront built with Next.js 16, React 19, Cloudflare Workers (Edge SSR), and Cloudflare D1 distributed database. Engineered for sub-millisecond global TTFB, editorial visual aesthetics, and resilient serverless execution.",
      tags: [
        "Next.js 16",
        "React 19",
        "Cloudflare Workers",
        "Cloudflare D1",
        "Edge SSR",
        "Luxury UI",
      ],
      icon: "fa-gem",
      color: "purple",
      githubUrl: "https://github.com/MdNayem-Dev/lumifable-ecommerce",
      highlights: [
        "Edge SSR deployment on Cloudflare Workers delivering near-instant page rendering globally",
        "Sub-millisecond query responses utilizing Cloudflare D1 distributed serverless database",
        "Immersive luxury aesthetic with high-contrast typography and smooth micro-interactions",
        "Resilient shopping cart state and responsive jewelry showcase across devices",
      ],
      pillarsTitle: "Edge Capabilities",
      pillars: [
        {
          title: "Sub-Millisecond TTFB",
          description: "Worldwide edge compute rendering pages right next to the user.",
          icon: "fa-tachometer-alt",
        },
        {
          title: "Distributed D1",
          description: "Serverless SQL database integrated directly into edge worker runtime.",
          icon: "fa-network-wired",
        },
        {
          title: "Editorial Design",
          description: "Tailored luxury visual hierarchy, subtle glassmorphism, and gold accents.",
          icon: "fa-sparkles",
        },
      ],
    },
    {
      id: "pulsecut-ai",
      number: "03",
      category: "AI Video Studio & Digital Products Platform",
      title: "PulseCut AI — Automated Viral Shorts & Video Studio",
      description:
        "Full-stack digital products platform and automated AI studio that converts long-form video streams into captioned vertical clips ready to publish. Free, open-source, and self-hosted with local processing pipelines and zero cloud limits.",
      tags: [
        "Next.js",
        "React",
        "Python",
        "AI Automation",
        "Video Processing",
        "Digital Platform",
      ],
      icon: "fa-video",
      color: "indigo",
      githubUrl: "https://github.com/MdNayem-Dev/PulseCut-AI",
      highlights: [
        "Automated AI highlight detection and dynamic vertical video cropping for creators",
        "Interactive studio interface with real-time video player and customizable caption styling",
        "Zero-cloud-cost architecture allowing self-hosted execution with user's own AI keys",
        "Harmonious integration of Python backend processing with a reactive Next.js UI",
      ],
      pillarsTitle: "Platform Core",
      pillars: [
        {
          title: "AI Automation",
          description: "Intelligent transcription, sentence segmentation, and virality scoring.",
          icon: "fa-robot",
        },
        {
          title: "Self-Hosted Power",
          description: "Complete creator privacy and unlimited rendering with no cloud paywalls.",
          icon: "fa-shield-alt",
        },
        {
          title: "Creator Workflows",
          description: "Export-ready vertical reels designed for YouTube Shorts and TikTok.",
          icon: "fa-play-circle",
        },
      ],
    },
    {
      id: "freshpack-bd",
      number: "04",
      category: "High-Converting E-Commerce Landing Page",
      title: "FreshPack BD — Production Client Landing Page & Order Automation",
      description:
        "Production client landing page engineered for high conversion rates, frictionless order flow, and mobile optimization for Bangladeshi shoppers. Features swift loading, visual packaging benefits, and streamlined customer inquiries.",
      tags: [
        "Client Production",
        "High-Converting UI",
        "Order Automation",
        "Mobile Optimization",
      ],
      icon: "fa-leaf",
      color: "emerald",
      githubUrl: "https://github.com/MdNayem-Dev/freshpack-landing-page",
      liveUrl: "https://freshpackbd.blogspot.com/",
      highlights: [
        "Lightweight load speed tested and optimized for mobile shoppers on 3G/4G connections",
        "Frictionless single-page checkout flow maximizing completed customer orders",
        "Clean product value propositions, trust badges, and interactive customer inquiry flow",
      ],
      pillarsTitle: "Client Results",
      pillars: [
        {
          title: "Frictionless Orders",
          description: "Straightforward order placement with instant customer confirmation.",
          icon: "fa-check-circle",
        },
        {
          title: "Mobile First",
          description: "Sub-second mobile rendering optimized for cellular data bandwidth.",
          icon: "fa-mobile-alt",
        },
      ],
    },
  ],
  milestones: [
    {
      period: "Present • Full-Stack",
      tag: "Active Engineering",
      title: "Modern Next.js & Cloud-Native Development",
      description:
        "Building production-grade web applications with Next.js 16, React 19, Prisma ORM, and Cloudflare Workers edge computing.",
      location: "GitHub: @MdNayem-Dev",
    },
    {
      period: "Production Milestones",
      tag: "E-Commerce & Digital",
      title: "Agro-Equipment, Luxury Jewellery & AI Video Studio",
      description:
        "Engineered AgroMart (Next.js/MariaDB), LumiFable (Cloudflare D1 Edge), and PulseCut AI (Automated Video Studio).",
      location: "Open Source & Client Production",
    },
    {
      period: "Foundation & Growth",
      tag: "Continuous Learning",
      title: "Mastery of Web Architecture & Modern Tooling",
      description:
        "Dedicated hundreds of hours to mastering frontend reactivity, database pooling, authentication, API contracts, and scalable UI engineering.",
      location: "Full-Stack Development",
    },
  ],
  faqs: [
    {
      q: "What technologies does Nayem specialize in?",
      a: "Nayem specializes in Full-Stack Web Development using Next.js (App Router), React, TypeScript, Tailwind CSS, Prisma ORM, MariaDB/MySQL, and Cloudflare Workers (Edge SSR & D1).",
    },
    {
      q: "What recent projects has Nayem built?",
      a: "Recent production projects include AgroMart (an agricultural machinery e-commerce platform with Prisma/MariaDB), LumiFable (a luxury jewellery storefront on Cloudflare Edge with D1), PulseCut AI (an automated video studio), and FreshPack BD.",
    },
    {
      q: "Can Nayem build custom full-stack web applications?",
      a: "Yes! Nayem builds scalable web applications from scratch, handling frontend UI/UX, server-side APIs, database integration, authentication, and e-commerce cart/checkout pipelines.",
    },
    {
      q: "How can I collaborate or get in touch with Nayem?",
      a: "You can reach out through the Contact form on this website, connect via LinkedIn (linkedin.com/in/md-nayem-dev), check out code on GitHub (github.com/MdNayem-Dev), or send a message on WhatsApp.",
    },
  ],
  skills: [
    {
      category: "Frontend Development",
      items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & Modern CSS", "Framer Motion"],
    },
    {
      category: "Backend & Server-Side",
      items: ["Next.js Server Actions", "Node.js", "REST APIs", "Cloudflare Workers", "Edge SSR", "Authentication", "Python"],
    },
    {
      category: "Databases & ORM",
      items: ["Prisma ORM", "MariaDB", "MySQL", "Cloudflare D1 (Serverless SQL)", "Connection Pooling", "Relational Modeling"],
    },
    {
      category: "Tools & Deployment",
      items: ["Git & GitHub", "Cloudflare Ecosystem", "Vercel", "Vite", "VS Code", "Postman", "Linux"],
    },
  ],
  systemTelemetry: {
    publishedDateString: "Nov 24, 2026, 7:30 PM (BST)",
    deviceName: "Developer Workstation (Windows 11)",
    deviceType: "High-Performance Workstation",
    os: "Windows",
    osVersion: "Windows 11 Professional",
    location: "Bangladesh",
    isp: "Broadband Fiber Internet",
    ip: "103.145.22.45",
  },
};
