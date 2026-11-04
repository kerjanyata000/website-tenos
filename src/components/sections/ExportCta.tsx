import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ExportCtaProps = {
  href?: string | null;
  children: ReactNode;
  variant?: "primary" | "ghost" | "secondary";
  size?: "md" | "lg";
  className?: string;
  withArrow?: boolean;
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  leadingIcon?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

function ExportArrow() {
  return (
    <span className="ar" aria-hidden="true">
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

/**
 * Homepage CTA using Claude Design export button classes (`.btn` / `.cta`)
 * for visual fidelity inside `.pg`.
 */
export function ExportCta({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  withArrow = true,
  disabled = false,
  target,
  rel,
  "aria-label": ariaLabel,
  leadingIcon,
  onClick,
}: ExportCtaProps) {
  const classes = cn(
    "btn",
    size === "lg" ? "btn-lg" : null,
    variant === "primary" && "btn-p",
    variant === "ghost" && "btn-g",
    variant === "secondary" && "btn-s",
    withArrow && "cta",
    className,
  );

  const content = (
    <>
      {leadingIcon}
      {withArrow ? <span>{children}</span> : children}
      {withArrow ? <ExportArrow /> : null}
    </>
  );

  if (disabled || !href) {
    return (
      <span className={classes} aria-disabled="true">
        {content}
      </span>
    );
  }

  const isExternal = href.startsWith("http") || target === "_blank";

  return (
    <Link
      href={href}
      className={classes}
      target={target}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
      {isExternal ? (
        <span className="sr-only">(opens in a new tab)</span>
      ) : null}
    </Link>
  );
}
