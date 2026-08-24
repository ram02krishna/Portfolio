import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Fewer particles for smoother frame rate
      const count = Math.min(30, Math.floor((w * h) / 50000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.2 + 0.4,
      }));
    };

    const LINK_DIST = 110;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;

    // Batched gradient stops — reuse a single gradient descriptor
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Update + draw particles in one loop
      ctx.fillStyle = "rgba(120, 220, 255, 0.5)";
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Batch all link lines into a single path per alpha bucket ──
      // Group by rounded alpha to minimise strokeStyle changes
      ctx.lineWidth = 0.5;

      // Single-pass: accumulate path, set one strokeStyle per draw
      ctx.beginPath();
      ctx.strokeStyle = "rgba(160, 130, 255, 0.12)";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST_SQ) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 250);
    };
    window.addEventListener("resize", onResize, { passive: true });

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      {/* Orbs use CSS animation (compositor-only, no JS cost) */}
      <div
        className="absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.16 200 / 0.3), transparent 60%)",
          animation: "float-orb 22s ease-in-out infinite",
          willChange: "transform",
          contain: "strict",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.16 200 / 0.4), transparent 60%)",
          animation: "float-orb 16s ease-in-out infinite",
          willChange: "transform",
          contain: "strict",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.22 305 / 0.4), transparent 60%)",
          animation: "float-orb 20s ease-in-out infinite reverse",
          willChange: "transform",
          contain: "strict",
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-50"
        style={{ willChange: "contents" }}
      />
    </div>
  );
}
