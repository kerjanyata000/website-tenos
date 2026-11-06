"use client";

import { IconChat, IconInstagram, IconWhatsApp } from "@/components/ui/icons";
import { getContactCopy } from "@/content/contact";
import { siteSettings } from "@/content/site";
import { useLanguage } from "@/lib/language";
import { getWhatsAppUrl } from "@/lib/links";

export function ContactPage() {
  const { lang } = useLanguage();
  const copy = getContactCopy(lang);
  const whatsappUrl = getWhatsAppUrl();
  const officeAddress = siteSettings.officeAddress.trim();
  const email = siteSettings.email.trim();

  return (
    <main id="main" className="pg pgx" data-lang={lang} lang={lang}>
      <div className="rs">
        <section className="px-hero px-hero-sm" aria-labelledby="ct-h">
          <div className="px-glow" aria-hidden="true">
            <i className="pg1" />
            <i className="pg2" />
            <i className="pg3" />
          </div>
          <div className="wrap px-hero-in">
            <span className="px-eb">{copy.hero.eyebrow}</span>
            <h1 className="px-h1" id="ct-h">
              {copy.hero.heading}
            </h1>
            <p className="px-lead">{copy.hero.lead}</p>
          </div>
        </section>

        <section className="sec px-sec px-ctsec" aria-label="Contact options">
          <div className="wrap px-ct">
            <article className="px-wa px-rv">
              <div className="px-dglow" aria-hidden="true" />
              <span className="px-wai" aria-hidden="true">
                <IconWhatsApp size={24} />
              </span>
              <span className="px-eb px-eb-l">{copy.whatsapp.eyebrow}</span>
              <h2 className="px-h2 px-on-dark">{copy.whatsapp.heading}</h2>
              <p className="px-p2 px-on-dark2">{copy.whatsapp.body}</p>
              {whatsappUrl ? (
                <a
                  className="btn btn-p btn-lg cta px-p px-wabtn px-swap"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="px-sw1" aria-hidden="true">
                    <IconChat size={20} />
                  </span>
                  <span className="px-sw-label">{copy.whatsapp.cta}</span>
                  <span className="px-sw2" aria-hidden="true">
                    <SwapChevron />
                  </span>
                </a>
              ) : (
                <span
                  className="btn btn-p btn-lg cta px-p px-wabtn px-swap"
                  aria-disabled="true"
                >
                  <span className="px-sw1" aria-hidden="true">
                    <IconChat size={20} />
                  </span>
                  <span className="px-sw-label">{copy.whatsapp.cta}</span>
                  <span className="px-sw2" aria-hidden="true">
                    <SwapChevron />
                  </span>
                </span>
              )}
              <span className="px-onote">
                {copy.whatsapp.numberLabel}{" "}
                <span className="ph">{copy.whatsapp.numberPlaceholder}</span>
              </span>
            </article>

            <div className="px-ch">
              <article className="px-chc px-rv">
                <span className="px-chi" aria-hidden="true">
                  <ChannelIcon type="email" />
                </span>
                <div>
                  <h3 className="px-h4">{copy.channels.email.title}</h3>
                  <p className="px-p3">
                    {email ? (
                      <a href={`mailto:${email}`}>{email}</a>
                    ) : (
                      <span className="ph">{copy.channels.email.placeholder}</span>
                    )}
                  </p>
                </div>
              </article>

              <article className="px-chc px-rv">
                <span className="px-chi" aria-hidden="true">
                  <ChannelIcon type="office" />
                </span>
                <div>
                  <h3 className="px-h4">{copy.channels.office.title}</h3>
                  <p className="px-p3">
                    {officeAddress ? (
                      officeAddress
                    ) : (
                      <span className="ph">
                        {copy.channels.office.placeholder}
                      </span>
                    )}
                  </p>
                </div>
              </article>

              <article className="px-chc px-rv">
                <span className="px-chi" aria-hidden="true">
                  <ChannelIcon type="hours" />
                </span>
                <div>
                  <h3 className="px-h4">{copy.channels.hours.title}</h3>
                  <p className="px-p3">
                    <span className="ph">{copy.channels.hours.placeholder}</span>
                  </p>
                </div>
              </article>

              <article className="px-chc px-rv">
                <span className="px-chi" aria-hidden="true">
                  <ChannelIcon type="social" />
                </span>
                <div>
                  <h3 className="px-h4">{copy.channels.social.title}</h3>
                  <p className="px-p3">
                    {copy.channels.social.brands}{" "}
                    <span className="ph">
                      {copy.channels.social.linksPlaceholder}
                    </span>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
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

function ChannelIcon({
  type,
}: {
  type: "email" | "office" | "hours" | "social";
}) {
  if (type === "email") {
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
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }
  if (type === "office") {
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
      >
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    );
  }
  if (type === "hours") {
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
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }
  return <IconInstagram size={24} />;
}
