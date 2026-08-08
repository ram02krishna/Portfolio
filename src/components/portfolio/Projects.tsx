import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

type Project = {
  title: string;
  tag: string;
  desc: string;
  features: string[];
  stack: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Expense Tracker",
    tag: "Full Stack",
    desc: "A full-stack MERN finance manager where users log income & expenses, set category budgets, visualize spending via interactive charts, and export reports as Excel or PDF — with secure JWT auth and email OTP recovery.",
    features: [
      "Interactive Chart.js dashboards — bar, line & doughnut — with monthly analytics",
      "Budget management with visual usage indicators per category",
      "Excel & PDF report export, rate limiting, Helmet.js security headers"
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "Tailwind CSS", "JWT", "Resend", "ExcelJS"],
    github: "https://github.com/ram02krishna/Expense_Tracker",
    live: "https://expense-tracker-omega-wine.vercel.app/login#",
  },
  {
    title: "Visitor Management System",
    tag: "Full Stack",
    desc: "A comprehensive full-stack VMS for IIIT Nagpur with four distinct roles (Visitor, Host, Guard, Admin), automated QR code generation, email notifications, multi-day pass support, blacklist management, and a PWA-ready mobile-first UI.",
    features: [
      "Role-based access control with multi-stage approval: pending → approved → checked-in → completed",
      "HTML5 QR scanner for gate check-in/out with gate-specific logs and blacklist enforcement",
      "Bulk CSV visitor upload, Google OAuth, PWA support, and dark mode"
    ],
    stack: ["React", "TypeScript", "Vite", "Express.js", "Node.js", "Prisma", "PostgreSQL", "Cloudinary", "Tailwind CSS", "Zustand", "Resend", "JWT", "PWA", "React Router"],
    github: "https://github.com/ram02krishna/Visitor-Management-System",
    live: "https://visitor-management-system-xi.vercel.app/#",
  },
  {
    title: "Orbix",
    tag: "Full Stack",
    desc: "A production-grade real-time chat app with Socket.io messaging, WebRTC peer-to-peer audio/video calls, group chat management, rich media sharing via Cloudinary, deterministic email encryption, and Redis-backed email verification.",
    features: [
      "Real-time messaging with typing indicators, online presence, and Socket.io Pub/Sub via Redis",
      "Crystal-clear peer-to-peer audio & video calls powered by WebRTC",
      "Argon2 password hashing, rate limiting, Helmet security, and deterministic email encryption"
    ],
    stack: ["Next.js 15", "React 19", "Socket.io", "WebRTC", "Prisma", "PostgreSQL", "Redis", "Cloudinary", "Zustand", "Tailwind CSS", "Express.js", "Resend"],
    github: "https://github.com/ram02krishna/Orbix---Connect-Beyond-Boundaries",
    live: "https://orbix-connect-beyond-boundaries.vercel.app/",
  },
  {
    title: "nanoURL",
    tag: "Full Stack",
    desc: "A sleek, full-stack URL shortening platform built for speed and security — offering deep click analytics (IP, browser, OS, device), password-protected & expiring links, QR code generation, anonymous free-tier shortening, and OTP email verification.",
    features: [
      "Deep click analytics: IP address, browser, OS, and device type per redirect",
      "Password-protected links with custom expiration dates and instant QR code download",
      "Dockerized deployment with Zod-powered centralized validation and Drizzle ORM"
    ],
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Docker", "Tailwind CSS", "JWT", "Zod", "Vite", "Resend"],
    github: "https://github.com/ram02krishna/URL_Shortener",
    live: "https://url-shortener-lac-five.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// projects</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Selected <span className="text-gradient">work</span>
          </h2>
        </div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((p, i) => {
            const MAX_STACKS = 4;
            const visibleStacks = p.stack.slice(0, MAX_STACKS);
            const extraStacks = p.stack.slice(MAX_STACKS);

            return (
              <motion.article
                variants={item}
                key={p.title}
                className="h-full"
              >
                <div className="glass gradient-border relative flex h-full flex-col rounded-3xl p-6 shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-violet)]">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1} · {p.tag}</span>
                    <div className="flex gap-2 opacity-100">
                      {p.github && (
                        <a href={p.github} aria-label="GitHub" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors duration-200 hover:bg-[color:var(--brand-cyan)]/20 hover:text-[color:var(--brand-cyan)]">
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} aria-label="Live" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors duration-200 hover:bg-[color:var(--brand-violet)]/20 hover:text-[color:var(--brand-violet)]">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  
                  <ul className="mt-4 mb-4 flex-1 space-y-2 text-sm text-muted-foreground">
                    {p.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-cyan)] opacity-70" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {visibleStacks.map((s) => (
                      <span key={s} className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        {s}
                      </span>
                    ))}
                    {extraStacks.length > 0 && (
                      <span
                        title={extraStacks.join(", ")}
                        className="cursor-help rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide"
                        style={{ color: "var(--brand-violet)" }}
                      >
                        +{extraStacks.length}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
                    <span className="text-muted-foreground">View Details</span>
                    <a href={p.live ?? "#"} aria-label="Open project" className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/60 transition-colors duration-200 hover:bg-[color:var(--brand-cyan)]/20 hover:text-[color:var(--brand-cyan)]">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="reveal mt-16 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="glass h-12 gap-2 rounded-full px-8 text-sm font-medium"
          >
            <a
              href="https://github.com/ram02krishna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>View all on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
