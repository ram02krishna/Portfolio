import React, { useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import { motion } from "framer-motion";
import {
  SiReact, SiTailwindcss, SiFramer,
  SiTypescript, SiJavascript,
  SiNextdotjs, SiNodedotjs, SiExpress,
  SiSupabase, SiMongodb, SiPostgresql, SiNeon,
  SiGit, SiGithub, SiDocker,
  SiPrisma, SiDrizzle
} from "react-icons/si";

const columns = [
  {
    title: "FRONTEND & UI",
    nodes: [
      { id: "react", label: "React.js", icon: SiReact, color: "#61DAFB" },
      { id: "tailwind", label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { id: "framer", label: "Framer Motion", icon: SiFramer, color: "#0055FF" }
    ]
  },
  {
    title: "LANGUAGES",
    nodes: [
      { id: "ts", label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { id: "js", label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    title: "CORE & BACKEND",
    nodes: [
      { id: "next", label: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" },
      { id: "node", label: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { id: "express", label: "Express.js", icon: SiExpress, color: "var(--foreground)" }
    ]
  },
  {
    title: "ORMs",
    nodes: [
      { id: "prisma", label: "Prisma", icon: SiPrisma, color: "var(--foreground)" },
      { id: "drizzle", label: "Drizzle", icon: SiDrizzle, color: "#C5F74F" }
    ]
  },
  {
    title: "STORAGE & CLOUD",
    nodes: [
      { id: "supabase", label: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { id: "mongo", label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { id: "postgres", label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { id: "neon", label: "Neon", icon: SiNeon, color: "#00E599" }
    ]
  },
  {
    title: "DEVOPS & TOOLS",
    nodes: [
      { id: "git", label: "Git", icon: SiGit, color: "#F05032" },
      { id: "github", label: "GitHub", icon: SiGithub, color: "var(--foreground)" },
      { id: "docker", label: "Docker", icon: SiDocker, color: "#2496ED" }
    ]
  }
];

const connections = [
  { start: "react", end: "ts" },
  { start: "react", end: "js" },
  { start: "tailwind", end: "ts" },
  { start: "tailwind", end: "js" },
  { start: "framer", end: "ts" },
  
  { start: "ts", end: "next" },
  { start: "ts", end: "node" },
  { start: "js", end: "node" },
  
  { start: "next", end: "prisma" },
  { start: "next", end: "drizzle" },
  
  { start: "node", end: "express" },
  { start: "node", end: "prisma" },
  
  { start: "prisma", end: "postgres" },
  { start: "drizzle", end: "postgres" },
  { start: "drizzle", end: "supabase" },
  { start: "drizzle", end: "neon" },
  
  { start: "express", end: "mongo" },
  { start: "express", end: "postgres" },
];

export function Skills() {
  const [mounted, setMounted] = useState(false);
  
  // Re-render arrows when window resizes
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);
    const handleResize = () => {
      setMounted(false);
      setTimeout(() => setMounted(true), 300);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="skills" className="relative px-4 py-12 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)] mb-4">// tools</p>
          <h2 className="text-3xl font-bold sm:text-5xl text-foreground">
            the <span className="text-gradient">Tech Stack</span> I use
          </h2>
        </div>

        {/* Desktop View: Connected Diagram */}
        <div className="hidden lg:block relative w-full overflow-x-auto pb-10">
          <Xwrapper>
            <div className="flex min-w-[1200px] justify-between px-4">
              {columns.map((col, i) => (
                <div key={col.title} className="flex flex-col items-center">
                  <h3 className="mb-12 text-[11px] font-bold tracking-[0.25em] text-muted-foreground uppercase">
                    {col.title}
                  </h3>
                  
                  <div className={`flex flex-col gap-10 ${i % 2 !== 0 ? 'mt-16' : ''}`}>
                    {col.nodes.map((node) => (
                      <div key={node.id} id={node.id} className="relative z-10 w-44">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -4 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="glass gradient-border relative flex w-full items-center gap-4 rounded-xl px-5 py-3.5 shadow-lg group cursor-pointer"
                        >
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <node.icon className="h-5 w-5" style={{ color: node.color }} />
                          </div>
                          <span className="text-sm font-semibold text-foreground/90 transition-colors duration-300 group-hover:text-foreground">{node.label}</span>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {mounted && connections.map((conn, i) => (
              <Xarrow
                key={i}
                start={conn.start}
                end={conn.end}
                color="var(--border)"
                strokeWidth={2}
                path="smooth"
                startAnchor="right"
                endAnchor="left"
                curveness={0.4}
                dashness={{ strokeLen: 4, nonStrokeLen: 4, animation: -1 }}
                showHead={false}
              />
            ))}
          </Xwrapper>
        </div>
        
        {/* Mobile View: Grid Fallback */}
        <div className="lg:hidden grid gap-6 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title} className="glass gradient-border rounded-3xl p-6">
              <h3 className="mb-4 font-mono text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                {col.title}
              </h3>
              <div className="flex flex-col gap-3">
                {col.nodes.map((node) => (
                  <div key={node.id} className="flex items-center gap-3 rounded-xl bg-secondary/30 px-4 py-3">
                    <node.icon className="h-5 w-5" style={{ color: node.color }} />
                    <span className="text-sm font-medium text-foreground">{node.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}