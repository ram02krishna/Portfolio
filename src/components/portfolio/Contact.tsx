import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// contact</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div className="reveal mx-auto max-w-5xl glass gradient-border rounded-[2.5rem] p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-[var(--shadow-glow)]">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm currently looking for new opportunities. <br className="hidden sm:block" />
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-lg font-medium text-foreground">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[color:var(--brand-cyan)]" />
              <a href="mailto:krishnarammhd@gmail.com" className="transition-colors hover:text-[color:var(--brand-cyan)]">
                krishnarammhd@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[color:var(--brand-cyan)]" />
              <a href="tel:+919244088448" className="transition-colors hover:text-[color:var(--brand-cyan)]">
                +91 92440 88448
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 w-full">
            <a
              href="mailto:krishnarammhd@gmail.com"
              className="glass gradient-border flex w-full sm:w-auto sm:flex-1 flex-col items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)]">
                <Mail className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground">Email Me</span>
            </a>
            
            <a
              href="tel:+919244088448"
              className="glass gradient-border flex w-full sm:w-auto sm:flex-1 flex-col items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-pink)]/10 text-[color:var(--brand-pink)]">
                <Phone className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground">Call Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ram-krishna-419528287/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass gradient-border flex w-full sm:w-auto sm:flex-1 flex-col items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-violet)]/10 text-[color:var(--brand-violet)]">
                <FaLinkedin className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground">LinkedIn</span>
            </a>
            
            <a
              href="https://x.com/krishnarammhd"
              target="_blank"
              rel="noopener noreferrer"
              className="glass gradient-border flex w-full sm:w-auto sm:flex-1 flex-col items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground">
                <FaXTwitter className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground">X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
