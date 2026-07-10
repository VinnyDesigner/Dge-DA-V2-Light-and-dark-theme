import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/app/PagePlaceholder";

export const Route = createFileRoute("/_app/insights/reports")({
  head: () => ({
    meta: [
      { title: "Reports — Data Automation Studio" },
      { name: "description", content: "Executive reports with scheduled PDF and Excel exports." },
    ],
  }),
  component: () => (
    <PagePlaceholder eyebrow="Data Insights" title="Reports" description="Executive reports with scheduled PDF and Excel exports." />
  ),
});
