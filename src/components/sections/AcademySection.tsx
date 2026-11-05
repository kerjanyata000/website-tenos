"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import { ExportCta } from "@/components/sections/ExportCta";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import type { HomepageCopy } from "@/content/homepage";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";
import { getAcademyUrl } from "@/lib/links";

function FeatureIcon({
  type,
}: {
  type: HomepageCopy["academy"]["features"][number]["icon"];
}) {
  if (type === "book") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
        <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5z" />
      </svg>
    );
  }
  if (type === "user") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="10" cy="8" r="4" />
        <path d="M3 21a7 7 0 0 1 14 0" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

const SLIDE_MS = 4000;

export function AcademySection() {
  const { academy } = useHomepageCopy();
  const [slide, setSlide] = useState(1);
  /** Bumps when the user jumps slides so the active story-bar restarts. */
  const [progressKey, setProgressKey] = useState(0);
  const academyUrl = getAcademyUrl();
  const slideCount = academy.slides.length;
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current != null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    timerRef.current = window.setInterval(() => {
      setSlide((s) => (s % slideCount) + 1);
    }, SLIDE_MS);
  }, [clearTimer, slideCount]);

  const goTo = useCallback(
    (n: number) => {
      setSlide(n);
      setProgressKey((k) => k + 1);
      startTimer();
    },
    [startTimer],
  );

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  return (
    <section
      id={academy.id}
      className="sec ac-full"
      aria-labelledby="ac-h"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="wrap">
        <div
          className="split"
          style={
            {
              ["--sa"]: "550fr",
              ["--sb"]: "538fr",
              ["--sgap"]: "32px",
              ["--ai"]: "stretch",
            } as CSSProperties
          }
        >
          <Reveal className="acol">
            <Image
              className="alogo"
              src="/brand/digdeep-logo.png"
              alt="Digdeep"
              width={160}
              height={40}
              style={{ width: "auto", height: 40 }}
            />
            <h2 className="h2" id="ac-h">
              {academy.headingBefore}
              <span className="dd">{academy.headingBrand}</span>
            </h2>
            <p className="lead">
              {academy.lead[0]}
              <strong>{academy.lead[1]}</strong>
              {academy.lead[2]}
            </p>
            <div className="btns" style={{ marginTop: 8, alignItems: "center" }}>
              {academyUrl ? (
                <ExportCta
                  href={academyUrl}
                  className="ac-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {academy.ctaLabel}
                </ExportCta>
              ) : (
                <div className="stack" style={{ gap: 8 }}>
                  <ExportCta disabled className="ac-cta">
                    {academy.ctaLabel}
                  </ExportCta>
                  <Placeholder>{academy.urlPending}</Placeholder>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal
            className="cs"
            delay={120}
            data-slide={String(slide)}
            role="group"
            aria-roledescription="carousel"
            aria-label={academy.photosLabel}
          >
            {academy.slides.map((item, index) => {
              const n = index + 1;
              return (
                <div key={n} className={`csl csl${n}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- carousel slide needs plain img for export CSS object-fit rules */}
                  <img src={item.src} alt={item.alt} draggable={false} />
                </div>
              );
            })}
            <div className="cbars">
              {academy.slides.map((_, index) => {
                const n = index + 1;
                const done = n < slide;
                const active = n === slide;
                return (
                  <button
                    key={n}
                    type="button"
                    className="cb"
                    onClick={() => goTo(n)}
                    aria-label={academy.photoOf(n, slideCount)}
                    aria-current={active ? "true" : undefined}
                  >
                    <span className="cb-track">
                      <span
                        key={active ? `active-${slide}-${progressKey}` : `idle-${n}`}
                        className={`cb-fill${done ? " is-done" : ""}${active ? " is-active" : ""}`}
                        style={
                          active
                            ? ({
                                ["--cb-ms" as string]: `${SLIDE_MS}ms`,
                              } as CSSProperties)
                            : undefined
                        }
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="af2s af2-3">
          {academy.features.map((feature, index) => (
            <Reveal
              className="af2"
              key={feature.title}
              delay={80}
              index={index}
            >
              <span className="af2-i">
                <FeatureIcon type={feature.icon} />
              </span>
              <h3 className="af2-t">{feature.title}</h3>
              <p className="af2-d">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
