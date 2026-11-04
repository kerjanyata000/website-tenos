import { cn } from "@/lib/cn";

type CtaArrowProps = {
  className?: string;
};

/** Chevron used inside CTA buttons — fades in on hover (export `.ar`). */
export function CtaArrow({ className }: CtaArrowProps) {
  return (
    <span className={cn("cta-arrow inline-flex", className)} aria-hidden="true">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  );
}
