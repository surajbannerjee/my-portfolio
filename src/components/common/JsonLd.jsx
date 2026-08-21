import React from "react";

export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://suraj-banerjee.vercel.app/#person",
        name: "Suraj Banerjee",
        jobTitle: "Frontend UI Developer",
        url: "https://suraj-banerjee.vercel.app",
        image: "https://res.cloudinary.com/drrw18aos/image/upload/v1787163087/ChatGPT_Image_Aug_19_2026_11_41_05_PM_dtr5z4.png",
        email: "surajbanerjee255@gmail.com",
        telephone: "+919609618271",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          addressCountry: "IN",
        },
        sameAs: [
          "https://github.com/surajbanerjee",
          "https://www.linkedin.com/in/suraj-banerjee-0a1251268/",
          "https://x.com/imsurajbanerjee",
          "https://www.instagram.com/imsurajbanerjee",
        ],
        knowsAbout: [
          "React.js",
          "Next.js",
          "JavaScript",
          "Tailwind CSS",
          "Material UI",
          "WordPress Development",
          "Elementor Pro",
          "Webflow",
          "Figma",
          "UI/UX Design",
          "Responsive Web Design",
          "GSAP Animations",
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Kalpana Foundation Pvt. ITI",
          },
        ],
        worksFor: {
          "@type": "Organization",
          name: "Websadroit",
          location: "Kolkata, India",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://suraj-banerjee.vercel.app/#website",
        url: "https://suraj-banerjee.vercel.app",
        name: "Suraj Banerjee — Frontend UI Developer Portfolio",
        description: "Official portfolio of Suraj Banerjee, a Frontend UI Developer specializing in Next.js, React, Tailwind CSS, WordPress, and pixel-perfect design translation.",
        publisher: {
          "@id": "https://suraj-banerjee.vercel.app/#person",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://suraj-banerjee.vercel.app/#service",
        name: "Suraj Banerjee — Frontend Web Development & UI Design Services",
        url: "https://suraj-banerjee.vercel.app/services",
        provider: {
          "@id": "https://suraj-banerjee.vercel.app/#person",
        },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development & Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Next.js & React Development",
                description: "Building fast, SEO-optimized, and scalable modern web applications.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Figma to Responsive Code Conversion",
                description: "Translating raw Figma and Adobe XD designs into pixel-perfect React and Tailwind CSS.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom WordPress & CMS Solutions",
                description: "Dynamic WordPress websites using Elementor Pro, ACF, and performance optimization.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UI/UX Design & Prototyping",
                description: "User-centric visual layouts, interactive prototypes, and design systems.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
