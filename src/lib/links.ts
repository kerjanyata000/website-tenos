import { siteSettings } from "@/content/site";

/** Build a WhatsApp deep link when a validated number exists. */
export function getWhatsAppUrl(message = siteSettings.whatsappMessage): string | null {
  const number = siteSettings.whatsappNumber.trim();
  if (!number) return null;
  const text = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${text}`;
}

export function getAcademyUrl(): string | null {
  const url = siteSettings.academyUrl.trim();
  return url || null;
}
