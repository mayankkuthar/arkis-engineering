import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Lightbulb, ShieldCheck } from "lucide-react";
import { CtaBand, Eyebrow, PageHero } from "@/components/arkis-sections";
import { meta } from "@/lib/site-data";
import hero from "@/assets/industrial-workshop.jpg";
import portrait from "@/assets/ajay-veer-singh-portrait.png";
export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About ARKIS ENGINEERING | Industrial Engineering Faridabad",
      "Learn about Arkis Engineering, its vision, mission, values, and owner Ajay Veer Singh in Ballabgarh, Faridabad.",
      "/about",
    ),
  component: About,
});
const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Practical engineering ideas developed around real industrial challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "A focused approach to dependable equipment and responsive support.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Industrial solutions designed for consistent, demanding operation.",
  },
];
function About() {
  return (
    <>
      <PageHero
        title="About Arkis Engineering"
        subtitle="Smart Solutions for a Cleaner Future"
        image={hero}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <Eyebrow>Company Overview</Eyebrow>
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Arkis Engineering is a specialized engineering, fabrication, and manufacturing
                company established in the Seekri Industrial Area, Ballabgarh, Faridabad.
              </p>
              <p>
                Driven by our core commitment to Innovation, Reliability, and Performance, we
                engineer tailored machinery designed to meet demanding industrial environments.
              </p>
              <p>
                We specialize in high-durability material handling solutions—including Belt
                Conveyors, Screw Conveyors, Debalers, and Auto Feeders—alongside environmental
                equipment such as Agri-Waste and E-Waste Recycling Machines, Dust Collection
                Systems, and Air Pollution Control Measures (A.P.C.M.).
              </p>
              <p>
                Backed by fabrication infrastructure, precision machining, and technical expertise,
                we provide turnkey solutions from concept to commissioning.
              </p>
            </div>
          </div>
          <div className="border-l-4 border-accent bg-secondary p-8">
            <h2 className="text-2xl font-bold">Advanced Engineering. Sustainable Tomorrow.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Building Solutions, Delivering Trust.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-forest text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-px bg-primary-foreground/15 sm:grid-cols-2">
          <div className="bg-forest p-10 lg:p-14">
            <Eyebrow>Vision</Eyebrow>
            <p className="text-lg leading-8 text-primary-foreground/80">
              To emerge as a premier engineering and machinery manufacturing partner recognized for
              pioneering smart, sustainable solutions. We envision an industrial future driven by
              resource efficiency, advanced recycling, and clean-air technology that safeguards both
              productivity and the environment.
            </p>
          </div>
          <div className="bg-forest p-10 lg:p-14">
            <Eyebrow>Mission</Eyebrow>
            <p className="text-lg leading-8 text-primary-foreground/80">
              To design, fabricate, and deliver robust, high-performance mechanical systems and
              industrial equipment that solve real-world handling and environmental challenges. We
              are dedicated to providing low-maintenance, energy-efficient solutions backed by
              technical excellence and responsive service—consistently building solutions and
              delivering trust.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Eyebrow>Core Values</Eyebrow>
        <h2 className="text-3xl font-extrabold">What drives our work</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border-t-4 border-accent bg-card p-8 shadow-sm">
              <Icon className="size-9 text-primary" />
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <img
            src={portrait}
            alt="Ajay Veer Singh, Owner of Arkis Engineering"
            loading="lazy"
            className="mx-auto max-h-[600px] w-full max-w-md object-cover object-top"
          />
          <div>
            <Eyebrow>Company Leadership</Eyebrow>
            <h2 className="text-4xl font-extrabold">Ajay Veer Singh</h2>
            <p className="mt-2 font-semibold text-accent">Owner, Arkis Engineering</p>
            <p className="mt-6 leading-7 text-muted-foreground">
              Leading Arkis Engineering’s commitment to practical machinery, dependable fabrication,
              and responsive engineering support for industrial requirements.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
