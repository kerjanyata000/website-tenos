"use client";

import Image from "next/image";
import Link from "next/link";

import { IconChat } from "@/components/ui/icons";
import { getAboutCopy } from "@/content/about";
import { useLanguage } from "@/lib/language";
import { getAcademyUrl, getWhatsAppUrl } from "@/lib/links";

export function AboutPage() {
  const { lang } = useLanguage();
  const copy = getAboutCopy(lang);
  const academyUrl = getAcademyUrl();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <main id="main" className="pg pgx" data-lang={lang} lang={lang}>
      <div className="rs">
        <section className="px-hero" aria-labelledby="ab-h">
          <div className="px-glow" aria-hidden="true">
            <i className="pg1" />
            <i className="pg2" />
            <i className="pg3" />
          </div>
          <div className="wrap px-hero-in">
            <span className="px-eb">{copy.hero.eyebrow}</span>
            <h1 className="px-h1" id="ab-h">
              {copy.hero.heading}
            </h1>
            <p className="px-lead">{copy.hero.lead}</p>
            <div className="px-btns">
              <a className="btn btn-p btn-lg cta px-navcta" href="#ab-what">
                <span>{copy.hero.primaryCta}</span>
                <span className="ar" aria-hidden="true">
                  <Chevron />
                </span>
              </a>
              <Link className="btn btn-p btn-lg cta px-navcta" href="/contact">
                <span>{copy.hero.secondaryCta}</span>
                <span className="ar" aria-hidden="true">
                  <Chevron />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="sec px-sec" aria-labelledby="ab-ov">
          <div className="wrap px-split px-rv">
            <div>
              <span className="px-eb">{copy.overview.eyebrow}</span>
              <h2 className="px-h2" id="ab-ov">
                {copy.overview.heading}
              </h2>
            </div>
            <div className="px-stack">
              {copy.overview.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="px-p1">
                  {p}
                </p>
              ))}
              <p className="px-note">
                <span className="ph">{copy.overview.note}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="sec px-dark" aria-labelledby="ab-vm">
          <div className="px-dglow" aria-hidden="true" />
          <div className="wrap">
            <div className="px-hd px-rv">
              <span className="px-eb px-eb-l">{copy.visionMission.eyebrow}</span>
              <h2 className="px-h2 px-on-dark" id="ab-vm">
                {copy.visionMission.heading}
              </h2>
            </div>
            <div className="px-vm">
              <article className="px-vmc px-rv">
                <span className="px-vml">{copy.visionMission.visionLabel}</span>
                <p className="px-vmt">{copy.visionMission.visionText}</p>
              </article>
              <article className="px-vmc px-rv">
                <span className="px-vml">{copy.visionMission.missionLabel}</span>
                <ul className="px-vmlist">
                  {copy.visionMission.missionPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="ab-what" className="sec px-sec" aria-labelledby="ab-wd">
          <div className="wrap">
            <div className="px-hd px-rv">
              <span className="px-eb">{copy.whatWeDo.eyebrow}</span>
              <h2 className="px-h2" id="ab-wd">
                {copy.whatWeDo.heading}
              </h2>
            </div>
            <div className="px-two">
              <article className="px-area px-rv">
                <Image
                  className="px-dlogo"
                  src="/brand/digdeep-logo.png"
                  alt="Digdeep Academy"
                  width={160}
                  height={32}
                />
                <h3 className="px-h3">{copy.whatWeDo.digdeep.title}</h3>
                <p className="px-p2">{copy.whatWeDo.digdeep.description}</p>
                <ul className="px-list">
                  {copy.whatWeDo.digdeep.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {academyUrl ? (
                  <a
                    className="btn btn-g btn-lg cta px-g"
                    href={academyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.whatWeDo.digdeep.cta}
                    <span className="ar" aria-hidden="true">
                      <Chevron />
                    </span>
                  </a>
                ) : (
                  <span className="btn btn-g btn-lg cta px-g" aria-disabled="true">
                    {copy.whatWeDo.digdeep.cta}
                  </span>
                )}
                {!academyUrl ? (
                  <span className="px-note">
                    <span className="ph">{copy.whatWeDo.digdeep.urlNote}</span>
                  </span>
                ) : null}
              </article>

              <article className="px-area px-rv">
                <span className="px-ai" aria-hidden="true">
                  <LayersIcon />
                </span>
                <h3 className="px-h3">{copy.whatWeDo.consulting.title}</h3>
                <p className="px-p2">{copy.whatWeDo.consulting.description}</p>
                <ul className="px-list">
                  {copy.whatWeDo.consulting.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link className="btn btn-p btn-lg cta px-p" href="/contact">
                  {copy.whatWeDo.consulting.cta}
                  <span className="ar" aria-hidden="true">
                    <Chevron />
                  </span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="sec px-sec px-soft" aria-labelledby="ab-ap">
          <div className="wrap">
            <div className="px-hd px-rv">
              <span className="px-eb">{copy.approach.eyebrow}</span>
              <h2 className="px-h2" id="ab-ap">
                {copy.approach.heading}
              </h2>
            </div>
            <div className="px-steps">
              {copy.approach.steps.map((step) => (
                <article key={step.n} className="px-step px-rv">
                  <span className="px-n">{step.n}</span>
                  <h3 className="px-h4">{step.title}</h3>
                  <p className="px-p3">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec px-sec" aria-labelledby="ab-cta">
          <div className="wrap">
            <div className="fcta px-rv">
              <i className="fcta-g fcta-g1" aria-hidden="true" />
              <span className="eyebrow fcta-eb">{copy.cta.eyebrow}</span>
              <h2 className="fcta-h" id="ab-cta">
                {copy.cta.heading}
              </h2>
              <p className="fcta-p">{copy.cta.lead}</p>
              <div className="fcta-b">
                {whatsappUrl ? (
                  <a
                    className="btn btn-p btn-lg cta px-swap"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="px-sw1" aria-hidden="true">
                      <IconChat size={20} />
                    </span>
                    <span className="px-sw-label">{copy.cta.button}</span>
                    <span className="px-sw2" aria-hidden="true">
                      <SwapChevron />
                    </span>
                  </a>
                ) : (
                  <Link className="btn btn-p btn-lg cta px-swap" href="/contact">
                    <span className="px-sw1" aria-hidden="true">
                      <IconChat size={20} />
                    </span>
                    <span className="px-sw-label">{copy.cta.button}</span>
                    <span className="px-sw2" aria-hidden="true">
                      <SwapChevron />
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function SwapChevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 6l6 6-6 6" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 15l9-4.5-9-4.5-9 4.5z" />
      <path d="M3 15.5l9 4.5 9-4.5" />
    </svg>
  );
}

