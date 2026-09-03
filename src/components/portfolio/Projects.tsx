import { ExternalLink, Github } from "lucide-react";
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
    title: "IIIT Nagpur VMS",
    tag: "Full Stack",
    desc: "A unified campus access & security management system for IIIT Nagpur featuring 6-role RBAC, 10-floor hostel census tracking, 09:30 PM curfew pass enforcement, optical gate QR verification, and live campus telemetry.",
    features: [
      "Interactive 10-floor hostel census matrix tracking 400+ residents with automated 09:30 PM curfew strikes",
      "Dual-checkpoint optical QR scanner (Main & Hostel Gate), walk-in kiosk with webcam badges, & vehicle lookup",
      "Live campus capacity telemetry (1,000 safe limit), overstay security radar with escort dispatch, & SOS beacon"
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Zustand", "Resend", "Cloudinary", "HTML5 QR", "PWA", "Vite"],
    github: "https://github.com/ram02krishna/Visitor-Management-System",
    live: "https://visitor-management-system-xi.vercel.app/#",
  },
  {
    title: "QuickConnect",
    tag: "Full Stack",
    desc: "An enterprise-grade real-time communication platform featuring 1-on-1 & group chats with sub-millisecond delivery, peer-to-peer WebRTC HD audio/video calling, virtualized message lists, and Upstash Redis presence tracking.",
    features: [
      "Sub-millisecond messaging via Socket.io with delivery/read receipts, typing indicators, & virtualized scrolling (react-virtuoso)",
      "Crystal-clear WebRTC audio/video mesh calls with group signaling, floating Picture-in-Picture (PiP), & screen sharing",
      "Voice notes with interactive audio waveforms & playback speed (1x/1.5x/2x), direct Cloudinary uploads, & Argon2id auth"
    ],
    stack: ["Next.js 15", "React 19", "Socket.io", "WebRTC", "Express.js", "Prisma", "PostgreSQL", "Upstash Redis", "Tailwind CSS v4", "Zustand", "TanStack Query", "Argon2id", "Resend", "Cloudinary"],
    github: "https://github.com/ram02krishna/QuickConnect",
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
    <section id="projects" className="relative px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-8 text-center">
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

        <div className="reveal mt-10 flex justify-center">
          <a
            href="https://github.com/ram02krishna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-secondary/30 px-8 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-[color:var(--brand-cyan)]/50 hover:bg-secondary/60 hover:text-foreground hover:shadow-[var(--shadow-glow)]"
          >
            <Github className="h-4 w-4" />
            <span>View all on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
