import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/arkis-sections";
import { meta } from "@/lib/site-data";
import workshop from "@/assets/industrial-workshop.jpg";
import conveyor from "@/assets/conveyor-system.jpg";
import screw from "@/assets/screw-conveyor.jpg";
import environmental from "@/assets/environmental-systems.jpg";
import brochure from "@/assets/arkis-brochure.png";
import office from "@/assets/ajay-veer-singh-office.png";
export const Route = createFileRoute("/gallery")({
  head: () =>
    meta(
      "Engineering Gallery | ARKIS ENGINEERING",
      "View ARKIS Engineering brand and company photography alongside illustrative machinery and industrial engineering visuals.",
      "/gallery",
    ),
  component: Gallery,
});
const images = [
  {
    src: workshop,
    cat: "Manufacturing Facility",
    caption: "Industrial fabrication workshop — illustrative image",
  },
  {
    src: conveyor,
    cat: "Conveyor Systems",
    caption: "Belt conveyor and V-roller system — illustrative image",
  },
  {
    src: screw,
    cat: "Machinery & Equipment",
    caption: "Screw conveyor system — illustrative image",
  },
  {
    src: environmental,
    cat: "Engineering & Workshop",
    caption: "Dust collection and environmental equipment — illustrative image",
  },
  { src: brochure, cat: "Company Branding", caption: "ARKIS Engineering product overview" },
  { src: office, cat: "Company", caption: "Ajay Veer Singh at the ARKIS Engineering office" },
];
function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((active + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((active - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [active]);
  return (
    <>
      <PageHero
        title="Engineering Gallery"
        subtitle="Company photography, brand material, and clearly marked illustrative industrial visuals."
        image={workshop}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((im, i) => (
            <button
              key={im.caption}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden text-left ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              aria-label={`Open ${im.caption}`}
            >
              <img
                src={im.src}
                alt={im.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-forest/90 p-4 text-primary-foreground">
                <span className="block text-xs font-bold uppercase text-gold">{im.cat}</span>
                <span className="mt-1 block text-sm">{im.caption}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
      {active !== null && images[active] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
        >
          <Button
            size="icon"
            variant="industrial"
            className="absolute right-5 top-5"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X />
          </Button>
          <Button
            size="icon"
            variant="industrial"
            className="absolute left-5"
            onClick={() => setActive((active - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </Button>
          <figure className="max-w-5xl">
            <img
              src={images[active].src}
              alt={images[active].caption}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-primary-foreground">
              {images[active].caption}
            </figcaption>
          </figure>
          <Button
            size="icon"
            variant="industrial"
            className="absolute right-5"
            onClick={() => setActive((active + 1) % images.length)}
            aria-label="Next image"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </>
  );
}
