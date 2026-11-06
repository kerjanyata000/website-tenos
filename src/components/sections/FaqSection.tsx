"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useHomepageCopy } from "@/hooks/useHomepageCopy";

export function FaqSection() {
  const { faq } = useHomepageCopy();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      void video.play().catch(() => {});
    };

    tryPlay();
    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) tryPlay();
                else video.pause();
              }
            },
            { threshold: 0.2 },
          )
        : null;
    io?.observe(video);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      io?.disconnect();
    };
  }, []);

  if (!faq.items.length) return null;

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? 0 : index));
  };

  const headingLines = faq.heading.split("?");

  return (
    <section id={faq.id} className="sec fqs" aria-labelledby="fq-h">
      <div className="wrap">
        <div className="fq-g">
          <div className="fq-l">
            <span className="eyebrow fq-eb">{faq.eyebrow}</span>
            <h2 className="h2 fq-h" id="fq-h">
              {headingLines.length > 1 ? (
                <>
                  {headingLines[0]}?
                  <br />
                  {headingLines.slice(1).join("?").trim()}
                </>
              ) : (
                faq.heading
              )}
            </h2>
            <p className="lead fq-lead">{faq.lead}</p>
            <div className="fq-art" aria-hidden="true">
              <video
                ref={videoRef}
                className="fq-vid"
                src="/videos/mascot-animation.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                controls={false}
                controlsList="nodownload nofullscreen noremoteplayback"
                tabIndex={-1}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          <div className="fq-r" data-fq={String(openIndex)}>
            {faq.items.map((item, index) => {
              const n = index + 1;
              const panelId = `${baseId}-fqa${n}`;
              const expanded = openIndex === n;

              return (
                <div
                  key={item.id}
                  className={`fq fq${n}`}
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <button
                    type="button"
                    className="fq-s"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => toggle(n)}
                  >
                    <span className="fq-q">{item.question}</span>
                    <span className="fq-tg" aria-hidden="true" />
                  </button>
                  <div className="fq-a" id={panelId} role="region">
                    <div className="fq-ai">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
