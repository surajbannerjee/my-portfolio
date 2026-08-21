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
      localFallback: "/img/works/1200x1200_prj-01.webp",
    },
    {
      id: "prj-02",
      title: "Wildora Platform",
      previewUrl: "/img/works/1200x1200_prj-02.webp",
      localFallback: "/img/works/1200x1200_prj-02.webp",
    },
    {
      id: "prj-03",
      title: "Furniro E-Commerce",
      previewUrl: "/img/works/1200x1200_prj-03.webp",
      localFallback: "/img/works/1200x1200_prj-03.webp",
    },
    {
      id: "prj-04",
      title: "BrewHub Coffee Experience",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787165776/brewhub_edgff6.png",
      localFallback: "/img/works/1200x1200_prj-04.webp",
    },
    {
      id: "prj-05",
      title: "Nova SaaS Analytics",
      previewUrl: "/img/works/1200x1200_prj-05.webp",
      localFallback: "/img/works/1200x1200_prj-05.webp",
    },
    {
      id: "prj-06",
      title: "Zenith Creative Agency",
      previewUrl: "https://res.cloudinary.com/drrw18aos/image/upload/v1787165082/Gemini_Generated_Image_49v82449v82449v8_phybma.png",
      localFallback: "/img/works/1200x1200_prj-06.webp",
    },
  ],

  // 3. Services Stacking Cards Illustrations
  services: {
    nextjsReact: {
      small: "/img/illustrations/300x300_stack-01.webp",
      medium: "/img/illustrations/800x800_stack-01.webp",
    },
    figmaToCode: {
      small: "/img/illustrations/300x300_stack-02.webp",
      medium: "/img/illustrations/800x800_stack-02.webp",
    },
    wordpressElementor: {
      small: "/img/illustrations/300x300_stack-03.webp",
      medium: "/img/illustrations/800x800_stack-03.webp",
    },
    responsiveWebflow: {
      small: "/img/illustrations/300x300_stack-04.webp",
      medium: "/img/illustrations/800x800_stack-04.webp",
    },
  },

  // 4. Testimonials Client Avatars
  testimonials: {
    testim01: "/img/testimonials/1400x1200_testim-01.webp",
    testim02: "/img/testimonials/1400x1200_testim-02.webp",
    testim03: "/img/testimonials/1400x1200_testim-03.webp",
  },

  // 5. Interactive Rotating Emblems
  badges: {
    badge01: "/img/icons/300x300_obj-btn-01.webp",
    badge02: "/img/icons/300x300_obj-btn-02.webp",
    badge03: "/img/icons/300x300_obj-btn-03.webp",
  },

  // 6. Navigation Drawer Video
  menuPromo: {
    mp4: "/video/540x720_menu-video-01.mp4",
    webm: "/video/540x720_menu-video-01.webm",
    ogv: "/video/540x720_menu-video-01.ogv",
    poster: "/img/promo/540x720_menu-video-01.webp",
  },
};
