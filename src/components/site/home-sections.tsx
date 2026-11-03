import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowUpRight,
  Briefcase,
  Cable,
  ClipboardList,
  Compass,
  Gauge,
  LifeBuoy,
  MonitorPlay,
  Phone,
  Radio,
  Router as RouterIcon,
  ShieldCheck,
  Signal,
  Smartphone,
  Sparkles,
  Tv,
  Wifi,
  WifiOff,
} from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/contact";
import { FAQS } from "@/lib/faqs";
import { BEFORE_CONTACT } from "@/lib/guides";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Eyebrow, NetworkPattern, Reveal } from "./primitives";
import {
  AssistStrip,
  CallLabel,
  Checklist,
  FaqList,
  GuideLink,
  SectionHead,
  TopicLinkCard,
  type TopicCard,
} from "./blocks";

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
                Independent internet, TV &amp; mobile connectivity help
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 max-w-2xl font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
                Reliable <span className="aqua-text">Internet &amp; Connectivity</span> Assistance
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Clear answers for internet, television and connection problems. Explore practical
                troubleshooting guidance, understand service interruptions and find helpful
                information for your internet, TV, mobile and business connectivity questions.
              </p>
            </Reveal>

            <Reveal delay={220} className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/internet"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-aqua"
                >
                  Explore Support
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  Get General Assistance: {PHONE}
                </a>
              </div>
              <div className="mt-4">
                <CallLabel tone="light" />
                <p className="mt-1 text-xs font-medium text-white/80">
                  Independent resource. Not an official provider.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-md min-w-0 lg:max-w-none">
            <div className="grid grid-cols-5 grid-rows-[auto_auto] gap-4">
              <div className="group relative col-span-3 row-span-2 h-[22rem] overflow-hidden rounded-[3rem_0.75rem_3rem_0.75rem] ring-1 ring-white/20 sm:h-[30rem]">
                <img
                  src={IMG.smartHome}
                  alt="Connected smart home living space with Wi-Fi devices"
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
  "Internet troubleshooting",
  "Wi-Fi support",
  "Router & modem help",
  "Outage information",
  "Cable TV support",
  "Mobile connectivity",
  "Business internet support",
  "Independent resource",
];

export function Ticker() {
  return (
    <section className="overflow-hidden py-10" aria-hidden="true">
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

/* ------------------------------------------------------- SUPPORT TOPICS */

const SUPPORT_TOPICS: TopicCard[] = [
  {
    icon: WifiOff,
    title: "Internet Connection Problems",
    copy: "Work out whether one device or the whole home is offline and which checks to try first.",
    to: "/internet",
    hash: "connection-help",
  },
  {
    icon: Gauge,
    title: "Slow Internet and Wi-Fi Issues",
    copy: "Why distance, walls, interference and busy networks slow things down, and what to test.",
    to: "/internet",
    hash: "wifi",
  },
  {
    icon: Tv,
    title: "Television and Cable Problems",
    copy: "Blank screens, missing channels, pixelation, remote and sound problems.",
    to: "/tv-mobile",
    hash: "cable-tv",
  },
  {
    icon: AlertTriangle,
    title: "Service Outages",
    copy: "What an outage means, how to tell it from a home problem and where to check updates.",
    to: "/internet",
    hash: "outages",
  },
  {
    icon: RouterIcon,
    title: "Router and Modem Setup",
    copy: "The difference between a modem and a router, placement, power and basic setup checks.",
    to: "/internet",
    hash: "router-modem",
  },
  {
    icon: Briefcase,
    title: "Business Connectivity",
    copy: "Office Wi-Fi, voice problems and what to prepare when several people are affected.",
    to: "/business",
  },
];

export function SupportTopics() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28">
            <div className="shape-a relative overflow-hidden">
              <img
                src={IMG.supportTeam}
                alt="Team members discussing connectivity questions"
                loading="lazy"
                className="h-[22rem] w-full object-cover"
              />
            </div>
            <div className="mt-8">
              <Eyebrow>Support topics</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Help With Internet and Connectivity Questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Pick the topic closest to your problem. Each guide explains common causes and
                practical checks, and says when to contact your verified provider.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {SUPPORT_TOPICS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 80} className={cn(i % 2 && "sm:mt-8")}>
                <TopicLinkCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- INTERNET HELP */

const INTERNET_HELP: (Omit<TopicCard, "copy"> & { body: string })[] = [
  {
    icon: Compass,
    title: "Understand Your Connection",
    body: "How internet connections work, what a modem and a router each do, and how to spot common connection problems.",
    to: "/internet",
    hash: "router-modem",
    cta: "How it works",
  },
  {
    icon: LifeBuoy,
    title: "Troubleshoot Common Issues",
    body: "Simple steps for slow speeds, disconnected devices, weak Wi-Fi and unstable connections.",
    to: "/internet",
    hash: "connection-help",
    cta: "Start the checks",
  },
  {
    icon: Signal,
    title: "Find the Right Support",
    body: "How to tell whether an issue is device-related, equipment-related or possibly a wider service interruption.",
    to: "/internet",
    hash: "outages",
    cta: "Find the cause",
  },
];

export function InternetHelp() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Internet guidance"
          title="Clear Guidance for Your Internet Questions"
          intro="Core Internet is an independent assistance resource, not an internet provider. These guides explain the basics so you can make your own decisions with confidence."
        />
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
                    i === 1 ? "text-white/80" : "text-muted-foreground",
                  )}
                >
                  {t.body}
                </p>
                <GuideLink
                  to={t.to}
                  hash={t.hash}
                  className={cn(
                    "mt-8 inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors",
                    i === 1
                      ? "bg-white text-primary hover:bg-aqua"
                      : "bg-ink text-cream hover:bg-primary",
                  )}
                >
                  {t.cta}
                  <ArrowUpRight className="size-4" />
                </GuideLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- STEPS */

