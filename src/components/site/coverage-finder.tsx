import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2, MapPin, Tv, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

export function CoverageFinder({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [value, setValue] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const dark = tone === "dark";

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setState("loading");
    window.setTimeout(() => setState("done"), 900);
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 sm:p-8",
        dark ? "glass-tide text-cream" : "soft-card",
      )}
    >
      <span
        className={cn(
          "absolute -top-16 -right-14 size-44 rounded-full blur-3xl",
          dark ? "bg-aqua/25" : "bg-primary/10",
        )}
      />
      <div className="relative">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase",
            dark ? "bg-cream/10 text-aqua" : "bg-primary/10 text-primary",
          )}
        >
          <MapPin className="size-3.5" /> Coverage finder
        </span>

        <h2 className="mt-4 font-display text-2xl font-extrabold">
          See what&apos;s live on your street
        </h2>
        <p className={cn("mt-2 text-sm", dark ? "text-cream/65" : "text-muted-foreground")}>
          Drop in a ZIP or address — we&apos;ll map the fiber, cable and TV lines already serving
          it.
        </p>

        <form
          onSubmit={onSubmit}
          className={cn(
            "mt-6 flex flex-col gap-2 rounded-full p-2 sm:flex-row sm:items-center",
            dark ? "bg-cream/8 ring-1 ring-cream/15" : "bg-secondary/70",
          )}
        >
          <label className="flex-1">
            <span className="sr-only">ZIP code or street address</span>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setState("idle");
              }}
              placeholder="Enter ZIP code or address"
              className={cn(
                "h-11 w-full rounded-full bg-transparent px-4 text-sm font-medium outline-none",
                dark
                  ? "text-cream placeholder:text-cream/45"
                  : "text-foreground placeholder:text-muted-foreground/70",
              )}
            />
          </label>
          <button
            type="submit"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-primary transition-colors hover:bg-aqua"
          >
            {state === "loading" ? <Loader2 className="size-4 animate-spin" /> : null}
            Check
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {state === "done" ? (
          <div
            className={cn(
              "mt-5 rounded-2xl p-4 text-sm",
              dark ? "bg-aqua/12 ring-1 ring-aqua/30" : "bg-primary/6 ring-1 ring-primary/15",
            )}
          >
            <p className="flex items-start gap-2 font-semibold">
              <Check className="mt-0.5 size-4 shrink-0 text-coral" />
              <span>Good news — services usually reach {value}.</span>
            </p>
            <ul
              className={cn(
                "mt-3 grid gap-2 pl-6",
                dark ? "text-cream/70" : "text-muted-foreground",
              )}
            >
              <li className="flex items-center gap-2">
                <Wifi className="size-4 text-aqua" /> Fiber and cable internet options
              </li>
              <li className="flex items-center gap-2">
                <Tv className="size-4 text-aqua" /> Cable TV packs and add-ons
              </li>
            </ul>
          </div>
        ) : (
          <ul className="mt-5 flex flex-wrap gap-2">
            {["Free check", "No obligation", "Fast reply"].map((t) => (
              <li
                key={t}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold",
                  dark ? "bg-cream/8 text-cream/70" : "bg-secondary text-muted-foreground",
                )}
              >
                <Check className="size-3.5 text-primary" /> {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
