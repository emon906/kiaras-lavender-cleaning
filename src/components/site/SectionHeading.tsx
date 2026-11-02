import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className={cn("eyebrow", dark ? "text-gold" : "text-royal")}>{eyebrow}</p>
      <h2
        className={cn(
          "font-display mt-4 text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl lg:text-6xl",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {align === "center" ? (
        <div className="gold-divider mx-auto mt-6 w-40" aria-hidden="true" />
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            dark ? "text-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
