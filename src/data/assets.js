/**
 * Master Asset Registry for Suraj Banerjee's Portfolio
 * Centralizes all image paths, cloud URLs, and media assets used across all sections & pages.
 */

export const ASSETS = {
  // 1. Primary Banner & Hero Assets
  banner: {
    suraj3dBanner: "https://res.cloudinary.com/drrw18aos/image/upload/v1787169663/meBanner_fmiayz.png",
    description: "Signature 3D SURAJ character banner with fire-smoke background used in ParallaxDividers across all pages.",
  },

  // 2. Project Portfolio Images
  projects: [
    {
      id: "prj-01",
      title: "MUVI Cinema",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787164367/Gemini_Generated_Image_dxtclzdxtclzdxtc_xhhzib.png",
      localFallback: "/img/works/preview/MuviSS01.png",
    },
    {
      id: "prj-02",
      title: "Wildora ",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787165082/Gemini_Generated_Image_49v82449v82449v8_phybma.png",
      localFallback: "/img/works/preview/WildoraSS01.png",
    },
    {
      id: "prj-03",
      title: "Furniro",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787165776/brewhub_edgff6.png",
      localFallback: "/img/works/preview/furniroSS01.png",
    },

  ],

  // 3. Services Stacking Cards Illustrations
  services: {
    nextjsReact: {
      small: "/img/illustrations/800x800_service-image-01.webp",
      medium: "/img/illustrations/800x800_service-image-01.webp",
    },
    figmaToCode: {
      small: "/img/illustrations/800x800_service-image-02.webp",
      medium: "/img/illustrations/800x800_service-image-02.webp",
    },
    wordpressElementor: {
      small: "/img/illustrations/800x800_service-image-03.webp",
      medium: "/img/illustrations/800x800_service-image-03.webp",
    },
    responsiveWebflow: {
      small: "/img/illustrations/800x800_service-image-04.webp",
      medium: "/img/illustrations/800x800_service-image-04.webp",
    },
  },

  // 4. Interactive Rotating Emblems
  badges: {
    badge01: "/img/icons/300x300_obj-btn-01.webp",
    badge02: "/img/icons/300x300_obj-btn-02.webp",
    badge03: "/img/icons/300x300_obj-btn-03.webp",
  },
};
