import { useCallback, useEffect, useState } from "react";
import { Expand, X } from "lucide-react";

import { gallery } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close]);

  return (
    <section id="gallery" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Portfolio"
          title={
            <>
              Proof, <span className="text-gradient-royal italic">Room by Room</span>
            </>
          }
          description="Real results from homes and spaces we care for — tap any image to view it full size."
        />

        <div className="mt-14 columns-2 gap-4 sm:gap-5 md:columns-3">
          {gallery.map((image, index) => (
            <Reveal
              key={image.src}
              delay={(index % 3) * 90}
              className="mb-4 break-inside-avoid sm:mb-5"
            >
              <button
                onClick={() => setOpenIndex(index)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-[var(--shadow-luxe)] focus-visible:outline-2 focus-visible:outline-gold"
                aria-label={`View ${image.alt} full size`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deep/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg text-white">{image.caption}</span>
                  <span className="glass-panel flex size-9 items-center justify-center rounded-full">
                    <Expand className="size-4 text-white" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && gallery[openIndex] ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/95 p-4 backdrop-blur-md sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[openIndex].alt}
          onClick={close}
        >
          <button
            onClick={close}
            className="glass-panel absolute top-5 right-5 flex size-11 items-center justify-center rounded-full text-white transition-colors hover:text-gold"
            aria-label="Close image viewer"
          >
            <X className="size-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
            }}
            className="glass-panel absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full font-display text-xl text-white transition-colors hover:text-gold sm:left-8"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((i) => (i === null ? null : (i + 1) % gallery.length));
            }}
            className="glass-panel absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full font-display text-xl text-white transition-colors hover:text-gold sm:right-8"
            aria-label="Next image"
          >
            ›
          </button>
          <figure
            className="max-h-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[openIndex].src}
              alt={gallery[openIndex].alt}
              className="gold-ring max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <figcaption className="font-display mt-4 text-center text-xl text-white">
              {gallery[openIndex].caption}
              <span className="mt-1 block text-xs tracking-[0.3em] text-gold uppercase">
                {openIndex + 1} / {gallery.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
