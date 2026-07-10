import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/app/PagePlaceholder";

export const Route = createFileRoute("/_app/insights/dashboards")({
  head: () => ({
    meta: [
      { title: "Dashboards — Data Automation Studio" },
      { name: "description", content: "Composable dashboards for teams and executives." },
    ],
  }),
  component: () => (
    <PagePlaceholder eyebrow="Data Insights" title="Dashboards" description="Composable dashboards for teams and executives." />
  ),
});
