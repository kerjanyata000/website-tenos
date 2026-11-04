import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/**
 * Centers content and applies responsive page gutters (export-aligned).
 */
export function Container({
  as: Tag = "div",
  children,
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[var(--page-max-width)]", className)}
      style={{
        paddingInline: "var(--gutter)",
      }}
    >
      {children}
    </Tag>
  );
}
