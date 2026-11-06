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
  channels: {
    email: { title: string; placeholder: string };
    office: { title: string; placeholder: string };
    hours: { title: string; placeholder: string };
    social: {
      title: string;
      brands: string;
      linksPlaceholder: string;
    };
  };
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
  channels: {
    email: { title: "Email", placeholder: "[email to be provided]" },
    office: {
      title: "Office",
      placeholder: "[office address to be provided]",
    },
    hours: { title: "Working hours", placeholder: "[hours to be provided]" },
    social: {
      title: "Social",
      brands: "Instagram · LinkedIn",
      linksPlaceholder: "[links to be provided]",
    },
  },
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
  channels: {
    email: { title: "Email", placeholder: "[email akan diberikan]" },
    office: {
      title: "Kantor",
      placeholder: "[alamat kantor akan diberikan]",
    },
    hours: { title: "Jam kerja", placeholder: "[jam kerja akan diberikan]" },
    social: {
      title: "Media sosial",
      brands: "Instagram · LinkedIn",
      linksPlaceholder: "[tautan akan diberikan]",
    },
  },
};

export function getContactCopy(lang: Lang): ContactCopy {
  return lang === "id" ? id : en;
}
