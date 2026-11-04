"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  /** Fraction of element that must be visible (0–1). */
  threshold?: number;
  /** Bottom root margin — delays trigger until nearer the viewport. */
  rootMargin?: string;
};

/**
 * One-shot scroll reveal. Returns a ref + whether the element has entered view.
 * Visibility is tracked in React state so re-renders (e.g. FAQ open/close)
 * do not wipe `.is-visible` the way imperative classList updates would.
 * Marks `<html>` with `.js-reveal` so CSS can safely hide pre-reveal state
 * only when JS is available (no permanent content hiding without JS).
 */
export function useReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js-reveal");

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(el);
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
