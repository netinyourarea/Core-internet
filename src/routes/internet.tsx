import { PHONE_HREF } from "@/lib/contact";
import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Gamepad2,
  Gauge,
  MonitorPlay,
  Router,
  ShieldCheck,
  Upload,
  Wifi,
} from "lucide-react";
import { PageHero, FeatureGrid, CtaStrip } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { InternetHelp } from "@/components/site/home-sections";
import { IMG } from "@/lib/images";

const title = "Internet & Broadband Guidance | Core Internet";
const description =
  "General guidance about internet, broadband and Wi-Fi from Core Internet. Not an ISP.";

export const Route = createFileRoute("/internet")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/internet",
      breadcrumb: [{ name: "Internet", path: "/internet" }],
    }),
  component: InternetPage,
});

const USAGE = [
  [
    "Everyday browsing",
    "Light use",
    "Email, web browsing, standard-definition streaming and a few devices.",
  ],
  [
    "Busy households",
    "Moderate use",
    "Several people streaming, gaming, studying and video calling at once.",
  ],
  [
    "Home offices & heavy use",
    "Demanding use",
    "Large uploads, video meetings, cloud backups and many connected devices.",
  ],
];

function InternetPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet"
        title="Guidance for your internet"
        intro="General information to help you understand internet and broadband terms, common connectivity issues and how provider processes work. We are an assistance provider, not an ISP."
        image={IMG.serverRoom}
      />

      <InternetHelp />

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Usage guide</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Thinking about how you use the internet
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A general starting point for conversations with your chosen provider. It is not a
            recommendation of any specific service.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            {USAGE.map(([who, level, what], i) => (
              <div
                key={who}
                className={`grid gap-2 p-6 sm:grid-cols-[1fr_auto_1.4fr] sm:items-center ${i ? "border-t border-border" : ""}`}
              >
                <p className="font-bold">{who}</p>
                <p className="flex items-center gap-2 text-sm font-bold text-primary">
                  <Gauge className="size-4" /> {level}
                </p>
                <p className="text-sm text-muted-foreground">{what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        items={[
          {
            icon: Wifi,
            title: "Whole-home Wi-Fi tips",
            copy: "General advice on router placement and reducing weak spots around your home.",
          },
          {
            icon: Upload,
            title: "Upload and download basics",
            copy: "What these terms mean and why video calls and large uploads can feel different.",
          },
          {
            icon: Gamepad2,
            title: "Gaming connections",
            copy: "Information about wired connections and factors that can affect responsiveness.",
          },
          {
            icon: MonitorPlay,
            title: "Streaming experience",
            copy: "General pointers for a smoother experience across several screens.",
          },
          {
            icon: Briefcase,
            title: "Working from home",
            copy: "Informational support for keeping a home office connection dependable.",
          },
          {
            icon: ShieldCheck,
            title: "Safer home networks",
            copy: "Basic guidance on guest networks, passwords and router settings.",
          },
        ]}
      />

      <section className="bg-background pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Equipment</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold">Understanding your router and setup</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We can explain, in general terms, how routers, gateways and mesh systems work and what
              to consider when your signal is uneven. We do not sell equipment, and we cannot
              guarantee a specific result.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground"
            >
              <Router className="size-4" /> Ask an advisor
            </a>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={IMG.routerDevice}
              alt="Wi-Fi router in a modern home"
              loading="lazy"
              className="h-[320px] w-full rounded-[0.75rem_3.5rem_0.75rem_3.5rem] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