const STEPS = [
  {
    icon: ClipboardList,
    title: "Describe the Problem",
    copy: "Identify what is happening, when it started and which devices or services are affected.",
  },
  {
    icon: Cable,
    title: "Check the Basics",
    copy: "Review power, cables, Wi-Fi settings, device connections and equipment status lights.",
  },
  {
    icon: Compass,
    title: "Understand the Cause",
    copy: "Decide whether the problem may involve a single device, home equipment or a wider service interruption.",
  },
  {
    icon: ArrowUpRight,
    title: "Find the Next Step",
    copy: "Use the relevant guidance, or contact the verified service provider when account-level or network-level help is needed.",
  },
];

export function Steps() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="How it works" title="Four Simple Steps to Clearer Answers" />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden
            className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 lg:block"
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="relative">
              <span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-lift)]">
                <s.icon className="size-5" />
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-ink text-[11px] font-extrabold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- TV HELP */

export const TV_TOPICS = [
  {
    id: "blank-screen",
    name: "Blank screen",
    copy: "Confirm the correct HDMI input and check that the receiver is powered on.",
    img: IMG.livingRoomTv,
    icon: Tv,
  },
  {
    id: "missing-channels",
    name: "Missing channels",
    copy: "Verify the channel number, subscription package and any service notices through the provider's official account tools.",
    img: IMG.familyTv,
    icon: Radio,
  },
  {
    id: "pixelation-freezing",
    name: "Pixelation or freezing",
    copy: "Inspect cable connections and restart the receiver only as instructed by the equipment manufacturer.",
    img: IMG.cinema,
    icon: MonitorPlay,
  },
  {
    id: "remote-problems",
    name: "Remote problems",
    copy: "Replace the batteries, remove obstructions and follow the device pairing instructions.",
    img: IMG.remoteControl,
    icon: Smartphone,
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
              Informational Support for Cable TV
            </h2>
            <p className="mt-4 text-muted-foreground">
              Core Internet does not sell or provide TV service. These pointers cover common
              picture, channel, sound and remote problems.
            </p>
          </div>
          <Link
            to="/tv-mobile"
            hash="cable-tv"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold transition-colors hover:bg-ink hover:text-cream"
          >
            All TV guidance
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
              <GuideLink to="/tv-mobile" hash={p.id} className="block">
                <img
                  src={p.img}
                  alt={`Television scene illustrating ${p.name.toLowerCase()} troubleshooting`}
                  loading="lazy"
                  className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/12 text-aqua backdrop-blur">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/85">{p.copy}</p>
                </div>
              </GuideLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- WI-FI HELP */

const WIFI_TOPICS: (TopicCard & { img: string; alt: string })[] = [
  {
    icon: RouterIcon,
    title: "Router and Modem Setup",
    copy: "The difference between a modem and a router, plus placement, power connections and basic setup checks.",
    img: IMG.routerDevice,
    alt: "Wi-Fi router placed on a shelf in a living room",
    to: "/internet",
    hash: "router-modem",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Performance",
    copy: "How walls, distance, interference, connected devices and router placement affect wireless performance.",
    img: IMG.smartHome,
    alt: "Smart home with several connected devices",
    to: "/internet",
    hash: "wifi",
  },
  {
    icon: MonitorPlay,
    title: "Streaming and Buffering",
    copy: "Possible reasons for buffering, slow streaming and unstable connections, and what to test.",
    img: IMG.streaming,
    alt: "Streaming video on a television screen",
    to: "/internet",
    hash: "wifi",
  },
];

export function WifiHelp() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Wi-Fi"
          title="General Wi-Fi Guidance for Your Home"
          intro="Informational support only. Core Internet does not sell equipment or guarantee specific results."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {WIFI_TOPICS.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 90}
              className={cn("soft-card lift overflow-hidden", i === 1 && "md:mt-10")}
            >
              <GuideLink to={g.to} hash={g.hash} className="block">
                <img src={g.img} alt={g.alt} loading="lazy" className="h-52 w-full object-cover" />
                <div className="p-7">
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <g.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Read more <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </GuideLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- TROUBLESHOOT */

export function TroubleshootTeaser() {
  return (
    <section className="px-3 sm:px-5">
      <div className="tide-bg shape-a relative isolate overflow-hidden py-16 text-cream lg:py-24">
        <NetworkPattern className="text-aqua/30" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light">Troubleshooting</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Internet Not Working? Start With These Checks
            </h2>
            <p className="mt-4 text-white/80">
              The first question is simple: is one device offline, or all of them?
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 sm:p-8">
              <p className="text-xs font-bold tracking-[0.16em] text-aqua uppercase">Situation A</p>
              <h3 className="mt-2 font-display text-xl font-bold">Only one device is offline</h3>
              <ol className="mt-4 grid gap-2 text-sm text-white/90">
                {[
                  "Turn Wi-Fi off and back on",
                  "Check Airplane Mode",
                  "Reconnect to the correct Wi-Fi network",
                  "Restart the affected device",
                  "Test another device if possible",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="font-bold text-aqua">{i + 1}.</span> {t}
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={100} className="rounded-3xl bg-white p-6 text-ink sm:p-8">
              <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
                Situation B
              </p>
              <h3 className="mt-2 font-display text-xl font-bold">All devices are offline</h3>
              <ol className="mt-4 grid gap-2 text-sm text-ink/80">
                {[
                  "Confirm the modem and router have power",
                  "Check the status lights",
                  "Inspect Ethernet and coaxial cables",
                  "Restart equipment as its instructions say",
                  "Check the provider's official outage information",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <span className="font-bold text-primary">{i + 1}.</span> {t}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <Link
              to="/internet"
              hash="connection-help"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-aqua"
            >
              See the full step-by-step guide
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------- MORE GUIDES BAND */

const MORE: TopicCard[] = [
  {
    icon: AlertTriangle,
    title: "Internet Outages: Understand What's Happening",
    copy: "What an outage is, how to tell it from a home Wi-Fi problem, and why restoration times cannot be promised.",
    to: "/internet",
    hash: "outages",
  },
  {
    icon: Briefcase,
    title: "Business Internet & Connectivity Assistance",
    copy: "A preparation checklist and the questions to ask a verified business support team.",
    to: "/business",
  },
  {
    icon: Smartphone,
    title: "Mobile Connectivity Help",
    copy: "Dropped calls, weak signal and mobile data not loading, plus a security reminder.",
    to: "/tv-mobile",
    hash: "mobile",
  },
  {
    icon: Gauge,
    title: "Choosing an Internet Plan? Know What to Check",
    copy: "What to compare before ordering, and why availability depends on your exact address.",
    to: "/internet",
    hash: "plans",
  },
];

export function MoreGuides() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="More guides" title="Outages, Business, Mobile and Plans" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {MORE.map((t, i) => (
            <Reveal key={t.title} delay={(i % 2) * 80}>
              <GuideLink
                to={t.to}
                className="group soft-card lift flex h-full items-start gap-5 p-7"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <t.icon className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">{t.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                    {t.copy}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Read the guide
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </GuideLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- BEFORE YOU CONTACT */

export function BeforeContact() {
  return (
    <section id="before-you-contact" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Be prepared</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Before You Contact Customer Support
          </h2>
          <p className="mt-4 text-muted-foreground">
            A few notes make any support conversation shorter and clearer. Tick items off as you
            go.
          </p>
          <img
            src={IMG.dataDesk}
            alt="Notebook and laptop on a desk, ready for a support call"
            loading="lazy"
            className="mt-8 hidden h-64 w-full rounded-[0.75rem_3.5rem_0.75rem_3.5rem] object-cover lg:block"
          />
        </Reveal>
        <Reveal delay={100}>
          <Checklist items={BEFORE_CONTACT} label="Before you contact customer support" />
        </Reveal>
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
            <Eyebrow>About Core Internet</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Transparency, clarity and responsible assistance
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Core Internet is an independent information and assistance resource offering general
              guidance on internet, television, mobile and business connectivity.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              It does not own or operate an internet network, cannot access customer accounts or
              change plans and billing, and cannot guarantee technician appointments or
              restoration times.
            </p>
            <Link
              to="/disclaimer"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-primary"
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

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Straight answers on troubleshooting, outages, TV, mobile, business and plans, and on who
            Core Internet is.
          </p>
        </Reveal>
        <div className="mt-12">
          <FaqList faqs={FAQS} defaultOpen={null} />
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-primary"
          >
            Contact page
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FINAL CTA */

export function FinalCta() {
  return <AssistStrip title="Questions about internet, TV or mobile connectivity?" />;
}
