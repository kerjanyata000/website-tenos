"use client";

import Link from "next/link";

import { ExportCta } from "@/components/sections/ExportCta";
import { Reveal } from "@/components/ui/Reveal";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";

function ArrowIcon() {
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
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Business direction cards (Digdeep Academy + AI Consulting). */
export function AboutSection() {
  const { journey } = useHomepageCopy();

  return (
    <section
      id="about"
      className="sec"
      aria-labelledby="pc-h"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="wrap" id={journey.id}>
        <Reveal as="h2" className="h2" id="pc-h">
          {journey.heading}
        </Reveal>
        <Reveal as="p" className="lead pc-lead" delay={80}>
          {journey.lead}
        </Reveal>

        <div className="pcs">
          {journey.items.map((card, index) => (
            <Reveal
              key={card.num}
              as="article"
              className="pc"
              delay={120}
              index={index}
            >
              <div className="pc-top">
                <span className="pc-num">{card.num}</span>
                <Link
                  className="pc-arr"
                  href={card.cta.href}
                  aria-label={card.title}
                >
                  <ArrowIcon />
                </Link>
              </div>
              <div className="pc-txt">
                <h3 className="pc-t">{card.title}</h3>
                <p className="pc-s">{card.subtitle}</p>
                <p className="pc-d">{card.description}</p>
              </div>
              <ExportCta href={card.cta.href} className="pc-cta">
                {card.cta.label}
              </ExportCta>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
