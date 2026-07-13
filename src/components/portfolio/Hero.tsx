import { useEffect, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

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
          Looking for new opportunities
        </div>

        <h1 className="reveal font-display text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          <span className="block text-foreground/90">Hi, I'm</span>
          <span className="text-gradient">Ram Krishna</span>
        </h1>

        <p className="reveal mx-auto mt-6 font-mono text-base text-muted-foreground sm:text-lg">
          <span className="text-[color:var(--brand-cyan)]">&gt;</span>{" "}
          <span className="cursor-blink">{text}</span>
        </p>

        <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm a developer who loves building web applications. I focus on creating clean, practical, and user-friendly software.
        </p>

        <div className="reveal mx-auto mt-10 max-w-2xl text-left">
          <div className="glass overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-glow)]">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-border/50 bg-secondary/80 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-sm" />
              </div>
              <span className="flex-1 text-center font-mono text-[11px] font-medium text-muted-foreground/80 sm:text-xs">
                ~/portfolio — node (zsh)
              </span>
              <div className="w-[52px]" /> {/* Spacer for balance */}
            </div>
            {/* Code body */}
            <pre className="overflow-x-auto bg-secondary/20 p-4 font-mono text-[11px] leading-6 sm:p-5 sm:text-sm sm:leading-7">
              <code>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">01</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>name</span> <span className="text-muted-foreground">=</span> <span style={{ color: "var(--code-string)" }}>"Ram Krishna"</span>;</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">02</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>role</span> <span className="text-muted-foreground">=</span> <span style={{ color: "var(--code-string)" }}>"Backend & Full Stack Developer"</span>;</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">03</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>status</span> <span className="text-muted-foreground">=</span> <span style={{ color: "var(--code-string)" }}>"Writing code & building projects"</span>;</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">04</span><span><span style={{ color: "var(--code-keyword)" }}>const</span> <span style={{ color: "var(--code-variable)" }}>ratings</span> <span className="text-muted-foreground">=</span> {"{ "}<span style={{ color: "var(--code-property)" }}>codeforces</span>: <span style={{ color: "var(--code-number)" }}>1197</span>, <span style={{ color: "var(--code-property)" }}>leetcode</span>: <span style={{ color: "var(--code-number)" }}>1657</span> {"}"};</span></div>
                <div className="flex gap-3 sm:gap-4"><span className="select-none text-muted-foreground/50">05</span><span style={{ color: "var(--code-comment)", fontStyle: "italic" }}>// Ready to join a great team.</span></div>
              </code>
            </pre>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="group relative animate-gradient-flow rounded-full px-8 text-base shadow-[var(--shadow-glow)] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-glow-violet)]" style={{ background: "var(--gradient-brand)", color: "var(--primary-foreground)" }}>
            <a href="#projects">
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay" />
              <span className="relative z-10 flex items-center font-medium">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="glass rounded-full border-border/50 bg-secondary/30 px-8 text-base transition-all duration-300 hover:scale-[1.03] hover:bg-secondary/50 hover:border-[color:var(--brand-cyan)]/40 hover:shadow-[var(--shadow-glow)]">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4 transition-colors duration-300 hover:text-[color:var(--brand-cyan)]" /> 
              Contact Me
            </a>
          </Button>
        </div>

        <a
          href="#about"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-[color:var(--brand-cyan)]" />
          </div>
        </a>
      </div>
    </section>
  );
}
