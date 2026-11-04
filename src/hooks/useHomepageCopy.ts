"use client";

import { getHomepageCopy, type HomepageCopy } from "@/content/homepage";
import { useLanguage } from "@/lib/language";

export function useHomepageCopy(): HomepageCopy {
  const { lang } = useLanguage();
  return getHomepageCopy(lang);
}
