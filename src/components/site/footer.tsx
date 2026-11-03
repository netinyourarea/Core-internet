import { Link } from "@tanstack/react-router";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "./header";
import { NetworkPattern } from "./primitives";
import { EMAIL, PHONE, PHONE_HREF, PHONE_LABEL, TRANSPARENCY_STATEMENT } from "@/lib/contact";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Support",
    links: [
      { label: "Home", to: "/" },
      { label: "Internet Help", to: "/internet" },
      { label: "TV & Mobile", to: "/tv-mobile" },
      { label: "Business", to: "/business" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "Advertisement Disclosure", to: "/advertisement-disclosure" },
    ],
  },
];

export const BUSINESS_NAME = "Core Internet";

export const INDEPENDENT_STATEMENT =
  "Core Internet is an independent information and assistance resource. It is not an internet provider and is not affiliated with any telecommunications provider.";

export const DISCLAIMER_TEXT =
  "Core Internet is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.";

export function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="tide-bg relative isolate overflow-hidden shape-a text-cream">
        <NetworkPattern className="text-aqua/40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-10 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div className="max-w-sm">
              <Logo tone="light" />
              <p className="mt-5 text-sm leading-relaxed text-cream/70">{INDEPENDENT_STATEMENT}</p>
              <p className="mt-6 text-sm font-semibold text-cream">
                Legal business name: {BUSINESS_NAME}
              </p>
              <ul className="mt-3 space-y-3 text-sm text-cream/75">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-aqua" />
                  <span>
                    <a href={PHONE_HREF} className="hover:text-aqua">
                      {PHONE}
                    </a>
                    <span className="mt-0.5 block text-xs text-cream/70">{PHONE_LABEL}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-aqua" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-aqua">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold tracking-[0.2em] text-aqua uppercase">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="group inline-flex items-center gap-1 text-sm text-cream/70 transition-colors hover:text-cream"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-cream/6 p-6 ring-1 ring-cream/12">
            <h4 className="text-sm font-bold text-coral">Independent Service Disclosure</h4>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">{TRANSPARENCY_STATEMENT}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Core Internet. All rights reserved.</p>
            <p>Independent information resource. Not an ISP.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
