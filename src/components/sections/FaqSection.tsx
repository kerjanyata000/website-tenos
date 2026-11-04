"use client";

import { useId, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";
import { cn } from "@/lib/cn";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={cn("faq-chev", open && "is-open")}
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function FaqMark() {
  return (
    <div className="faq-art" aria-hidden="true">
      <span className="faq-art-glow" />
      <span className="faq-art-band" />
      <span className="faq-art-q faq-art-q1">?</span>
      <span className="faq-art-q faq-art-q2">?</span>
      <span className="faq-art-q faq-art-q3">?</span>
      <span className="faq-art-q faq-art-q4">?</span>
    </div>
  );
}

export function FaqSection() {
  const { faq } = useHomepageCopy();
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  if (!faq.items.length) return null;

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id={faq.id}
      className="sec faq-sec"
      aria-labelledby="faq-h"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="wrap">
        <div className="faq-panel">
          <Reveal className="faq-intro">
            <span className="eyebrow faq-eb">{faq.eyebrow}</span>
            <h2 className="h2 faq-h" id="faq-h">
              {faq.heading}
            </h2>
            <p className="lead faq-lead">{faq.lead}</p>
            <FaqMark />
          </Reveal>

          <div className="faq-list">
            {faq.items.map((item, index) => {
              const panelId = `${baseId}-panel-${item.id}`;
              const buttonId = `${baseId}-btn-${item.id}`;
              const open = openId === item.id;

              return (
                <Reveal
                  className={cn("faq-item", open && "is-open")}
                  key={item.id}
                  delay={60}
                  index={index}
                >
                  <h3 className="faq-q">
                    <button
                      type="button"
                      id={buttonId}
                      className="faq-btn"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                    >
                      <span className="faq-btn-t">{item.question}</span>
                      <Chevron open={open} />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq-a"
                    aria-hidden={!open}
                    inert={!open ? true : undefined}
                  >
                    <div className="faq-a-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                  {index < faq.items.length - 1 ? (
                    <div className="faq-rule" aria-hidden="true" />
                  ) : null}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
