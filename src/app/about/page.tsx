import type { Metadata } from "next";

import { AboutPage } from "@/components/sections/about/AboutPage";
import { getAboutCopy } from "@/content/about";

export const metadata: Metadata = {
  title: getAboutCopy("en").metaTitle,
  description: getAboutCopy("en").metaDescription,
};

export default function AboutRoute() {
  return <AboutPage />;
}
