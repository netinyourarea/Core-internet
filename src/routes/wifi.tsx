import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy route kept so old links land on the merged page.
export const Route = createFileRoute("/wifi")({
  beforeLoad: () => {
    throw redirect({ to: "/internet", hash: "wifi", replace: true });
  },
});
