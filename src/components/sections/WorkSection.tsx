"use client";

import { useState } from "react";

import {
  EducationThumb,
  FinanceThumb,
  RetailThumb,
} from "@/components/sections/work/ProjectThumbs";
import { Reveal } from "@/components/ui/Reveal";
import { IconWhatsApp } from "@/components/ui/icons";
import { getWhatsAppUrl } from "@/lib/links";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";

const thumbs = {
  retail: RetailThumb,
  finance: FinanceThumb,
  education: EducationThumb,
} as const;

type FilterId = "all" | "retail" | "finance" | "education";

export function WorkSection() {
  const { work } = useHomepageCopy();
  const [filter, setFilter] = useState<FilterId>("all");
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id={work.id}
      className="sec"
      aria-labelledby="pw-h"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="wrap">
        <Reveal as="span" className="eyebrow pw-eb">
          {work.eyebrow}
        </Reveal>
        <Reveal as="h2" className="h2 pw-h" id="pw-h" delay={60}>
          {work.heading}
        </Reveal>
        <Reveal as="p" className="lead pw-lead" delay={120}>
          {work.lead}
        </Reveal>

        <Reveal
          className="pf"
          role="group"
          aria-label={work.filterLabel}
          delay={160}
        >
          {work.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="pf-c"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id ? "true" : "false"}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="pws" data-pf={filter}>
          {work.projects.map((project, index) => {
            const Thumb = thumbs[project.id as keyof typeof thumbs];
            return (
              <Reveal
                key={project.id}
                as="article"
                className={`pw pw-${project.id}`}
                delay={80}
                index={index}
              >
                <div className="pw-th">{Thumb ? <Thumb /> : null}</div>
                <div className="pw-b">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    <span className="pw-tag">{project.category}</span>
                    {project.illustrative ? (
                      <span className="pw-tag">{work.illustrative}</span>
                    ) : null}
                  </div>
                  <h3 className="pw-t">{project.title}</h3>
                  <p className="pw-d">{project.description}</p>
                  <span
                    className="pw-l"
                    aria-disabled="true"
                    title={work.viewProjectPending}
                  >
                    {work.viewProject}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          className="pw-cta"
          style={{ borderStyle: "none", backgroundColor: "#ffffff" }}
          delay={100}
        >
          <p className="pw-cta-t">{work.ctaPrompt}</p>
          <a
            className="btn btn-p btn-lg pw-btn"
            href={whatsappUrl ?? work.ctaHref}
            {...(whatsappUrl
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <IconWhatsApp size={20} />
            <span>{work.ctaLabel}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
