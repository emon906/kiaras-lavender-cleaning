import { type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "" | "reveal-left" | "reveal-right" | "reveal-zoom";
  delay?: number;
};

/** Scroll-triggered reveal wrapper using the `.reveal` styles in styles.css. */
export function Reveal({ children, className, variant = "", delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", variant, visible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
