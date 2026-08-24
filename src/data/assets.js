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
      title: "MUVI Cinema App",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787164367/Gemini_Generated_Image_dxtclzdxtclzdxtc_xhhzib.png",
      localFallback: "/img/works/preview/1200x800_prv-01.webp",
    },
    {
      id: "prj-02",
      title: "Wildora Platform",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787165082/Gemini_Generated_Image_49v82449v82449v8_phybma.png",
      localFallback: "/img/works/preview/1200x800_prv-02.webp",
    },
    {
      id: "prj-03",
      title: "Furniro E-Commerce",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787165776/brewhub_edgff6.png",
      localFallback: "/img/works/preview/1200x800_prv-03.webp",
    },
    {
      id: "prj-04",
      title: "Nova SaaS Analytics",
      previewUrl: "/img/works/preview/1200x800_prv-04.webp",
      localFallback: "/img/works/preview/1200x800_prv-04.webp",
    },
    {
      id: "prj-05",
      title: "Zenith Creative Agency",
      previewUrl: "/img/works/preview/1200x800_prv-05.webp",
      localFallback: "/img/works/preview/1200x800_prv-05.webp",
    },
    {
      id: "prj-06",
      title: "Aurora FinTech App",
      previewUrl: "/img/works/preview/1200x800_prv-06.webp",
      localFallback: "/img/works/preview/1200x800_prv-06.webp",
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
