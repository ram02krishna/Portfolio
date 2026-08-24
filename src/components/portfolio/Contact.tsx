import { Mail, Phone, Send, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "ram-krishna",
    href: "https://www.linkedin.com/in/ram-krishna-419528287/",
    color: "var(--brand-violet)",
    bg: "oklch(0.7 0.22 305 / 0.12)",
    border: "oklch(0.7 0.22 305 / 0.30)",
  },
  {
    icon: FaXTwitter,
    label: "X (Twitter)",
    handle: "@krishnarammhd",
    href: "https://x.com/krishnarammhd",
    color: "var(--foreground)",
    bg: "oklch(0.5 0.01 260 / 0.10)",
    border: "oklch(0.5 0.01 260 / 0.25)",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "ram02krishna",
    href: "https://github.com/ram02krishna",
    color: "var(--brand-cyan)",
    bg: "oklch(0.82 0.16 200 / 0.08)",
    border: "oklch(0.82 0.16 200 / 0.25)",
  },
];

const direct = [
  {
    icon: Mail,
    label: "Email",
    value: "krishnarammhd@gmail.com",
    href: "mailto:krishnarammhd@gmail.com",
    color: "var(--brand-cyan)",
    bg: "oklch(0.82 0.16 200 / 0.1)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 92440 88448",
    href: "tel:+919244088448",
    color: "var(--brand-pink)",
    bg: "oklch(0.74 0.2 350 / 0.1)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
  }),
};

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="reveal mb-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// contact</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm open to new opportunities and would love to hear from you — whether it's a role, a collaboration, or just a chat.
          </p>
        </div>

        {/* ── Primary CTA card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="reveal glass gradient-border rounded-[2.5rem] p-6 sm:p-10 shadow-[var(--shadow-glow)] mb-6"
        >
          {/* Direct contact row */}
          <div className="grid gap-4 sm:grid-cols-2">
            {direct.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-border/40 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-opacity-80 hover:shadow-[var(--shadow-glow)]"
                style={{ background: bg }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/30"
                  style={{ background: bg }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">{label}</p>
                  <p className="mt-0.5 truncate text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                    {value}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground/70" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border/40" />
            <span className="font-mono text-[11px] text-muted-foreground/50 uppercase tracking-[0.15em]">or find me on</span>
            <div className="h-px flex-1 bg-border/40" />
          </div>

          {/* Social grid */}
          <div className="grid gap-4 sm:grid-cols-3">
            {socials.map(({ icon: Icon, label, handle, href, color, bg, border }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                style={{ background: bg, borderColor: border }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/20 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: bg }}
                >
                  <Icon className="h-6 w-6" style={{ color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/90">{label}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground/70">{handle}</p>
                </div>
                <span className="flex items-center gap-1 rounded-full border border-border/30 px-3 py-1 text-[10px] font-medium text-muted-foreground/60 transition-colors duration-300 group-hover:border-border/60 group-hover:text-foreground/70">
                  View Profile <ArrowUpRight className="h-3 w-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Email CTA button ── */}
        <div className="flex justify-center">
          <a
            href="mailto:krishnarammhd@gmail.com"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-background animate-gradient-flow shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-violet)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Send className="h-4 w-4" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
