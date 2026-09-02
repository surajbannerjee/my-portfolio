import React from "react";
import InnerHeadline from "@/components/sections/InnerHeadline";
import TeamGrid from "@/components/sections/TeamGrid";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import CtaSection from "@/components/sections/CtaSection";
import { ICON_300X300_OBJ_BTN_02 } from "@/constant";

export const metadata = {
  title: "Team & Collaborators — Suraj Banerjee",
  description:
    "Meet Suraj Banerjee and our collaborative network of designers, engineers, and digital creative specialists.",
  alternates: {
    canonical: "https://suraj-banerjee.vercel.app/team",
  },
  openGraph: {
    title: "Team & Collaborators — Suraj Banerjee",
    description:
      "Creative developers and UI designers united by a passion for crafting impactful digital experiences.",
    url: "https://suraj-banerjee.vercel.app/team",
  },
};

export default function TeamPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      <InnerHeadline
        subtitle="Team"
        title={<h1 className="inner-headline__title loading__item">Meet our team</h1>}
        description={
          <p className="inner-headline__text t-large t-bright loading__item">
            A collaborative network of passionate frontend developers, UI designers, and technical strategists delivering exceptional digital products.
          </p>
        }
      />

      <TeamGrid />

      <ParallaxDivider
        imageClass="divider-image-5"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage={ICON_300X300_OBJ_BTN_02}
      />

      <CtaSection
        caption="Interested in working together or hiring me for a project?"
        btnText="Get in Touch"
        btnHref="/contact"
      />
    </main>
  );
}
