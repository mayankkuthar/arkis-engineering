import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/arkis-sections";
import { meta } from "@/lib/site-data";
import brochure from "@/assets/arkis-brochure.png";
import office from "@/assets/ajay-veer-singh-office.png";
import facility from "@/assets/photos/factory-exterior.jpg";

// Real project and facility photography supplied by the client.
const photos = import.meta.glob<string>("../assets/photos/*.jpg", {
  eager: true,
  import: "default",
});
function photo(name: string) {
  const src = photos[`../assets/photos/${name}.jpg`];
  if (!src) throw new Error(`Missing gallery photo: ${name}`);
  return src;
}

export const Route = createFileRoute("/gallery")({
  head: () =>
    meta(
      "Project Gallery | ARKIS ENGINEERING",
      "Photos of conveyors, shredding lines, feeders, V-rollers and fabrication work by ARKIS Engineering, Ballabgarh, Faridabad.",
      "/gallery",
    ),
  component: Gallery,
});

const CONVEYORS = "Conveyor Systems";
const RECYCLING = "Recycling & Shredding Lines";
const FEEDERS = "Debalers & Auto Feeders";
const FABRICATION = "Fabrication Works";
const FACILITY = "Our Facility";

const images: { src: string; cat: string; caption: string }[] = [
  {
    src: photo("recycling-plant-conveyor-line"),
    cat: RECYCLING,
    caption: "Shredding plant with feed conveyors and control panels",
  },
  { src: facility, cat: FACILITY, caption: "ARKIS Engineering factory, Seekri, Ballabgarh" },
  {
    src: photo("fabrication-drilling"),
    cat: FABRICATION,
    caption: "Magnetic drilling on structural steel",
  },
  {
    src: photo("trough-belt-conveyor"),
    cat: CONVEYORS,
    caption: "Troughed belt conveyor with side guards",
  },
  {
    src: photo("shredder-straw-bales"),
    cat: RECYCLING,
    caption: "Agri-waste shredding line beside straw bales",
  },
  {
    src: photo("bale-feeder-hopper"),
    cat: FEEDERS,
    caption: "Bale feeding hopper with incline conveyor",
  },
  { src: photo("v-roller-idlers"), cat: FABRICATION, caption: "Finished V-roller idler sets" },
  { src: photo("chevron-belt-conveyor"), cat: CONVEYORS, caption: "Chevron belt incline conveyor" },
  {
    src: photo("straw-shredding-line"),
    cat: RECYCLING,
    caption: "Straw shredding line with overhead conveyor",
  },
  {
    src: photo("v-roller-frames-fabrication"),
    cat: FABRICATION,
    caption: "V-roller conveyor frames under fabrication",
  },
  {
    src: photo("cleated-incline-conveyor"),
    cat: CONVEYORS,
    caption: "Cleated incline belt conveyor",
  },
  { src: photo("chain-feeder-hopper"), cat: FEEDERS, caption: "Chain-driven auto feeder hopper" },
  {
    src: photo("shredder-blue-conveyors"),
    cat: RECYCLING,
    caption: "Shredder with feed and discharge conveyors",
  },
  {
    src: photo("outdoor-belt-conveyor"),
    cat: CONVEYORS,
    caption: "Belt conveyor on V-roller idlers",
  },
  {
    src: photo("incline-conveyor-cyclone"),
    cat: CONVEYORS,
    caption: "Incline conveyor with cyclone separator",
  },
  {
    src: photo("shredder-platform"),
    cat: RECYCLING,
    caption: "Shredder platform with access stairs",
  },
  {
    src: photo("outdoor-conveyor-installation"),
    cat: CONVEYORS,
    caption: "Long-span outdoor conveyor installation",
  },
  {
    src: photo("hopper-incline-conveyor"),
    cat: CONVEYORS,
    caption: "Hopper discharge onto incline conveyor",
  },
  {
    src: photo("shredder-feed-platform"),
    cat: RECYCLING,
    caption: "Shredder feed platform during installation",
  },
  {
    src: photo("trough-conveyors-shredder"),
    cat: RECYCLING,
    caption: "Trough conveyors feeding a shredder",
  },
  {
    src: photo("chevron-conveyor-incline"),
    cat: CONVEYORS,
    caption: "Chevron conveyor feeding the shredder line",
  },
  {
    src: photo("belt-conveyor-straw-plant"),
    cat: CONVEYORS,
    caption: "Belt conveyor at a straw processing plant",
  },
  {
    src: photo("shredder-trough-conveyors"),
    cat: RECYCLING,
    caption: "Shredding unit with blue trough conveyors",
  },
  {
    src: photo("outdoor-belt-conveyor-shed"),
    cat: CONVEYORS,
    caption: "Outdoor belt conveyor entering the shed",
  },
  {
    src: photo("cleated-incline-conveyor-side"),
    cat: CONVEYORS,
    caption: "Cleated incline conveyor, side view",
  },
  {
    src: photo("overhead-conveyor-shredder"),
    cat: RECYCLING,
    caption: "Overhead conveyor above shredder base",
  },
  {
    src: photo("chevron-conveyor-shredder-line"),
    cat: RECYCLING,
    caption: "Chevron conveyor and shredder line",
  },
  {
    src: photo("factory-exterior-road"),
    cat: FACILITY,
    caption: "ARKIS Engineering factory entrance",
  },
  {
    src: photo("iso-9001-certificate"),
    cat: "Certification",
    caption: "ISO 9001:2015 quality management certificate",
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
        subtitle="Real conveyors, shredding lines, feeders and fabrication work from our workshop and client sites."
        image={photo("straw-shredding-line")}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((im, i) => (
            <button
              key={im.src}
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
