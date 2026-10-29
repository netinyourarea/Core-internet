import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  Faq,
  FinalCta,
  Hero,
  InternetHelp,
  Steps,
  TvHelp,
  Ticker,
  WhatWeDo,
  WhatWeDoNot,
  WifiHelp,
} from "@/components/site/home-sections";

const title = "Internet & Cable Service Assistance | Core Internet";
const description =
  "Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services Not an ISP.";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title, description, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhatWeDo />
      <WhatWeDoNot />
      <InternetHelp />
      <Steps />
      <TvHelp />
      <WifiHelp />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}
