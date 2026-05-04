import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import { TryNowForm } from "@/components/hero-try-now";
import {
  aboutContent,
  blogContent,
  contactContent,
  homeContent,
  images,
  policyContent,
  sharedContent,
} from "@/components/site-content";

function revealStyle(delay: number, distance = 24): CSSProperties {
  return {
    ["--reveal-delay" as string]: `${delay}ms`,
    ["--reveal-distance" as string]: `${distance}px`,
  };
}

function ArrowIcon({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="site-arrow-icon"
      viewBox="0 0 12 10"
      fill="none"
    >
      <path
        d="M6.6 9.861 5.667 8.889 8.678 5.694H0V4.31h8.678L5.684 1.111 6.6.139 11.182 5 6.6 9.861Z"
        fill={dark ? "#0D0D0D" : "#FFFFFF"}
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-contact-icon">
      <path
        d="M4 6.75h16A1.25 1.25 0 0 1 21.25 8v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Zm0 1.5a.25.25 0 0 0-.25.25v.28l8.24 5.7 8.26-5.7V8.5a.25.25 0 0 0-.25-.25H4Zm16.25 2.35-7.83 5.41a.75.75 0 0 1-.84 0L3.75 10.6V16c0 .14.11.25.25.25h16c.14 0 .25-.11.25-.25v-5.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-contact-icon">
      <path
        d="M8.14 3.75h2.1c.37 0 .69.26.77.61l.75 3.36a.8.8 0 0 1-.23.76l-1.53 1.41a14.11 14.11 0 0 0 4.1 4.1l1.42-1.52c.2-.22.5-.31.78-.24l3.35.76c.36.08.61.4.61.77v2.1A1.9 1.9 0 0 1 18.36 18c-6.69 0-12.11-5.42-12.11-12.11 0-1.18.96-2.14 2.14-2.14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-contact-icon">
      <path
        d="M12 2.75a6.5 6.5 0 0 1 6.5 6.5c0 4.4-4.64 9.28-5.95 10.58a.78.78 0 0 1-1.1 0C10.14 18.53 5.5 13.65 5.5 9.25A6.5 6.5 0 0 1 12 2.75Zm0 1.5a5 5 0 0 0-5 5c0 3.49 3.6 7.66 5 9.07 1.4-1.41 5-5.58 5-9.07a5 5 0 0 0-5-5Zm0 2.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactTypeIcon({
  type,
}: {
  type: "email" | "phone" | "location";
}) {
  if (type === "phone") {
    return <PhoneIcon />;
  }

  if (type === "location") {
    return <MapPinIcon />;
  }

  return <MailIcon />;
}

function LogoLockup({ variant = "nav" }: { variant?: "nav" | "footer" }) {
  return (
    <Link className="site-logo" href="/">
      <span className="site-logo-mark" aria-hidden="true">
        <Image
          className="site-logo-icon"
          src="/assets/logos/header-eye.png"
          alt=""
          width={119}
          height={74}
        />
      </span>
      <span className="site-logo-copy">
        <span
          className={
            variant === "footer"
              ? "site-logo-title site-logo-title--footer"
              : "site-logo-title"
          }
        >
          {sharedContent.brand}
        </span>
      </span>
    </Link>
  );
}

function SectionTag({ children }: { children: ReactNode }) {
  return <span className="section-tag">{children}</span>;
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  delay,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  delay?: number;
}) {
  const className =
    variant === "secondary"
      ? "site-button site-button--secondary"
      : "site-button site-button--primary";

  return (
    <Link
      className={className}
      href={href}
      data-reveal={delay !== undefined ? "true" : undefined}
      style={delay !== undefined ? revealStyle(delay) : undefined}
    >
      <span>{children}</span>
      <span className="site-button-arrow" aria-hidden="true">
        <ArrowIcon dark={variant === "secondary"} />
      </span>
    </Link>
  );
}

type SitePath = "/" | "/about-us" | "/blogs" | "/contact" | "/try-now" | "/terms";

