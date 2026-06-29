import { Terminal, Code, Github, ArrowUpRight } from "lucide-react";

const platforms = [
  {
    name: "Codeforces",
    handle: "ramkrishna",
    rating: "944",
    icon: Terminal,
    href: "https://codeforces.com/profile/krishnarammhd",
    color: "var(--brand-cyan)",
  },
  {
    name: "LeetCode",
    handle: "ramkrishna",
    rating: "1657",
    icon: Code,
    href: "https://leetcode.com/u/ram_02_Krishna/",
    color: "var(--brand-violet)",
  },
  {
    name: "GitHub",
    handle: "ramkrishna",
    rating: "Active",
    icon: Github,
    href: "https://github.com/ram02krishna",
    color: "var(--brand-cyan)",
  },
];

export function CodingPlatforms() {
  return (
    <section id="platforms" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// competitive</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Coding <span className="text-gradient">Platforms.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Where I sharpen problem-solving skills and put algorithms to the test.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass gradient-border group relative flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/40 transition-colors group-hover:border-[color:var(--brand-cyan)]/30 group-hover:bg-secondary/60"
                style={{ color: p.color }}
              >
                <p.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <span
                    className="font-mono text-xs font-medium"
                    style={{ color: p.color }}
                  >
                    {p.rating}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  View Profile
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
