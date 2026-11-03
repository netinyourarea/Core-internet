import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose, DisclaimerBlock } from "@/components/site/page-shell";

const title = "Advertisement Disclosure | Core Internet";
const description =
  "How Core Internet, an independent third-party service assistance provider, advertises its services and what our advertisements mean.";

export const Route = createFileRoute("/advertisement-disclosure")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/advertisement-disclosure",
      breadcrumb: [{ name: "Advertisement Disclosure", path: "/advertisement-disclosure" }],
    }),
  component: AdvertisementDisclosurePage,
});

function AdvertisementDisclosurePage() {
  return (
    <>
      <PageHero
        eyebrow="Advertisement Disclosure"
        title="About our advertising"
        intro="What you should know when you reach this website from an online advertisement."
      />
      <Prose>
        <DisclaimerBlock />
        <h2>Independent assistance</h2>
        <p>
          Our advertisements describe independent assistance. Core Internet offers general
          guidance and informational support related to internet, broadband, Wi-Fi and cable TV
          services. Our role is limited to independent guidance and assistance only.
        </p>
        <h2>What our advertisements do not mean</h2>
        <ul>
          <li>We are not an Internet Service Provider (ISP).</li>
          <li>We are not an official support channel for any brand.</li>
          <li>
            We are not affiliated with, authorized by, certified by, or endorsed by any internet,
            cable, or telecom service provider.
          </li>
          <li>We do not sell internet or cable subscriptions.</li>
          <li>We do not guarantee technical fixes or any specific outcome.</li>
        </ul>
        <h2>Use of provider names</h2>
        <p>
          Where a provider or brand name appears in an advertisement or on this website, it is used
          strictly for informational purposes and remains the property of its owner. We do not use
          provider logos, and no partnership is implied.
        </p>
        <h2>Consistency with this website</h2>
        <p>
          The wording of our advertisements is intended to match the content of this website. If you
          find any statement that appears unclear or misleading, please tell us at
          <a href="mailto:hello@coreinternet.online" className="font-bold underline">hello@coreinternet.online</a> so we can correct it.
        </p>
        <h2>Third-party advertising platforms</h2>
        <p>
          Our advertisements may appear on third-party platforms such as search engines. Those
          platforms operate independently and may collect information under their own privacy
          policies. See our Privacy Policy for how we handle information you give us.
        </p>
        <h2>Contact</h2>
        <p>
          Core Internet · <a href="tel:+18338781664" className="font-bold underline">(833) 878-1664</a> · <a href="mailto:hello@coreinternet.online" className="font-bold underline">hello@coreinternet.online</a>
        </p>
      </Prose>
    </>
  );
}
