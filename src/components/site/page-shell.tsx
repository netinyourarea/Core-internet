import { PHONE_HREF } from "@/lib/contact";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Eyebrow, Reveal, NetworkPattern } from "./primitives";
import { DISCLAIMER_TEXT } from "./footer";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="px-3 pt-4 sm:px-5">
      <div className="tide-bg shape-a relative isolate overflow-hidden text-cream">
        <NetworkPattern className="text-aqua/40" />
        <div
          className={`relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 lg:py-24 ${image ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}
        >
          <div>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">{intro}</p>
          </div>
          {image && (
            <img
              src={image}
              alt=""
              aria-hidden
              className="h-64 w-full rounded-[0.75rem_3.5rem_0.75rem_3.5rem] object-cover ring-1 ring-white/20 lg:h-80"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="soft-card space-y-6 p-7 text-sm leading-relaxed text-foreground/80 sm:p-10 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:mb-2 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function DisclaimerBlock() {
  return (
    <div className="rounded-2xl bg-primary/6 p-5 text-xs leading-relaxed text-foreground/70 ring-1 ring-primary/15">
      <strong className="block text-foreground">Independent service disclaimer</strong>
      <span className="mt-2 block">{DISCLAIMER_TEXT}</span>
    </div>
  );
}

export function CtaStrip() {
  return (
    <section className="px-3 pb-20 sm:px-5">
      <div className="mx-auto max-w-5xl">
        <Reveal className="tide-bg relative isolate flex flex-col items-center gap-6 overflow-hidden shape-b p-10 text-center text-cream sm:p-14">
          <NetworkPattern className="text-aqua/30" />
          <h2 className="relative font-display text-3xl font-extrabold sm:text-4xl">
            Questions about internet or cable TV?
          </h2>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <Link
              to="/internet"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-aqua"
            >
              Internet guidance
            </Link>
            <a
              href={PHONE_HREF}
              className="rounded-full px-8 py-3.5 text-sm font-bold text-cream ring-1 ring-cream/25 transition-colors hover:bg-cream/10"
            >
              Talk to an Advisor
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { icon: React.ComponentType<{ className?: string }>; title: string; copy: string }[];
}) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 70} className="soft-card lift p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
