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

const STORAGE_KEY = "tenos-lang";

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "id") return stored;
  } catch {
    /* ignore */
  }
  return "en";
}

function applyDocumentLang(lang: Lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll(".pg").forEach((el) => {
    el.setAttribute("data-lang", lang);
    el.setAttribute("lang", lang);
  });
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleEnabled: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Language always hydrates as `"en"` (same as SSR), then syncs the saved
 * preference from localStorage after mount. This avoids hydration mismatches
 * when a stored `"id"` preference would otherwise differ from the server HTML.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = readStoredLang();
    setLangState(stored);
    applyDocumentLang(stored);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;
      const next = readStoredLang();
      setLangState(next);
      applyDocumentLang(next);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    applyDocumentLang(lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setLangState(next);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleEnabled: true,
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
