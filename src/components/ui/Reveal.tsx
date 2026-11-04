"use client";

import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/cn";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  /** Extra delay index for groups (multiplied by 100ms) */
  index?: number;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

/**
 * Fade-up scroll reveal wrapper. Animates once when entering the viewport.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  index = 0,
  style,
  ...rest
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const totalDelay = delay + index * 100;

  return (
    <Tag
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={
        {
          ...style,
          ["--reveal-delay" as string]: `${totalDelay}ms`,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
