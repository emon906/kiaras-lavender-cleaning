import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { serviceArea } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Leaflet touches browser APIs at import time — keep it out of the SSR graph.
const AreaMap = lazy(() => import("./AreaMap"));

function MapSkeleton() {
  return (
    <div className="flex size-full min-h-[420px] items-center justify-center bg-deep/90">
      <span className="animate-pulse-dot text-xs tracking-[0.3em] text-gold uppercase">Loading map…</span>
    </div>
  );
}

export function ServiceArea() {
  return (
    <section id="service-area" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Where We Clean"
          title={
            <>
              Proudly Serving <span className="text-gradient-royal italic">{serviceArea.region}</span>
            </>
          }
          description={serviceArea.description}
        />

        <Reveal variant="reveal-zoom" className="mt-14">
          <div className="gold-ring overflow-hidden rounded-[2rem] shadow-[var(--shadow-card-hover)]">
            <div className="h-[420px] w-full sm:h-[480px]">
              <ClientOnly fallback={<MapSkeleton />}>
                <Suspense fallback={<MapSkeleton />}>
                  <AreaMap />
                </Suspense>
              </ClientOnly>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2.5" aria-label="Cities served">
            {serviceArea.locations.map((location) => (
              <li
                key={location.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-royal/15 bg-card px-4 py-2 text-sm font-medium text-foreground/80 shadow-[var(--shadow-luxe)]"
              >
                <MapPin className="size-3.5 text-royal" aria-hidden="true" />
                {location.name}, {location.state}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
