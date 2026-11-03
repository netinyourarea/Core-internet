import { PHONE, PHONE_HREF } from "@/lib/contact";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Internet Help", to: "/internet" },
  { label: "TV & Mobile", to: "/tv-mobile" },
  { label: "Business", to: "/business" },
  { label: "Contact", to: "/contact" },
] as const;

/** Concept A mark: interlocking "C" arcs with a signal dot, drawn as SVG so it works on any background. */
export function LogoMark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const back = tone === "light" ? "#c4b5fd" : "#5b21b6";
  const front = tone === "light" ? "#ffffff" : "#1b1033";
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Core Internet logo" className={className}>
      <path
        d="M37.3 16.7A16 16 0 1 0 37.3 39.3"
        fill="none"
        stroke={back}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M40 8A20 20 0 0 1 56 24"
        fill="none"
        stroke={back}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M47.9 30.1A14 14 0 1 0 47.9 49.9"
        fill="none"
        stroke={front}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle
        cx="25"
        cy="40"
        r="5"
        fill="#a78bfa"
        stroke={tone === "light" ? "#1b1033" : "#fff"}
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className="group flex shrink-0 items-center gap-2.5"
      aria-label="Core Internet home"
    >
      <LogoMark
        tone={tone}
        className="size-11 transition-transform duration-500 group-hover:-rotate-12"
      />
      <span className="font-display leading-[1.05] font-extrabold tracking-tight">
        <span className={cn("block text-[17px]", tone === "light" ? "text-aqua" : "text-primary")}>
          Core
        </span>
        <span className={cn("block text-[15px]", tone === "light" ? "text-white" : "text-ink")}>
          Internet
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <header
        className={cn(
          "mx-auto max-w-6xl rounded-full border border-border bg-card/80 backdrop-blur-xl transition-all duration-300",
          scrolled ? "shadow-[0_20px_50px_-38px_rgba(10,25,40,0.7)]" : "shadow-none",
        )}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <Logo />

          <nav
            aria-label="Main"
            className="hidden items-center gap-0.5 rounded-full bg-secondary/70 p-1 lg:flex"
          >
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-card text-primary shadow-sm" }}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card/70 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="group hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-primary sm:inline-flex"
            >
              Call {PHONE}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border px-4 pt-3 pb-4 lg:hidden">
            <nav className="grid gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "bg-secondary text-primary" }}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-secondary hover:text-primary"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <a
              href={PHONE_HREF}
              className="mt-2 block rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-cream"
            >
              Call {PHONE}
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
