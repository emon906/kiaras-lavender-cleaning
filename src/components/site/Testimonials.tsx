import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { testimonials } from "@/config/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="dark-section section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 size-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Client Words"
          title={
            <>
              Reviews Worth <span className="text-gradient-gold italic">Their Ink</span>
            </>
          }
          description="Genuine customer reviews, featured here as they come in. Placeholder reviews are marked until real ones are added."
        />

        <Reveal variant="reveal-zoom" className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={index}
                  className="min-w-0 flex-[0_0_100%] px-2 sm:px-8"
                  aria-hidden={selected !== index}
                >
                  <div className="glass-panel gold-ring relative mx-auto max-w-3xl rounded-[2rem] p-9 text-center sm:p-14">
                    <span
                      className="absolute -top-7 left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold/70 shadow-[var(--shadow-gold-glow)]"
                      aria-hidden="true"
                    >
                      <Quote className="size-6 text-ink" />
                    </span>
                    <blockquote className="font-display text-2xl leading-relaxed text-white italic sm:text-3xl">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-8">
                      <span className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
                        {testimonial.name}
                      </span>
                      <span className="mt-1 block text-xs tracking-widest text-white/60 uppercase">
                        {testimonial.location}
                      </span>
                    </figcaption>
                    {testimonial.placeholder ? (
                      <span className="mt-6 inline-block rounded-full border border-white/20 px-4 py-1.5 text-[0.65rem] tracking-[0.2em] text-white/55 uppercase">
                        Placeholder — replace in src/config/site.ts
                      </span>
                    ) : null}
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-center justify-center gap-5">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="glass-panel flex size-11 items-center justify-center rounded-full text-white transition-colors hover:text-gold"
              aria-label="Previous review"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "size-2.5 rounded-full transition-all duration-300",
                    index === selected ? "w-7 bg-gold" : "bg-white/30 hover:bg-white/50",
                  )}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="glass-panel flex size-11 items-center justify-center rounded-full text-white transition-colors hover:text-gold"
              aria-label="Next review"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
