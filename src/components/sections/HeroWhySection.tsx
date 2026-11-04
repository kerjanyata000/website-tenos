"use client";

import { useId, type CSSProperties } from "react";

import { ExportCta } from "@/components/sections/ExportCta";
import { Reveal } from "@/components/ui/Reveal";
import { heroDisplay } from "@/content/homepage";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";

import { WhyLogoReveal } from "./why/WhyLogoReveal";

const bubbleVars = [
  { s: "18px", x: "21%", t: "20s", d: "-20s", r: "444px", dx: "-31px" },
  { s: "60px", x: "70%", t: "15s", d: "-11s", r: "718px", dx: "-33px" },
  { s: "32px", x: "29%", t: "14s", d: "-2s", r: "642px", dx: "13px" },
  { s: "10px", x: "32%", t: "15s", d: "-17s", r: "637px", dx: "-33px" },
  { s: "60px", x: "74%", t: "15s", d: "-7s", r: "742px", dx: "40px" },
  { s: "32px", x: "9%", t: "23s", d: "-18s", r: "623px", dx: "-34px" },
  { s: "14px", x: "7%", t: "22s", d: "-4s", r: "568px", dx: "13px" },
  { s: "14px", x: "71%", t: "15s", d: "-18s", r: "577px", dx: "31px" },
  { s: "60px", x: "89%", t: "16s", d: "-3s", r: "717px", dx: "33px" },
  { s: "44px", x: "26%", t: "19s", d: "-3s", r: "700px", dx: "-32px" },
  { s: "32px", x: "9%", t: "23s", d: "-6s", r: "674px", dx: "28px" },
  { s: "24px", x: "42%", t: "21s", d: "-18s", r: "892px", dx: "18px" },
  { s: "18px", x: "40%", t: "17s", d: "-25s", r: "512px", dx: "-9px" },
  { s: "10px", x: "75%", t: "18s", d: "-16s", r: "673px", dx: "3px" },
] as const;

function WhyIcon({
  type,
}: {
  type: "spark" | "target" | "arrow" | "learn";
}) {
  if (type === "spark") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M10 3l2.2 6.3 6.3 2.2-6.3 2.2L10 20l-2.2-6.3L1.5 11.5l6.3-2.2z" />
      </svg>
    );
  }
  if (type === "target") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (type === "arrow") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 12h16M14 6l6 6-6 6" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11.5V16c0 1.2 2.2 3 5 3s5-1.8 5-3v-4.5" />
    </svg>
  );
}

/** Yellow TENOS ring mark — same inline footprint as the former AI Orb. */
function TenosRing() {
  const rawId = useId();
  const uid = `tenos-ring-${rawId.replace(/:/g, "")}`;
  /* Outer r=42, inner r=26 — evenodd cutout keeps the center truly transparent */
  const annulus =
    "M50 8a42 42 0 1 0 .01 0zm0 16a26 26 0 1 1-.01 0z";

  return (
    <span className="aitile" aria-hidden="true">
      {/* Fixed footprint; visual layer scales on hover so headline text does not shift */}
      <span className="tenos-viz">
        <span className="tenos-ambient" />
        <svg className="tenos-ring-svg" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id={`${uid}-body`} x1="24%" y1="10%" x2="76%" y2="90%">
              <stop offset="0%" stopColor="#FFFBE6" />
              <stop offset="35%" stopColor="#FFE566" />
              <stop offset="70%" stopColor="#FFD600" />
              <stop offset="100%" stopColor="#FFD84A" />
            </linearGradient>
            <radialGradient id={`${uid}-shine`} cx="32%" cy="28%" r="58%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`${uid}-glass`} cx="70%" cy="60%" r="46%">
              <stop offset="0%" stopColor="#5ED8E2" stopOpacity="0.14" />
              <stop offset="60%" stopColor="#08BAC5" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#08BAC5" stopOpacity="0" />
            </radialGradient>
            <mask
              id={`${uid}-mask`}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100"
              height="100"
            >
              <rect width="100" height="100" fill="#000" />
              <circle cx="50" cy="50" r="42" fill="#fff" />
              <circle cx="50" cy="50" r="26" fill="#000" />
            </mask>
            <filter
              id={`${uid}-float`}
              x="-40%"
              y="-40%"
              width="180%"
              height="180%"
              colorInterpolationFilters="sRGB"
            >
              <feDropShadow
                dx="0"
                dy="2.5"
                stdDeviation="2"
                floodColor="#0B0D12"
                floodOpacity="0.1"
              />
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="2.8"
                floodColor="#FFD600"
                floodOpacity="0.28"
              />
            </filter>
          </defs>

          <g className="tenos-ring-stack" filter={`url(#${uid}-float)`}>
            <path
              className="tenos-ring-body"
              d={annulus}
              fill={`url(#${uid}-body)`}
              fillRule="evenodd"
            />
            <path
              className="tenos-ring-shine"
              d={annulus}
              fill={`url(#${uid}-shine)`}
              fillRule="evenodd"
            />
            <path
              className="tenos-ring-glass"
              d={annulus}
              fill={`url(#${uid}-glass)`}
              fillRule="evenodd"
            />
            <g className="tenos-blobs" mask={`url(#${uid}-mask)`}>
              <circle className="tenos-blob tenos-blob-a" cx="34" cy="30" r="14" fill="#FFFFFF" fillOpacity="0.4" />
              <circle className="tenos-blob tenos-blob-b" cx="70" cy="64" r="11" fill="#5ED8E2" fillOpacity="0.12" />
              <circle className="tenos-blob tenos-blob-c" cx="58" cy="24" r="10" fill="#FFE566" fillOpacity="0.45" />
            </g>
          </g>

          <g className="tenos-orbit-g tenos-orbit-a">
            <ellipse
              className="tenos-orbit"
              cx="50"
              cy="50"
              rx="46"
              ry="31"
              stroke="#FFD600"
              strokeWidth="1.1"
            />
            <circle className="tenos-particle" cx="96" cy="50" r="2" fill="#FFD600" />
            <circle className="tenos-particle tenos-particle-dim" cx="18" cy="68" r="1.35" fill="#FFE566" />
          </g>
          <g className="tenos-orbit-g tenos-orbit-b">
            <ellipse
              className="tenos-orbit"
              cx="50"
              cy="50"
              rx="42"
              ry="42"
              stroke="#FFD600"
              strokeWidth="0.9"
              transform="rotate(48 50 50)"
            />
            <circle className="tenos-particle" cx="50" cy="8" r="1.6" fill="#FFE566" />
          </g>
        </svg>
      </span>
    </span>
  );
}

