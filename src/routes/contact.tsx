import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Contact Core Internet | Service Assistance";
const description =
  "Contact Core Internet for general guidance about internet, broadband, Wi-Fi and cable TV.";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title,
      description,
      path: "/contact",
      breadcrumb: [{ name: "Contact", path: "/contact" }],
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to an advisor"
        intro="Tell us what you would like help with and an advisor will get back to you with general guidance. We are not an ISP and are not affiliated with any provider."
        image={IMG.installer}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-6">
            <Eyebrow>Reach us</Eyebrow>
            <p className="text-sm font-semibold">Legal business name: Core Internet</p>
            <ul className="space-y-4">
              {[
                { icon: Phone, label: "(833) 878-1664", href: "tel:+18338781664" },
                {
                  icon: Mail,
                  label: "hello@coreinternet.online",
                  href: "mailto:hello@coreinternet.online",
                },
              ].map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <c.icon className="size-5 shrink-0 text-primary" />
                  <a
                    href={c.href}
                    className="min-w-0 truncate text-sm font-bold hover:text-primary"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm">1200 Fiber Lane, Suite 480, Austin, TX 78701</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-border bg-card p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">Request guidance</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Core Internet is a service assistance provider. We do not
              sell internet or cable services.
            </p>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              {[
                { name: "name", label: "Full name", type: "text" },
                { name: "email", label: "Email address", type: "email" },
                { name: "zip", label: "City or ZIP code (optional)", type: "text", optional: true },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    {f.label}
                  </span>
                  <input
                    required={!("optional" in f)}
                    name={f.name}
                    type={f.type}
                    className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/12"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                  What would you like help with?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background p-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/12"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
              >
                Send Message
              </button>
              {sent && (
                <p className="rounded-xl border border-accent/35 bg-accent/10 p-4 text-sm">
                  Thank you. An advisor will contact you with general guidance.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
