"use client";

import { getContactCopy } from "@/content/contact";
import { useLanguage } from "@/lib/language";
import { getWhatsAppUrl } from "@/lib/links";

export function ContactPage() {
  const { lang } = useLanguage();
  const copy = getContactCopy(lang);
  const whatsappUrl = getWhatsAppUrl();

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
                <WhatsAppIcon />
              </span>
              <span className="px-eb px-eb-l">{copy.whatsapp.eyebrow}</span>
              <h2 className="px-h2 px-on-dark">{copy.whatsapp.heading}</h2>
              <p className="px-p2 px-on-dark2">{copy.whatsapp.body}</p>
              {whatsappUrl ? (
                <a
                  className="btn btn-p btn-lg cta px-p px-wabtn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  {copy.whatsapp.cta}
                </a>
              ) : (
                <span
                  className="btn btn-p btn-lg cta px-p px-wabtn"
                  aria-disabled="true"
                >
                  <WhatsAppIcon />
                  {copy.whatsapp.cta}
                </span>
              )}
              <span className="px-onote">
                {copy.whatsapp.numberLabel}{" "}
                <span className="ph">{copy.whatsapp.numberPlaceholder}</span>
              </span>
            </article>

            <div className="px-ch">
              {copy.channels.map((channel) => (
                <article key={channel.key} className="px-chc px-rv">
                  <span className="px-chi" aria-hidden="true">
                    <ChannelIcon type={channel.key} />
                  </span>
                  <div>
                    <h3 className="px-h4">{channel.title}</h3>
                    <p className="px-p3">
                      {channel.key === "social" ? (
                        channel.body
                      ) : (
                        <span className="ph">{channel.body}</span>
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function WhatsAppIcon() {
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
      <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.7-5.2A8.5 8.5 0 1 1 21 12z" />
      <path d="M9.2 8.6c-.3.6-.2 1.5.5 2.6s1.8 2.1 2.9 2.6c.8.4 1.5.2 1.9-.3l.3-.6-1.6-.9-.7.6c-.6-.3-1.3-.9-1.7-1.6l.6-.7-.8-1.7z" />
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }
  if (type === "office") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    );
  }
  if (type === "hours") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
