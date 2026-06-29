import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  extra: number;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Expense Tracker",
    tag: "Full Stack",
    desc: "A professional full-stack finance manager with React 19 and Node.js. Features real-time analytics, automated categorization, and budget insights.",
    stack: ["React", "Node.js", "Express.js", "MongoDB","cloudinary"],
    extra: 5,
    github: "https://github.com/ram02krishna/Expense_Tracker",
    live: "https://expense-tracker-omega-wine.vercel.app/login#",
  },
  {
    title: "Visitor Management System",
    tag: "Full Stack",
    desc: "A comprehensive visitor tracking platform featuring real-time updates, QR-based check-ins, and automated multi-channel notifications.",
    stack: ["React", "TypeScript","PostgreSQL", "Supabase","EmailJS"],
    extra: 4,
    github: "https://github.com/ram02krishna/Visitor-Management-System",
    live: "https://visitor-management-system-xi.vercel.app/#",
  },
  {
    title: "Orbix",
    tag: "Full Stack",
    desc: "A full-stack, real-time chat application featuring audio/video calls via WebRTC, real-time messaging using Socket.io, and secure JWT authentication.",
    stack: ["Next.js", "React", "Socket.io", "Prisma"],
    extra: 4,
    github: "https://github.com/ram02krishna/ChatApplication",
    live: "#",
  },
  {
    title: "Shortify",
    tag: "Full Stack",
    desc: "A high-performance URL shortening platform featuring custom slugs, click analytics, and a sleek dashboard built for marketers and creators.",
    stack: ["React","Node.js"," Express.js", " Docker", "Drizzle ORM", "PostgreSQL","Supabase"],
    extra: 5,
    github: "https://github.com/ram02krishna/URL_Shortener",
    live: "https://url-shortener-lac-five.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// projects</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Selected <span className="text-gradient">work</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal glass gradient-border group relative flex flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow-violet)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1} · {p.tag}</span>
                <div className="flex gap-2 opacity-100 md:opacity-0 transition-opacity md:group-hover:opacity-100">
                  {p.github && (
                    <a href={p.github} aria-label="GitHub" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary hover:bg-secondary/70">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} aria-label="Live" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary hover:bg-secondary/70">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gradient">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {s}
                  </span>
                ))}
                <span className="rounded-full border border-border bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide" style={{ color: "var(--brand-violet)" }}>
                  +{p.extra}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs">
                <span className="text-muted-foreground">Case Study</span>
                <a href={p.live ?? "#"} aria-label="Open case study" className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/60 transition-colors hover:bg-[color:var(--brand-violet)]/30">
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="glass group h-12 gap-2 rounded-full px-8 text-sm font-medium transition-all hover:border-[color:var(--brand-violet)] hover:bg-[color:var(--brand-violet)]/10"
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
