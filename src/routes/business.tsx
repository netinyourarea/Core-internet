import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Cable, PhoneCall, ServerOff, Users, Wifi, WifiOff } from "lucide-react";
import { PageHero } from "@/components/site/page-shell";
import {
  AssistStrip,
  Callout,
  Checklist,
  PageSection,
  SectionHead,
  TransparencyBanner,
} from "@/components/site/blocks";
import { Reveal } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Business Internet Support & Connectivity Help | Core Internet";
const description =
  "Business internet support guidance: what to prepare during an interruption and which questions to ask a verified provider's business support team.";

export const Route = createFileRoute("/business")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/business",
      breadcrumb: [{ name: "Business Support", path: "/business" }],
    }),
  component: BusinessPage,
});

const ISSUES = [
  { icon: WifiOff, t: "Business internet interruptions" },
  { icon: Wifi, t: "Office Wi-Fi coverage" },
  { icon: PhoneCall, t: "Hosted voice problems" },
  { icon: Users, t: "Multiple employees affected" },
  { icon: ServerOff, t: "Business systems becoming unavailable" },
  { icon: Cable, t: "Wired versus wireless connection problems" },
];

const PREPARE = [
  "Business address.",
  "Number of users affected.",
  "Time the problem started.",
  "Whether wired connections still work.",
  "Which systems or applications are unavailable.",
  "Error messages and equipment status lights.",
];

const ASK = [
  "Is there a confirmed service interruption?",
  "Is there a ticket or reference number?",
  "What restoration information is currently available?",
  "Is technician assistance available?",
  "Are there service-level commitments?",
  "Are backup connectivity options available?",
];

function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Business support"
        title="Business Internet & Connectivity Assistance"
        intro="General guidance for offices and small businesses facing connection problems. Core Internet does not provide managed business networking or official provider support."
        image={IMG.business}
      />

      <PageSection>
        <SectionHead eyebrow="What this covers" title="Common business connectivity problems" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ISSUES.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 70} className="soft-card flex items-center gap-4 p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </span>
              <span className="text-sm font-bold">{s.t}</span>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection tone="tint">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Prepare Before Contacting Business Support
            </h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Gather these before you contact your verified business provider.
            </p>
            <Checklist items={PREPARE} label="Business preparation checklist" />
          </Reveal>
          <Reveal delay={100}>
            <div className="tide-bg shape-b p-7 text-cream sm:p-9">
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                Questions to Ask Your Verified Provider
              </h2>
              <ul className="mt-6 grid gap-3">
                {ASK.map((q) => (
                  <li key={q} className="rounded-2xl bg-white/10 p-4 text-sm ring-1 ring-white/20">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection>
        <Callout title="Use your provider's verified business support">
          Business accounts, service-level commitments and technician visits are handled by your
          provider. Use contact details verified through its official website, app or bill.
        </Callout>
      </PageSection>

      <TransparencyBanner compact />
      <AssistStrip primary={{ label: "Internet help", to: "/internet" }} />
    </>
  );
}
