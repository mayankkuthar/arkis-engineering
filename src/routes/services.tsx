import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Leaf, Recycle, Settings, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero } from "@/components/arkis-sections";
import { meta } from "@/lib/site-data";
import hero from "@/assets/industrial-workshop.jpg";
export const Route = createFileRoute("/services")({
  head: () =>
    meta(
      "Engineering & Fabrication Services | ARKIS ENGINEERING",
      "Custom machinery manufacturing, industrial fabrication, material handling, recycling equipment, dust collection, and technical project assistance.",
      "/services",
    ),
  component: Services,
});
const services = [
  {
    icon: Settings,
    title: "Engineering & Machinery Manufacturing",
    text: "Custom machinery development and industrial equipment manufacturing.",
  },
  {
    icon: Wrench,
    title: "Industrial Fabrication",
    text: "Fabrication work for machinery and industrial structures.",
  },
  {
    icon: Truck,
    title: "Material Handling Solutions",
    text: "Conveyor systems, feeders, and material movement equipment.",
  },
  {
    icon: Recycle,
    title: "Recycling Equipment Solutions",
    text: "Machinery for agricultural waste and electronic waste recycling applications.",
  },
  {
    icon: Leaf,
    title: "Dust Collection & Air Pollution Control",
    text: "Industrial dust management and air pollution control equipment.",
  },
  {
    icon: Factory,
    title: "Technical Support & Project Assistance",
    text: "Technical assistance and project coordination based on actual project requirements.",
  },
];
function Services() {
  return (
    <>
      <PageHero
        title="Engineering Services"
        subtitle="Practical support for custom machinery, fabrication, material handling, and environmental equipment requirements."
        image={hero}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center bg-primary text-primary-foreground">
                <Icon />
              </span>
              <h2 className="mt-6 text-xl font-bold">{title}</h2>
              <p className="mt-3 min-h-20 leading-7 text-muted-foreground">{text}</p>
              <Button asChild variant="link" className="mt-4 h-auto px-0">
                <Link to="/contact" search={{ interest: title }}>
                  Discuss This Service <ArrowRight />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
