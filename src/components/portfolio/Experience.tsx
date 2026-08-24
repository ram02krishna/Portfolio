import { Sparkles, Terminal, Server, GitBranch, Cloud, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  { icon: Server, label: "Backend APIs", color: "var(--brand-cyan)" },
  { icon: Cloud, label: "Cloud & AWS", color: "var(--brand-violet)" },
  { icon: GitBranch, label: "CI/CD Pipelines", color: "var(--brand-pink)" },
  { icon: Terminal, label: "Linux & Shell", color: "var(--brand-cyan)" },
  { icon: Cpu, label: "Docker & K8s", color: "var(--brand-violet)" },
  { icon: Zap, label: "Automation", color: "var(--brand-pink)" },
];

const terminalLines = [
  { prefix: "$", text: "whoami", type: "cmd" },
  { text: "ram_krishna  →  backend & devops engineer", type: "out" },
  { prefix: "$", text: "cat current_status.txt", type: "cmd" },
  { text: "✔  actively seeking full-time roles", type: "out-green" },
  { text: "✔  building devops side-projects", type: "out-green" },
  { text: "✔  learning k8s & infra-as-code", type: "out-green" },
  { prefix: "$", text: "echo $AVAILABLE", type: "cmd" },
  { text: "true  —  open to remote & hybrid", type: "out" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="reveal mb-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// journey</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Where I am{" "}
            <span className="text-gradient">right now</span>
          </h2>
        </div>

        {/* Main Card — two-column on md+ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass gradient-border rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-glow)]"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* ── Left Panel ── */}
            <div className="flex flex-col justify-center gap-6 p-6 sm:p-10 border-b md:border-b-0 md:border-r border-border/40">
              {/* Status pill */}
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-sm" style={{ color: "var(--brand-violet)" }}>
                <Sparkles className="h-3.5 w-3.5" />
                Present · Available
              </span>

              {/* Headline */}
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl text-foreground/90 leading-snug">
                  Open to Backend &{" "}
                  <span className="text-gradient">DevOps Roles</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  I've been sharpening my skills in backend engineering and DevOps — from writing scalable APIs to containerising services and automating deployments. I love the whole pipeline: code → test → ship → monitor.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Looking for a team where I can own real infrastructure challenges, learn from experienced engineers, and ship things that actually matter.
                </p>
              </div>

              {/* Focus chips */}
              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">Current focus areas</p>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map(({ icon: Icon, label, color }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all duration-200 hover:border-opacity-80 hover:bg-secondary/60"
                    >
                      <Icon className="h-3 w-3" style={{ color }} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Panel — Terminal ── */}
            <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 bg-secondary/10">

              {/* Terminal as one unified card */}
              <div className="rounded-2xl border border-border/40 overflow-hidden shadow-[var(--shadow-glow)]">
                {/* Title bar — sits directly on top of the body */}
                <div className="flex items-center justify-between border-b border-border/50 bg-secondary/80 px-5 py-3 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-sm" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-sm" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-sm" />
                  </div>
                  <span className="flex-1 text-center font-mono text-[11px] font-medium text-muted-foreground/80 sm:text-xs">
                    ~  bash  — status check
                  </span>
                  <div className="w-[52px]" />
                </div>

                {/* Terminal body — directly below title bar, no gap */}
                <div className="bg-secondary/40 dark:bg-black/40 p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-6 overflow-x-auto">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-1"
                  >
                    {terminalLines.map((line, i) => (
                      <motion.div key={i} variants={lineVariants} className="flex gap-2 whitespace-nowrap">
                        {line.prefix && (
                          <span style={{ color: "var(--brand-cyan)" }}>{line.prefix}</span>
                        )}
                        {line.type === "cmd" && (
                          <span className="text-foreground/90">{line.text}</span>
                        )}
                        {line.type === "out" && (
                          <span className="text-muted-foreground pl-3">{line.text}</span>
                        )}
                        {line.type === "out-green" && (
                          <span className="pl-3" style={{ color: "#28c840" }}>{line.text}</span>
                        )}
                      </motion.div>
                    ))}

                    {/* blinking cursor */}
                    <motion.div variants={lineVariants} className="flex items-center gap-2 mt-1">
                      <span style={{ color: "var(--brand-cyan)" }}>$</span>
                      <span className="cursor-blink text-foreground/60" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-background animate-gradient-flow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Zap className="h-4 w-4" />
                Let's work together
              </a>
            </div>{/* end right panel */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
