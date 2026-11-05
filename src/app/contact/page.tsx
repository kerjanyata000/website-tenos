import type { Metadata } from "next";

import { ContactPage } from "@/components/sections/contact/ContactPage";
import { getContactCopy } from "@/content/contact";

export const metadata: Metadata = {
  title: getContactCopy("en").metaTitle,
  description: getContactCopy("en").metaDescription,
};

export default function ContactRoute() {
  return <ContactPage />;
}
