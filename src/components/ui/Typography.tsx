import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

type CommonProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Eyebrow({
  as: Tag = "span",
  children,
  className,
}: CommonProps) {
  return (
    <Tag
      className={cn(
        "text-xs font-semibold tracking-[0.12em] text-text-brand uppercase",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function DisplayHeading({
  as: Tag = "h1",
  children,
  className,
  id,
}: CommonProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-display text-[length:var(--text-display)] leading-[var(--leading-tight)] font-bold tracking-[-0.03em] text-text-primary",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  as: Tag = "h2",
  children,
  className,
  id,
}: CommonProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-display text-[length:var(--text-3xl)] leading-[1.25] font-bold tracking-[-0.02em] text-text-primary max-md:text-[2rem] max-md:leading-[1.3]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({ as: Tag = "p", children, className }: CommonProps) {
  return (
    <Tag
      className={cn(
        "text-lg leading-7 font-normal text-text-secondary md:text-xl md:leading-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function BodyText({ as: Tag = "p", children, className }: CommonProps) {
  return (
    <Tag
      className={cn(
        "text-base leading-6 font-normal text-text-secondary",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Label({ as: Tag = "h4", children, className }: CommonProps) {
  return (
    <Tag
      className={cn(
        "text-sm leading-5 font-semibold text-text-primary",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