function SimulatedClientLogos({ note }: { note: string }) {
  return (
    <ul className="cl-row" aria-label={note}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <li className="cl" key={n}>
          <svg viewBox="0 0 150 32" fill="#fff" role="img" aria-label={`logoipsum ${n}`}>
            <g>
              {n === 1 && (
                <>
                  <circle cx="14" cy="16" r="11" />
                  <circle cx="14" cy="16" r="5" fill="none" />
                </>
              )}
              {n === 2 && <path d="M3 27L14 5l11 22z" />}
              {n === 3 && <rect x="3" y="5" width="22" height="22" rx="6" />}
              {n === 4 && (
                <>
                  <path d="M3 16a11 11 0 0 1 22 0h-7a4 4 0 0 0-8 0z" />
                  <path d="M3 18h22a11 11 0 0 1-22 0z" />
                </>
              )}
              {n === 5 && <path d="M14 4l10 6v12l-10 6-10-6V10z" />}
              {n === 6 && <path d="M4 6h8v20H4zM16 6h8v8h-8zM16 18h8v8h-8z" />}
            </g>
            <text
              x="34"
              y="22.5"
              fontFamily="Manrope, sans-serif"
              fontSize="18"
              fontWeight="700"
              letterSpacing="-.4"
            >
              logoipsum
            </text>
          </svg>
        </li>
      ))}
    </ul>
  );
}

export function HeroWhySection() {
  const { hero, why } = useHomepageCopy();

  return (
    <div className="hw">
      <div className="hero-glow" aria-hidden="true" />

      <section id="top" className="hero">
        <div className="wrap hero-in">
          <h1 className="disp">
            <span className="h-l1">
              {heroDisplay.line1}
              <br />
            </span>
            <span className="h-l2">
              {heroDisplay.line2Before ? (
                <span>{heroDisplay.line2Before}</span>
              ) : null}
              <span className="h-brk" /> <TenosRing />{" "}
              <span>{heroDisplay.line2After}</span>
            </span>
          </h1>
          <div className="lead">
            <p>
              {hero.lead[0]}
              <strong>{hero.lead[1]}</strong>
              {hero.lead[2]}
            </p>
          </div>
          <div className="btns">
            <ExportCta href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </ExportCta>
            <ExportCta href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </ExportCta>
          </div>
        </div>
        <div className="clients">
          <div className="wrap">
            <p className="sr-only">{hero.clientsNote}</p>
            <SimulatedClientLogos note={hero.clientsNote} />
          </div>
        </div>
      </section>

      <section className="sec wy" aria-labelledby="wy-h" id="why-tenos">
        <div className="wy-bub" aria-hidden="true">
          {bubbleVars.map((b, i) => (
            <i
              key={i}
              style={
                {
                  "--s": b.s,
                  "--x": b.x,
                  "--t": b.t,
                  "--d": b.d,
                  "--r": b.r,
                  "--dx": b.dx,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="wrap">
          <Reveal className="wy-hd">
            <span className="eyebrow" style={{ fontSize: 14, color: "#ffffff" }}>
              {why.eyebrow}
            </span>
            <h2 className="wy-h2" id="wy-h">
              {why.heading}
            </h2>
          </Reveal>
          <div className="wy-g2">
            <div className="wy-mid">
              <WhyLogoReveal />
            </div>
            {why.reasons.map((reason, index) => (
              <article
                key={reason.n}
                className={`wy-c wy-c${index + 1} ${reason.side === "left" ? "wy-lft" : "wy-rgt"}`}
                style={{ ["--i" as string]: index + 1 }}
              >
                <div className="wy-top">
                  <span className="wy-n">{reason.n}</span>
                  <span className="wy-i">
                    <WhyIcon type={reason.icon} />
                  </span>
                </div>
                <h3 className="wy-t">{reason.title}</h3>
                <p className="wy-d">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
