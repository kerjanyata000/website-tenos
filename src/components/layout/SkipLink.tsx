"use client";

import { useHomepageCopy } from "@/hooks/useHomepageCopy";

export function SkipLink() {
  const { skip } = useHomepageCopy();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[var(--radius-button)] focus:bg-bg-brand-solid focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-text-on-brand focus:shadow-nav"
    >
      {skip}
    </a>
  );
}
