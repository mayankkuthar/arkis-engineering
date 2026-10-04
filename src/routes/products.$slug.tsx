import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, FeatureList, WhatsAppButton } from "@/components/arkis-sections";
import { contact, meta, products } from "@/lib/site-data";
export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData, params }) =>
    meta(
      `${loaderData?.name ?? "Product"} | ARKIS ENGINEERING`,
      loaderData?.short ?? "Industrial machinery by ARKIS ENGINEERING.",
      `/products/${params.slug}`,
    ),
  component: Detail,
});
function Detail() {
  const p = Route.useLoaderData();
  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <div className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4" /> Products
          </Link>
        </div>
      </div>
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={p.image}
            alt={`${p.name} industrial illustration`}
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full object-cover"
          />
          <span className="absolute bottom-0 left-0 bg-forest px-3 py-2 text-xs font-semibold text-primary-foreground">
            Illustrative image
          </span>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-accent">
            Industrial Equipment
          </p>
          <h1 className="mt-3 text-4xl font-extrabold">{p.name}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{p.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="quote" size="lg">
              <Link to="/contact" search={{ interest: p.name }}>
                Enquire Now <ArrowRight />
              </Link>
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Key Features</h2>
            <div className="mt-6">
              <FeatureList items={p.features} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Product Overview</h2>
            <p className="mt-5 leading-7 text-muted-foreground">{p.short}</p>
            {p.applications && (
              <>
                <h3 className="mt-7 font-bold">Supported applications</h3>
                <p className="mt-2 text-muted-foreground">{p.applications}</p>
              </>
            )}
            <div className="mt-8 border-t border-border pt-5 text-sm">
              <a
                href={`tel:${contact.primaryPhone.replace(/\s/g, "")}`}
                className="mr-6 inline-flex items-center gap-2 font-semibold"
              >
                <Phone className="size-4" />
                {contact.primaryPhone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 font-semibold"
              >
                <Mail className="size-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/products/$slug"
              params={{ slug: r.slug }}
              className="border border-border p-5 font-heading font-bold transition-colors hover:border-accent hover:text-primary"
            >
              {r.name}
              <ArrowRight className="mt-4 size-4" />
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
