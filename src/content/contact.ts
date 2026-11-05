import type { Lang } from "./types";

export type ContactCopy = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
  whatsapp: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    numberLabel: string;
    numberPlaceholder: string;
  };
  channels: Array<{
    key: "email" | "office" | "hours" | "social";
    title: string;
    body: string;
  }>;
};

const en: ContactCopy = {
  metaTitle: "Contact",
  metaDescription:
    "Have an AI opportunity to explore, a business challenge to solve, or a collaboration in mind? Tell us about it and our team will get back to you.",
  hero: {
    eyebrow: "Contact",
    heading: "Let's Start a Conversation.",
    lead: "Have an AI opportunity to explore, a business challenge to solve, or a collaboration in mind? Tell us about it and our team will get back to you.",
  },
  whatsapp: {
    eyebrow: "WhatsApp consultation",
    heading: "The fastest way to reach our team.",
    body: "Share your business needs or questions about AI consulting and development. We will reply and suggest a next step.",
    cta: "Talk to Our Team",
    numberLabel: "WhatsApp:",
    numberPlaceholder: "[number to be provided]",
  },
  channels: [
    { key: "email", title: "Email", body: "[email to be provided]" },
    { key: "office", title: "Office", body: "[office address to be provided]" },
    { key: "hours", title: "Working hours", body: "[hours to be provided]" },
    {
      key: "social",
      title: "Social",
      body: "Instagram · LinkedIn [links to be provided]",
    },
  ],
};

const id: ContactCopy = {
  metaTitle: "Kontak",
  metaDescription:
    "Punya peluang AI yang ingin dijajaki, tantangan bisnis yang ingin diselesaikan, atau ide kolaborasi? Ceritakan kepada kami dan tim kami akan segera menghubungi Anda.",
  hero: {
    eyebrow: "Kontak",
    heading: "Let's Start a Conversation.",
    lead: "Punya peluang AI yang ingin dijajaki, tantangan bisnis yang ingin diselesaikan, atau ide kolaborasi? Ceritakan kepada kami dan tim kami akan segera menghubungi Anda.",
  },
  whatsapp: {
    eyebrow: "Konsultasi WhatsApp",
    heading: "The fastest way to reach our team.",
    body: "Sampaikan kebutuhan bisnis atau pertanyaan Anda seputar konsultasi dan pengembangan AI. Kami akan membalas dan menyarankan langkah berikutnya.",
    cta: "Bicara dengan Tim Kami",
    numberLabel: "WhatsApp:",
    numberPlaceholder: "[nomor akan diberikan]",
  },
  channels: [
    { key: "email", title: "Email", body: "[email akan diberikan]" },
    { key: "office", title: "Kantor", body: "[alamat kantor akan diberikan]" },
    { key: "hours", title: "Jam kerja", body: "[jam kerja akan diberikan]" },
    {
      key: "social",
      title: "Media sosial",
      body: "Instagram · LinkedIn [tautan akan diberikan]",
    },
  ],
};

export function getContactCopy(lang: Lang): ContactCopy {
  return lang === "id" ? id : en;
}
