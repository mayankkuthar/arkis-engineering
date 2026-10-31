import beltConveyorImage from "@/assets/photos/outdoor-belt-conveyor.jpg";
import fabricationDrillingImage from "@/assets/photos/fabrication-drilling.jpg";
import baleFeederImage from "@/assets/photos/bale-feeder-hopper.jpg";
import strawShredderImage from "@/assets/photos/shredder-straw-bales.jpg";
import shredderLineImage from "@/assets/photos/shredder-blue-conveyors.jpg";
import cycloneImage from "@/assets/photos/incline-conveyor-cyclone.jpg";
import vRollerFramesImage from "@/assets/photos/v-roller-frames-fabrication.jpg";

export const contact = {
  primaryPhone: "+91 919 404 3006",
  phones: ["+91 919 404 3006", "+91 888 754 3006", "+91 880 208 0075"],
  email: "choudhary121665@gmail.com",
  address:
    "Plot No. 30, Harfala Road, Near Gas Company, Seekri Industrial Area, Sikri, Ballabgarh, Faridabad, Haryana – 121004, India.",
  whatsapp:
    "https://wa.me/9194043006?text=Hello%20Arkis%20Engineering%2C%20I%20would%20like%20to%20enquire%20about%20your%20industrial%20machinery%20and%20engineering%20solutions.",
  // Exact factory location supplied by the client.
  geo: { latitude: 28.2769317, longitude: 77.2785908 },
  map: "https://maps.google.com/maps?q=28.2769317%2C77.2785908&z=17&hl=en",
  mapEmbed: "https://maps.google.com/maps?q=28.2769317%2C77.2785908&z=17&hl=en&output=embed",
};

export type Product = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  features: string[];
  applications?: string;
  image: string;
  /** Describes what the photo actually shows (all photos are real ARKIS work). */
  imageAlt: string;
};
export const products: Product[] = [
  {
    slug: "belt-conveyors-v-rollers",
    name: "Belt Conveyors & V-Rollers",
    short: "Heavy-duty material handling systems designed for industrial applications.",
    overview:
      "Engineered conveyor and V-roller systems for dependable movement across demanding industrial workflows.",
    features: [
      "Heavy-duty structural channels built for high load capacity.",
      "Precision V-roller idlers for smooth belt alignment.",
      "Suitable for bulk solids, aggregates, and packaged goods.",
      "Low-friction, vibration-conscious, and energy-efficient design.",
    ],
    applications: "Bulk solids, aggregates, and packaged goods.",
    image: beltConveyorImage,
    imageAlt: "Belt conveyor running on red V-roller idlers, installed by ARKIS Engineering",
  },
  {
    slug: "screw-conveyors",
    name: "Screw Conveyors",
    short: "Enclosed conveying solutions for powders and granular materials.",
    overview:
      "Purpose-built screw conveying systems focused on controlled flow, containment, and practical operation.",
    features: [
      "Fully enclosed auger design to help reduce dust and spillage.",
      "High-torque gear drive for consistent material flow.",
      "Ideal for powders, ash, grains, and granular materials.",
      "Custom pitch and flight thickness options for abrasion resistance.",
    ],
    applications: "Powders, ash, grains, and granular materials.",
    image: fabricationDrillingImage,
    imageAlt: "ARKIS fabricator drilling a structural steel member in the workshop",
  },
  {
    slug: "debalers-auto-feeders",
    name: "Debalers & Auto Feeders",
    short: "Automated opening and regulated feeding for processing lines.",
    overview:
      "Robust systems designed to open compressed bales and provide uniform feed to downstream equipment.",
    features: [
      "Automated opening and feeding for compressed bales.",
      "Uniform, regulated discharge to downstream lines.",
      "Designed to help reduce manual handling and plant bottlenecks.",
      "Heavy-gauge steel fabrication for continuous-duty applications.",
    ],
    image: baleFeederImage,
    imageAlt: "Bale feeding hopper with conveyor beside stacked straw bales",
  },
  {
    slug: "agri-waste-recycling",
    name: "Agri-Waste Recycling Machines",
    short: "Machinery solutions for agricultural waste processing and recycling applications.",
    overview:
      "Tailored equipment concepts supporting practical agricultural waste handling and recycling workflows.",
    features: [
      "Designed around project-specific processing requirements.",
      "Supports material handling and recycling workflows.",
      "Engineering consultation available for custom requirements.",
    ],
    image: strawShredderImage,
    imageAlt: "ARKIS shredding line with feed conveyor next to agricultural straw bales",
  },
  {
    slug: "e-waste-recycling",
    name: "E-Waste Recycling Machines",
    short: "Engineering solutions for processing and recycling electronic waste.",
    overview:
      "Custom machinery and handling solutions developed for electronic waste processing applications.",
    features: [
      "Project-specific machinery development.",
      "Integrated material movement options.",
      "Fabricated for industrial operating environments.",
    ],
    image: shredderLineImage,
    imageAlt: "Industrial shredder with blue feed and discharge conveyors built by ARKIS",
  },
  {
    slug: "dust-collection",
    name: "Dust Collection Systems",
    short: "Industrial equipment for dust management in manufacturing and processing environments.",
    overview:
      "Engineered dust collection arrangements supporting cleaner, more controlled industrial operations.",
    features: [
      "Application-led equipment configuration.",
      "Industrial ducting and collection integration.",
      "Fabrication tailored to project requirements.",
    ],
    image: cycloneImage,
    imageAlt: "Incline belt conveyor with cyclone dust separator in an ARKIS installation",
  },
  {
    slug: "apcm",
    name: "Air Pollution Control Measures (A.P.C.M.)",
    short:
      "Engineering and fabrication solutions for industrial air pollution control applications.",
    overview:
      "Environmental equipment solutions developed to support industrial air pollution management requirements.",
    features: [
      "Project-specific engineering approach.",
      "Fabricated equipment and supporting structures.",
      "Integration support from concept to commissioning.",
    ],
    image: cycloneImage,
    imageAlt: "Cyclone separator and conveyor line at an ARKIS installation",
  },
  {
    slug: "fabrication-works",
    name: "Fabrication Works",
    short: "Industrial fabrication solutions tailored to project requirements.",
    overview: "Practical fabrication support for machinery, equipment, and industrial structures.",
    features: [
      "Custom fabrication to supplied requirements.",
      "Machinery and industrial structure work.",
      "Project coordination and technical support.",
    ],
    image: vRollerFramesImage,
    imageAlt: "V-roller conveyor frames being fabricated at the ARKIS workshop",
  },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const meta = (title: string, description: string, path: string) => {
  // BASE_URL carries the deployment subpath (e.g. "/arkis-engineering/") so
  // canonical/og:url stay correct on GitHub Pages project sites.
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const url = `${base}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
};
