import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) setVisible(false);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const { ref, visible } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/** Soft pill label used above every section heading. */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase",
        tone === "dark"
          ? "bg-primary/10 text-primary ring-1 ring-primary/20"
          : "bg-cream/10 text-aqua ring-1 ring-aqua/25",
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

/** Organic wave divider between light and dark bands. */
export function CurveDivider({ flip = false, className }: { flip?: boolean; className?: string }) {
  return (
    <div className={cn("pointer-events-none w-full overflow-hidden leading-[0]", className)}>
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={cn("h-[64px] w-full sm:h-[110px]", flip && "rotate-180")}
      >
        <path
          d="M0,130 L0,58 C240,10 420,104 700,72 C960,42 1180,-8 1440,34 L1440,130 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/** Concentric signal rings used as ambient decoration. */
export function NetworkPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        {[70, 130, 190, 250, 310].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} />
        ))}
        <path d="M300 0 L300 600M0 300 L600 300M60 60 L540 540M540 60 L60 540" opacity="0.4" />
      </g>
      <g fill="currentColor">
        {[
          [300, 110],
          [430, 250],
          [190, 360],
          [380, 430],
          [140, 210],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
        ))}
      </g>
    </svg>
  );
}

/** Animated live signal bars. */
export function SignalBars({ className }: { className?: string }) {
  const heights = ["h-2", "h-4", "h-6", "h-3", "h-5"];
  return (
    <span className={cn("flex h-6 items-end gap-1", className)}>
      {heights.map((h, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 140}ms` }}
          className={cn("w-1.5 origin-bottom rounded-full bg-aqua animate-bars", h)}
        />
      ))}
    </span>
  );
}
