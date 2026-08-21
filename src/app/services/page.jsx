import React from "react";
import InnerHeadline from "@/components/sections/InnerHeadline";
import StatsCards from "@/components/sections/StatsCards";
import ServicesList from "@/components/sections/ServicesList";
import StackingCards from "@/components/sections/StackingCards";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "Frontend & UI Design Services — Suraj Banerjee",
  description:
    "Explore professional web development services by Suraj Banerjee: Next.js & React development, Figma-to-code translation, custom WordPress (Elementor Pro & ACF), and responsive UI engineering.",
  alternates: {
    canonical: "https://suraj-banerjee.vercel.app/services",
  },
  openGraph: {
    title: "Web Development & UI Design Services — Suraj Banerjee",
    description: "Next.js, React, Tailwind CSS, WordPress theme customization, and Figma to pixel-perfect code.",
    url: "https://suraj-banerjee.vercel.app/services",
  },
};

export default function ServicesPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      {/* 1. Inner Headline */}
      <InnerHeadline
        subtitle="Services"
        title={<h1 className="inner-headline__title loading__item">What I can do for you</h1>}
        description={
          <p className="inner-headline__text t-large t-bright loading__item">
            I craft custom digital solutions tailored to your unique goals.
            Whether building an intuitive user interface in Next.js, customizing a dynamic WordPress theme, or optimizing web performance, I blend design and engineering for maximum impact.
          </p>
        }
      />

      {/* 2. Statistics Cards */}
      <StatsCards />

      {/* 3. Services List with Hover Image Reveal */}
      <ServicesList />

      {/* 4. Stacking Cards */}
      <StackingCards />

      {/* 5. Parallax Divider */}
      <ParallaxDivider
        imageClass="divider-image-6"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage="/img/icons/300x300_obj-btn-02.webp"
      />

      {/* 6. CTA Section */}
      <CtaSection
        caption="Have a project in mind? Let's discuss requirements."
        btnText="Get Started"
        btnHref="/contact"
      />
    </main>
  );
}
