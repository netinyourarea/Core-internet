import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/page-shell";

const title = "Privacy Policy | Core Internet";
const description =
  "How Core Internet collects, uses and protects personal information you share when you contact us for guidance.";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/privacy-policy",
      breadcrumb: [{ name: "Privacy Policy", path: "/privacy-policy" }],
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your information, handled carefully"
        intro="What we collect when you contact us or use our tools, and what happens to it afterwards."
      />
      <Prose>
        <p>
          Core Internet is an independent third-party service assistance provider. We are not
          affiliated with, authorized by, or endorsed by any internet, cable, or telecom service
          provider. This policy explains how we handle personal information.
        </p>
        <h2>Information we collect</h2>
        <p>
          We collect the details you choose to provide: name, phone number, email address, service
          address or locality, and a description of your question. We also collect basic analytics
          such as pages visited and approximate region.
        </p>
        <h2>How we use it</h2>
        <ul>
          <li>To respond to your enquiry and provide general guidance.</li>
          <li>To contact you about the assistance you asked for.</li>
          <li>To improve our website and the clarity of our information.</li>
        </ul>
        <h2>Sharing</h2>
        <p>
          We do not sell personal information. Details are shared only with service providers who
          help us operate this website, or where required by law. We do not submit your details to
          any internet or cable provider on your behalf without your explicit instruction.
        </p>
        <h2>Retention and your rights</h2>
        <p>
          Enquiry records are retained for up to 24 months. You may ask us to access, correct or
          delete your information at any time by emailing hello@coreinternet.online.
        </p>
        <h2>Cookies and advertising</h2>
        <p>
          We use essential cookies for site functionality and analytics to understand usage. If you
          arrive from an online advertisement, advertising platforms may use cookies as described in
          their own policies. You can disable non-essential cookies in your browser.
        </p>
        <h2>Contact</h2>
        <p>
          Core Internet · (833) 878-1664 · hello@coreinternet.online · 1200 Fiber Lane, Suite 480,
          Austin, TX 78701
        </p>
      </Prose>
    </>
  );
}
