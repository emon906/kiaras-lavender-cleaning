import { useEffect, useRef } from "react";
import { BadgeCheck, ChevronDown, Phone, Sparkles } from "lucide-react";

import { site } from "@/config/site";
import heroImage from "@/assets/hero-living.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on the hero backdrop
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * 0.16}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      {/* Backdrop */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroImage}
          alt="A gleaming, beautifully cleaned luxury living room"
          className="animate-slow-zoom size-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
      </div>

      {/* Decorative gold flourishes */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 size-[480px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 size-[380px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--pink) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-24 sm:px-8">
        <Reveal>
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-[0.28em] text-gold uppercase">
            <span className="animate-pulse-dot inline-block size-2 rounded-full bg-gold" aria-hidden="true" />
            {site.bookingBadge}
          </span>
        </Reveal>

        <Reveal delay={120} className="max-w-4xl">
          <p className="mt-8 text-sm font-medium tracking-[0.32em] text-white/70 uppercase">
            {site.name} · {site.serviceArea}
          </p>
          <h1 className="font-display mt-5 text-5xl leading-[1.02] font-medium tracking-tight text-white sm:text-7xl lg:text-8xl">
            A Spotless Home.
            <br />
            <span className="text-gradient-gold italic">A More Beautiful Life.</span>
          </h1>
        </Reveal>

        <Reveal delay={240} className="max-w-2xl">
          <p className="mt-7 text-lg leading-relaxed text-white/80 sm:text-xl">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={360} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold tracking-wide"
          >
            <Sparkles className="size-5" aria-hidden="true" />
            Get a Free Estimate
          </a>
          <a
            href={site.phoneHref}
            className="glass-panel inline-flex items-center gap-3 rounded-full px-7 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone className="size-5 text-gold" aria-hidden="true" />
            {site.phone}
          </a>
        </Reveal>

        <Reveal delay={480} className="mt-12">
          <div className="glass-panel gold-ring inline-flex max-w-md flex-col gap-2 rounded-2xl p-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-gold uppercase">
              <BadgeCheck className="size-4" aria-hidden="true" />
              First-Time Client Offer
            </span>
            <span className="font-display text-xl text-white">
              {site.offer.name} — your first week of service, on us.
            </span>
          </div>
        </Reveal>
      </div>

      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-3 text-white/70 transition-colors hover:text-gold"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="animate-float-soft size-7" aria-hidden="true" />
      </button>
    </section>
  );
}
