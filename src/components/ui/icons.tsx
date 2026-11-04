import type { ReactNode } from "react";

type IconProps = {
  className?: string;
  size?: number;
};

export function IconMenu({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconExternal({ className, size = 14 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/** Outline WhatsApp brand mark (footer default). */
export function IconWhatsApp({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.4A8.4 8.4 0 0 0 4.4 16l-.9 3.5 3.6-.9A8.4 8.4 0 1 0 12 3.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 8.5c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.8c.1.2 0 .4-.1.5l-.3.4c-.1.1-.2.3 0 .5.2.4.8 1.2 1.7 1.9.8.6 1.5.8 1.8.9.3 0 .4-.1.5-.2l.5-.6c.1-.2.3-.2.5-.1l1.6.8c.2.1.3.2.3.4 0 .5-.2 1.5-.8 1.8-.5.3-1.2.4-2 .3-1.1-.2-2.4-.8-3.7-2-1.3-1.2-2.1-2.6-2.4-3.8-.2-.8-.1-1.5.1-1.9z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Filled WhatsApp brand mark (footer hover). */
export function IconWhatsAppSolid({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2.75A9.25 9.25 0 0 0 3.5 16.4L2.4 21.1l4.8-1.25A9.25 9.25 0 1 0 12 2.75zm5.05 13.15c-.22.62-1.28 1.18-2.1 1.28-.54.08-1.24.14-3.58-.74-2.9-1.1-4.78-3.95-4.93-4.13-.14-.18-1.18-1.57-1.18-3 0-1.42.74-2.12.98-2.4.26-.3.62-.34.84-.34h.62c.2 0 .46-.02.7.54l.84 2.05c.1.24.02.4-.1.56l-.42.5c-.14.16-.28.34-.12.64.16.3.72 1.18 1.54 1.9 1.06.94 1.94 1.24 2.22 1.38.28.14.44.12.62-.08l.72-.86c.16-.2.4-.16.66-.06l1.9.9c.22.1.36.16.42.4.04.1.04.66-.24 1.26z"
      />
    </svg>
  );
}

/** Outline Instagram brand mark (footer default). */
export function IconInstagram({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.4"
        y="3.4"
        width="17.2"
        height="17.2"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.15" cy="6.85" r="1" fill="currentColor" />
    </svg>
  );
}

/** Instagram brand mark for hover (white strokes on cyan). */
export function IconInstagramSolid({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5.1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="3.9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
    </svg>
  );
}

/** Outline LinkedIn brand mark (footer default). */
export function IconLinkedIn({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3.4"
        y="3.4"
        width="17.2"
        height="17.2"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 10.2V16.5M8 10.2c.9 0 1.6-.7 1.6-1.6S8.9 7 8 7s-1.6.7-1.6 1.6.7 1.6 1.6 1.6z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 16.5v-3.8c0-1.5.8-2.4 2.1-2.4 1.2 0 1.9.8 1.9 2.3v3.9"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Filled LinkedIn brand mark (footer hover). */
export function IconLinkedInSolid({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M5.2 3.2A2.2 2.2 0 0 0 3 5.4v13.2A2.2 2.2 0 0 0 5.2 20.8h13.6a2.2 2.2 0 0 0 2.2-2.2V5.4a2.2 2.2 0 0 0-2.2-2.2H5.2zm2.7 4.1a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM6.4 9.4h3v7.4h-3V9.4zm4.7 0h2.85v1.05h.04c.4-.75 1.35-1.55 2.8-1.55 3 0 3.55 1.95 3.55 4.5v3.4h-3V14c0-1.15-.02-2.65-1.6-2.65-1.6 0-1.85 1.25-1.85 2.55v3.5H11.1V9.4z"
      />
    </svg>
  );
}

/**
 * Dual-state social glyph: outline by default, solid on parent `.soc:hover`.
 */
export function SocialGlyph({
  outline,
  solid,
}: {
  outline: ReactNode;
  solid: ReactNode;
}) {
  return (
    <span className="soc-glyph" aria-hidden="true">
      <span className="soc-glyph-out">{outline}</span>
      <span className="soc-glyph-fill">{solid}</span>
    </span>
  );
}
