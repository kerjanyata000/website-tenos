import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type SectionSurface = "light" | "soft" | "dark";

type SectionProps = {
  id?: string;
  surface?: SectionSurface;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
  /** Skip default vertical padding when a section manages its own spacing */
  unpadded?: boolean;
};

const surfaceClass: Record<SectionSurface, string> = {
  light: "bg-bg-page text-text-primary",
  soft: "bg-bg-soft text-text-primary",
  dark: "bg-bg-inverse text-text-inverse",
};

/**
 * Full-bleed page section with surface variants matching the design system.
 */
export function Section({
  id,
  surface = "light",
  children,
  className,
  unpadded = false,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      data-surface={surface === "dark" ? "dark" : undefined}
      className={cn(
        "relative w-full",
        surfaceClass[surface],
        !unpadded && "py-[var(--section-padding-y)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
