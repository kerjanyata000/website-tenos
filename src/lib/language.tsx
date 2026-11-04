"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Lang } from "@/content/types";

export type { Lang };

/** Flip to true when bilingual launch is ready. */
export const LANGUAGE_TOGGLE_ENABLED = false;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleEnabled: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLang(lang: Lang) {
  document.documentElement.lang = lang;
  document.querySelector(".pg")?.setAttribute("data-lang", lang);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((next: Lang) => {
    if (!LANGUAGE_TOGGLE_ENABLED) return;
    setLangState(next);
    applyDocumentLang(next);
  }, []);

  useEffect(() => {
    applyDocumentLang(LANGUAGE_TOGGLE_ENABLED ? lang : "en");
  }, [lang]);

  const value = useMemo(
    () => ({
      lang: LANGUAGE_TOGGLE_ENABLED ? lang : "en",
      setLang,
      toggleEnabled: LANGUAGE_TOGGLE_ENABLED,
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
