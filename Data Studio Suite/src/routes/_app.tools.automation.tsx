import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/app/PagePlaceholder";

export const Route = createFileRoute("/_app/tools/automation")({
  head: () => ({
    meta: [
      { title: "Automation Tools — Data Automation Studio" },
      { name: "description", content: "Reusable automations across pipelines and entities." },
    ],
  }),
  component: () => (
    <PagePlaceholder eyebrow="Tool Management" title="Automation Tools" description="Reusable automations across pipelines and entities." />
  ),
});
