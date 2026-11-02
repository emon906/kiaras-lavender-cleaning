import { useEffect, useRef, useState } from "react";
import { Pause, Play, Sparkles } from "lucide-react";

import { reels, type Reel } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ReelCard({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Play while the reel is well inside the viewport, pause when it leaves.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: [0, 0.5, 1] },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const hasVideo = reel.videoUrl !== "";

  return (
    <div className="group relative w-[min(310px,80vw)] shrink-0 snap-center">
      <div className="gold-ring relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-deep shadow-[var(--shadow-card-hover)]">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={reel.videoUrl}
            poster={reel.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="size-full cursor-pointer object-cover"
            onClick={toggle}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label={`${reel.title} cleaning reel`}
          />
        ) : (
          <>
            <img src={reel.poster} alt={`${reel.title} cleaning reel preview`} className="size-full object-cover" />
            <div className="absolute inset-0 bg-deep/45" aria-hidden="true" />
            <span className="glass-panel absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl px-6 py-5 text-center">
              <Sparkles className="size-6 text-gold" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.24em] text-white uppercase">Reel coming soon</span>
            </span>
          </>
        )}

        <div
          className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent p-5 pt-14"
          aria-hidden={false}
        >
          <div>
            <p className="font-display text-2xl text-white">{reel.title}</p>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">{reel.subtitle}</p>
          </div>
          {hasVideo ? (
            <button
              onClick={toggle}
              className="glass-panel flex size-11 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:text-gold"
              aria-label={playing ? `Pause ${reel.title} reel` : `Play ${reel.title} reel`}
            >
              {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Reels() {
  return (
    <section id="reels" className="dark-section section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Watch the Clean"
          title={
            <>
              Transformations, <span className="text-gradient-gold italic">In Motion</span>
            </>
          }
          description="Short, unedited looks at a Kiara's visit — the kind of detail a photo can't carry. Scroll sideways to see all three."
        />
      </div>

      <Reveal delay={150} className="mt-14">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:justify-center lg:px-0">
          {reels.map((reel) => (
            <ReelCard key={reel.title} reel={reel} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
