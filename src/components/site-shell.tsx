import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/arkis-logo.jpeg";
import { contact, nav, products } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="bg-forest text-primary-foreground">
          <div className="mx-auto flex max-w-7xl justify-between px-4 py-2 text-xs sm:px-6">
            <a
              href={`tel:${contact.primaryPhone.replace(/\s/g, "")}`}
              className="flex items-center gap-2"
            >
              <Phone className="size-3" />
              {contact.primaryPhone}
            </a>
            <span className="hidden sm:block">Building Solutions, Delivering Trust.</span>
          </div>
        </div>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" aria-label="ARKIS Engineering home" className="flex items-center gap-3">
            <img src={logo} alt="ARKIS Engineering" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block">
              <span className="block font-heading text-lg font-extrabold text-primary">ARKIS</span>
              <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-steel">
                Engineering
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="quote">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav
            className="border-t border-border bg-background px-4 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 font-semibold"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="quote" className="mt-4 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-forest text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="ARKIS Engineering logo"
              className="h-24 w-24 bg-background object-contain p-1"
            />
            <p className="mt-4 font-heading font-bold">ARKIS ENGINEERING</p>
            <p className="mt-2 text-sm opacity-75">Smart Solutions for a Cleaner Future</p>
          </div>
          <div>
            <h2 className="font-heading font-bold text-gold">Quick Links</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} className="opacity-75 hover:opacity-100">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading font-bold text-gold">Products</h2>
            <div className="mt-4 grid gap-2 text-sm">
              {products.slice(0, 7).map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="opacity-75 hover:opacity-100"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading font-bold text-gold">Contact</h2>
            <div className="mt-4 grid gap-3 text-sm opacity-80">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  {p}
                </a>
              ))}
              <a href={`mailto:${contact.email}`} className="flex gap-2 break-all">
                <Mail className="mt-0.5 size-4 shrink-0" />
                {contact.email}
              </a>
              <a href={contact.map} target="_blank" rel="noreferrer" className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {contact.address}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row sm:justify-between sm:px-6">
            <span>© {new Date().getFullYear()} ARKIS ENGINEERING. All rights reserved.</span>
            <span>Building Solutions, Delivering Trust.</span>
          </div>
        </div>
      </footer>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle />
      </a>
      {top && (
        <Button
          size="icon"
          variant="secondary"
          className="fixed bottom-5 left-5 z-40 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp />
        </Button>
      )}
    </div>
  );
}
