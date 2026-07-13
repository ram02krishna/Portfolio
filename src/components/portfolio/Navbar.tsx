import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#platforms", label: "Platforms" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav className={`bg-background border border-border flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "shadow-lg" : ""}`}>
          <a href="#hero" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "var(--gradient-brand)" }}>
              <Code2 className="h-4 w-4 text-background" />
            </span>
            <span className="text-gradient">Ram.dev</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${activeSection === l.href.substring(1) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {l.label}
                  <span className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[color:var(--brand-cyan)] transition-transform duration-200 ${activeSection === l.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="bg-secondary/50 border border-border inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-background border border-border mt-2 rounded-2xl p-3 md:hidden overflow-hidden origin-top"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-sm transition-colors duration-200 ${activeSection === l.href.substring(1) ? "text-foreground bg-secondary/50 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"}`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
