import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route kept so old links land on the merged page.
export const Route = createFileRoute("/cable-tv")({
  beforeLoad: () => {
    throw redirect({ to: "/tv-mobile", hash: "cable-tv", replace: true });
  },
});
