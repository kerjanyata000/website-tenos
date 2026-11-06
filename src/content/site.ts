import type { SiteSettings } from "./types";

/**
 * Site-wide settings. Contact and destination fields stay empty until
 * Tenos provides validated values — do not invent placeholders as real data.
 */
export const siteSettings: SiteSettings = {
  siteName: "Tenos",
  legalName: "PT. Tenos Data Teknologi",
  defaultTitle: "Tenos — Beyond Technology. Empowering Intelligence.",
  defaultDescription:
    "AI systems consulting for businesses, and AI learning through Digdeep Academy.",
  /** Digits only for wa.me — display as +62 811-1010-331 */
  whatsappNumber: "628111010331",
  whatsappMessage: "Hello Tenos, I would like to discuss our technology needs.",
  academyUrl: "https://www.digdeep.id/",
  email: "",
  /** Address from approved Figma footer (desktop). */
  officeAddress: "Jl. Bango Raya No.31 B, Pd. Labu, Cilandak, Jakarta Selatan 12450",
  privacyUrl: "",
  social: [],
};
