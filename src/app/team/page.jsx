import React from "react";
import InnerHeadline from "@/components/sections/InnerHeadline";
import TeamGrid from "@/components/sections/TeamGrid";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import CtaSection from "@/components/sections/CtaSection";
import { ICON_300X300_OBJ_BTN_02 } from "@/constant";

export const metadata = {
  title: "Team — Suraj Banerjee",
  description:
    "Meet the people behind the pixels. Different disciplines. One shared vision. We combine design, development, and technology to build digital experiences that look exceptional and work beautifully.",
  alternates: {
    canonical: "https://suraj-banerjee.vercel.app/team",
  },
  openGraph: {
    title: "Team — Suraj Banerjee",
    description:
      "Different disciplines. One shared vision. We combine design, development, and technology to build digital experiences that look exceptional and work beautifully.",
    url: "https://suraj-banerjee.vercel.app/team",
  },
};

export default function TeamPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      <InnerHeadline
        subtitle="OUR TEAM"
        title={
          <h1 className="inner-headline__title loading__item">
            Meet the people<br className="d-none d-md-inline" /> behind the pixels.
          </h1>
        }
        description={
          <p className="inner-headline__text t-large t-bright loading__item">
            Different disciplines. One shared vision.<br className="d-none d-md-inline" /> We combine design, development, and technology to build digital experiences that look exceptional and work beautifully.
          </p>
        }
      />

      <TeamGrid />

      {/* Cinematic SURAJ Banner - untouched */}
      <ParallaxDivider
        imageClass="divider-image-5"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage={ICON_300X300_OBJ_BTN_02}
      />

      {/* Premium Agency CTA Section */}
      <CtaSection
        label="LET'S CREATE"
        caption="Got a bold idea? Let's make it real."
        description="From interfaces and websites to complete digital experiences, let's build something people remember."
        btnText="Start a Project"
        btnHref="/contact"
      />
    </main>
  );
}
