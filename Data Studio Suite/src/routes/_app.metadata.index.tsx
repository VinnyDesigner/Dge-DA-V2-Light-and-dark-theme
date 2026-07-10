import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/app/PagePlaceholder";

export const Route = createFileRoute("/_app/metadata/")({
  head: () => ({
    meta: [
      { title: "Metadata — Data Automation Studio" },
      { name: "description", content: "Metadata explorer, templates, schema and approvals." },
    ],
  }),
  component: () => (
    <PagePlaceholder eyebrow="Metadata" title="Metadata" description="Metadata explorer, templates, schema and approvals." />
  ),
});
