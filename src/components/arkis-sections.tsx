import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, type Product } from "@/lib/site-data";

export function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-accent">{children}</p>
  );
}
export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative isolate min-h-[360px] overflow-hidden bg-forest">
      <img
        src={image}
        alt="Industrial engineering illustration"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-forest/80" />
      <div className="mx-auto flex min-h-[360px] max-w-7xl items-end px-4 pb-14 sm:px-6">
        <div className="max-w-3xl animate-rise">
          <Eyebrow>ARKIS Engineering</Eyebrow>
          <h1 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} industrial illustration`}
          loading="lazy"
          width={1408}
          height={1008}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-0 bg-forest px-3 py-1 text-[10px] font-semibold uppercase text-primary-foreground">
          Illustrative image
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{product.short}</p>
        <Button asChild variant="link" className="mt-3 h-auto px-0">
          <Link to="/products/$slug" params={{ slug: product.slug }}>
            View Details <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
export function CtaBand() {
  return (
    <section className="bg-forest text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 py-14 sm:px-6 lg:flex-row lg:items-center">
        <div>
          <Eyebrow>Custom Engineering</Eyebrow>
          <h2 className="text-3xl font-extrabold">Looking for a Custom Industrial Solution?</h2>
          <p className="mt-3 max-w-2xl text-primary-foreground/70">
            Tell us about your material handling, recycling, or fabrication requirements. Our team
            can discuss a solution tailored to your application.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="quote" size="lg">
            <Link to="/contact">
              Request a Quote <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="industrial" size="lg">
            <a href={`tel:${contact.primaryPhone.replace(/\s/g, "")}`}>
              <Phone /> Call Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-sm leading-6">
          <span className="mt-1 flex size-5 shrink-0 items-center justify-center bg-secondary text-primary">
            <Check className="size-3" />
          </span>
          {i}
        </li>
      ))}
    </ul>
  );
}
export function WhatsAppButton({ label = "Enquire on WhatsApp" }: { label?: string }) {
  return (
    <Button asChild variant="outline" size="lg">
      <a href={contact.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle />
        {label}
      </a>
    </Button>
  );
}
