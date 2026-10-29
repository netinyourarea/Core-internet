import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Disclaimer | Core Internet";
const description =
  "Core Internet is an independent third-party service assistance provider and is not affiliated with any internet, cable or telecom service provider.";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/disclaimer",
      breadcrumb: [{ name: "Disclaimer", path: "/disclaimer" }],
    }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclaimer"
        title="Independent third-party service"
        intro="Important information about who we are, who we are not, and our independence from internet and cable providers."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>Who we are</h2>
        <p>
          Core Internet is an independent third-party service assistance provider offering
          general guidance related to internet, broadband, Wi-Fi and cable TV services. We do not
          provide internet or cable services directly.
        </p>
        <h2>What we do not do</h2>
        <ul>
          <li>We are not an Internet Service Provider (ISP).</li>
          <li>We do not provide official customer support for any brand.</li>
          <li>
            We are not affiliated with, authorized by, or endorsed by any telecom or cable company.
          </li>
          <li>We do not sell internet or cable subscriptions.</li>
          <li>We do not provide guaranteed technical fixes.</li>
        </ul>
        <h2>No affiliation</h2>
        <p>
          Any provider names or trademarks referenced on this website are used strictly for
          informational purposes and remain the property of their respective owners. Their use does
          not imply any partnership, authorization, certification or endorsement.
        </p>
        <h2>Information accuracy</h2>
        <p>
          Information on this website is general and informational. Service availability, speeds,
          channel line-ups and timelines are determined by the relevant provider and may change.
        </p>
        <h2>No guarantee</h2>
        <p>
          We do not guarantee availability, performance or any specific outcome, as these are
          determined entirely by the provider delivering the service.
        </p>
      </Prose>
    </>
  );
}
