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
    desc: "A full-stack finance manager built with React and Node.js. It helps users track their expenses, manage budgets, and view basic analytics.",
    features: [
      "Visual analytics and charts for tracking spending habits",
      "Secure user authentication with JWT",
      "Responsive dashboard for managing income and expenses"
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "TypeScript", "Tailwind CSS", "Redux", "JWT", "Axios"],
    github: "https://github.com/ram02krishna/Expense_Tracker",
    live: "https://expense-tracker-omega-wine.vercel.app/login#",
  },
  {
    title: "Visitor Management System",
    tag: "Full Stack",
    desc: "A full-stack web application to manage visitor access with real-time updates, role-based access control, automated QR check-ins, and email notifications.",
    features: [
      "Role-based access control (Admin, Guard, Host, Visitor)",
      "Automated QR code generation and HTML5 scanning for check-ins",
      "Real-time dashboard updates via Supabase and EmailJS notifications"
    ],
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Zustand", "EmailJS", "Radix UI", "PWA", "Vite", "React Router"],
    github: "https://github.com/ram02krishna/Visitor-Management-System",
    live: "https://visitor-management-system-xi.vercel.app/#",
  },
  {
    title: "Orbix",
    tag: "Full Stack",
    desc: "A highly sophisticated real-time chat application featuring secure authentication, rich media sharing, peer-to-peer calling, and interactive statuses.",
    features: [
      "Real-time messaging with Socket.io and media sharing via Cloudinary",
      "Crystal-clear peer-to-peer audio and video calling powered by WebRTC",
      "Secure JWT authentication with Argon2 and granular group permissions"
    ],
    stack: ["Next.js 15", "React 19", "Socket.io", "WebRTC", "Prisma", "PostgreSQL", "Redis", "Zustand", "Tailwind CSS", "Express.js"],
    github: "https://github.com/ram02krishna/Orbix---Connect-Beyond-Boundaries",
    live: "https://orbix-connect-beyond-boundaries.vercel.app/",
  },
  {
    title: "Shortify",
    tag: "Full Stack",
    desc: "A sleek, full-stack URL shortening platform built for speed and security, offering detailed analytics, password-protection, and OTP verification.",
    features: [
      "Detailed click analytics (IP, browser info, OS, and device types)",
      "Secure links with custom expiration dates and password protection",
      "Lightning-fast redirection powered by PostgreSQL and Drizzle ORM"
    ],
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Docker", "Tailwind CSS", "JWT", "Zod", "Vite"],
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
                <div className="glass gradient-border group relative flex h-full flex-col rounded-3xl p-6 hover-card-effect">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-[color:var(--brand-violet)]">0{i + 1} · {p.tag}</span>
                    <div className="flex gap-2 opacity-100 md:opacity-0 transition-opacity md:group-hover:opacity-100">
                      {p.github && (
                        <a href={p.github} aria-label="GitHub" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all hover:bg-[color:var(--brand-violet)]/20 hover:text-[color:var(--brand-violet)] hover:scale-110">
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} aria-label="Live" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-all hover:bg-[color:var(--brand-violet)]/20 hover:text-[color:var(--brand-violet)] hover:scale-110">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gradient">{p.title}</h3>
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
                    <a href={p.live ?? "#"} aria-label="Open project" className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/60 transition-colors hover:bg-[color:var(--brand-violet)]/30">
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
            className="glass group h-12 gap-2 rounded-full px-8 text-sm font-medium transition-all duration-300 hover:border-[color:var(--brand-violet)] hover:bg-[color:var(--brand-violet)]/10 hover:shadow-[var(--shadow-glow-violet)] hover:-translate-y-1"
          >
            <a
              href="https://github.com/ram02krishna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>View all on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
