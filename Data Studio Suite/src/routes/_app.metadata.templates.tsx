import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/app/PagePlaceholder";

export const Route = createFileRoute("/_app/metadata/templates")({
  head: () => ({
    meta: [
      { title: "Metadata Templates — Data Automation Studio" },
      { name: "description", content: "Reusable metadata templates across entities." },
    ],
  }),
  component: () => (
    <PagePlaceholder eyebrow="Metadata" title="Metadata Templates" description="Reusable metadata templates across entities." />
  ),
});
