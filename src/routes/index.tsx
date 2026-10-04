import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Gauge, Leaf, Settings, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Eyebrow, ProductCard } from "@/components/arkis-sections";
import { contact, meta, products } from "@/lib/site-data";
import hero from "@/assets/industrial-workshop.jpg";
import brochure from "@/assets/arkis-brochure.png";

export const Route = createFileRoute("/")({
  head: () => ({
    ...meta(
      "ARKIS ENGINEERING | Industrial Machinery Manufacturer in Faridabad",
      "Industrial machinery, conveyors, recycling equipment, dust collection systems, and fabrication solutions in Ballabgarh, Faridabad.",
      "/",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ARKIS ENGINEERING",
          founder: "Ajay Veer Singh",
          telephone: contact.phones,
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plot No. 30, Harfala Road, Near Gas Company, Seekri Industrial Area, Sikri",
            addressLocality: "Ballabgarh, Faridabad",
            addressRegion: "Haryana",
            postalCode: "121004",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const benefits = [
  {
    icon: Gauge,
    title: "High Performance",
    text: "Machinery designed for demanding industrial applications.",
  },
  {
    icon: ShieldCheck,
    title: "Robust & Durable",
    text: "Heavy-duty engineering and fabrication for long-term use.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    text: "Equipment supporting recycling and environmental management.",
  },
  {
    icon: Settings,
    title: "Low Maintenance",
    text: "Solutions designed with operational practicality in mind.",
  },
  {
    icon: Factory,
    title: "High Efficiency & Reliability",
    text: "Engineering focused on consistent and dependable operation.",
  },
  {
    icon: Wrench,
    title: "Expert Support & Service",
    text: "Technical assistance and responsive customer support.",
  },
];
function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100vh-7rem)] items-end overflow-hidden bg-forest">
        <img
          src={hero}
          alt="Illustrative industrial conveyor and fabrication workshop"
          width={1600}
          height={912}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-forest/75" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6">
          <div className="max-w-4xl animate-rise">
            <Eyebrow>Engineering · Fabrication · Manufacturing</Eyebrow>
            <h1 className="text-4xl font-extrabold leading-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              SMART SOLUTIONS FOR A <span className="text-gold">CLEANER FUTURE</span>
            </h1>
            <p className="mt-5 text-xl font-semibold text-primary-foreground">
              Advanced Engineering. Sustainable Tomorrow.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-primary-foreground/75">
              Engineering robust, reliable, and efficient machinery for material handling,
              recycling, and industrial environmental solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="quote" size="lg">
                <Link to="/products">
                  Explore Our Products <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="industrial" size="lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[.18em] text-primary-foreground/60">
            Illustrative industrial imagery
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Engineering Excellence. Built on Trust.
          </h2>
          <div className="mt-6 space-y-4 leading-7 text-muted-foreground">
            <p>
              Arkis Engineering is a specialized engineering, fabrication, and manufacturing company
              established in the Seekri Industrial Area, Ballabgarh, Faridabad.
            </p>
            <p>
              Driven by our commitment to Innovation, Reliability, and Performance, we engineer
              tailored machinery designed to meet demanding industrial environments.
            </p>
            <p>
              We specialize in high-durability material handling solutions and environmental
              equipment, providing engineering support from concept to commissioning.
            </p>
            <p>
              Our mission is simple: Building Solutions, Delivering Trust while powering a cleaner,
              more sustainable tomorrow.
            </p>
          </div>
          <Button asChild className="mt-7" size="lg">
            <Link to="/about">
              Know More About Us <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="relative">
          <img
            src={brochure}
            alt="ARKIS Engineering product and brand overview"
            loading="lazy"
            className="w-full border border-border shadow-xl"
          />
          <div className="absolute -bottom-4 -left-4 h-20 w-2 bg-accent" />
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Eyebrow>Industrial Solutions</Eyebrow>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Our Products</h2>
              <p className="mt-3 text-muted-foreground">
                Reliable machinery and customized engineering solutions for demanding industrial
                applications.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">
                View All Products <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Eyebrow>Why ARKIS</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-extrabold sm:text-4xl">
          Built for Performance. Designed for Reliability.
        </h2>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-background p-7">
              <Icon className="size-9 text-accent" />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-forest text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="overflow-hidden">
            <img
              src={hero}
              alt="Illustrative view of conveyor fabrication and machinery assembly"
              loading="lazy"
              width={1600}
              height={912}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>Manufacturing & Infrastructure</Eyebrow>
            <h2 className="text-3xl font-extrabold">Engineering in Action</h2>
            <p className="mt-5 leading-7 text-primary-foreground/75">
              From fabrication and precision machining to machinery assembly, Arkis Engineering
              focuses on delivering practical engineering solutions for industrial requirements.
            </p>
            <p className="mt-5 text-xs uppercase tracking-[.14em] text-gold">
              Illustrative industrial imagery
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl font-extrabold">Let’s discuss your requirement.</h2>
          <div className="mt-6 space-y-3 text-muted-foreground">
            {contact.phones.map((p) => (
              <p key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-primary">
                  {p}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </p>
            <p>{contact.address}</p>
          </div>
          <Button asChild className="mt-6">
            <Link to="/contact">
              Send an Enquiry <ArrowRight />
            </Link>
          </Button>
        </div>
        <a
          href={contact.map}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-64 items-center justify-center border border-border bg-secondary p-8 text-center transition-colors hover:bg-muted"
        >
          <span>
            <Factory className="mx-auto size-10 text-accent" />
            <strong className="mt-4 block font-heading text-xl">Seekri Industrial Area</strong>
            <span className="mt-2 block text-sm text-muted-foreground">
              Open verified address in Google Maps
            </span>
          </span>
        </a>
      </section>
    </>
  );
}
