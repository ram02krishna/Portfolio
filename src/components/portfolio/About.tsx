import { Github, Linkedin, Twitter, Mail, Download, User } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// about</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            A little bit <span className="text-gradient">about me.</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Portrait card */}
          <motion.div
            className="reveal relative mx-auto w-full max-w-md md:order-last cursor-pointer rounded-[2rem] group"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="glass gradient-border relative aspect-square overflow-hidden rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, oklch(0.20 0.03 260 / 0.9), oklch(0.12 0.015 260))",
              }}
            >
              {/* Profile Image */}
              <div className="flex h-full w-full items-center justify-center relative z-10">
                <img
                  src="/profile.png"
                  alt="Ram Krishna"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <User className="hidden h-40 w-40 text-foreground/15" strokeWidth={1} />
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="reveal">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                Open to SDE, Backend &{" "}
                <span className="text-gradient">DevOps Roles</span>
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
              <p>
                Hi, I'm Ram Krishna. I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering from the Indian Institute of Information Technology, Nagpur (IIIT Nagpur), graduating in 2027.
              </p>
              <p>
                Over the past year, I've spent my time learning and building full-stack web applications. I really enjoy figuring out how things work under the hood, from setting up databases and APIs to making sure the front-end looks great and runs smoothly.
              </p>
              <p>
                I'm currently looking for roles as an SDE, Backend, or DevOps engineer. I'm eager to join a team where I can learn from experienced engineers, write good code, and help ship reliable infrastructure and products.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-background shadow-[var(--shadow-glow-violet)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] animate-gradient-flow"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: "https://github.com/ram02krishna", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ram-krishna-419528287/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/krishnarammhd", label: "Twitter" },
                  { icon: Mail, href: "mailto:krishnarammhd@gmail.com", label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="wave-icon flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
