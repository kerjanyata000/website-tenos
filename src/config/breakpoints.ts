/**
 * Breakpoints aligned with the Claude Design export / approved architecture.
 * Use with matchMedia or Tailwind screens (configured via CSS).
 */
export const breakpoints = {
  /** Mobile upper bound (export <640) */
  sm: 640,
  /** Nav collapses below this (export ≤819) */
  navCollapse: 820,
  /** Tablet / desktop split (export ≥1024) */
  lg: 1024,
  /** Wide gutters (export ≥1280) */
  xl: 1280,
  /** Design desktop frame */
  desktop: 1440,
} as const;

export type BreakpointName = keyof typeof breakpoints;
