import React from "react";
import InnerHeadline from "@/components/sections/InnerHeadline";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) — Suraj Banerjee",
  description:
    "Find answers to frequently asked questions about Next.js, React, Tailwind CSS, WordPress development, timelines, and hiring Suraj Banerjee.",
  alternates: {
    canonical: "https://suraj-banerjee.vercel.app/faq",
  },
  openGraph: {
    title: "FAQ — Suraj Banerjee Frontend Developer",
    description: "Clear answers on web development stacks, Figma conversions, WordPress customizations, and project turnaround.",
    url: "https://suraj-banerjee.vercel.app/faq",
  },
};

export default function FaqPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      {/* 1. Inner Headline */}
      <InnerHeadline
        subtitle="FAQ"
        title={<h1 className="inner-headline__title loading__item">Frequently asked questions</h1>}
        description={
          <p className="inner-headline__text t-large t-bright loading__item">
            Find answers to common questions about my design &amp; engineering workflow, Figma-to-code conversions, WordPress theme builds, and project timelines.
          </p>
        }
      />

      {/* 2. FAQ Accordion */}
      <FaqAccordion />

      {/* 3. Parallax Divider */}
      <ParallaxDivider
        imageClass="divider-image-3"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage="/img/icons/300x300_obj-btn-02.webp"
      />

      {/* 4. CTA Section */}
      <CtaSection
        caption="Have a question that isn't answered here?"
        btnText="Ask Me Directly"
        btnHref="/contact"
      />
    </main>
  );
}
