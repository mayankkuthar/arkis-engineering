import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/arkis-sections";
import { contact, meta, products } from "@/lib/site-data";
import hero from "@/assets/environmental-systems.jpg";
const searchSchema = z.object({ interest: z.string().optional().catch(undefined) });
const formSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  company: z.string().trim().max(150),
  mobile: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{10,18}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  interest: z.string().min(1, "Select a product or service"),
  requirements: z.string().trim().min(10, "Please add at least 10 characters").max(2000),
});
export const Route = createFileRoute("/contact")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () =>
    meta(
      "Contact ARKIS ENGINEERING | Request an Industrial Machinery Quote",
      "Contact Ajay Veer Singh at ARKIS Engineering for machinery, fabrication, conveyors, recycling equipment, and industrial solutions in Faridabad.",
      "/contact",
    ),
  component: Contact,
});
const input =
  "mt-2 h-12 w-full border border-input bg-background px-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/30";
function Contact() {
  const { interest } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const result = formSchema.safeParse(fd);
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setStatus(
      "This form is ready for backend integration but is not sending enquiries yet. Please call, email, or use WhatsApp to contact ARKIS Engineering now.",
    );
  }
  return (
    <>
      <PageHero
        title="Contact Arkis Engineering"
        subtitle="Discuss your machinery, fabrication, material handling, or environmental equipment requirement."
        image={hero}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-extrabold">Contact Information</h2>
          <p className="mt-2 text-muted-foreground">Ajay Veer Singh · Owner</p>
          <div className="mt-8 grid gap-5">
            {contact.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="flex items-center gap-4 border-b border-border pb-4"
              >
                <Phone className="text-accent" />
                {p}
              </a>
            ))}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 break-all border-b border-border pb-4"
            >
              <Mail className="text-accent" />
              {contact.email}
            </a>
            <a
              href={contact.map}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 border-b border-border pb-4"
            >
              <MapPin className="mt-1 shrink-0 text-accent" />
              <span>{contact.address}</span>
            </a>
          </div>
          <Button asChild variant="quote" size="lg" className="mt-8">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp Enquiry
            </a>
          </Button>
        </div>
        <form
          onSubmit={submit}
          noValidate
          className="border border-border bg-card p-6 shadow-sm sm:p-9"
        >
          <h2 className="text-2xl font-bold">Send an Enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">Required fields are marked with *.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field label="Full Name *" name="name" error={errors["name"]} />
            <Field label="Company Name" name="company" error={errors["company"]} />
            <Field label="Mobile Number *" name="mobile" type="tel" error={errors["mobile"]} />
            <Field label="Email Address *" name="email" type="email" error={errors["email"]} />
            <label className="sm:col-span-2">
              Product or Service Interested In *
              <select name="interest" defaultValue={interest ?? ""} className={input}>
                <option value="" disabled>
                  Select an option
                </option>
                {products.map((p) => (
                  <option key={p.slug}>{p.name}</option>
                ))}
                <option>Engineering & Machinery Manufacturing</option>
                <option>Industrial Fabrication</option>
                <option>Other / Custom Requirement</option>
              </select>
              {errors["interest"] && (
                <span className="mt-1 block text-xs text-destructive">{errors["interest"]}</span>
              )}
            </label>
            <label className="sm:col-span-2">
              Project Requirements *
              <textarea
                name="requirements"
                rows={6}
                className="mt-2 w-full border border-input bg-background p-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/30"
              />
              {errors["requirements"] && (
                <span className="mt-1 block text-xs text-destructive">
                  {errors["requirements"]}
                </span>
              )}
            </label>
          </div>
          <Button type="submit" variant="quote" size="lg" className="mt-6 w-full sm:w-auto">
            Submit Enquiry
          </Button>
          {status && (
            <p
              role="status"
              className="mt-5 border-l-4 border-accent bg-secondary p-4 text-sm leading-6"
            >
              {status}
            </p>
          )}
        </form>
      </section>
    </>
  );
}
function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
}) {
  return (
    <label>
      {label}
      <input name={name} type={type} className={input} />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
