import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route kept so old links land on the merged page.
export const Route = createFileRoute("/mobile")({
  beforeLoad: () => {
    throw redirect({ to: "/tv-mobile", hash: "mobile", replace: true });
  },
});
