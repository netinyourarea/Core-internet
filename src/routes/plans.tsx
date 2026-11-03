import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route kept so old links land on the merged page.
export const Route = createFileRoute("/plans")({
  beforeLoad: () => {
    throw redirect({ to: "/internet", hash: "plans", replace: true });
  },
});
