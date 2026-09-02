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

    

      {/* CTA Banner */}
      <CtaSection />
    </main>
  );
}
