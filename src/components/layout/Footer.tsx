"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import {
  IconInstagram,
  IconInstagramSolid,
  IconLinkedIn,
  IconLinkedInSolid,
  IconWhatsApp,
  IconWhatsAppSolid,
  SocialGlyph,
} from "@/components/ui/icons";
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
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="soc"
      >
        {children}
        <span className="sr-only">{opensNewTab}</span>
      </a>
    );
  }

  return (
    <span
      className={cn("soc", "soc-disabled")}
      title={`${label} URL to be provided`}
      aria-label={`${label} (URL to be provided)`}
    >
      {children}
    </span>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-base leading-6 font-semibold text-[#181D27]">
      {children}
    </h4>
  );
}

function FooterLink({
  href,
  children,
  external,
  opensNewTab,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  opensNewTab?: string;
}) {
  const className =
    "text-base leading-6 text-[#717680] transition-colors hover:text-[#181D27]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        {opensNewTab ? (
          <span className="sr-only">{opensNewTab}</span>
        ) : null}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
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

  const socialRow = (
    <div className="soc-row" aria-label="Social">
      {socialIcons.map((item) => {
        const label = "labelKey" in item ? footer.whatsapp : item.label;
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
  );

  return (
    <footer
      id="site-footer"
      className="bg-white pt-16 pb-8 lg:pt-[110px]"
    >
      <Container>
        {/*
          Desktop: brand left + columns right
          Tablet: brand on top, then 3 columns full width
          Mobile: stacked; socials under brand
        */}
        <div className="flex items-start justify-between gap-10 border-b border-[#E9EAEB] pb-8 max-lg:flex-col max-lg:gap-10">
          <div className="flex w-full max-w-[360px] flex-col gap-6">
            <Image
              src="/brand/tenos-logo.png"
              alt={siteSettings.legalName}
              width={146}
              height={34}
              className="h-[34px] w-auto self-start"
            />
            <p className="text-base leading-6 text-[#414651]">
              {siteSettings.legalName}. {footer.blurb}
            </p>
            {/* Socials under brand — mobile only */}
            <div className="md:hidden">{socialRow}</div>
          </div>

          <div className="flex w-full shrink-0 items-start gap-14 max-lg:gap-10 max-md:flex-wrap max-md:gap-x-10 max-md:gap-y-8 lg:w-auto lg:justify-center">
            <nav
              className="flex w-[130px] flex-col gap-3 max-md:w-auto"
              aria-label="Footer"
            >
              <FooterHeading>{footer.pages}</FooterHeading>
              <div className="flex flex-col gap-1.5">
                {pageLinks.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </nav>

            <div className="flex w-[220px] flex-col gap-3 max-md:w-auto">
              <FooterHeading>{footer.ourFocus}</FooterHeading>
              <div className="flex flex-col gap-1.5">
                <FooterLink href="/#ai">{footer.consulting}</FooterLink>
                {academyUrl ? (
                  <FooterLink
                    href={academyUrl}
                    external
                    opensNewTab={footer.opensNewTab}
                  >
                    {footer.academy}
                  </FooterLink>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    <span className="text-base leading-6 text-[#717680]">
                      {footer.academy}
                    </span>
                    <Placeholder className="self-start">
                      {footer.academyPending}
                    </Placeholder>
                  </div>
                )}
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3 max-md:w-full lg:w-[200px] lg:flex-none">
              <FooterHeading>{footer.contact}</FooterHeading>
              <div className="flex flex-col gap-1.5 text-base leading-6 text-[#717680]">
                <p>
                  {whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#181D27]"
                    >
                      {footer.phoneDisplay}
                      <span className="sr-only">{footer.opensNewTab}</span>
                    </a>
                  ) : (
                    footer.phoneDisplay
                  )}
                </p>
                <p>
                  {siteSettings.email ? (
                    <a
                      href={`mailto:${siteSettings.email}`}
                      className="hover:text-[#181D27]"
                    >
                      {siteSettings.email}
                    </a>
                  ) : (
                    footer.emailDisplay
                  )}
                </p>
                <p>{siteSettings.officeAddress || footer.addressDisplay}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: copyright + tablet/desktop socials */}
        <div className="flex items-center justify-between gap-6 pt-8 max-md:flex-col max-md:items-start max-md:gap-4">
          <p className="max-w-[400px] text-sm leading-5 text-[#535862] md:whitespace-nowrap lg:max-w-none">
            © 2026 {siteSettings.legalName}. {footer.rightsReserved}
          </p>
          <div className="hidden md:block">{socialRow}</div>
        </div>
      </Container>
    </footer>
  );
}
