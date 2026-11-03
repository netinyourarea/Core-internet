import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { EMAIL, PHONE, PHONE_HREF, PHONE_LABEL } from "@/lib/contact";
import { Checklist, TransparencyNote } from "@/components/site/blocks";
import { BEFORE_CONTACT } from "@/lib/guides";
import { PageHero } from "@/components/site/page-shell";
import { Reveal, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

const title = "Contact Core Internet | Independent General Assistance";
const description =
  "Contact Core Internet for independent general-information assistance on internet, Wi-Fi, TV, mobile and business connectivity. Not an official provider contact.";

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
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `City or ZIP: ${f.get("zip") || "-"}`,
      "",
      `${f.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("General assistance request")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get General Assistance"
        intro="Ask a general question about internet, Wi-Fi, TV, mobile or business connectivity. Core Internet is an independent information resource and is not affiliated with any provider."
        image={IMG.installer}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-6">
            <Eyebrow>Reach us</Eyebrow>
            <p className="text-sm font-semibold">Legal business name: Core Internet</p>
            <ul className="space-y-4">
              {[
                { icon: Phone, label: PHONE, href: PHONE_HREF },
                {
                  icon: Mail,
                  label: EMAIL,
                  href: `mailto:${EMAIL}`,
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
            </ul>
            <p className="text-sm font-semibold text-foreground">{PHONE_LABEL}</p>
            <TransparencyNote />
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-border bg-card p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">Send a general question</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Core Internet is an independent information resource. Submitting opens your email app with your message ready to send; nothing is sent until you send it. Do not include passwords or one-time codes.
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
                  Your email app should have opened with your message. Please send it from there. If nothing opened, email us at the address shown.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Before You Contact Customer Support
          </h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">
            Have these ready for any support conversation.
          </p>
          <Checklist items={BEFORE_CONTACT} label="Before you contact customer support" />
        </div>
      </section>
    </>
  );
}
