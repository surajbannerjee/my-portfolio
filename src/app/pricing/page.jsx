import React from "react";
import InnerHeadline from "@/components/sections/InnerHeadline";
import PricingCards from "@/components/sections/PricingCards";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import CtaSection from "@/components/sections/CtaSection";
import { ICON_300X300_OBJ_BTN_02 } from "@/constant";

export const metadata = {
  title: "Pricing & Project Plans — Suraj Banerjee",
  description:
    "Transparent pricing packages for frontend development, Next.js web applications, Figma-to-code conversions, and custom WordPress websites.",
  alternates: {
    canonical: "https://suraj-banerjee.vercel.app/pricing",
  },
  openGraph: {
    title: "Pricing & Project Packages — Suraj Banerjee",
    description: "Transparent, flexible pricing for high-performance frontend and UI web design projects.",
    url: "https://suraj-banerjee.vercel.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      {/* 1. Inner Headline */}
      <InnerHeadline
        subtitle="Pricing"
        title={<h1 className="inner-headline__title loading__item">Transparent pricing</h1>}
        description={
          <p className="inner-headline__text t-large t-bright loading__item">
            Clear and predictable pricing plans tailored to meet your unique needs.
            No hidden fees, no surprises.
          </p>
        }
      />

      {/* 2. Pricing Cards */}
      <PricingCards />

      {/* 3. Parallax Divider */}
      <ParallaxDivider
        imageClass="divider-image-4"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage={ICON_300X300_OBJ_BTN_02}
      />

      {/* 4. FAQ Accordion */}
      <FaqAccordion />

      {/* 5. CTA Section */}
      <CtaSection
        caption="Need a tailored custom estimate for your project?"
        btnText="Request Quote"
        btnHref="/contact"
      />
    </main>
  );
}
