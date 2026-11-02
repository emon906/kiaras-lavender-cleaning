import { ArrowUp, Phone, Sparkles } from "lucide-react";

import { site } from "@/config/site";

const quickLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Reels", id: "reels" },
  { label: "Service Area", id: "service-area" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Footer() {
  return (
    <footer className="dark-section relative overflow-hidden pt-20 pb-10">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[560px] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="gold-ring flex size-12 items-center justify-center rounded-full bg-deep/70 font-display text-xl font-semibold text-gold">
                K
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-semibold text-white">{site.name}</p>
                <p className="text-[0.6rem] tracking-[0.34em] text-gold uppercase">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              A spotless home is the foundation of a more beautiful life — every visit, every corner, every time.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Book Your Clean</p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-flex items-center gap-3 font-display text-3xl font-medium text-white transition-colors hover:text-gold"
            >
              <Phone className="size-5 text-gold" aria-hidden="true" />
              {site.phone}
            </a>
            <p className="mt-3 text-sm text-white/65">{site.serviceArea}</p>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-gold mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              Get a Free Estimate
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/80 uppercase transition-colors hover:text-gold"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
