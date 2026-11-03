import { pageHead } from "@/lib/seo";
import { FAQS } from "@/lib/faqs";
import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  BeforeContact,
  Faq,
  FinalCta,
  Hero,
  InternetHelp,
  MoreGuides,
  Steps,
  SupportTopics,
  Ticker,
  TroubleshootTeaser,
  TvHelp,
  WifiHelp,
} from "@/components/site/home-sections";
import { TransparencyBanner } from "@/components/site/blocks";

const title = "Internet Customer Support & Troubleshooting Help | Core Internet";
const description =
  "Independent internet connection help: troubleshooting for Wi-Fi, routers, TV, mobile and business connectivity, plus outage guidance. Not an official provider.";

export const Route = createFileRoute("/")({
  head: () => {
    const base = pageHead({ title, description, path: "/" });
    return {
      ...base,
      scripts: [
        ...base.scripts,
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Ticker />
      <SupportTopics />
      <TransparencyBanner />
      <InternetHelp />
      <Steps />
      <TvHelp />
      <WifiHelp />
      <TroubleshootTeaser />
      <MoreGuides />
      <BeforeContact />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}
