"use client";

import { useState } from "react";

import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";
import { getWhatsAppUrl } from "@/lib/links";

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.7-5.2A8.5 8.5 0 1 1 21 12z" />
    </svg>
  );
}

export function ConsultingSection() {
  const { consulting } = useHomepageCopy();
  const [step, setStep] = useState(1);
  const whatsappUrl = getWhatsAppUrl();
  const stepTotal = consulting.steps.length;

  return (
    <section
      id={consulting.id}
      className="sec aisec"
      aria-labelledby="ai-h"
    >
      <div className="wrap">
        <div className="ais" data-step={String(step)}>
          <Reveal className="ais-l">
            <span className="eyebrow">{consulting.eyebrow}</span>
            <h2 className="h2" id="ai-h">
              {consulting.heading}
            </h2>
            <p className="lead">{consulting.lead}</p>
            <div
              className="ast-row"
              role="group"
              aria-label={consulting.processSteps}
            >
              {consulting.steps.map((s, index) => {
                const n = index + 1;
                const active = step === n;
                return (
                  <button
                    key={s.n}
                    type="button"
                    className={`ast ast${n}`}
                    onClick={() => setStep(n)}
                    aria-pressed={active ? "true" : "false"}
                    aria-label={consulting.stepLabel(n)}
                  >
                    <span>{s.n}</span>
                    <i aria-hidden="true" />
                  </button>
                );
              })}
            </div>
            <p className="ast-c">
              {consulting.steps.map((_, index) => {
                const n = index + 1;
                return (
                  <span key={n} className={`acn acn${n}`}>
                    {consulting.stepOf(n, stepTotal)}
                  </span>
                );
              })}
            </p>
            <div className="btns" style={{ alignItems: "center" }}>
              {whatsappUrl ? (
                <a
                  className="btn btn-p btn-lg ai-cta"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  <span>{consulting.ctaLabel}</span>
                  <span className="sr-only">{consulting.opensNewTab}</span>
                </a>
              ) : (
                <a className="btn btn-p btn-lg ai-cta" href="#contact">
                  <WhatsAppIcon />
                  <span>{consulting.ctaLabel}</span>
                </a>
              )}
              <span className="sm">
                {consulting.whatsappHint}{" "}
                {whatsappUrl ? null : (
                  <Placeholder>{consulting.numberPending}</Placeholder>
                )}
              </span>
            </div>
          </Reveal>

          <div className="ais-r">
            {consulting.steps.map((s, index) => {
              const n = index + 1;
              return (
                <button
                  key={s.n}
                  type="button"
                  className={`asc asc${n}`}
                  onClick={() => setStep(n)}
                  aria-pressed={step === n ? "true" : "false"}
                >
                  <span className="asc-n">{s.n}</span>
                  <span className="asc-t">{s.title}</span>
                  <span className="asc-d">
                    <span className="asc-di">
                      <span>{s.description}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
