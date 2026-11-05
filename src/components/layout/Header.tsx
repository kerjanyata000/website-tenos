"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { ExportCta } from "@/components/sections/ExportCta";
import { IconClose, IconMenu } from "@/components/ui/icons";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";
import { siteSettings } from "@/content/site";
import { useLanguage, type Lang } from "@/lib/language";
import { cn } from "@/lib/cn";

function isCurrent(match: "home" | "about" | "contact" | undefined, pathname: string) {
  if (match === "home") return pathname === "/";
  if (match === "about") return pathname.startsWith("/about");
  if (match === "contact") return pathname.startsWith("/contact");
  return false;
}

function LanguageToggle({
  lang,
  onChange,
  label,
  className,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("lt", className)} role="group" aria-label={label}>
      <button
        type="button"
        className={cn("lb", lang === "id" && "on")}
        aria-pressed={lang === "id"}
        onClick={() => onChange("id")}
      >
        ID
      </button>
      <button
        type="button"
        className={cn("lb", lang === "en" && "on")}
        aria-pressed={lang === "en"}
        onClick={() => onChange("en")}
      >
        EN
      </button>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const { lang, setLang, toggleEnabled } = useLanguage();
  const copy = useHomepageCopy();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const primaryNav = [
    { label: copy.nav.home, href: "/", match: "home" as const },
    { label: copy.nav.about, href: "/about", match: "about" as const },
    { label: copy.nav.contact, href: "/contact", match: "contact" as const },
  ];

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <div className="site-nav">
      <div className="site-nav-glass">
        <header className="site-nav-bar relative h-[72px] max-[639px]:h-[60px]">
          <div className="flex h-full items-center justify-between gap-6 p-3 max-[819px]:gap-3 max-[819px]:pr-2 max-[819px]:pl-5 max-[639px]:pr-2 max-[639px]:pl-5">
            <Link
              href="/"
              aria-label={`${siteSettings.siteName} home`}
              className="shrink-0 px-5 max-[819px]:px-0"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/brand/tenos-logo.png"
                alt={siteSettings.legalName}
                width={138}
                height={32}
                priority
                className="h-8 w-auto max-[1023px]:h-[30px] max-[639px]:h-7"
              />
            </Link>

            <nav
              className="flex gap-8 max-[1023px]:gap-4 max-[819px]:hidden"
              aria-label="Primary"
            >
              {primaryNav.map((item) => {
                const current = isCurrent(item.match, pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "flex h-12 items-center rounded-[var(--radius-button)] px-5 text-base font-semibold whitespace-nowrap transition-colors duration-[var(--duration-hover)]",
                      current
                        ? "site-nav-current"
                        : "text-[#717680] hover:bg-bg-brand-subtle hover:text-text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-6 max-[819px]:gap-2">
              {toggleEnabled ? (
                <LanguageToggle
                  lang={lang}
                  onChange={setLang}
                  label={copy.nav.language}
                  className="max-[819px]:hidden"
                />
              ) : null}

              <div className="max-[819px]:hidden">
                <ExportCta href="/contact" className="nav-cta">
                  {copy.nav.contactCta}
                </ExportCta>
              </div>

              <button
                ref={burgerRef}
                type="button"
                className="hidden h-11 w-11 items-center justify-center rounded-[var(--radius-button)] border border-border-secondary bg-white text-[var(--tenos-gray-950)] max-[819px]:inline-flex"
                aria-expanded={menuOpen}
                aria-controls={menuId}
                aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div
              ref={menuRef}
              id={menuId}
              className="absolute top-[calc(100%+8px)] right-0 left-0 z-40 rounded-[var(--radius-card)] border border-border-secondary bg-white px-5 pt-2 pb-5 shadow-[0_12px_32px_rgba(10,13,18,0.12)] max-[819px]:block min-[820px]:hidden"
            >
              <nav aria-label="Mobile primary" className="flex flex-col">
                {primaryNav.map((item, index) => {
                  const current = isCurrent(item.match, pathname);
                  const isLast = index === primaryNav.length - 1;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 items-center text-lg font-semibold text-[var(--tenos-gray-900)]",
                        !isLast && "border-b border-border-decorative",
                        current && "text-text-brand",
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div
                className={cn(
                  "mt-5 flex items-center gap-3",
                  toggleEnabled ? "justify-between" : "justify-stretch",
                )}
              >
                {toggleEnabled ? (
                  <LanguageToggle
                    lang={lang}
                    onChange={setLang}
                    label={copy.nav.language}
                  />
                ) : null}
                <ExportCta
                  href="/contact"
                  className="nav-cta flex-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {copy.nav.contactCta}
                </ExportCta>
              </div>
            </div>
          ) : null}
        </header>
      </div>
    </div>
  );
}
