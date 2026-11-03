import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Clock, Hash, Wrench } from "lucide-react";
import { PageHero } from "@/components/site/page-shell";
import {
  AssistStrip,
  BulletList,
  Callout,
  Checklist,
  NumberedSteps,
  PageSection,
  SectionHead,
  SectionNav,
  Split,
  TransparencyBanner,
} from "@/components/site/blocks";
import { Reveal } from "@/components/site/primitives";
import { BEFORE_CONTACT } from "@/lib/guides";
import { IMG } from "@/lib/images";

const title = "Internet Help: Troubleshooting, Wi-Fi, Outages & Plans | Core Internet";
const description =
  "Internet help in one place: connection troubleshooting, router and modem checks, Wi-Fi guidance, outage information and what to compare when choosing an internet plan.";

export const Route = createFileRoute("/internet")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/internet",
      breadcrumb: [{ name: "Internet Help", path: "/internet" }],
    }),
  component: InternetPage,
});

const PROBLEMS = [
  {
    t: "Slow internet",
    d: "Test a device close to the router, then a wired device if you have one. If every test is slow, the cause may be your plan or the wider service.",
  },
  {
    t: "Unstable connection",
    d: "Check for loose cables and watch the equipment status lights. Note whether drops affect one device or all of them.",
  },
  {
    t: "Random disconnections",
    d: "Write down when they happen and what you were doing. Patterns, such as evenings or a specific room, help narrow down the cause.",
  },
];

const OUTAGE_POINTS = [
  {
    icon: Wrench,
    t: "Restarting may not help",
    d: "If the interruption is in the network, restarting your equipment will not resolve it. Only the provider can repair its network.",
  },
  {
    icon: Clock,
    t: "Estimates can change",
    d: "Restoration depends on the cause, the affected area, the equipment and the repairs required. Estimates are revised as crews learn more.",
  },
  {
    icon: Hash,
    t: "Keep reference numbers",
    d: "If you report a problem, note any outage or ticket reference number for follow-up.",
  },
];

const COMPARE = [
  ["Availability at your exact address", "Service can differ from one street to the next, so a city-level search is not enough."],
  ["Download speeds", "Matter for streaming, browsing and downloads."],
  ["Upload speeds", "Matter for video calls, backups and large uploads."],
  ["Promotional pricing duration", "A lower price may change when the offer period ends."],
  ["Standard monthly pricing", "The price you pay once any promotion has ended."],
  ["Equipment charges", "Check whether a modem or router costs extra."],
  ["Installation fees", "One-time costs to get connected."],
  ["Contract terms", "The length of the commitment and any renewal rules."],
  ["Cancellation conditions", "Fees or notice period if you leave early."],
];

function InternetPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet help"
        title="Internet Help in One Place"
        intro="Troubleshooting, router and modem checks, Wi-Fi guidance, outage information and plan comparison, explained in plain language. Core Internet is an independent information resource, not an internet provider."
        image={IMG.serverRoom}
      />

      <SectionNav
        label="Internet help topics"
        links={[
          { id: "connection-help", label: "Internet Connection Help" },
          { id: "router-modem", label: "Router & Modem" },
          { id: "wifi", label: "Wi-Fi Guidance" },
          { id: "outages", label: "Outages" },
          { id: "plans", label: "Plan Comparison" },
        ]}
      />

      {/* A — Connection help */}
      <PageSection id="connection-help">
        <SectionHead
          eyebrow="Section A"
          title="Internet Not Working? Start With These Checks"
          intro="First work out whether one device or every device is offline. Core Internet offers general guidance only and cannot guarantee a fix."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="soft-card p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">Situation A</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold">Only one device is offline</h3>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Usually a device or Wi-Fi connection issue, not the whole network.
            </p>
            <NumberedSteps
              steps={[
                "Turn Wi-Fi off and back on.",
                "Check Airplane Mode and make sure it is off.",
                "Reconnect to the correct Wi-Fi network.",
                "Restart the affected device.",
                "Test another device if possible.",
              ]}
            />
          </Reveal>
          <Reveal delay={100} className="tide-bg shape-b relative p-6 text-cream sm:p-8">
            <p className="text-xs font-bold tracking-[0.16em] text-aqua uppercase">Situation B</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold">All devices are offline</h3>
            <p className="mt-2 mb-6 text-sm text-white/80">
              Points to home equipment or, possibly, a wider service interruption.
            </p>
            <NumberedSteps
              tone="dark"
              steps={[
                "Confirm that the modem and router have power.",
                "Check the modem and router status lights.",
                "Inspect Ethernet and coaxial cables.",
                "Confirm that cables are firmly connected at both ends.",
                "Restart equipment according to its instructions.",
                "If restarting both devices, switch them off, wait approximately 30 seconds, start the modem first and then the router.",
                "If the connection remains unavailable, check the provider's official outage information.",
              ]}
            />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.t} delay={i * 80} className="soft-card p-6">
              <h3 className="font-display text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      {/* B — Router and modem */}
      <Split
        id="router-modem"
        eyebrow="Section B"
        title="Router and Modem Troubleshooting"
        image={IMG.routerDevice}
        alt="Wi-Fi router on a shelf in a living room"
        flip
      >
        <p>
          A <strong className="text-foreground">modem</strong> brings the internet signal from your
          provider's line into your home. A <strong className="text-foreground">router</strong>{" "}
          shares that connection with your devices over Wi-Fi and Ethernet. Some providers supply
          one combined device.
        </p>
        <BulletList
          items={[
            "Power: plug both devices into working outlets and check the plugs are secure.",
            "Cables: inspect Ethernet and coaxial cables and confirm both ends are firmly connected.",
            "Status lights: note any light that is off, blinking or a different colour than usual. Meanings differ by manufacturer, so check the device guide.",
            "Safe restart: switch both devices off, wait about 30 seconds, start the modem first, then the router.",
            "Device testing: test more than one device, wired and wireless, to see how wide the problem is.",
            "Placement: keep the router central, open and off the floor, away from thick walls.",
          ]}
        />
        <Callout tone="warn" title="Restarting is not a factory reset">
          Restarting a router is different from performing a factory reset. A factory reset can
          erase network settings and should not be used as a routine first troubleshooting step.
        </Callout>
      </Split>

      {/* C — Wi-Fi */}
      <PageSection id="wifi" tone="tint">
        <SectionHead
          eyebrow="Section C"
          title="General Wi-Fi Guidance for Your Home"
          intro="Wireless signal weakens with distance and obstacles. These are the usual reasons Wi-Fi feels weak or patchy."
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {[
              ["Weak signal and distance", "The further a device is from the router, the weaker and less stable the signal."],
              ["Walls and interference", "Dense walls, floors, other networks and household electronics can block or disrupt signal."],
              ["Connected devices", "Many devices sharing a connection at once can slow everything down."],
              ["Wi-Fi coverage", "Large or multi-floor homes may have rooms the router's signal does not reach well."],
            ].map(([t, d]) => (
              <div key={t} className="soft-card p-6">
                <h3 className="font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={100} className="tide-bg shape-a p-7 text-cream sm:p-9">
            <h3 className="font-display text-2xl font-extrabold">Buffering and streaming</h3>
            <p className="mt-2 mb-5 text-sm text-white/85">Quick tests to narrow down the cause:</p>
            <ul className="grid gap-2 text-sm text-white/90">
              {[
                "Move closer to the router.",
                "Test more than one device.",
                "Check whether the issue affects wired and wireless connections.",
                "Inspect cable connections.",
                "Restart equipment according to manufacturer instructions.",
                "Check whether a wider outage has been reported.",
              ].map((t) => (
                <li key={t} className="rounded-xl bg-white/10 px-4 py-2.5 ring-1 ring-white/15">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </PageSection>

      {/* D — Outages */}
      <PageSection id="outages">
        <SectionHead
          eyebrow="Section D"
          title="Internet Outages: Understand What's Happening"
          intro="An internet outage is a loss or serious degradation of service caused by a fault outside your own devices, such as in the provider's network or a local line."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="soft-card p-7">
            <h3 className="font-display text-xl font-bold">Home problem or wider outage?</h3>
            <div className="mt-4">
              <BulletList
                items={[
                  "Only one device offline: usually a device or Wi-Fi issue.",
                  "All devices offline, with power and cables fine: a service interruption is possible.",
                  "Wired and wireless both offline: probably not just Wi-Fi.",
                  "Lights show a fault or no connection: check your equipment guide and your provider's outage information.",
                ]}
              />
            </div>
            <h3 className="mt-8 flex items-center gap-2 font-display text-xl font-bold">
              <ClipboardCheck className="size-5 text-primary" /> Following official updates
            </h3>
            <div className="mt-4">
              <BulletList
                items={[
                  "Use your provider's official outage page, app or account notifications.",
                  "Use contact details verified through the provider's official website, app or bill.",
                  "Check back for revised information rather than relying on one estimate.",
                ]}
              />
            </div>
          </Reveal>
          <div className="grid gap-4">
            {OUTAGE_POINTS.map((p, i) => (
              <Reveal key={p.t} delay={i * 70} className="soft-card flex gap-5 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Callout title="How long does restoration take?">
            It depends on the cause, affected area, equipment and repairs needed. Core Internet
            cannot promise a restoration time. While you wait, keep any reference number and check
            the provider's official updates.
          </Callout>
          <Callout tone="warn" title="Core Internet does not confirm live outages">
            Live outages are not independently confirmed unless a verified live data source is
            integrated. None is integrated today.
          </Callout>
        </div>
      </PageSection>

      {/* E — Plans */}
      <PageSection id="plans" tone="tint">
        <SectionHead
          eyebrow="Section E"
          title="Choosing an Internet Plan? Know What to Check"
          intro="Promotional prices may change after the offer period, so compare the introductory and the standard price. Current plans and prices are on each provider's verified website; Core Internet does not publish them."
        />
        <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">What to compare before choosing an internet plan</caption>
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th scope="col" className="px-5 py-3 font-bold">What to compare</th>
                <th scope="col" className="px-5 py-3 font-bold">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([a, b]) => (
                <tr key={a} className="border-t border-border align-top">
                  <th scope="row" className="w-2/5 px-5 py-3 font-bold sm:w-1/3">{a}</th>
                  <td className="px-5 py-3 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-4 text-sm text-muted-foreground">
          Availability can vary by exact street address. Verify local support locations and contact
          numbers, and check outages through official provider resources.
        </p>
      </PageSection>

      <PageSection id="prepare">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            eyebrow="Next step"
            title="Before You Contact Customer Support"
            intro="Account, billing, service changes, confirmed outages and technician bookings are handled by your provider. Use contact details verified through its official website, app or bill."
          />
          <Checklist items={BEFORE_CONTACT} label="Before you contact customer support" />
        </div>
      </PageSection>

      <TransparencyBanner compact />
      <AssistStrip primary={{ label: "TV & mobile help", to: "/tv-mobile" }} />
    </>
  );
}
