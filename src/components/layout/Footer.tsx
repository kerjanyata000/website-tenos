"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import {
  IconExternal,
  IconInstagram,
  IconInstagramSolid,
  IconLinkedIn,
  IconLinkedInSolid,
  IconWhatsApp,
  IconWhatsAppSolid,
  SocialGlyph,
} from "@/components/ui/icons";
import { Label } from "@/components/ui/Typography";
import { Placeholder } from "@/components/ui/Placeholder";
import { useHomepageCopy } from "@/hooks/useHomepageCopy";
import { siteSettings } from "@/content/site";
import { getAcademyUrl, getWhatsAppUrl } from "@/lib/links";
import { cn } from "@/lib/cn";

const socialIcons = [
  {
    platform: "whatsapp" as const,
    labelKey: "whatsapp" as const,
    glyph: (
      <SocialGlyph
        outline={<IconWhatsApp size={20} />}
        solid={<IconWhatsAppSolid size={20} />}
      />
    ),
  },
  {
    platform: "instagram" as const,
    label: "Instagram",
    glyph: (
      <SocialGlyph
        outline={<IconInstagram size={20} />}
        solid={<IconInstagramSolid size={20} />}
      />
    ),
  },
  {
    platform: "linkedin" as const,
    label: "LinkedIn",
    glyph: (
      <SocialGlyph
        outline={<IconLinkedIn size={20} />}
        solid={<IconLinkedInSolid size={20} />}
      />
    ),
  },
];

function SocialSlot({
  label,
  href,
  opensNewTab,
  children,
}: {
  label: string;
  href?: string;
  opensNewTab: string;
  children: React.ReactNode;
}) {
  const className = "soc";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={className}
      >
        {children}
        <span className="sr-only">{opensNewTab}</span>
      </a>
    );
  }

  return (
    <span
      className={cn(className, "soc-disabled")}
      title={`${label} URL to be provided`}
      aria-label={`${label} (URL to be provided)`}
    >
      {children}
    </span>
  );
}

export function Footer() {
  const { footer } = useHomepageCopy();
  const academyUrl = getAcademyUrl();
  const whatsappUrl = getWhatsAppUrl();
  const socialByPlatform = Object.fromEntries(
    siteSettings.social.map((item) => [item.platform, item.url]),
  );

  const pageLinks = [
    { label: footer.home, href: "/" },
    { label: footer.about, href: "/about" },
    { label: footer.contactLink, href: "/contact" },
  ];

  return (
    <footer
      id="site-footer"
      className="border-t border-border-decorative bg-white pt-16 pb-12"
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 max-[639px]:gap-y-8">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
            <Image
              src="/brand/tenos-logo.png"
              alt={siteSettings.legalName}
              width={132}
              height={31}
              className="h-[34px] w-auto self-start"
            />
            <p className="max-w-[360px] text-base leading-6 text-text-secondary">
              {siteSettings.legalName}. {footer.blurb}
            </p>
            <div className="soc-row">
              {socialIcons.map((item) => {
                const label =
                  "labelKey" in item ? footer.whatsapp : item.label;
                return (
                  <SocialSlot
                    key={item.platform}
                    label={label}
                    opensNewTab={footer.opensNewTab}
                    href={
                      item.platform === "whatsapp"
                        ? socialByPlatform.whatsapp || whatsappUrl || undefined
                        : socialByPlatform[item.platform]
                    }
                  >
                    {item.glyph}
                  </SocialSlot>
                );
              })}
            </div>
          </div>

          <nav
            className="col-span-12 flex flex-col gap-3 sm:col-span-4 md:col-span-2"
            aria-label="Footer"
          >
            <Label>{footer.pages}</Label>
            {pageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-8 items-center text-base leading-6 text-text-secondary hover:text-text-primary hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="col-span-12 flex flex-col gap-3 sm:col-span-4 md:col-span-3">
            <Label>{footer.ourFocus}</Label>
            <Link
              href="/#ai"
              className="flex min-h-8 items-center text-base leading-6 text-text-secondary hover:text-text-primary hover:underline"
            >
              {footer.consulting}
            </Link>
            {academyUrl ? (
              <Link
                href={academyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-8 items-center gap-1.5 text-base leading-6 text-text-secondary hover:text-text-primary hover:underline"
              >
                {footer.academy}
                <IconExternal />
                <span className="sr-only">{footer.opensNewTab}</span>
              </Link>
            ) : (
              <div className="flex flex-col gap-2">
                <span className="flex min-h-8 items-center gap-1.5 text-base leading-6 text-text-secondary">
                  {footer.academy}
                  <IconExternal />
                </span>
                <Placeholder className="self-start">
                  {footer.academyPending}
                </Placeholder>
              </div>
            )}
          </div>

          <div className="col-span-12 flex flex-col gap-3 sm:col-span-4 md:col-span-3">
            <Label>{footer.contact}</Label>
            <p className="text-base leading-6 text-text-secondary">
              {footer.whatsapp}:{" "}
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-link hover:underline"
                >
                  {footer.chatWhatsapp}
                  <span className="sr-only">{footer.opensNewTab}</span>
                </a>
              ) : (
                <Placeholder>{footer.numberPending}</Placeholder>
              )}
            </p>
            <p className="text-base leading-6 text-text-secondary">
              {footer.email}: <Placeholder>-</Placeholder>
            </p>
            <p className="text-base leading-6 text-text-secondary">
              {footer.office}:{" "}
              <Placeholder>{footer.addressPending}</Placeholder>
            </p>
          </div>

          <div className="col-span-12 border-t border-border-decorative pt-6 text-sm leading-5 text-text-tertiary">
            <span>© 2026 {siteSettings.legalName}.</span>{" "}
            <Placeholder>{footer.legalPending}</Placeholder>
          </div>
        </div>
      </Container>
    </footer>
  );
}
