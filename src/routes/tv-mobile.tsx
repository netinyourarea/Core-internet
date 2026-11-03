import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mic2, Plane, Plug, RefreshCw, Settings2, Volume2, PhoneOff, SignalLow, Smartphone, Wifi } from "lucide-react";
import { PageHero } from "@/components/site/page-shell";
import {
  AssistStrip,
  BulletList,
  Callout,
  PageSection,
  SectionHead,
  SectionNav,
  Split,
  TransparencyBanner,
} from "@/components/site/blocks";
import { Reveal } from "@/components/site/primitives";
import { TV_TOPICS } from "@/components/site/home-sections";
import { IMG } from "@/lib/images";

const title = "TV & Mobile Help: Cable TV and Mobile Connectivity | Core Internet";
const description =
  "Television troubleshooting for blank screens, missing channels, pixelation and remotes, plus mobile help for dropped calls, weak signal and mobile data. Independent guidance.";

export const Route = createFileRoute("/tv-mobile")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/tv-mobile",
      breadcrumb: [{ name: "TV & Mobile", path: "/tv-mobile" }],
    }),
  component: TvMobilePage,
});

const DETAIL: Record<string, string[]> = {
  "blank-screen": [
    "Use the television remote to select the correct HDMI input.",
    "Confirm the receiver is powered on and its lights look normal.",
    "Check that the HDMI cable is firmly seated at both ends.",
  ],
  "missing-channels": [
    "Verify the channel number you are entering.",
    "Check whether the channel is part of your subscription package.",
    "Look for service notices through the provider's official account tools.",
  ],
  "pixelation-freezing": [
    "Inspect cable connections for looseness or damage.",
    "Restart the receiver only as the equipment manufacturer instructs.",
    "If it continues, check the provider's official service notices.",
  ],
  "remote-problems": [
    "Replace the batteries.",
    "Remove obstructions between the remote and the receiver.",
    "Follow the device pairing instructions from the manufacturer.",
  ],
};

const EXTRA = [
  {
    id: "no-sound",
    icon: Volume2,
    title: "No sound",
    items: ["Check mute and volume on the television.", "Check mute and volume on the receiver."],
  },
  {
    id: "buffering",
    icon: Mic2,
    title: "Buffering",
    items: [
      "Streaming buffers when the connection is weak or busy.",
      "Test another device and a wired connection if you can.",
    ],
  },
  {
    id: "receiver-connection",
    icon: Plug,
    title: "Receiver and cable connections",
    items: [
      "Confirm the receiver has power and cables are firmly seated.",
      "Follow the manufacturer's instructions for any restart.",
    ],
  },
];

const PROBLEMS = [
  { icon: PhoneOff, title: "Dropped calls", copy: "Often tied to weak signal or moving between coverage areas. Try another location and restart the phone." },
  { icon: SignalLow, title: "Weak mobile signal", copy: "Buildings, basements and distance from a mast can weaken signal. Test near a window or outdoors." },
  { icon: Wifi, title: "Mobile data not working", copy: "Check that mobile data is on, Airplane Mode is off and data settings are correct for your device." },
  { icon: Smartphone, title: "Activation and setup", copy: "Activation depends on your account, so confirm the steps with your mobile provider." },
];

const CHECKS = [
  { icon: Plane, t: "Turn Airplane Mode on and off again." },
  { icon: Settings2, t: "Review mobile data settings." },
  { icon: RefreshCw, t: "Restart the phone." },
  { icon: MapPin, t: "Test connectivity in another location." },
];

function TvMobilePage() {
  return (
    <>
      <PageHero
        eyebrow="TV & mobile"
        title="Television and Mobile Connectivity Help"
        intro="Practical troubleshooting for cable TV and mobile problems. Core Internet does not provide TV or mobile service and cannot see your account."
        image={IMG.remoteControl}
      />

      <SectionNav
        label="TV and mobile topics"
        links={[
          { id: "cable-tv", label: "Cable TV Help" },
          { id: "mobile", label: "Mobile Connectivity" },
        ]}
      />

      {/* Section A — TV */}
      <PageSection id="cable-tv">
        <SectionHead
          eyebrow="Section A"
          title="Informational Support for Cable TV"
          intro="Find the symptom that matches what you see, then work through the checks. Channel packages can only be confirmed by your provider."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TV_TOPICS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 80} className="soft-card overflow-hidden">
              <div id={t.id} className="scroll-mt-28" />
              <img
                src={t.img}
                alt={`Television scene illustrating ${t.name.toLowerCase()} troubleshooting`}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <t.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{t.name}</h3>
                <p className="mt-2 mb-4 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
                <BulletList items={DETAIL[t.id]} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {EXTRA.map((e, i) => (
            <Reveal key={e.id} delay={i * 80} className="soft-card p-7">
              <div id={e.id} className="scroll-mt-28" />
              <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <e.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{e.title}</h3>
              <div className="mt-3">
                <BulletList items={e.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* Section B — Mobile (visually distinct band) */}
      <section id="mobile" className="scroll-mt-28 px-3 sm:px-5">
        <div className="tide-bg shape-a relative isolate overflow-hidden px-6 py-16 text-cream sm:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-aqua uppercase ring-1 ring-aqua/25">
                Section B
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Mobile Connectivity Help
              </h2>
              <p className="mt-4 text-white/85">
                Simple checks for calls, signal and mobile data. Account-specific questions belong
                with your verified mobile provider.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 80} className="flex gap-5 rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
                  <p.icon className="mt-1 size-6 shrink-0 text-aqua" />
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">{p.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <h3 className="mt-12 font-display text-2xl font-extrabold">Quick checks to try first</h3>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CHECKS.map((c, i) => (
                <li key={c.t} className="rounded-3xl bg-white p-6 text-ink">
                  <c.icon className="size-6 text-primary" />
                  <p className="mt-4 text-xs font-bold tracking-[0.16em] text-primary uppercase">
                    Step {i + 1}
                  </p>
                  <p className="mt-1 text-sm font-medium">{c.t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Split
        eyebrow="Coverage and compatibility"
        title="When it is not your phone"
        image={IMG.streaming}
        alt="Person checking a phone while watching video"
      >
        <p>
          Coverage and device compatibility depend on your provider's network and plan. Core
          Internet cannot see your account or a coverage map, so use your mobile provider's
          official website or app.
        </p>
        <BulletList
          items={[
            "Check coverage at the address where you need service.",
            "Confirm your device is compatible with your provider's network.",
            "Ask your provider about activation and setup through its verified support channel.",
          ]}
        />
        <Callout tone="warn" title="Security notice">
          Never share passwords or one-time verification codes with an unverified caller.
        </Callout>
      </Split>

      <TransparencyBanner compact />
      <AssistStrip primary={{ label: "Internet help", to: "/internet" }} />
    </>
  );
}
