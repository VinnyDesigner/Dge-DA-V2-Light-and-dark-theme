import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/app/PagePlaceholder";

export const Route = createFileRoute("/_app/insights/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Data Automation Studio" },
      { name: "description", content: "Deep analytics across every layer and workflow." },
    ],
  }),
  component: () => (
    <PagePlaceholder eyebrow="Data Insights" title="Analytics" description="Deep analytics across every layer and workflow." />
  ),
});
