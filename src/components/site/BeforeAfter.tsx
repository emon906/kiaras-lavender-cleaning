import { useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

import { beforeAfter } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const updateFromPointer = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <section id="before-after" className="section-pad bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Transformation"
          title={
            <>
              Before & <span className="text-gradient-royal italic">After</span>
            </>
          }
          description="Drag the handle — or slide with your finger — to see the difference a Kiara's visit makes."
        />

        <Reveal variant="reveal-zoom" className="mt-12">
          <div
            ref={containerRef}
            className="gold-ring relative aspect-[4/3] cursor-ew-resize touch-none overflow-hidden rounded-[2rem] shadow-[var(--shadow-card-hover)] select-none sm:aspect-[16/10]"
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              updateFromPointer(e.clientX);
            }}
            onPointerMove={(e) => {
              if (e.buttons > 0) updateFromPointer(e.clientX);
            }}
            role="slider"
            aria-label="Before and after comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
              if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
            }}
          >
            {/* Before (base layer) */}
            <img
              src={beforeAfter.before}
              alt="Bathroom before cleaning"
              className="absolute inset-0 size-full object-cover"
              draggable={false}
            />
            {/* After (clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
              <img
                src={beforeAfter.after}
                alt="Bathroom after cleaning"
                className="absolute inset-0 size-full object-cover"
                draggable={false}
              />
            </div>

            {/* Labels */}
            <span className="glass-panel absolute top-4 left-4 rounded-full bg-deep/70 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-white uppercase">
              {beforeAfter.beforeLabel}
            </span>
            <span className="glass-panel absolute top-4 right-4 rounded-full bg-deep/70 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-gold uppercase">
              {beforeAfter.afterLabel}
            </span>

            {/* Handle */}
            <div
              className="absolute inset-y-0 z-10"
              style={{ left: `${position}%` }}
              aria-hidden="true"
            >
              <div className="absolute inset-y-0 -left-px w-0.5 bg-gold shadow-[0_0_16px_oklch(0.78_0.12_85/0.8)]" />
              <div className="absolute top-1/2 left-0 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-deep/85 shadow-[var(--shadow-gold-glow)] backdrop-blur">
                <ChevronsLeftRight className="size-5 text-gold" />
              </div>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground italic">
            {beforeAfter.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
