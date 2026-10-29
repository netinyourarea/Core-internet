import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { HardDrive, Languages, Radio, Smartphone, Trophy, Tv2, Users } from "lucide-react";
import { PageHero, FeatureGrid, CtaStrip } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { TvHelp } from "@/components/site/home-sections";
import { IMG } from "@/lib/images";

const title = "Cable TV Information & Guidance | Core Internet";
const description =
  "General informational support about cable TV services from Core Internet. We do not sell TV service.";

export const Route = createFileRoute("/cable-tv")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/cable-tv",
      breadcrumb: [{ name: "Cable TV", path: "/cable-tv" }],
    }),
  component: CableTvPage,
});

const GENRES = [
  ["Sports", IMG.sportsTv, "General information on sports channels and live event coverage"],
  ["Movies", IMG.cinema, "What to know about movie channels and on-demand features"],
  ["Family", IMG.familyTv, "Kids, learning and general entertainment content options"],
];

function CableTvPage() {
  return (
    <>
      <PageHero
        eyebrow="Cable TV"
        title="Informational support for cable TV"
        intro="General guidance to help you understand cable TV features and terms. We are an assistance provider and do not sell or provide TV service."
        image={IMG.remoteControl}
      />

      <TvHelp />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>What we can explain</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Built around your viewing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {GENRES.map(([name, img, copy], i) => (
              <Reveal
                key={name}
                delay={i * 80}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={img}
                  alt={`${name} on TV`}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-extrabold">{name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        items={[
          {
            icon: Tv2,
            title: "HD and 4K basics",
            copy: "What picture-quality terms mean and what your TV and equipment need.",
          },
          {
            icon: HardDrive,
            title: "DVR features",
            copy: "A general explanation of recording, pausing and replaying live TV.",
          },
          {
            icon: Trophy,
            title: "Sports and live events",
            copy: "Things to look for when you follow sports and live programming.",
          },
          {
            icon: Users,
            title: "Multi-room viewing",
            copy: "General information about watching in more than one room.",
          },
          {
            icon: Smartphone,
            title: "Watching on any screen",
            copy: "How provider apps usually work on phones, tablets and smart TVs.",
          },
          {
            icon: Languages,
            title: "Language and regional content",
            copy: "General pointers for finding regional and language programming.",
          },
        ]}
      />

      <section className="bg-charcoal py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="light">Setup questions</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold">Helping you understand your TV setup</h2>
            <p className="mt-4 leading-relaxed text-ivory/70">
              If you are unsure how receivers, remotes or apps fit together, an advisor
              can explain the basics in plain language. For account, billing or technical support,
              please contact your TV provider directly.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-ivory/75">
              {[
                "Understanding receivers and remotes",
                "How channel lists are organised",
                "General DVR and app basics",
                "What to ask your provider",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Radio className="size-4 text-aqua" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={IMG.livingRoomTv}
              alt="TV in a living room"
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
