import { Sparkles } from "lucide-react";

import { about, site } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Portrait composition */}
        <Reveal variant="reveal-left" className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-50 blur-2xl"
              style={{ background: "linear-gradient(135deg, var(--lavender), transparent 60%)" }}
              aria-hidden="true"
            />
            <div className="gold-ring relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-luxe)]">
              <img
                src={about.portrait}
                alt="Kiara's Quality Cleaning Service — freshly cleaned, beautifully styled interior"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -right-6 -bottom-10 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-[var(--shadow-card-hover)] sm:block">
              <img
                src={about.detail}
                alt="Detail of a perfectly finished, spotless space"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="glass-panel absolute -top-6 -left-6 flex items-center gap-2 rounded-full bg-deep/80 px-4 py-2.5">
              <Sparkles className="size-4 text-gold" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase">
                {site.tagline.split(" • ")[2]}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="relative">
          <SectionHeading
            align="left"
            eyebrow={about.eyebrow}
            title={
              <>
                {about.title.split(" ").slice(0, -3).join(" ")}{" "}
                <span className="text-gradient-royal italic">
                  {about.title.split(" ").slice(-3).join(" ")}
                </span>
              </>
            }
          />
          <div className="mt-8 space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={120 + i * 120}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={380}>
            <div className="mt-10 flex items-center gap-4">
              <div className="gold-divider w-16 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-display text-2xl text-gradient-royal italic">
                  {about.signature}
                </p>
                <p className="mt-1 text-xs tracking-[0.28em] text-muted-foreground uppercase">
                  {about.signatureRole}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
