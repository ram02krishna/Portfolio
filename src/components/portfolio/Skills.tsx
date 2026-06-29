import { Code2, Server, Database, Brain, Wrench, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

type Group = {
  title: string;
  icon: typeof Code2;
  accent: string;
  skills: string[];
};

const groups: Group[] = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "var(--brand-cyan)",
    skills: [
      "HTML5 / CSS3",
      "JavaScript / TypeScript",
      "React / Next.js",
      "Redux",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "var(--brand-violet)",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication(JWT & OAuth)",
      "Bcrypt",
      "Multer",
      "WebSockets",
    ],
  },
  {
    title: "Databases & ORMs",
    icon: Database,
    accent: "var(--brand-pink)",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Prisma ORM",
    ],
  },
  {
    title: "Problem Solving",
    icon: Brain,
    accent: "var(--brand-cyan)",
    skills: [
      "C++",
      "Data Structures & Algorithms",
      "Recursion & Backtracking",
      "Greedy",
      "Sliding Window",
      "Graph",
      "Dynamic Programming",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    accent: "var(--brand-violet)",
    skills: [
      "VS Code",
      "Git & GitHub",
      "Postman",
      "Linux Fundamentals",
      "Docker",
      "Cloudinary",
      "Vercel",
    ],
  },
  {
    title: "Computer Science",
    icon: Cpu,
    accent: "var(--brand-pink)",
    skills: [
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// skills</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            A growing arsenal of technologies, languages, and concepts I use to ship real products.
          </p>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={item}
              className="glass gradient-border group relative rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <g.icon className="h-5 w-5 text-background" />
                </div>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-all hover:scale-105 hover:border-[color:var(--brand-cyan)]/50 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}