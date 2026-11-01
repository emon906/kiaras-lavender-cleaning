import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Reels", id: "reels" },
  { label: "Reviews", id: "testimonials" },
  { label: "Service Area", id: "service-area" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/25 bg-deep/85 py-3 shadow-[var(--shadow-luxe)] backdrop-blur-xl"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 text-left"
          aria-label="Back to top"
        >
          <span className="gold-ring flex size-11 items-center justify-center rounded-full bg-deep/70 font-display text-xl font-semibold text-gold backdrop-blur">
            K
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold tracking-wide text-white">
              Kiara's Quality Cleaning
            </span>
            <span className="text-[0.6rem] tracking-[0.34em] text-gold uppercase">
              Service
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="btn-gold hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <button
            className="glass-panel inline-flex size-11 items-center justify-center rounded-full text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-4 mt-3 rounded-2xl border border-gold/25 bg-deep/95 p-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setOpen(false);
                  scrollTo(link.id);
                }}
                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </button>
            ))}
            <a
              href={site.phoneHref}
              className="btn-gold mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
