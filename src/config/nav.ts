export type NavItem = {
  label: string;
  href: string;
  /** Match against pathname for aria-current */
  match?: "home" | "about" | "contact";
};

/**
 * Primary nav labels match the Claude Design export.
 * Dedicated About / Contact routes mirror Nav.dc.html destinations.
 */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", match: "home" },
  { label: "About Us", href: "/about", match: "about" },
  { label: "Contact", href: "/contact", match: "contact" },
];

export const headerCta = {
  label: "Contact Us",
  /** Prefer WhatsApp via getWhatsAppUrl() in Header; this is the fallback route. */
  href: "/contact",
} as const;

export const footerPageLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerFocusLinks = [
  {
    label: "AI Systems Consulting",
    href: "/#ai",
    external: false,
  },
  {
    label: "Digdeep Academy",
    href: null as string | null,
    external: true,
    pendingLabel: "[Official Academy URL to be provided]",
  },
] as const;
