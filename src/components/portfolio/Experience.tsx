import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// journey</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Where I am <span className="text-gradient">right now</span>
          </h2>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass gradient-border rounded-[2.5rem] p-6 sm:p-10 relative z-10 overflow-hidden text-center shadow-[var(--shadow-glow)]">
              <div className="flex justify-center mb-6">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur-sm"
                  style={{ color: "var(--brand-violet)" }}
                >
                  <Sparkles className="h-4 w-4" /> Present
                </span>
              </div>

              <h3 className="text-2xl font-bold sm:text-3xl text-foreground/90">Open to SDE, Backend & Full Stack Roles</h3>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground mx-auto max-w-2xl">
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
