import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type PlaceholderProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Dashed placeholder chip for content awaiting Tenos validation
 * (matches export `.ph`).
 */
export function Placeholder({ children, className }: PlaceholderProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-[var(--radius-card)] border border-dashed border-border-control px-2 py-0.5 text-sm leading-5 text-text-tertiary",
        className,
      )}
    >
      {children}
    </span>
  );
}
