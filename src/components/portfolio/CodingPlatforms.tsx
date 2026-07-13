import React, { useEffect, useState } from "react";
import { Terminal, Code, Github, ArrowUpRight } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { format } from "date-fns";

const getTooltipText = (activity: any) => {
  const count = activity.count;
  const dateText = format(new Date(activity.date), "MMMM do");
  if (count === 0) return `No contributions on ${dateText}.`;
  return `${count} contribution${count === 1 ? "" : "s"} on ${dateText}.`;
};

const platforms = [
  {
    name: "Codeforces",
    handle: "ramkrishna",
    rating: "1197",
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
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const observer = new MutationObserver(() => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="platforms" className="relative px-4 py-12 sm:py-20">
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

        <div className="flex flex-wrap justify-center gap-5">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass gradient-border group relative flex w-full sm:w-[calc(50%-10px)] lg:w-[320px] items-center gap-4 rounded-2xl p-5 transition-all duration-300 shadow-[var(--shadow-glow)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow-violet)]"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/40 transition-colors duration-200 group-hover:border-[color:var(--brand-cyan)]/40 group-hover:bg-secondary/60"
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
                <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                  View Profile
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Calendar */}
        <div className="reveal mt-16 flex flex-col items-center">
          <h3 className="mb-6 font-display text-xl font-semibold">
            GitHub <span className="text-gradient">Contributions.</span>
          </h3>
          <div className="flex w-full max-w-[1050px] flex-col gap-6 lg:flex-row">
            <div className="glass custom-scrollbar flex-1 overflow-x-auto rounded-2xl p-6 shadow-[var(--shadow-glow)] md:p-8">
              <div className="flex min-w-[750px] justify-center">
                <GitHubCalendar 
                  username="ram02krishna" 
                  colorScheme={theme}
                  theme={{
                    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  year={selectedYear}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                  tooltips={{
                    activity: {
                      text: (activity) => getTooltipText(activity),
                    },
                  }}
                />
              </div>
            </div>
            
            <div className="flex flex-row gap-2 lg:w-32 lg:flex-col">
              {(["last", 2026, 2025, 2024] as const).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    selectedYear === year
                      ? theme === "dark" 
                        ? "bg-[#1f6feb] text-white" 
                        : "bg-[#0969da] text-white"
                      : "text-muted-foreground"
                  }`}
                >
                  {year === "last" ? "Last Year" : year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