const pageNavItems = [
  { href: "/", label: "Home" },
  { href: "/try-now", label: "Try now" },
  { href: "/about-us", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
] as const satisfies readonly { href: SitePath; label: string }[];

const headerPageNavItems = [
  { href: "/about-us", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly { href: SitePath; label: string }[];

function ExternalContactLink({
  href,
  label,
  type,
}: {
  href?: string;
  label: string;
  type: "email" | "phone" | "location";
}) {
  const content = (
    <>
      <span className="footer-contact-icon">
        <ContactTypeIcon type={type} />
      </span>
      <span>{label}</span>
    </>
  );

  if (!href) {
    return <span className="footer-contact-link footer-contact-link--static">{content}</span>;
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      className="footer-contact-link"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

function ScreeningMenu({ variant }: { variant: "nav" | "mobile" | "footer" }) {
  if (variant !== "footer") {
    const currentItem =
      sharedContent.screeningMenu.find((item) => item.current) ?? sharedContent.screeningMenu[0];

    return (
      <details className={`screening-select screening-select--${variant}`}>
        <summary
          className="screening-select-summary"
          aria-label={`Current screening: ${currentItem.label}`}
        >
          <span className="screening-select-kicker">Screening</span>
          <span className="screening-select-current">{currentItem.label}</span>
          <span className="screening-select-chevron" aria-hidden="true" />
        </summary>
        <div className="screening-select-panel">
          {sharedContent.screeningMenu.map((item) => (
            <SmartLink
              className={
                item.current
                  ? "screening-select-link screening-select-link--active"
                  : "screening-select-link"
              }
              href={item.href}
              key={item.label}
            >
              <span>{item.label}</span>
              {item.current ? <span className="screening-select-status">Current</span> : null}
            </SmartLink>
          ))}
        </div>
      </details>
    );
  }

  return (
    <div className={`screening-menu screening-menu--${variant}`} aria-label="Choose screening type">
      {sharedContent.screeningMenu.map((item) => (
        <SmartLink
          className={
            item.current
              ? "screening-menu-option screening-menu-option--active"
              : "screening-menu-option"
          }
          href={item.href}
          key={item.label}
        >
          {item.label}
        </SmartLink>
      ))}
    </div>
  );
}

function MobilePageLinks({ currentPath }: { currentPath: SitePath }) {
  return (
    <div className="mobile-page-list">
      <span className="mobile-page-label">Pages</span>
      {pageNavItems.map((item) => {
        const isActive = currentPath === item.href;

        return (
          <Link
            className={isActive ? "site-nav-link site-nav-link--active" : "site-nav-link"}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

function SiteHeader({ currentPath }: { currentPath: SitePath }) {
  return (
    <header className="site-header" data-reveal="true" style={revealStyle(0, 18)}>
      <div className="shell site-header-shell">
        <LogoLockup />
        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          <ScreeningMenu variant="nav" />
          {headerPageNavItems.map((item) => (
            <Link
              className={
                currentPath === item.href
                  ? "site-nav-link site-nav-link--button site-nav-link--active"
                  : "site-nav-link site-nav-link--button"
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="site-nav site-nav--mobile">
          <summary className="site-nav-toggle" aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="site-mobile-panel">
            <ScreeningMenu variant="mobile" />
            <MobilePageLinks currentPath={currentPath} />
          </div>
        </details>
      </div>
    </header>
  );
}

function CtaBand() {
  return (
    <section className="section">
      <div className="shell">
        <div className="cta-band">
          <div className="cta-band-copy">
            <p className="cta-band-kicker" data-reveal="true" style={revealStyle(0, 18)}>
              {sharedContent.ctaTitle}
            </p>
            <h2 className="cta-band-title" data-reveal="true" style={revealStyle(80, 18)}>
              {sharedContent.ctaDescription}
            </h2>
            <ButtonLink href="/try-now" variant="secondary" delay={150}>
              Try now
            </ButtonLink>
          </div>
          <div className="cta-band-pattern" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer-shell">
        <div className="site-footer-brand" data-reveal="true" style={revealStyle(0, 18)}>
          <LogoLockup variant="footer" />
          <p className="site-footer-copy">{sharedContent.footerDescription}</p>
          <div className="site-footer-switch">
            <span className="site-footer-switch-label">Screening</span>
            <ScreeningMenu variant="footer" />
          </div>
        </div>
        <div className="site-footer-links" data-reveal="true" style={revealStyle(90, 18)}>
          <div className="footer-column">
            <span className="footer-label">Pages</span>
            <div className="footer-page-list">
              {sharedContent.footerLinks.map((item) => (
                <Link className="footer-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-column footer-column--contact">
            <span className="footer-label">Address</span>
            <div className="footer-contact-list">
              {sharedContent.footerContact.map((item) => (
                <ExternalContactLink
                  href={item.href}
                  key={`${item.type}-${item.label}`}
                  label={item.label}
                  type={item.type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactInfoCard({
  href,
  label,
  type,
  delay,
}: {
  href?: string;
  label: string;
  type: "email" | "phone" | "location";
  delay: number;
}) {
  const content = (
    <>
      <span className="contact-info-icon">
        <ContactTypeIcon type={type} />
      </span>
      <span>{label}</span>
    </>
  );

  if (!href) {
    return (
      <div
        className="contact-info-card contact-info-card--static"
        data-reveal="true"
        style={revealStyle(delay, 18)}
      >
        {content}
      </div>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      className="contact-info-card"
      data-reveal="true"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      style={revealStyle(delay, 18)}
      target={isExternal ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}

function HeroEyeStack() {
  return (
    <div className="hero-stack" data-reveal="true" style={revealStyle(160, 28)}>
      <div className="hero-stack-card hero-stack-card--single">
        <Image
          src={images.heroEye.src}
          alt={images.heroEye.alt}
          width={images.heroEye.width}
          height={images.heroEye.height}
        />
      </div>
    </div>
  );
}

function VisionPhoneStack() {
  return (
    <div className="vision-stage" data-reveal="true" style={revealStyle(150, 24)}>
      <div className="vision-stage-card vision-stage-card--single">
        <Image
          src={images.visionPhone.src}
          alt={images.visionPhone.alt}
          width={images.visionPhone.width}
          height={images.visionPhone.height}
          loading="eager"
        />
      </div>
    </div>
  );
}

function AboutPortraitPair() {
  return (
    <div className="about-portrait-pair" data-reveal="true" style={revealStyle(110, 24)}>
      <div className="about-portrait about-portrait--front">
        <Image
          src={images.aboutDoctor.src}
          alt={images.aboutDoctor.alt}
          width={images.aboutDoctor.width}
          height={images.aboutDoctor.height}
        />
      </div>
      <div className="about-portrait about-portrait--back">
        <Image
          src={images.aboutNurse.src}
          alt={images.aboutNurse.alt}
          width={images.aboutNurse.width}
          height={images.aboutNurse.height}
        />
      </div>
    </div>
  );
}

function TeamMosaic() {
  return (
    <div className="team-mosaic" data-reveal="true" style={revealStyle(120, 24)}>
      <div className="team-mosaic-main">
        <Image
          src={images.teamLead.src}
          alt={images.teamLead.alt}
          width={images.teamLead.width}
          height={images.teamLead.height}
        />
      </div>
      <div className="team-mosaic-side team-mosaic-side--top">
        <Image
          src={images.teamScientist.src}
          alt={images.teamScientist.alt}
          width={images.teamScientist.width}
          height={images.teamScientist.height}
        />
      </div>
      <div className="team-mosaic-side team-mosaic-side--bottom">
        <Image
          src={images.teamAdvisor.src}
          alt={images.teamAdvisor.alt}
          width={images.teamAdvisor.width}
          height={images.teamAdvisor.height}
        />
      </div>
      <span className="team-mosaic-ring" aria-hidden="true" />
    </div>
  );
}

function HomeAboutSentence() {
  const highlighted = new Set(["AI", "eye", "diabetes", "risk", "changes"]);

  return (
    <h2 className="section-title section-title--sentence" data-reveal="true" style={revealStyle(80)}>
      {homeContent.aboutWords.map((word) => (
        <span
          className={highlighted.has(word) ? "sentence-word sentence-word--accent" : "sentence-word"}
          key={word}
        >
          {word}
        </span>
      ))}
    </h2>
  );
}

function HomeFaqSection() {
  return (
    <section className="section section--tight-top">
      <div className="shell faq-grid">
        <div className="faq-copy">
          <div data-reveal="true" style={revealStyle(0)}>
            <SectionTag>FAQ</SectionTag>
          </div>
          <h2 className="section-title" data-reveal="true" style={revealStyle(80)}>
            Frequently asked questions
          </h2>
          <p className="section-copy" data-reveal="true" style={revealStyle(120)}>
            Quick guidance for using the screening tool responsibly.
          </p>
        </div>
        <div className="faq-list">
          {homeContent.faqs.map((item, index) => (
            <details
              className="faq-item"
              data-reveal="true"
              key={item.question}
              open={index === 0}
              style={revealStyle(130 + index * 60, 18)}
            >
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">
                  <span className="faq-toggle-plus">+</span>
                  <span className="faq-toggle-minus">-</span>
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiabetesGuidanceSection() {
  return (
    <section className="section section--tight-top">
      <div className="shell guidance-grid">
        <div className="guidance-copy">
          <div data-reveal="true" style={revealStyle(0)}>
            <SectionTag>Diabetes guidance</SectionTag>
          </div>
          <h2 className="section-title" data-reveal="true" style={revealStyle(80)}>
            {homeContent.useGuidance.title}
          </h2>
          <p className="section-copy" data-reveal="true" style={revealStyle(120)}>
            {homeContent.useGuidance.description}
          </p>
        </div>
        <div className="guidance-list">
          {homeContent.useGuidance.sections.map((item, index) => (
            <article
              className="guidance-item"
              data-reveal="true"
              key={item.title}
              style={revealStyle(150 + index * 55, 18)}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeRouteView() {
  return (
    <main className="site-page">
      <SiteHeader currentPath="/" />
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title" data-reveal="true" style={revealStyle(60, 20)}>
              {homeContent.title}
            </h1>
            <p className="hero-description" data-reveal="true" style={revealStyle(120, 20)}>
              {homeContent.description}
            </p>
            <p className="section-note" data-reveal="true" style={revealStyle(190)}>
              {aboutContent.whoWeAreNote}
            </p>
            <div className="hero-action-row" data-reveal="true" style={revealStyle(220)}>
              <ButtonLink href="/try-now">
                Try now
              </ButtonLink>
            </div>
          </div>
          <HeroEyeStack />
        </div>
      </section>

      <section className="section">
        <div className="shell section-split">
          <div data-reveal="true" style={revealStyle(0)}>
            <SectionTag>About us</SectionTag>
          </div>
          <HomeAboutSentence />
        </div>
      </section>

      <section className="section">
        <div className="shell vision-grid">
          <div className="vision-copy">
            <div data-reveal="true" style={revealStyle(0)}>
              <SectionTag>Our Vision</SectionTag>
            </div>
            <h2 className="section-title" data-reveal="true" style={revealStyle(80)}>
              {homeContent.visionTitle}
            </h2>
            <p className="section-copy" data-reveal="true" style={revealStyle(130)}>
              {homeContent.visionDescription}
            </p>
            <ul className="feature-list">
              {homeContent.visionFeatures.map((feature, index) => (
                <li
                  className="feature-item"
                  data-reveal="true"
                  key={feature}
                  style={revealStyle(160 + index * 50, 18)}
                >
                  <span className="feature-tick" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" delay={320}>
              Contact us
            </ButtonLink>
          </div>
          <VisionPhoneStack />
        </div>
      </section>

      {/* <TestimonialsSection /> */}
      <HomeFaqSection />
      <CtaBand />
      <DiabetesGuidanceSection />
      <SiteFooter />
    </main>
  );
}

export function TryNowRouteView() {
  const tryNowFeatures = [
    "Upload a clear photo of your left or right eye",
    "Share a few basic details about yourself",
    "Get your diabetes risk result instantly",
  ];

  return (
    <main className="site-page">
      <SiteHeader currentPath="/try-now" />
      <section className="page-hero page-hero--narrow">
        <div className="shell page-hero-shell page-hero-shell--center">
          <div data-reveal="true" style={revealStyle(0)}>
            <SectionTag>Try now</SectionTag>
          </div>
          <h1 className="page-title" data-reveal="true" style={revealStyle(70, 18)}>
            Check Your Diabetes Risk with a Simple Eye Photo
          </h1>
          <p className="page-copy" data-reveal="true" style={revealStyle(130, 18)}>
            Upload a photo of your eye, fill in a few quick details, and our AI will check for
            early signs of diabetes risk — no needles, no lab tests.
          </p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="shell try-now-page-grid">
          <div className="try-now-page-copy">
            <div data-reveal="true" style={revealStyle(20)}>
              <SectionTag>How it works</SectionTag>
            </div>
            <h2 className="section-title" data-reveal="true" style={revealStyle(90)}>
              Your result in three simple steps
            </h2>
            <p className="section-copy" data-reveal="true" style={revealStyle(150)}>
              Take a photo of your eye, answer a few quick questions, and our AI will assess your
              diabetes risk in seconds. It&apos;s fast, private, and takes less than a minute.
            </p>
            <ul className="feature-list">
              {tryNowFeatures.map((feature, index) => (
                <li
                  className="feature-item"
                  data-reveal="true"
                  key={feature}
                  style={revealStyle(190 + index * 45, 18)}
                >
                  <span className="feature-tick" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="section-note" data-reveal="true" style={revealStyle(340)}>
              {aboutContent.whoWeAreNote}
            </p>
          </div>

          <div data-reveal="true" style={revealStyle(110, 18)}>
            <TryNowForm />
          </div>
        </div>
      </section>

      {/* <CtaBand /> */}
      <SiteFooter />
    </main>
  );
}

export function AboutRouteView() {
  return (
    <main className="site-page">
      <SiteHeader currentPath="/about-us" />
      <section className="page-hero page-hero--narrow">
        <div className="shell page-hero-shell page-hero-shell--center">
          <div data-reveal="true" style={revealStyle(0)}>
            <SectionTag>{aboutContent.eyebrow}</SectionTag>
          </div>
          <h1 className="page-title" data-reveal="true" style={revealStyle(70, 18)}>
            {aboutContent.title}
          </h1>
          <p className="page-copy" data-reveal="true" style={revealStyle(130, 18)}>
            {aboutContent.summary}
          </p>
          <ButtonLink href="/contact" delay={190}>
            {aboutContent.heroButton}
          </ButtonLink>
        </div>
      </section>

      <section className="section">
        <div className="shell about-story-grid">
          <AboutPortraitPair />
          <div className="about-story-copy">
            <div data-reveal="true" style={revealStyle(20)}>
              <SectionTag>{aboutContent.whoWeAreEyebrow}</SectionTag>
            </div>
            <h2 className="section-title" data-reveal="true" style={revealStyle(90)}>
              {aboutContent.whoWeAreTitle}
            </h2>
            <p className="section-copy" data-reveal="true" style={revealStyle(150)}>
              {aboutContent.whoWeAreDescription}
            </p>
            <p className="section-note" data-reveal="true" style={revealStyle(190)}>
              {aboutContent.whoWeAreNote}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--about-cards">
        <div className="shell about-card-grid">
          {aboutContent.cards.map((card, index) => (
            <article
              className="about-card"
              data-reveal="true"
              key={card.title}
              style={revealStyle(index * 70, 20)}
            >
              <h2 className="about-card-title">{card.title}</h2>
              <p className="about-card-copy">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell team-grid">
          <div className="team-copy">
            <div data-reveal="true" style={revealStyle(0)}>
              <SectionTag>{aboutContent.teamEyebrow}</SectionTag>
            </div>
            <h2 className="section-title" data-reveal="true" style={revealStyle(90)}>
              {aboutContent.teamTitle}
            </h2>
          </div>
          <TeamMosaic />
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </main>
  );
}

export function BlogsRouteView() {
  return (
    <main className="site-page">
      <SiteHeader currentPath="/blogs" />
      <section className="page-hero page-hero--narrow">
        <div className="shell page-hero-shell page-hero-shell--center">
          <div data-reveal="true" style={revealStyle(0)}>
            <SectionTag>{blogContent.eyebrow}</SectionTag>
          </div>
          <h1 className="page-title" data-reveal="true" style={revealStyle(70, 18)}>
            {blogContent.title}
          </h1>
          <p className="page-copy" data-reveal="true" style={revealStyle(130, 18)}>
            {blogContent.summary}
          </p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="shell blog-page-grid">
          {blogContent.articles.map((article, index) => (
            <article
              className="blog-page-card"
              data-reveal="true"
              key={article.href}
              style={revealStyle(index * 70, 18)}
            >
              <p className="blog-page-meta">
                {article.source} / {article.date}
              </p>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a
                className="site-button site-button--primary blog-page-link"
                href={article.href}
                rel="noreferrer"
                target="_blank"
              >
                <span>{article.buttonLabel}</span>
                <span className="site-button-arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export function TermsRouteView() {
  return (
    <main className="site-page">
      <SiteHeader currentPath="/terms" />
      <section className="page-hero page-hero--narrow policy-hero">
        <div className="shell page-hero-shell page-hero-shell--center policy-hero-shell">
          <div className="policy-tag-wrap" data-reveal="true" style={revealStyle(0)}>
            <SectionTag>{policyContent.eyebrow}</SectionTag>
          </div>
          <h1 className="page-title" data-reveal="true" style={revealStyle(70, 18)}>
            {policyContent.title}
          </h1>
          <p className="page-copy" data-reveal="true" style={revealStyle(130, 18)}>
            {policyContent.description}
          </p>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="shell policy-card-grid">
          {policyContent.sections.map((section, index) => (
            <article
              className="policy-card"
              data-reveal="true"
              key={section.title}
              style={revealStyle(index * 70, 18)}
            >
              <span className="policy-card-index">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export function ContactRouteView() {
  return (
    <main className="site-page">
      <SiteHeader currentPath="/contact" />
      <section className="page-hero">
        <div className="shell page-hero-shell page-hero-shell--center">
          <div data-reveal="true" style={revealStyle(0)}>
            <SectionTag>{contactContent.eyebrow}</SectionTag>
          </div>
          <h1 className="page-title" data-reveal="true" style={revealStyle(70, 18)}>
            {contactContent.title}
          </h1>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <h2 className="section-title" data-reveal="true" style={revealStyle(40)}>
              {contactContent.sectionTitle}
            </h2>
            <p className="section-copy" data-reveal="true" style={revealStyle(100)}>
              {contactContent.sectionDescription}
            </p>
            <div className="contact-link-grid">
              {contactContent.contactLinks.map((item, index) => (
                <ContactInfoCard
                  delay={140 + index * 50}
                  href={item.href}
                  key={`${item.type}-${item.label}`}
                  label={item.label}
                  type={item.type}
                />
              ))}
            </div>
          </div>

          <form className="contact-form-card" data-reveal="true" style={revealStyle(100, 18)}>
            <label className="form-field">
              <span>{contactContent.form.nameLabel}</span>
              <input name="name" placeholder={contactContent.form.namePlaceholder} type="text" />
            </label>
            <label className="form-field">
              <span>{contactContent.form.emailLabel}</span>
              <input
                name="email"
                placeholder={contactContent.form.emailPlaceholder}
                type="email"
              />
            </label>
            <label className="form-field">
              <span>{contactContent.form.phoneLabel}</span>
              <input name="phone" placeholder={contactContent.form.phonePlaceholder} type="tel" />
            </label>
            <label className="form-field form-field--full">
              <span>{contactContent.form.messageLabel}</span>
              <textarea
                name="message"
                placeholder={contactContent.form.messagePlaceholder}
                rows={6}
              />
            </label>
            <button className="form-submit-button" type="button">
              {contactContent.form.buttonLabel}
            </button>
            <p className="form-note">{contactContent.form.note}</p>
          </form>
        </div>
      </section>

      {/* <TestimonialsSection /> */}
      <CtaBand />
      <SiteFooter />
    </main>
  );
}
