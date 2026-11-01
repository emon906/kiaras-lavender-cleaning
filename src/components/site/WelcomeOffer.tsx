import { Gift, Phone } from "lucide-react";

import { site } from "@/config/site";
import { Reveal } from "./Reveal";

export function WelcomeOffer() {
  return (
    <section id="offer" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal variant="reveal-zoom">
          <div
            className="relative overflow-hidden rounded-[2.5rem] p-10 text-center shadow-[var(--shadow-card-hover)] sm:p-16"
            style={{
              background:
                "linear-gradient(135deg, var(--royal-deep) 0%, var(--royal) 55%, #8b3ee0 100%)",
            }}
          >
            {/* Decorative rings */}
            <div
              className="pointer-events-none absolute -top-28 -left-28 size-72 rounded-full border border-gold/30"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-20 -left-20 size-56 rounded-full border border-gold/40"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full border border-gold/25"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-32 size-64 rounded-full bg-pink/15 blur-2xl"
              aria-hidden="true"
            />

            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              <Gift className="size-4" aria-hidden="true" />
              First-Time Clients
            </span>
            <h2 className="font-display mt-7 text-5xl leading-tight font-medium text-white sm:text-7xl">
              The <span className="text-gradient-gold italic">{site.offer.name}</span>
            </h2>
            <div className="gold-divider mx-auto mt-7 w-48" aria-hidden="true" />
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              {site.offer.description}
            </p>
            <p className="mt-4 text-xs tracking-[0.26em] text-white/60 uppercase">
              {site.offer.note}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-gold inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-semibold tracking-wide"
              >
                Claim Your Welcome Clean
              </a>
              <a
                href={site.phoneHref}
                className="glass-panel inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Phone className="size-4 text-gold" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
