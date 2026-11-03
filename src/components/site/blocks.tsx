import { Link } from "@tanstack/react-router";
import { useId, useState, type ComponentType, type ReactNode } from "react";
import { AlertTriangle, ArrowUpRight, Check, Info, Minus, Plus, ShieldCheck } from "lucide-react";
import { PHONE, PHONE_HREF, PHONE_LABEL, TRANSPARENCY_STATEMENT } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Eyebrow, NetworkPattern, Reveal } from "./primitives";
import type { Faq } from "@/lib/faqs";

type Icon = ComponentType<{ className?: string }>;

/** Internal link that accepts route paths held in data arrays. */
export function GuideLink({
  to,
  hash,
  className,
  children,
}: {
  to: string;
  hash?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to as never} hash={hash} className={className}>
      {children}
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-5 scroll-mt-28 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {intro && <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

/** Full-width purple banner with the required transparency statement. */
export function TransparencyBanner({ compact = false }: { compact?: boolean }) {
  const points = [
    "Core Internet is an independent assistance resource.",
    "Account and billing requests must go through verified provider channels.",
    "Live outage information should be checked through official provider resources.",
    "Contact details on this website must not be mistaken for an official provider contact.",
  ];
  return (
    <section className="px-3 py-6 sm:px-5" aria-labelledby="transparency-title">
      <div className="tide-bg shape-b relative isolate overflow-hidden text-cream">
        <NetworkPattern className="text-aqua/30" />
        <div
          className={cn(
            "relative mx-auto grid max-w-7xl items-start gap-8 px-6 sm:px-10",
            compact ? "py-10" : "py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20",
          )}
        >
          <Reveal>
            <Eyebrow tone="light">Important information</Eyebrow>
            <h2
              id="transparency-title"
              className="mt-5 font-display text-3xl font-extrabold sm:text-4xl"
            >
              Independent, and clear about it
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85">{TRANSPARENCY_STATEMENT}</p>
          </Reveal>
          {!compact && (
            <ul className="grid gap-3">
              {points.map((t, i) => (
                <Reveal as="li" key={t} delay={i * 60}>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-aqua">
                      <ShieldCheck className="size-4" />
                    </span>
                    <span className="text-sm font-medium">{t}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

/** Readable inline version, e.g. next to contact details. */
export function TransparencyNote({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-primary/8 p-5 text-sm leading-relaxed text-foreground/80 ring-1 ring-primary/20",
        className,
      )}
    >
      <strong className="flex items-center gap-2 text-foreground">
        <Info className="size-4 text-primary" /> Independent information resource
      </strong>
      <p className="mt-2">{TRANSPARENCY_STATEMENT}</p>
    </div>
  );
}

export function CallLabel({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <p className={cn("text-xs font-medium", tone === "light" ? "text-white/80" : "text-muted-foreground")}>
      {PHONE_LABEL}{" "}
      <a href={PHONE_HREF} className="font-bold underline underline-offset-2">
        {PHONE}
      </a>
    </p>
  );
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warn";
  title: string;
  children: ReactNode;
}) {
  const Ico = tone === "warn" ? AlertTriangle : Info;
  return (
    <div
      role="note"
      className={cn(
        "flex gap-4 rounded-2xl p-5 text-sm leading-relaxed ring-1",
        tone === "warn"
          ? "bg-coral/15 text-foreground ring-coral/40"
          : "bg-primary/8 text-foreground/85 ring-primary/20",
      )}
    >
      <Ico className={cn("mt-0.5 size-5 shrink-0", tone === "warn" ? "text-ink" : "text-primary")} />
      <div>
        <strong className="block text-foreground">{title}</strong>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

/** Numbered vertical step list with a connecting rail. */
export function NumberedSteps({ steps, tone = "light" }: { steps: string[]; tone?: "light" | "dark" }) {
  return (
    <ol className="relative grid gap-3">
      {steps.map((s, i) => (
        <li
          key={s}
          className={cn(
            "flex items-start gap-4 rounded-2xl p-4 ring-1",
            tone === "dark" ? "bg-white/10 ring-white/20" : "bg-card ring-border",
          )}
        >
          <span
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-full text-sm font-extrabold",
              tone === "dark" ? "bg-white text-primary" : "bg-primary text-primary-foreground",
            )}
          >
            {i + 1}
          </span>
          <span className="pt-1 text-sm leading-relaxed">{s}</span>
        </li>
      ))}
    </ol>
  );
}

/** Interactive checklist; state is local to the page and nothing is sent anywhere. */
export function Checklist({ items, label }: { items: string[]; label: string }) {
  const [done, setDone] = useState<Set<number>>(new Set());
  const base = useId();
  const toggle = (i: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  return (
    <div>
      <ul className="grid gap-3" aria-label={label}>
        {items.map((t, i) => {
          const checked = done.has(i);
          const id = `${base}-${i}`;
          return (
            <li key={t}>
              <label
                htmlFor={id}
                className={cn(
                  "flex min-h-12 cursor-pointer items-start gap-4 rounded-2xl p-4 ring-1 transition-colors",
                  checked ? "bg-primary/10 ring-primary/30" : "bg-card ring-border hover:bg-secondary/60",
                )}
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(i)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg border-2 transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-primary/30",
                    checked ? "border-primary bg-primary text-primary-foreground" : "border-primary/40",
                  )}
                >
                  {checked && <Check className="size-4" />}
                </span>
                <span className={cn("text-sm leading-relaxed", checked && "text-foreground/60")}>{t}</span>
              </label>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
        {done.size} of {items.length} ticked. This checklist stays on your device.
      </p>
    </div>
  );
}

export function FaqList({ faqs, defaultOpen = 0 }: { faqs: Faq[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const base = useId();
  const half = Math.ceil(faqs.length / 2);
  // Two independent stacks on desktop so opening one answer never stretches the other column.
  const columns = [faqs.slice(0, half), faqs.slice(half)];
  return (
    <div className="grid items-start gap-3 md:grid-cols-2 md:gap-x-5">
      {columns.map((col, c) => (
        <div key={c} className="grid gap-3">
          {col.map((f, j) => {
            const i = c * half + j;
            const isOpen = open === i;
            const panel = `${base}-p-${i}`;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panel}
                    className={cn(
                      "flex min-h-14 w-full items-center justify-between gap-4 rounded-3xl px-5 py-4 text-left transition-colors sm:px-6",
                      isOpen ? "bg-ink text-cream" : "bg-card ring-1 ring-border hover:bg-secondary/60",
                    )}
                  >
                    <span className="font-display text-base font-bold">{f.q}</span>
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full",
                        isOpen ? "bg-coral text-ink" : "bg-secondary text-primary",
                      )}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                </h3>
                <div id={panel} role="region" hidden={!isOpen}>
                  <p className="px-5 pt-4 pb-2 text-sm leading-relaxed text-muted-foreground sm:px-6">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export type TopicCard = {
  icon: Icon;
  title: string;
  copy: string;
  to: string;
  hash?: string;
  cta?: string;
};

/** Icon + title + copy + link card used for topic grids. */
export function TopicLinkCard({ t, className }: { t: TopicCard; className?: string }) {
  return (
    <GuideLink
      to={t.to}
      hash={t.hash}
      className={cn("group soft-card lift flex h-full flex-col p-7", className)}
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
        <t.icon className="size-5" />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
        {t.cta ?? "Read the guide"}
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </GuideLink>
  );
}

/** Image-and-text split with an optional bullet list. */
export function Split({
  eyebrow,
  title,
  children,
  image,
  alt,
  flip = false,
  id,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  image: string;
  alt: string;
  flip?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-14 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className={cn(flip && "lg:order-2")}>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-[20rem] w-full rounded-[0.75rem_4rem_0.75rem_4rem] object-cover sm:h-[26rem]"
          />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Closing strip with a get-assistance call button and the required label. */
export function AssistStrip({
  title = "Still have questions?",
  primary = { label: "Internet help", to: "/internet" },
}: {
  title?: string;
  primary?: { label: string; to: string };
}) {
  return (
    <section className="px-3 pb-16 sm:px-5">
      <div className="mx-auto max-w-5xl">
        <Reveal className="tide-bg shape-b relative isolate flex flex-col items-center gap-5 overflow-hidden p-10 text-center text-cream sm:p-14">
          <NetworkPattern className="text-aqua/30" />
          <h2 className="relative font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <GuideLink
              to={primary.to}
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-aqua"
            >
              {primary.label}
            </GuideLink>
            <a
              href={PHONE_HREF}
              className="rounded-full px-8 py-3.5 text-sm font-bold text-cream ring-1 ring-cream/30 transition-colors hover:bg-cream/10"
            >
              Get General Assistance: {PHONE}
            </a>
          </div>
          <div className="relative">
            <CallLabel tone="light" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Shared page wrapper for guide pages: sticky-free, single-column section stack. */
export function PageSection({
  children,
  tone = "plain",
  id,
}: {
  children: ReactNode;
  tone?: "plain" | "tint";
  id?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-14 lg:py-20", tone === "tint" && "bg-secondary/60")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

/** In-page topic links (anchors) shown under a page hero. Smooth scrolling is set in CSS. */
export function SectionNav({ links, label }: { links: { id: string; label: string }[]; label: string }) {
  return (
    <nav aria-label={label} className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
      <ul className="flex flex-wrap gap-2">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="inline-flex min-h-11 items-center rounded-full bg-secondary px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
