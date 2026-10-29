import { PHONE_HREF } from "@/lib/contact";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Ban,
  BookOpen,
  Boxes,
  Check,
  Clapperboard,
  Compass,
  Headphones,
  LifeBuoy,
  Minus,
  MonitorPlay,
  Phone,
  Plus,
  Router as RouterIcon,
  ShieldCheck,
  Sparkles,
  Trophy,
  Tv,
  Wifi,
  Workflow,
} from "lucide-react";
import { Eyebrow, NetworkPattern, Reveal } from "./primitives";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- HERO */

export function Hero() {
  return (
    <section className="px-3 pt-4 sm:px-5">
      <div className="tide-bg shape-a relative isolate overflow-hidden text-cream">
        <div className="ring-grid absolute inset-0 opacity-30" />
        <span className="float-slow absolute -top-24 -left-16 size-80 rounded-full bg-coral/25 blur-3xl" />
        <span className="float-slower absolute right-0 bottom-0 size-96 rounded-full bg-teal/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/20">
                <ShieldCheck className="size-4 text-aqua" />
                Internet & cable service assistance
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
                Reliable <span className="aqua-text">Internet &amp; Cable</span> Service
                Assistance
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                Get general guidance and informational support related to internet, broadband,
                Wi-Fi, and cable TV services.
              </p>
            </Reveal>

            <Reveal delay={220} className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-aqua"
                >
                  Talk to an Internet Advisor
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  Call for Service Guidance
                </a>
              </div>
              <p className="mt-4 text-xs font-medium text-white/70">
                Not an ISP. No brand affiliation.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-md min-w-0 lg:max-w-none">
            <div className="grid grid-cols-5 grid-rows-[auto_auto] gap-4">
              <div className="group relative col-span-3 row-span-2 h-[22rem] overflow-hidden rounded-[3rem_0.75rem_3rem_0.75rem] ring-1 ring-white/20 sm:h-[30rem]">
                <img
                  src={IMG.smartHome}
                  alt="Connected smart home living space"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-semibold">
                  <Wifi className="size-4 text-aqua" /> Home connectivity guidance
                </span>
              </div>
              <div className="group relative col-span-2 mt-10 h-36 overflow-hidden rounded-[0.75rem_2.5rem_0.75rem_2.5rem] ring-1 ring-white/20 sm:h-52">
                <img
                  src={IMG.routerDevice}
                  alt="Wi-Fi router in a modern living room"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group relative col-span-2 h-36 overflow-hidden rounded-[2.5rem_0.75rem_2.5rem_0.75rem] ring-1 ring-white/20 sm:h-52">
                <img
                  src={IMG.remoteWork}
                  alt="Person working from home on a laptop"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="float-slow absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-[var(--shadow-lift)] sm:-left-8">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Wifi className="size-5" />
              </span>
              <span className="text-xs leading-tight">
                <strong className="block text-sm">Wi-Fi guidance</strong>
                General informational support
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- TICKER */

const TICKER = [
  "Expert guidance",
  "Internet & broadband help",
  "Wi-Fi setup guidance",
  "Cable TV information",
  "Not an ISP",
  "No brand affiliation",
  "Plain-language answers",
];

export function Ticker() {
  return (
    <section className="overflow-hidden py-10">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-10">
            {TICKER.map((t) => (
              <span
                key={t + dup}
                className="flex items-center gap-3 font-display text-xl font-bold text-foreground/25 sm:text-2xl"
              >
                <Sparkles className="size-4 text-coral/60" />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------- INTERNET HELP */

const INTERNET_HELP = [
  {
    icon: Compass,
    title: "Understand your service options",
    copy: "Plain-language explanations of broadband, fiber, cable and wireless internet, so you know what the terms on a provider's website actually mean.",
  },
  {
    icon: LifeBuoy,
    title: "Common connectivity issues",
    copy: "General, practical guidance for slow speeds, dropped connections and Wi-Fi dead spots, including the checks you can try yourself.",
  },
  {
    icon: Workflow,
    title: "Navigating provider processes",
    copy: "Help understanding how provider sign-up, installation visits and account changes typically work, so you know what to ask and expect.",
  },
];

export function InternetHelp() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Internet &amp; broadband</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Clear guidance for your internet questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            We are an assistance provider, not an internet provider. Our advisors offer
            general information so you can make your own decisions with confidence.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {INTERNET_HELP.map((t, i) => (
            <Reveal
              key={t.title}
              delay={i * 90}
              className={cn(
                "group lift relative overflow-hidden p-8",
                i === 1 ? "tide-bg shape-b text-cream lg:mt-8" : "soft-card",
              )}
            >
              {i === 1 && <NetworkPattern className="text-aqua/25" />}
              <div className="relative">
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl",
                    i === 1 ? "bg-white/10 text-aqua" : "bg-primary/10 text-primary",
                  )}
                >
                  <t.icon className="size-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{t.title}</h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    i === 1 ? "text-white/75" : "text-muted-foreground",
                  )}
                >
                  {t.copy}
                </p>
                <a
                  href={PHONE_HREF}
                  className={cn(
                    "mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors",
                    i === 1
                      ? "bg-white text-primary hover:bg-aqua"
                      : "bg-ink text-cream hover:bg-primary",
                  )}
                >
                  Talk to an advisor
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- TV HELP */

const TV_TOPICS = [
  {
    name: "Channel line-ups",
    copy: "General information on how channel line-ups and add-on packs are usually organised.",
    img: IMG.familyTv,
    icon: Tv,
  },
  {
    name: "Sports & live events",
    copy: "Understand what to look for when you want sports and live event coverage.",
    img: IMG.sportsTv,
    icon: Trophy,
  },
  {
    name: "Movies & entertainment",
    copy: "General guidance on movie channels, on-demand features and streaming apps on your TV.",
    img: IMG.cinema,
    icon: Clapperboard,
  },
  {
    name: "Kids & family",
    copy: "Learn about family-friendly content options and parental controls on TV services.",
    img: IMG.streaming,
    icon: MonitorPlay,
  },
];

export function TvHelp() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>Cable TV</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Informational support for cable TV
            </h2>
            <p className="mt-4 text-muted-foreground">
              We do not sell or provide TV service. We offer general information to help you
              understand your options and questions.
            </p>
          </div>
          <Link
            to="/cable-tv"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold transition-colors hover:bg-ink hover:text-cream"
          >
            Learn more
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TV_TOPICS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className={cn(
                "group lift relative overflow-hidden rounded-[0.75rem_2.5rem_0.75rem_2.5rem]",
                i % 2 ? "lg:mt-8" : "",
              )}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <span className="grid size-10 place-items-center rounded-xl bg-white/12 text-aqua backdrop-blur">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-white/75">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ WHAT WE DO */

const WHAT_WE_DO = [
  {
    icon: Compass,
    title: "Understand service options",
    copy: "We help you understand internet and broadband service options in plain language.",
  },
  {
    icon: LifeBuoy,
    title: "Practical connectivity guidance",
    copy: "Get practical guidance on common connectivity issues at home or in a small office.",
  },
  {
    icon: Workflow,
    title: "Navigate provider processes",
    copy: "Learn how to navigate service provider processes with more confidence.",
  },
  {
    icon: Tv,
    title: "Cable TV information",
    copy: "Receive general informational support related to cable TV services.",
  },
];

export function WhatWeDo() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="relative">
            <div className="shape-a relative overflow-hidden">
              <img
                src={IMG.supportTeam}
                alt="Advisors providing general guidance by phone"
                loading="lazy"
                className="h-[30rem] w-full object-cover"
              />
            </div>
            <div className="absolute -right-2 -bottom-8 w-60 rounded-3xl bg-card p-5 shadow-[var(--shadow-lift)] ring-1 ring-border sm:right-8">
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-primary uppercase">
                <ShieldCheck className="size-4" /> Our role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Guidance and assistance only.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Help with internet and cable questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                At Core Internet, we help users in four practical ways. Our role is limited to
                guidance and assistance only.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHAT_WE_DO.map((r, i) => (
                <Reveal key={r.title} delay={i * 80} className="soft-card lift p-6">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <r.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- WHAT WE DON'T */

const WE_DO_NOT = [
  "We are not an Internet Service Provider (ISP)",
  "We do not provide official customer support for any brand",
  "We are not affiliated, authorized, or endorsed by any telecom or cable company",
  "We do not sell internet or cable subscriptions",
  "We do not provide guaranteed technical fixes",
];

export function WhatWeDoNot() {
  return (
    <section className="px-3 sm:px-5">
      <div className="tide-bg shape-b relative isolate overflow-hidden py-16 text-cream lg:py-24">
        <NetworkPattern className="text-aqua/30" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow tone="light">What we do not do</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              To avoid confusion, please note
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              All mentions of providers, if any, are strictly for informational purposes only.
            </p>
          </Reveal>
          <ul className="grid gap-3">
            {WE_DO_NOT.map((t, i) => (
              <Reveal as="li" key={t} delay={i * 70}>
                <div className="flex items-center gap-4 rounded-2xl bg-white/8 p-4 ring-1 ring-white/15">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/12 text-aqua">
                    <Ban className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{t}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- STEPS */

const STEPS = [
  {
    icon: Phone,
    title: "Tell us what you need",
    copy: "Share your question about internet, Wi-Fi or cable TV.",
  },
  {
    icon: Headphones,
    title: "Talk to an advisor",
    copy: "An advisor listens and asks a few simple questions.",
  },
  {
    icon: BookOpen,
    title: "Get general guidance",
    copy: "Receive plain-language information and suggested next steps.",
  },
  {
    icon: Check,
    title: "You decide",
    copy: "Any service decisions are made directly with your chosen provider.",
  },
];

export function Steps() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Four simple steps to clearer answers
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className={cn("relative", i % 2 && "lg:mt-10")}>
              <span className="relative grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <s.icon className="size-5" />
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-ink text-[11px] font-extrabold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- WI-FI HELP */

const WIFI_TOPICS = [
  {
    icon: RouterIcon,
    title: "Router placement",
    copy: "General tips on where to place a router to improve coverage around your home.",
    img: IMG.routerDevice,
  },
  {
    icon: Boxes,
    title: "Mesh Wi-Fi basics",
    copy: "An introduction to mesh systems and when they can help with larger or multi-floor homes.",
    img: IMG.smartHome,
  },
  {
    icon: MonitorPlay,
    title: "Streaming & devices",
    copy: "Information on getting a steadier experience for streaming, calls and connected devices.",
    img: IMG.remoteControl,
  },
];

export function WifiHelp() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Wi-Fi</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            General Wi-Fi guidance for your home
          </h2>
          <p className="mt-4 text-muted-foreground">
            Informational support only. We do not sell equipment or guarantee specific results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {WIFI_TOPICS.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 90}
              className={cn("soft-card lift overflow-hidden", i === 1 && "md:mt-10")}
            >
              <img src={g.img} alt={g.title} loading="lazy" className="h-52 w-full object-cover" />
              <div className="p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <g.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- ABOUT */

export function About() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="relative">
            <img
              src={IMG.installer}
              alt="Technician working on a home network connection"
              loading="lazy"
              className="h-[26rem] w-full rounded-[0.75rem_4rem_0.75rem_4rem] object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Transparency, clarity and responsible assistance
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Core Internet is a service assistance provider offering
              general guidance related to internet, broadband, Wi-Fi, and cable TV services.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We do not provide internet or cable services directly, and we do not represent or
              partner with any telecom, internet, or cable TV provider.
            </p>
            <Link
              to="/disclaimer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-primary"
            >
              Read our disclaimer
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ */

export const FAQS = [
  {
    q: "Are you an internet service provider?",
    a: "No. Core Internet is a service assistance provider. We do not provide internet, cable or phone services directly, and we do not sell subscriptions.",
  },
  {
    q: "Are you affiliated with any internet or cable company?",
    a: "No. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.",
  },
  {
    q: "Is this official customer support for my provider?",
    a: "No. We do not provide official customer support for any brand. If you need account, billing or technical support from your provider, please contact that provider directly.",
  },
  {
    q: "What kind of help do you offer?",
    a: "We offer general guidance and informational support: understanding internet and broadband options, common connectivity issues, how provider processes work, and general information about cable TV services.",
  },
  {
    q: "Can you guarantee that my problem will be fixed?",
    a: "No. We do not provide guaranteed technical fixes. Our advice is general and informational, and results depend on your equipment, location and provider.",
  },
  {
    q: "Do you charge for your guidance?",
    a: "General guidance and informational support from us is provided without charge. Any fees for internet or cable services are set and billed by the provider you choose.",
  },
  {
    q: "Will you sign me up for a service?",
    a: "No. We do not sell or sign you up for services. Any decision to subscribe is made directly between you and the provider.",
  },
  {
    q: "How do I contact you?",
    a: "Use our contact page to reach an advisor by phone or email. Our contact details are also shown in the footer of every page.",
  },
  {
    q: "What happens to the information I share with you?",
    a: "We use it to respond to your enquiry and provide guidance. We do not sell personal information. See our Privacy Policy for full details.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Clear answers about who we are, what we do, and what we do not do.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-primary"
            >
              Ask an advisor
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <div className="grid gap-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 40}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left transition-colors",
                      isOpen
                        ? "bg-ink text-cream"
                        : "bg-card ring-1 ring-border hover:bg-secondary/60",
                    )}
                  >
                    <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-full",
                        isOpen ? "bg-coral text-ink" : "bg-secondary text-primary",
                      )}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pt-4 pb-2 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FINAL CTA */

export function FinalCta() {
  return (
    <section className="px-3 pb-14 sm:px-5">
      <div className="tide-bg shape-a relative isolate overflow-hidden text-cream">
        <NetworkPattern className="text-aqua/30" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <Eyebrow tone="light">Get assistance</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-5xl">
            Questions about internet or cable TV?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Talk to an advisor for general guidance and informational support.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-colors hover:bg-aqua"
            >
              Talk to an Internet Advisor
            </a>
            <a
              href={PHONE_HREF}
              className="rounded-full px-8 py-4 text-sm font-bold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              Call for Service Guidance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
