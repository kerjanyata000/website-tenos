"use client";

import { ExportCta } from "@/components/sections/ExportCta";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";
import { getAcademyUrl, getWhatsAppUrl } from "@/lib/links";

export function FinalCtaSection() {
  const { finalCta, academy } = useHomepageCopy();
  const academyUrl = getAcademyUrl();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id={finalCta.id}
      className="sec"
      aria-labelledby="fc-h"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="wrap">
        <Reveal className="fcta">
          <i className="fcta-g fcta-g1" aria-hidden="true" />
          <i className="fcta-g fcta-g2" aria-hidden="true" />
          <span className="eyebrow fcta-eb">{finalCta.eyebrow}</span>
          <h2 className="fcta-h" id="fc-h">
            {finalCta.heading}
          </h2>
          <p className="fcta-p">{finalCta.lead}</p>
          <div className="fcta-b">
            {academyUrl ? (
              <ExportCta
                href={academyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {finalCta.academyCta}
              </ExportCta>
            ) : (
              <div className="stack" style={{ gap: 8, alignItems: "center" }}>
                <ExportCta disabled>{finalCta.academyCta}</ExportCta>
                <Placeholder>{academy.urlPending}</Placeholder>
              </div>
            )}
            {whatsappUrl ? (
              <ExportCta
                href={whatsappUrl}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                {finalCta.contactCta}
              </ExportCta>
            ) : (
              <ExportCta href="/contact" variant="ghost">
                {finalCta.contactCta}
              </ExportCta>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
