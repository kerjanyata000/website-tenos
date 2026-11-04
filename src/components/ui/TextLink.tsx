import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Brand teal text link (export `.lnk`) */
  tone?: "brand" | "muted" | "inherit";
  withArrow?: boolean;
  external?: boolean;
};

const toneClass = {
  brand: "font-semibold text-text-link hover:underline",
  muted: "font-normal text-text-secondary hover:text-text-primary hover:underline",
  inherit: "hover:underline",
} as const;

export function TextLink({
  href,
  children,
  className,
  tone = "brand",
  withArrow = false,
  external = false,
}: TextLinkProps) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-6 items-center gap-2 text-base leading-6 transition-colors",
        toneClass[tone],
        className,
      )}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      {withArrow ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      ) : null}
      {isExternal ? (
        <span className="sr-only">(opens in a new tab)</span>
      ) : null}
    </Link>
  );
}
