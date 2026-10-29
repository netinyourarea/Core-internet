import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Terms & Conditions | Core Internet";
const description =
  "The terms governing use of Core Internet's independent broadband and cable connection assistance service.";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/terms",
      breadcrumb: [{ name: "Terms & Conditions", path: "/terms" }],
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms of using our service"
        intro="Please read these terms before using this website or contacting us."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>Nature of the service</h2>
        <p>
          We provide general guidance and informational support related to internet, broadband,
          Wi-Fi and cable TV services. We do not own, operate or control any network, we do not
          deliver internet or television service, and we do not sell subscriptions. Our role is
          limited to independent guidance and assistance only.
        </p>
        <h2>No affiliation or authority</h2>
        <p>
          We are not an official support channel for any brand and have no partnership,
          authorization or certification from any provider. Provider names, if mentioned, are for
          information only.
        </p>
        <h2>Accuracy of information</h2>
        <p>
          Information is general and may not reflect your circumstances. Service availability,
          speeds, channel line-ups and timelines are set by the relevant provider and may change
          without notice. We do not guarantee any technical fix or outcome.
        </p>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Provide accurate contact details when you reach out.</li>
          <li>Review the provider's own terms before accepting any service from them.</li>
          <li>Use the site lawfully and without attempting to disrupt it.</li>
        </ul>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for provider delays, service
          interruptions, installation outcomes or any indirect losses arising from third-party
          services.
        </p>
        <h2>Changes</h2>
        <p>These terms may be updated periodically; continued use constitutes acceptance.</p>
      </Prose>
    </>
  );
}
