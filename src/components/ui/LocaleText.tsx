import type { ReactNode } from "react";

/** Dual-span bilingual text matching Claude Design `.en` / `.id` CSS switching. */
export function LocaleText({
  en,
  id,
  as: Tag = "span",
  className,
}: {
  en: ReactNode;
  id: ReactNode;
  as?: "span" | "p" | "div";
  className?: string;
}) {
  return (
    <Tag className={className}>
      <span className="en">{en}</span>
      <span className="id">{id}</span>
    </Tag>
  );
}
