/** Shared content shapes for typed homepage modules (CMS-ready later). */

export type LocaleCode = "en" | "id";
export type Lang = LocaleCode;

export interface SiteSettings {
  siteName: string;
  legalName: string;
  defaultTitle: string;
  defaultDescription: string;
  /** WhatsApp digits only, no +. Empty until provided. */
  whatsappNumber: string;
  /** Prefill message for wa.me links */
  whatsappMessage: string;
  /** External Digdeep Academy URL. Empty until provided. */
  academyUrl: string;
  privacyUrl: string;
  social: SocialLink[];
}

export interface SocialLink {
  platform: "whatsapp" | "instagram" | "linkedin";
  url: string;
  label: string;
}

export interface PlaceholderAware {
  isPlaceholder?: boolean;
}
