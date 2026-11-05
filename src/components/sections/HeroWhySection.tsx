"use client";

import { type CSSProperties } from "react";

import { ExportCta } from "@/components/sections/ExportCta";
import { LocaleText } from "@/components/ui/LocaleText";
import { Reveal } from "@/components/ui/Reveal";
import { heroDisplay, homepageCopy } from "@/content/homepage";

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

const { en, id } = homepageCopy;

const whyIcons = {
  learn: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11.5V16c0 1.2 2.2 3 5 3s5-1.8 5-3v-4.5" />
    </svg>
  ),
  bolt: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
    </svg>
  ),
  systems: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="7" height="7" rx="2" />
      <rect x="13" y="13" width="7" height="7" rx="2" />
      <path d="M11 7.5h3.5a2 2 0 0 1 2 2V13" />
    </svg>
  ),
} as const;

const reasonIcons = [whyIcons.learn, whyIcons.bolt, whyIcons.systems] as const;

/** Claude Design export `.tring` — yellow glass ring with hover hole-close. */
function TenosRing() {
  return (
    <span className="tring" role="img" aria-label="Tenos">
      <i className="tr-glass" />
      <svg className="tr-ic" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <g className="tr-star">
          <path
            d="M98 71C101 90 111 100 130 103C111 106 101 116 98 135C95 116 85 106 66 103C85 100 95 90 98 71Z"
            fill="#fff"
            transform="rotate(10 98 103)"
          />
        </g>
        <g className="tr-plus">
          <path
            d="M129 75v14M122 82h14"
            stroke="#fff"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
        </g>
        <circle className="tr-dot" cx="70" cy="121" r="6.5" fill="#fff" />
      </svg>
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

function LeadStrong({ parts }: { parts: [string, string, string] }) {
  return (
    <>
      {parts[0]}
      <strong>{parts[1]}</strong>
      {parts[2]}
    </>
  );
}

export function HeroWhySection() {
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
            <p className="en">
              <LeadStrong parts={en.hero.lead} />
            </p>
            <span className="id">
              <LeadStrong parts={id.hero.lead} />
            </span>
          </div>
          <div className="btns">
            <ExportCta href={en.hero.primaryCta.href} variant="primary">
              <LocaleText en={en.hero.primaryCta.label} id={id.hero.primaryCta.label} />
            </ExportCta>
            <ExportCta href={en.hero.secondaryCta.href} variant="ghost">
              <LocaleText
                en={en.hero.secondaryCta.label}
                id={id.hero.secondaryCta.label}
              />
            </ExportCta>
          </div>
        </div>
        <div className="clients">
          <div className="wrap">
            <p className="sr-only">{en.hero.clientsNote}</p>
            <SimulatedClientLogos note={en.hero.clientsNote} />
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
              <LocaleText en={en.why.eyebrow} id={id.why.eyebrow} />
            </span>
            <h2 className="wy-h2" id="wy-h">
              <LocaleText en={en.why.heading} id={id.why.heading} />
            </h2>
          </Reveal>
          <div className="wy-g2 wy-3 wy-scrolly">
            <div className="wy-pin">
              <div className="wy-list">
                {en.why.reasons.map((reason, index) => {
                  const idReason = id.why.reasons[index];
                  return (
                    <article
                      key={reason.n}
                      className={`wy-c wy-c${index + 1} wy-lft`}
                      style={{ ["--i" as string]: index + 1 }}
                    >
                      <div className="wy-top">
                        <span className="wy-n">{reason.n}</span>
                        <span className="wy-i">{reasonIcons[index]}</span>
                      </div>
                      <h3 className="wy-t">
                        <LocaleText en={reason.title} id={idReason.title} />
                      </h3>
                      <p className="wy-d">
                        <LocaleText
                          en={reason.description}
                          id={idReason.description}
                        />
                      </p>
                    </article>
                  );
                })}
              </div>
              <div className="wy-mid">
                <WhyLogoReveal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
