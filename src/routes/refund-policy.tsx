import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Refund Policy | Core Internet";
const description =
  "Refund and cancellation information for Core Internet, an independent third-party service assistance provider.";

export const Route = createFileRoute("/refund-policy")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/refund-policy",
      breadcrumb: [{ name: "Refund Policy", path: "/refund-policy" }],
    }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Refund Policy"
        title="Cancellations and refunds"
        intro="Our guidance is provided without charge. Charges from any provider are governed by that provider."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>No charge for guidance</h2>
        <p>
          General guidance and informational support from Core Internet is provided without
          charge, so no refund is applicable. We do not sell internet or cable subscriptions.
        </p>
        <h2>Provider charges</h2>
        <p>
          Any installation charges, equipment costs or subscription fees are set and billed solely
          by the service provider you choose. We are not a party to that agreement, so refunds and
          cancellations for those amounts must be requested directly from that provider under its
          own policy.
        </p>
        <h2>Questions</h2>
        <p>
          If you believe you were charged in connection with our website in error, email
          hello@coreinternet.online with the details and we will review it promptly.
        </p>
        <h2>Refund timeline</h2>
        <p>
          If a refund is approved, it is processed within 7 to 15 business days and returned to the
          original payment method. The exact time it appears in your account may vary depending on
          your bank or card issuer.
        </p>
      </Prose>
    </>
  );
}
