import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceIcon } from "./icons";
import { whyChoose } from "@/config/site";

export function WhyChoose() {
  return (
    <section id="why-choose" className="dark-section section-pad relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            dark
            eyebrow="Why Choose Kiara's"
            title={
              <>
                The Standard Other Cleaners{" "}
                <span className="text-gradient-gold italic">Are Measured By</span>
              </>
            }
            description="Five promises we keep on every visit — because luxury is a habit, not a one-time performance."
          />
          <Reveal delay={200} className="mt-10">
            <div className="glass-panel inline-flex items-center gap-4 rounded-2xl p-5">
              <span className="font-display text-5xl font-semibold text-gradient-gold">100%</span>
              <span className="text-sm leading-snug text-white/80">
                Commitment to a spotless finish — or we keep cleaning until it earns it.
              </span>
            </div>
          </Reveal>
        </div>

        {/* Staggered list */}
        <div className="flex flex-col gap-5">
          {whyChoose.map((item, index) => (
            <Reveal
              key={item.title}
              variant={index % 2 === 0 ? "reveal-right" : "reveal-left"}
              delay={index * 90}
            >
              <article
                className="glass-panel group flex items-start gap-5 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 sm:p-7"
                style={{ marginLeft: `${(index % 3) * 2}rem` }}
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold/70 shadow-[var(--shadow-gold-glow)] transition-transform duration-500 group-hover:scale-110">
                  <ServiceIcon icon={item.icon} className="size-6 text-ink" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
