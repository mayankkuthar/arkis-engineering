import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ProductCard } from "@/components/arkis-sections";
import { meta, products } from "@/lib/site-data";
import hero from "@/assets/conveyor-system.jpg";
export const Route = createFileRoute("/products/")({
  head: () =>
    meta(
      "Industrial Products | ARKIS ENGINEERING Faridabad",
      "Explore belt conveyors, screw conveyors, recycling machinery, dust collection, A.P.C.M., feeders, V-rollers, and fabrication works.",
      "/products",
    ),
  component: Products,
});
function Products() {
  return (
    <>
      <PageHero
        title="Industrial Products"
        subtitle="Reliable machinery and customized engineering solutions for demanding industrial applications."
        image={hero}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
