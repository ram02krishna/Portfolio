import { Mail } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// contact</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl font-display">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div className="reveal glass gradient-border mx-auto max-w-3xl flex flex-col items-center justify-center rounded-3xl p-8 text-center sm:p-10">
          <h3 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
            Get In Touch
          </h3>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm currently looking for new opportunities. <br className="hidden sm:block" />
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-lg font-medium text-foreground">
            <Mail className="h-5 w-5 text-[color:var(--brand-cyan)]" />
            <a href="mailto:krishnarammhd@gmail.com" className="hover:text-[color:var(--brand-cyan)] transition-colors">
              krishnarammhd@gmail.com
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
            <a
              href="mailto:krishnarammhd@gmail.com"
              className="glass gradient-border group flex flex-col items-center gap-4 rounded-2xl p-6 hover-card-effect"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)] transition-transform group-hover:scale-110">
                <Mail className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground transition-colors group-hover:text-[color:var(--brand-cyan)]">Email Me</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/ram-krishna-419528287/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass gradient-border group flex flex-col items-center gap-4 rounded-2xl p-6 hover-card-effect"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-violet)]/10 text-[color:var(--brand-violet)] transition-transform group-hover:scale-110">
                <FaLinkedin className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground transition-colors group-hover:text-[color:var(--brand-violet)]">LinkedIn</span>
            </a>
            
            <a
              href="https://x.com/krishnarammhd"
              target="_blank"
              rel="noopener noreferrer"
              className="glass gradient-border group flex flex-col items-center gap-4 rounded-2xl p-6 hover-card-effect"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
                <FaXTwitter className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground transition-colors group-hover:text-foreground/80">X (Twitter)</span>
            </a>
            
            <a
              href="https://github.com/ram02krishna"
              target="_blank"
              rel="noopener noreferrer"
              className="glass gradient-border group flex flex-col items-center gap-4 rounded-2xl p-6 hover-card-effect"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-transform group-hover:scale-110">
                <FaGithub className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground transition-colors group-hover:text-foreground/80">GitHub</span>
            </a>
          </div>

          <div className="mt-4 flex w-full justify-center">
             <a
              href="https://leetcode.com/u/ram_02krishna/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass gradient-border group flex flex-col items-center gap-4 rounded-2xl p-6 hover-card-effect sm:w-1/2 lg:w-1/4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffa116]/10 text-[#ffa116] transition-transform group-hover:scale-110">
                <SiLeetcode className="h-6 w-6" />
              </div>
              <span className="font-medium text-foreground transition-colors group-hover:text-[#ffa116]">LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
