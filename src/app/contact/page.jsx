import React from "react";
import InnerHeadline from "@/components/sections/InnerHeadline";
import ContactForm from "@/components/sections/ContactForm";
import ParallaxDivider from "@/components/sections/ParallaxDivider";
import { ICON_300X300_OBJ_BTN_02 } from "@/constant";

export const metadata = {
  title: "Contact & Hire Suraj Banerjee — Frontend UI Developer",
  description:
    "Get in touch with Suraj Banerjee to discuss your upcoming Next.js, React, Tailwind CSS, or WordPress project. Available for freelance contracts and full-time roles.",
  alternates: {
    canonical: "https://suraj-banerjee.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Suraj Banerjee — Frontend UI Developer",
    description: "Send a message or project inquiry directly to Suraj Banerjee. Fast response within 24 hours.",
    url: "https://suraj-banerjee.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      {/* 1. Inner Headline */}
      <InnerHeadline
        subtitle="Contact"
        title={<h1 className="inner-headline__title loading__item">Let&apos;s talk about your project</h1>}
        description={
          <p className="inner-headline__text t-large t-bright loading__item">
            Have a project idea, Figma design to translate, or web application to build? Fill in the form below or reach out directly at <a href="mailto:surajbanerjee255@gmail.com" className="link-small-underline">surajbanerjee255@gmail.com</a>. Let&apos;s build something great together.
          </p>
        }
      />

      {/* 2. Contact Form */}
      <ContactForm />

      {/* 3. Parallax Divider */}
      <ParallaxDivider
        imageClass="divider-image-2"
        circleHref="/contact"
        circleText="Let's start new project * Let's start new project * "
        circleImage={ICON_300X300_OBJ_BTN_02}
      />
    </main>
  );
}
