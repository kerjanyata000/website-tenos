"use client";

import { useId } from "react";

import { useReveal } from "@/hooks/useReveal";

/** Official TENOS mark path from visual-reference/logo-kuning_tenos.svg (viewBox 0 0 93 93). */
const LOGO_PATH =
  "M44.6943 0.0263672C70.1741 -0.830005 91.5391 19.0905 92.4668 44.5654C93.3943 70.0407 73.534 91.4634 48.0615 92.4619C22.4877 93.4643 0.962644 73.5075 0.03125 47.9316C-0.9 22.3559 19.1171 0.886367 44.6943 0.0263672ZM45.5693 17.8721C29.9103 18.2421 17.5079 31.2209 17.8486 46.8799C18.1898 62.5387 31.1455 74.9651 46.8047 74.6533C62.507 74.3406 74.9714 61.3437 74.6289 45.6436C74.2889 29.9433 61.2693 17.5011 45.5693 17.8721Z";

/**
 * Sketch → wireframe → CSS-3D morph → solid yellow TENOS mark.
 * Decorative only; keeps `.rb-stage` sticky footprint used by Why layout.
 */
export function WhyLogoReveal() {
  const rawId = useId();
  const uid = `wy-logo-${rawId.replace(/:/g, "")}`;
  const { ref, isVisible } = useReveal<HTMLDivElement>({
    threshold: 0.28,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <div
      ref={ref}
      className={`rb-stage lg-stage${isVisible ? " is-on" : ""}`}
      aria-hidden="true"
    >
      <div className="lg-float">
        <div className="lg-parallax">
          <div className="lg-scene">
            <div className="lg-morph">
              {/* Soft annulus glow — ring-masked so the center stays open */}
              <span className="lg-ambient" />

              <svg
                className="lg-svg"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id={`${uid}-fill`}
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(46.249 46.2492) rotate(90) scale(46.2492 46.249)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#FDD201" />
                  </radialGradient>
                  <radialGradient id={`${uid}-shine`} cx="32%" cy="28%" r="58%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
                    <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </radialGradient>
                  <filter
                    id={`${uid}-glow`}
                    x="-35%"
                    y="-35%"
                    width="170%"
                    height="170%"
                    colorInterpolationFilters="sRGB"
                  >
                    <feDropShadow
                      dx="0"
                      dy="0"
                      stdDeviation="3.2"
                      floodColor="#FDD201"
                      floodOpacity="0.45"
                    />
                    <feDropShadow
                      dx="0"
                      dy="3"
                      stdDeviation="2.4"
                      floodColor="#0B0D12"
                      floodOpacity="0.18"
                    />
                  </filter>
                </defs>

                {/* Stage 1 — construction / sketch guides */}
                <g className="lg-construct">
                  <line
                    className="lg-guide lg-guide-h"
                    x1="6"
                    y1="46.5"
                    x2="87"
                    y2="46.5"
                  />
                  <line
                    className="lg-guide lg-guide-v"
                    x1="46.5"
                    y1="6"
                    x2="46.5"
                    y2="87"
                  />
                  <path
                    className="lg-guide lg-guide-arc"
                    d="M18 28c8-14 28-20 42-12"
                  />
                  <path
                    className="lg-guide lg-guide-tick"
                    d="M72 22l6-4M74 26l5 2"
                  />
                  <circle
                    className="lg-guide lg-guide-ring"
                    cx="46.5"
                    cy="46.5"
                    r="48"
                  />
                </g>

                {/* Stage 1 — stroke draw of the official silhouette */}
                <path
                  className="lg-sketch"
                  d={LOGO_PATH}
                  fill="none"
                  stroke="#FDD201"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={100}
                />

                {/* Stage 2 — refined wireframe + perspective ellipses */}
                <g className="lg-wire">
                  <ellipse
                    className="lg-wire-orbit lg-wire-orbit-a"
                    cx="46.5"
                    cy="46.5"
                    rx="44"
                    ry="28"
                  />
                  <ellipse
                    className="lg-wire-orbit lg-wire-orbit-b"
                    cx="46.5"
                    cy="46.5"
                    rx="28"
                    ry="44"
                  />
                  <path
                    className="lg-wire-path"
                    d={LOGO_PATH}
                    fill="none"
                    stroke="#FFE566"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={100}
                  />
                  <path
                    className="lg-wire-inner"
                    d={LOGO_PATH}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeOpacity="0.35"
                    strokeWidth="0.55"
                    strokeDasharray="2 3.5"
                    pathLength={100}
                  />
                </g>

                {/* Stage 3–4 — solid official mark (evenodd hole = transparent center) */}
                <g className="lg-solid" filter={`url(#${uid}-glow)`}>
                  <path
                    d={LOGO_PATH}
                    fill={`url(#${uid}-fill)`}
                    fillRule="evenodd"
                  />
                  <path
                    d={LOGO_PATH}
                    fill={`url(#${uid}-shine)`}
                    fillRule="evenodd"
                  />
                </g>

                {/* Hover-only orbital accents */}
                <g className="lg-orbit lg-orbit-a">
                  <ellipse cx="46.5" cy="46.5" rx="48" ry="32" />
                  <circle className="lg-spark" cx="94.5" cy="46.5" r="1.6" />
                </g>
                <g className="lg-orbit lg-orbit-b">
                  <ellipse cx="46.5" cy="46.5" rx="32" ry="48" />
                  <circle className="lg-spark" cx="46.5" cy="-1.5" r="1.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
