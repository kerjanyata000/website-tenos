import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { CtaArrow } from "./CtaArrow";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg" | "sm";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Enables export CTA arrow reveal on hover/focus */
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
};

type ButtonAsButton = SharedProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className" | "disabled"
  > & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-bg-brand-solid text-text-on-brand hover:bg-bg-brand-solid-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-bg-brand-solid-hover",
  secondary:
    "border-border-strong bg-transparent text-[var(--tenos-gray-950)] hover:bg-bg-hover hover:-translate-y-0.5 active:translate-y-0 active:bg-bg-hover",
  ghost:
    "border-[rgba(255,255,255,0.9)] bg-[rgba(255,255,255,0.85)] text-text-primary shadow-[0_4px_16px_rgba(10,13,18,0.06)] hover:bg-white hover:-translate-y-0.5 active:translate-y-0",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-12 px-6 text-base",
  lg: "min-h-[52px] px-9 text-base",
};

function buttonClasses({
  variant,
  size,
  withArrow,
  className,
  disabled,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  withArrow: boolean;
  className?: string;
  disabled?: boolean;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-button)] border text-center font-semibold transition-[background,border-color,transform,color] duration-[var(--duration-hover)] ease-[var(--ease-out)]",
    variantClass[variant],
    sizeClass[size],
    withArrow && "btn-cta",
    disabled &&
      "pointer-events-none cursor-not-allowed border-transparent bg-[#F5F5F5] text-[#A3A7AE] hover:translate-y-0 hover:bg-[#F5F5F5]",
    className,
  );
}

function ButtonContent({
  withArrow,
  children,
}: {
  withArrow: boolean;
  children: ReactNode;
}) {
  if (!withArrow) return children;
  return (
    <>
      <span className="btn-cta-label">{children}</span>
      <CtaArrow />
    </>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
    disabled,
  } = props;

  const classes = buttonClasses({
    variant,
    size,
    withArrow,
    className,
    disabled,
  });

  if ("href" in props && props.href) {
    const { href, target, rel, onClick, "aria-label": ariaLabel } = props;
    const isExternal = href.startsWith("http") || target === "_blank";
    const computedRel =
      rel ?? (isExternal ? "noopener noreferrer" : undefined);

    if (disabled) {
      return (
        <span className={classes} aria-disabled="true" role="link">
          <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
        </span>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={computedRel}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
        {isExternal ? (
          <span className="sr-only">(opens in a new tab)</span>
        ) : null}
      </Link>
    );
  }

  const { type = "button", onClick } = props as ButtonAsButton;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={onClick}
    >
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </button>
  );
}
