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
  whatsappNumber: "",
  whatsappMessage: "Hello Tenos, I would like to discuss our technology needs.",
  academyUrl: "https://www.digdeep.id/",
  privacyUrl: "",
  social: [],
};
