import conveyorImage from "@/assets/conveyor-system.jpg";
import screwImage from "@/assets/screw-conveyor.jpg";
import environmentImage from "@/assets/environmental-systems.jpg";
import workshopImage from "@/assets/industrial-workshop.jpg";

export const contact = {
  primaryPhone: "+91 919 404 3006",
  phones: ["+91 919 404 3006", "+91 888 754 3006", "+91 880 208 0075"],
  email: "choudhary121665@gmail.com",
  address:
    "Plot No. 30, Harfala Road, Near Gas Company, Seekri Industrial Area, Sikri, Ballabgarh, Faridabad, Haryana – 121004, India.",
  whatsapp:
    "https://wa.me/9194043006?text=Hello%20Arkis%20Engineering%2C%20I%20would%20like%20to%20enquire%20about%20your%20industrial%20machinery%20and%20engineering%20solutions.",
  map: "https://www.google.com/maps/search/?api=1&query=Plot+No.+30+Harfala+Road+Near+Gas+Company+Seekri+Industrial+Area+Sikri+Ballabgarh+Faridabad+Haryana+121004",
};

export type Product = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  features: string[];
  applications?: string;
  image: string;
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
    image: conveyorImage,
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
    image: screwImage,
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
    image: workshopImage,
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
    image: environmentImage,
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
    image: workshopImage,
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
    image: environmentImage,
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
    image: environmentImage,
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
    image: workshopImage,
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
