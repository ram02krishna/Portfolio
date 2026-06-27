import { useEffect, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = ["Backend Developer", "Full Stack Developer", "Software Developer", "Problem Solver"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((idx + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground reveal">
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
          Available for freelance & full-time roles
        </div>

        <h1 className="reveal font-display text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block text-foreground/90">Hi, I'm</span>
          <span className="text-gradient">Ram Krishna</span>
        </h1>

        <p className="reveal mx-auto mt-6 font-mono text-base text-muted-foreground sm:text-lg">
          <span className="text-[color:var(--brand-cyan)]">&gt;</span>{" "}
          <span className="cursor-blink">{text}</span>
        </p>

        <p className="reveal mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I architect resilient backends and craft full-stack experiences — turning complex problems into clean, scalable systems.
        </p>

        {/* Terminal-style code window */}
        <div className="reveal mx-auto mt-10 max-w-2xl text-left">
          <div className="glass overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-glow)]">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="truncate font-mono text-[10px] text-muted-foreground sm:text-xs">~/Ram_Krishna/portfolio</span>
              <span className="w-10 sm:w-12" />
            </div>
            {/* Code body */}
            <pre className="overflow-x-auto bg-secondary/20 p-4 font-mono text-[11px] leading-6 sm:p-5 sm:text-sm sm:leading-7">
              <code>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">01</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>name</span> <span className="text-muted-foreground">=</span> <span style={{ color: "var(--code-string)" }}>"Ram Krishna"</span>;</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">02</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>intern</span> <span className="text-muted-foreground">=</span> <span style={{ color: "var(--code-string)" }}>"Not yet"</span>;</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">03</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>role</span> <span className="text-muted-foreground">=</span> <span style={{ color: "var(--code-string)" }}>"Backend & Full Stack Developer"</span>;</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">04</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>ratings</span> <span className="text-muted-foreground">=</span> {"{ "}<span style={{ color: "var(--code-property)" }}>cf</span>: <span style={{ color: "var(--code-number)" }}>731</span>, <span style={{ color: "var(--code-property)" }}>lc</span>: <span style={{ color: "var(--code-number)" }}>1657</span>, <span style={{ color: "var(--code-property)" }}>cc</span>: <span style={{ color: "var(--code-number)" }}>1385</span> {"}"};</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">05</span><span style={{ color: "var(--code-comment)", fontStyle: "italic" }}>// Ready to build something extraordinary.</span></div>
              </code>
            </pre>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="group rounded-full px-6 text-base shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-brand)", color: "var(--primary-foreground)" }}>
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="glass rounded-full border-white/10 px-6 text-base">
            <a href="#contact">
              <Mail className="mr-1 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>

        <a
          href="#about"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 hover:text-foreground"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-[color:var(--brand-cyan)]" />
          </div>
        </a>
      </div>
    </section>
  );
}
