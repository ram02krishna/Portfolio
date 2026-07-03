import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// journey</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Where I am <span className="text-gradient">right now</span>
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div
            className="absolute left-4 top-2 h-full w-px"
            style={{ background: "linear-gradient(to bottom, var(--brand-violet), transparent)" }}
          />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative pl-12"
          >
            {/* dot */}
            <div
              className="absolute left-4 top-2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-background shadow-[0_0_15px_var(--brand-violet)]"
              style={{ background: "var(--brand-violet)", border: "2px solid var(--background)" }}
            />

            <div className="glass gradient-border group cursor-pointer rounded-2xl p-6 sm:p-8 hover-card-effect relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-sm transition-colors group-hover:border-[color:var(--brand-violet)]/50"
                style={{ color: "var(--brand-violet)" }}
              >
                <Sparkles className="h-3 w-3 transition-transform group-hover:scale-125" /> Present
              </span>

              <h3 className="mt-5 text-2xl font-bold sm:text-3xl text-foreground/90 transition-colors group-hover:text-gradient">Open to SDE, Backend & Full Stack Roles</h3>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I've been spending my time learning modern web development and building projects from scratch. I enjoy working on the whole stack, whether it's setting up the database and API, or styling the frontend to make it look great.
                </p>
                <p>
                  I'm currently looking for a full-time role as a software developer. I'm excited to join a team where I can continue to learn, write good code, and build products that solve real problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
