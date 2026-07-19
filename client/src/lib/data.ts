export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  link: string;
  repo: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "Full Stack",
    description:
      "A professional full-stack finance manager with React 19 and Node.js. Features real-time analytics, automated budgeting, and professional PDF report generation.",
    fullDescription:
      "Expense Tracker is a professional-grade full-stack financial management application built with React 19, Node.js, and MongoDB. It offers users a secure and intuitive platform to manage their personal finances with precision. Key features include a real-time interactive dashboard with multiple visualization options (Bar, Line, and Doughnut charts via Recharts and Chart.js), comprehensive CRUD operations for income and expense records, and advanced budget tracking with recurring daily, weekly, or monthly options. The application prioritizes security with JWT-based authentication and robust backend protection including rate limiting and input sanitization. Users can generate professional PDF reports with embedded charts, manage profiles with Cloudinary-backed image uploads, and enjoy a seamless responsive experience in both dark and light modes.",
    technologies: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Recharts",
      "Chart.js",
      "JWT",
      "Cloudinary",
      "jsPDF",
      "ExcelJS",
      "Framer Motion",
      "Vite",
    ],
    link: "https://expense-tracker-omega-wine.vercel.app/login",
    repo: "https://github.com/ByteOps02/Expense_Tracker",
    featured: true,
  },
  {
    id: "visitor-management",
    title: "Visitor Management System",
    category: "Full Stack",
    description:
      "A comprehensive visitor tracking platform featuring real-time updates, QR-based check-ins, and automated multi-role approval workflows.",
    fullDescription:
      "This Visitor Management System is a full-stack web application designed to streamline campus security and guest tracking. It features four distinct user roles (Visitor, Host, Guard, Admin) with specialized dashboards for each. Core functionality includes real-time visit logging via Supabase, automated high-density QR code generation for approved visits, and instant email notifications through EmailJS. The system supports both single and multi-day passes, gate-specific check-in/out logs, and integrated identity verification with photo/ID proof uploads. Administrative tools provide user management, bulk CSV uploads, and live analytics for monitoring campus traffic. Built as a PWA, it offers a mobile-first experience with offline support and intuitive navigation.",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "React Hook Form",
      "Zod",
      "EmailJS",
      "HTML5 QR Scanner",
      "PWA",
      "PostgreSQL",
    ],
    link: "https://visitor-management-system-xi.vercel.app/",
    repo: "https://github.com/ram02krishna/Visitor-Management-System",
    featured: true,
  },
  {
    id: "orbix",
    title: "Orbix",
    category: "Full Stack",
    description:
      "A full-stack, real-time chat application featuring audio/video calls via WebRTC, real-time messaging using Socket.io, and secure JWT authentication.",
    fullDescription:
      "Orbix is a full-stack, real-time chat application designed to provide seamless and instant communication. It features peer-to-peer audio and video calling powered by WebRTC, real-time messaging with typing indicators and read receipts using Socket.io, and secure JWT authentication. The app boasts a highly responsive UI built with Next.js, React 19, Tailwind CSS, and Framer Motion, along with robust database interactions using Prisma ORM and scalability through Redis.",
    technologies: [
      "Next.js",
      "React 19",
      "Socket.io",
      "WebRTC",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
    ],
    link: "#",
    repo: "https://github.com/ram02krishna/ChatApplication",
    featured: true,
  },
  {
    id: "nanoURL",
    title: "nanoURL",
    category: "Full Stack",
    description:
      "A high-performance URL shortening platform featuring advanced analytics, password-protected links, and secure OTP-based authentication.",
    fullDescription:
      "nanoURL is a sleek, full-stack URL shortening platform built for speed, security, and simplicity. It offers a comprehensive suite of features including instant link generation, detailed click analytics (tracking IP, browser, OS, and device data), and advanced security options like password-protected links and custom expiration dates. The platform ensures secure user onboarding via Email OTP verification and provides a unique free-tier experience with device-aware limits. Architected with a React/Vite frontend and a high-performance Node.js/PostgreSQL backend using Drizzle ORM, nanoURL delivers lightning-fast redirections and a polished, responsive dashboard with adaptive theming, instant QR code generation, and fluid Framer Motion animations.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "JWT",
      "Email OTP",
      "Tailwind CSS",
      "Framer Motion",
      "Docker",
      "Vercel",
    ],
    link: "https://url-shortener-lac-five.vercel.app",
    repo: "https://github.com/ByteOps02/URL_Shortener",
    featured: true,
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5 / CSS3",
      "JavaScript / TypeScript",
      "React / Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication (JWT, OAuth)",
      "Drizzle ORM",
      "Supabase",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Problem Solving",
    skills: [
      "C++",
      "Data Structures",
      "Algorithms",
      "STL",
      "Sliding Window",
      "Graph Algorithms",
      "Dynamic Programming",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux Fundamentals",
      "Postman",
      "VS Code",
      "Vercel",
    ],
  },
  {
    title: "Computer Science",
    skills: ["Operating Systems", "Computer Networks", "DBMS", "OOP"],
  },
];

export const codingProfiles = [
  {
    title: "Codeforces",
    link: "https://codeforces.com/profile/krishnarammhd",
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/ram_02_Krishna/",
  },
  {
    title: "GitHub",
    link: "https://github.com/ram02krishna",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    year: "Present",
    role: "Open to SDE & Web Development Roles",
    company: "Full Stack Development · Software Engineering",
    description:
      "I've spent the past year building real projects across the full stack — from authentication flows and REST APIs to responsive UIs and database design. Now I'm looking for a team where I can do meaningful work, grow alongside smart people, and ship things that actually matter.",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

import { Code2, Palette, Rocket, Smartphone } from "lucide-react";

export const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, accessible UIs with React and TypeScript. I care about component architecture, clean state management, and the kind of polish users notice even when they can't name it.",
    icon: Code2,
  },
  {
    title: "Backend & APIs",
    description:
      "Building reliable REST APIs with Node.js and Express, handling authentication, database design, and the backend logic that keeps everything running smoothly under the hood.",
    icon: Palette,
  },
  {
    title: "Performance & SEO",
    description:
      "Improving load times, Core Web Vitals, and search visibility. Fast pages aren't a luxury — they're the baseline for a product people actually want to use.",
    icon: Rocket,
  },
  {
    title: "Full Stack Projects",
    description:
      "Taking ideas from concept to deployed product — handling the frontend, backend, database, and deployment pipeline as a single cohesive system rather than a collection of separate parts.",
    icon: Smartphone,
  },
];
