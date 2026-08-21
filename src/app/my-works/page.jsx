import React from "react";
import ProjectsMasonry from "@/components/sections/ProjectsMasonry";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "My Works — Suraj Banerjee",
  description: "Explore featured web development and UI design projects by Suraj Banerjee.",
};

export default function MyWorksPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      {/* Gallery Section */}
      <ProjectsMasonry />

      {/* Parallax Divider */}
      <ParallaxDivider
        imageClass="divider-image-6"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage="/img/icons/300x300_obj-btn-02.webp"
      />

      {/* CTA Banner */}
      <CtaSection />
    </main>
  );
}
