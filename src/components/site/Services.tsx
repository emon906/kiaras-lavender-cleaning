import { ArrowRight } from "lucide-react";

import { carpetPricing, services } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceIcon } from "./icons";

// Editorial grid: every 7th card spans wide for an asymmetric, magazine feel
function cardSpan(index: number) {
  if (index === 0) return "md:col-span-2";
  if (index === 5) return "md:col-span-2 md:row-span-1";
  return "";
}

export function Services() {
  return (
    <section id="services" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Premium Services"
          title={
            <>
              Every Room, <span className="text-gradient-royal italic">Every Detail,</span>{" "}
              Every Visit
            </>
          }
          description="A complete menu of cleaning care for homes, salons, gyms, garages — and everything in between."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.name}
              delay={(index % 3) * 100}
              className={cn(cardSpan(index))}
            >
              <article className="card-luxe group relative h-full overflow-hidden rounded-3xl p-7">
                <span
                  className="font-display absolute -top-3 right-5 text-[5rem] leading-none font-semibold text-royal/5 select-none transition-colors duration-500 group-hover:text-gold/15"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-royal to-royal-deep shadow-[var(--shadow-luxe)]">
                  <ServiceIcon icon={service.icon} className="size-5 text-white" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.description}
                </p>
                {service.note ? (
                  <span className="mt-4 inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-ink">
                    {service.note}
                  </span>
                ) : null}
                <span
                  className="mt-5 block h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-700 group-hover:w-full"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Carpet pricing — distinct dark panel */}
        <Reveal variant="reveal-zoom" className="mt-14">
          <div className="dark-section gold-ring relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow text-gold">Transparent Pricing</p>
                <h3 className="font-display mt-3 text-4xl font-medium text-white sm:text-5xl">
                  {carpetPricing.title}
                </h3>
                <p className="mt-4 text-white/70">{carpetPricing.note}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                {carpetPricing.tiers.map((tier) => (
                  <div
                    key={tier.rooms}
                    className="glass-panel flex items-center justify-between gap-8 rounded-2xl px-6 py-4 sm:min-w-72"
                  >
                    <span className="text-sm tracking-wide text-white/85">{tier.rooms}</span>
                    <span className="font-display text-3xl font-semibold text-gradient-gold">
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold relative mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide"
            >
              Book Carpet Cleaning
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
