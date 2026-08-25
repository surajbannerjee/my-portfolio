/**
 * Master Image & Asset Registry
 * Centralizes all active image paths, project screenshots, icons, illustrations, and cloud URLs.
 * Auto-synced: contains ONLY active, used assets in the project.
 */

/**
 * Image helper function to construct or return asset paths
 * @param {string} path - Absolute, relative or cloud image path
 * @returns {string} Path string
 */
export const image = (path) => path;

/**
 * Image resolver with fallback & base path formatting
 * @param {string} path - Image path
 * @returns {string} Formatted path
 */
export const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
    return path;
  }
  return `/${path}`;
};

// ==========================================
// 1. CLOUD & BANNER ASSETS
// ==========================================
export const BANNER_SURAJ_3D = image("https://res.cloudinary.com/drrw18aos/image/upload/v1787169663/meBanner_fmiayz.png");
export const CLOUD_MUVI_PREVIEW = image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643214/movie_ynj8xe.png");
export const CLOUD_WILDORA_PREVIEW = image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643180/demo-11_axfa9u.webp");
export const CLOUD_FURNIRO_PREVIEW = image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643180/demo-10_zabb9y.webp");
export const CLOUD_JAUNTY_PREVIEW = image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643179/jaunty_ez1aa4.webp");
export const CLOUD_DINKS_PREVIEW = image("https://res.cloudinary.com/drrw18aos/image/upload/v1787656827/dinkElectric_sxo0gh.png");

// ==========================================
// 2. PROJECT SCREENSHOTS & WORKS GALLERY
// ==========================================
export const PROJECT_DINKSSS01 = image("/img/works/preview/DinksSS01.png");
export const PROJECT_DINKSSS02 = image("/img/works/preview/DinksSS02.png");
export const PROJECT_DINKSSS03 = image("/img/works/preview/DinksSS03.png");
export const PROJECT_DINKSSS04 = image("/img/works/preview/DinksSS04.png");
export const PROJECT_FURNIROSS01 = image("/img/works/preview/furniroSS01.png");
export const PROJECT_FURNIROSS02 = image("/img/works/preview/furniroSS02.png");
export const PROJECT_FURNIROSS03 = image("/img/works/preview/furniroSS03.png");
export const PROJECT_FURNIROSS04 = image("/img/works/preview/furniroSS04.png");
export const PROJECT_FURNIROSS05 = image("/img/works/preview/furniroSS05.png");
export const PROJECT_FURNIROSS06 = image("/img/works/preview/furniroSS06.png");
export const PROJECT_FURNIROSS07 = image("/img/works/preview/furniroSS07.png");
export const PROJECT_JAUNTYSS01 = image("/img/works/preview/JauntySS01.png");
export const PROJECT_JAUNTYSS02 = image("/img/works/preview/JauntySS02.png");
export const PROJECT_JAUNTYSS03 = image("/img/works/preview/JauntySS03.png");
export const PROJECT_JAUNTYSS04 = image("/img/works/preview/JauntySS04.png");
export const PROJECT_MUVISS01 = image("/img/works/preview/MuviSS01.png");
export const PROJECT_MUVISS02 = image("/img/works/preview/MuviSS02.png");
export const PROJECT_MUVISS03 = image("/img/works/preview/MuviSS03.png");
export const PROJECT_MUVISS04 = image("/img/works/preview/MuviSS04.png");
export const PROJECT_TALKSS01 = image("/img/works/preview/TalkSS01.png");
export const PROJECT_TALKSS02 = image("/img/works/preview/TalkSS02.png");
export const PROJECT_TALKSS03 = image("/img/works/preview/TalkSS03.png");
export const PROJECT_TALKSS04 = image("/img/works/preview/TalkSS04.png");
export const PROJECT_WILDORASS01 = image("/img/works/preview/WildoraSS01.png");
export const PROJECT_WILDORASS02 = image("/img/works/preview/WildoraSS02.png");
export const PROJECT_WILDORASS03 = image("/img/works/preview/WildoraSS03.png");
export const PROJECT_WILDORASS04 = image("/img/works/preview/WildoraSS04.png");

// ==========================================
// 3. TECH STACK & SKILL ICONS
// ==========================================
export const TECH_BLENDER = image("/img/tech/icon-blender.svg");
export const TECH_CSS = image("/img/tech/icon-css.svg");
export const TECH_FIGMA = image("/img/tech/icon-figma.svg");
export const TECH_HTML = image("/img/tech/icon-html.svg");
export const TECH_ILLUSTRATOR = image("/img/tech/icon-illustrator.svg");
export const TECH_NOTION = image("/img/tech/icon-notion.svg");
export const TECH_PHOTOSHOP = image("/img/tech/icon-photoshop.svg");
export const TECH_SCKETCH = image("/img/tech/icon-scketch.svg");

// ==========================================
// 4. BADGES & UI ICONS
// ==========================================
export const ICON_300X300_OBJ_BTN_01 = image("/img/icons/300x300_obj-btn-01.webp");
export const ICON_300X300_OBJ_BTN_02 = image("/img/icons/300x300_obj-btn-02.webp");
export const ICON_300X300_OBJ_BTN_03 = image("/img/icons/300x300_obj-btn-03.webp");
export const ICON_300X300_OBJ_CTA_01 = image("/img/icons/300x300_obj-cta-01.webp");
export const ICON_H70_APPR_01 = image("/img/icons/h70_appr-01.webp");
export const ICON_H70_APPR_02 = image("/img/icons/h70_appr-02.webp");
export const ICON_H70_APPR_03 = image("/img/icons/h70_appr-03.webp");

// ==========================================
// 5. SERVICES & CARDS ILLUSTRATIONS
// ==========================================
export const BG_404_ERR = image("/img/backgrounds/900x900_err-01.webp");
export const ILLUSTRATION_360X440_LIST_01 = image("/img/illustrations/360x440_list-01.webp");
export const ILLUSTRATION_360X440_LIST_02 = image("/img/illustrations/360x440_list-02.webp");
export const ILLUSTRATION_360X440_LIST_03 = image("/img/illustrations/360x440_list-03.webp");
export const ILLUSTRATION_360X440_LIST_04 = image("/img/illustrations/360x440_list-04.webp");
export const ILLUSTRATION_800X800_CARD_IMAGE_01 = image("/img/illustrations/800x800_card-image-01.webp");
export const ILLUSTRATION_800X800_CARD_IMAGE_02 = image("/img/illustrations/800x800_card-image-02.webp");
export const ILLUSTRATION_800X800_CARD_IMAGE_03 = image("/img/illustrations/800x800_card-image-03.webp");
export const ILLUSTRATION_800X800_CARD_IMAGE_04 = image("/img/illustrations/800x800_card-image-04.webp");
export const ILLUSTRATION_800X800_SERVICE_IMAGE_01 = image("/img/illustrations/800x800_service-image-01.webp");
export const ILLUSTRATION_800X800_SERVICE_IMAGE_02 = image("/img/illustrations/800x800_service-image-02.webp");
export const ILLUSTRATION_800X800_SERVICE_IMAGE_03 = image("/img/illustrations/800x800_service-image-03.webp");
export const ILLUSTRATION_800X800_SERVICE_IMAGE_04 = image("/img/illustrations/800x800_service-image-04.webp");
export const CTA_IMG_01 = image("/img/illustrations/cta-img-01.webp");
export const CTA_IMG_02 = image("/img/illustrations/cta-img-02.webp");

// ==========================================
// 6. AVATARS & TEAM
// ==========================================
export const AVATAR_1400140001 = image("/img/avatars/1400x1400_ava-01.webp");
export const AVATAR_30030001 = image("/img/avatars/300x300_ava-01.webp");
export const AVATAR_30030002 = image("/img/avatars/300x300_ava-02.webp");
export const AVATAR_30030003 = image("/img/avatars/300x300_ava-03.webp");
export const AVATAR_30030004 = image("/img/avatars/300x300_ava-04.webp");

// ==========================================
// 7. FAVICON & OG META ASSETS
// ==========================================
export const FAVICON_APPLE_TOUCH_ICON = image("/img/favicon/apple-touch-icon.png");
export const FAVICON_ICO = image("/img/favicon/favicon.ico");
export const FAVICON_SVG = image("/img/favicon/icon.svg");
export const OG_IMAGE = image("/img/og-image.png");

// ==========================================
// 8. DOCUMENTS & MEDIA ASSETS
// ==========================================
export const MEDIA_CV = image("/img/pdf/CV.pdf");

// ==========================================
// STORE IMAGES BY CATEGORY
// ==========================================
export const STORE_IMAGES = {
  banner_and_cloud: {
    BANNER_SURAJ_3D: image("https://res.cloudinary.com/drrw18aos/image/upload/v1787169663/meBanner_fmiayz.png"),
    CLOUD_MUVI_PREVIEW: image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643214/movie_ynj8xe.png"),
    CLOUD_WILDORA_PREVIEW: image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643180/demo-11_axfa9u.webp"),
    CLOUD_FURNIRO_PREVIEW: image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643180/demo-10_zabb9y.webp"),
    CLOUD_JAUNTY_PREVIEW: image("https://res.cloudinary.com/drrw18aos/image/upload/v1787643179/jaunty_ez1aa4.webp"),
    CLOUD_DINKS_PREVIEW: image("https://res.cloudinary.com/drrw18aos/image/upload/v1787656827/dinkElectric_sxo0gh.png"),
  },
  projects_showcase: {
    PROJECT_DINKSSS01: image("/img/works/preview/DinksSS01.png"),
    PROJECT_DINKSSS02: image("/img/works/preview/DinksSS02.png"),
    PROJECT_DINKSSS03: image("/img/works/preview/DinksSS03.png"),
    PROJECT_DINKSSS04: image("/img/works/preview/DinksSS04.png"),
    PROJECT_FURNIROSS01: image("/img/works/preview/furniroSS01.png"),
    PROJECT_FURNIROSS02: image("/img/works/preview/furniroSS02.png"),
    PROJECT_FURNIROSS03: image("/img/works/preview/furniroSS03.png"),
    PROJECT_FURNIROSS04: image("/img/works/preview/furniroSS04.png"),
    PROJECT_FURNIROSS05: image("/img/works/preview/furniroSS05.png"),
    PROJECT_FURNIROSS06: image("/img/works/preview/furniroSS06.png"),
    PROJECT_FURNIROSS07: image("/img/works/preview/furniroSS07.png"),
    PROJECT_JAUNTYSS01: image("/img/works/preview/JauntySS01.png"),
    PROJECT_JAUNTYSS02: image("/img/works/preview/JauntySS02.png"),
    PROJECT_JAUNTYSS03: image("/img/works/preview/JauntySS03.png"),
    PROJECT_JAUNTYSS04: image("/img/works/preview/JauntySS04.png"),
    PROJECT_MUVISS01: image("/img/works/preview/MuviSS01.png"),
    PROJECT_MUVISS02: image("/img/works/preview/MuviSS02.png"),
    PROJECT_MUVISS03: image("/img/works/preview/MuviSS03.png"),
    PROJECT_MUVISS04: image("/img/works/preview/MuviSS04.png"),
    PROJECT_TALKSS01: image("/img/works/preview/TalkSS01.png"),
    PROJECT_TALKSS02: image("/img/works/preview/TalkSS02.png"),
    PROJECT_TALKSS03: image("/img/works/preview/TalkSS03.png"),
    PROJECT_TALKSS04: image("/img/works/preview/TalkSS04.png"),
    PROJECT_WILDORASS01: image("/img/works/preview/WildoraSS01.png"),
    PROJECT_WILDORASS02: image("/img/works/preview/WildoraSS02.png"),
    PROJECT_WILDORASS03: image("/img/works/preview/WildoraSS03.png"),
    PROJECT_WILDORASS04: image("/img/works/preview/WildoraSS04.png"),
  },
  tech_stack: {
    TECH_BLENDER: image("/img/tech/icon-blender.svg"),
    TECH_CSS: image("/img/tech/icon-css.svg"),
    TECH_FIGMA: image("/img/tech/icon-figma.svg"),
    TECH_HTML: image("/img/tech/icon-html.svg"),
    TECH_ILLUSTRATOR: image("/img/tech/icon-illustrator.svg"),
    TECH_NOTION: image("/img/tech/icon-notion.svg"),
    TECH_PHOTOSHOP: image("/img/tech/icon-photoshop.svg"),
    TECH_SCKETCH: image("/img/tech/icon-scketch.svg"),
  },
  icons_and_badges: {
    ICON_300X300_OBJ_BTN_01: image("/img/icons/300x300_obj-btn-01.webp"),
    ICON_300X300_OBJ_BTN_02: image("/img/icons/300x300_obj-btn-02.webp"),
    ICON_300X300_OBJ_BTN_03: image("/img/icons/300x300_obj-btn-03.webp"),
    ICON_300X300_OBJ_CTA_01: image("/img/icons/300x300_obj-cta-01.webp"),
    ICON_H70_APPR_01: image("/img/icons/h70_appr-01.webp"),
    ICON_H70_APPR_02: image("/img/icons/h70_appr-02.webp"),
    ICON_H70_APPR_03: image("/img/icons/h70_appr-03.webp"),
  },
  services_and_illustrations: {
    BG_404_ERR: image("/img/backgrounds/900x900_err-01.webp"),
    ILLUSTRATION_360X440_LIST_01: image("/img/illustrations/360x440_list-01.webp"),
    ILLUSTRATION_360X440_LIST_02: image("/img/illustrations/360x440_list-02.webp"),
    ILLUSTRATION_360X440_LIST_03: image("/img/illustrations/360x440_list-03.webp"),
    ILLUSTRATION_360X440_LIST_04: image("/img/illustrations/360x440_list-04.webp"),
    ILLUSTRATION_800X800_CARD_IMAGE_01: image("/img/illustrations/800x800_card-image-01.webp"),
    ILLUSTRATION_800X800_CARD_IMAGE_02: image("/img/illustrations/800x800_card-image-02.webp"),
    ILLUSTRATION_800X800_CARD_IMAGE_03: image("/img/illustrations/800x800_card-image-03.webp"),
    ILLUSTRATION_800X800_CARD_IMAGE_04: image("/img/illustrations/800x800_card-image-04.webp"),
    ILLUSTRATION_800X800_SERVICE_IMAGE_01: image("/img/illustrations/800x800_service-image-01.webp"),
    ILLUSTRATION_800X800_SERVICE_IMAGE_02: image("/img/illustrations/800x800_service-image-02.webp"),
    ILLUSTRATION_800X800_SERVICE_IMAGE_03: image("/img/illustrations/800x800_service-image-03.webp"),
    ILLUSTRATION_800X800_SERVICE_IMAGE_04: image("/img/illustrations/800x800_service-image-04.webp"),
    CTA_IMG_01: image("/img/illustrations/cta-img-01.webp"),
    CTA_IMG_02: image("/img/illustrations/cta-img-02.webp"),
  },
  avatars_and_team: {
    AVATAR_1400140001: image("/img/avatars/1400x1400_ava-01.webp"),
    AVATAR_30030001: image("/img/avatars/300x300_ava-01.webp"),
    AVATAR_30030002: image("/img/avatars/300x300_ava-02.webp"),
    AVATAR_30030003: image("/img/avatars/300x300_ava-03.webp"),
    AVATAR_30030004: image("/img/avatars/300x300_ava-04.webp"),
  },
  favicon_and_meta: {
    FAVICON_APPLE_TOUCH_ICON: image("/img/favicon/apple-touch-icon.png"),
    FAVICON_ICO: image("/img/favicon/favicon.ico"),
    FAVICON_SVG: image("/img/favicon/icon.svg"),
    OG_IMAGE: image("/img/og-image.png"),
  },
  documents_and_media: {
    MEDIA_CV: image("/img/pdf/CV.pdf"),
  },
};

/**
 * Complete Key-Value Dictionary of all available images
 */
export const IMAGE_PATHS = {
  BANNER_SURAJ_3D: BANNER_SURAJ_3D,
  CLOUD_MUVI_PREVIEW: CLOUD_MUVI_PREVIEW,
  CLOUD_WILDORA_PREVIEW: CLOUD_WILDORA_PREVIEW,
  CLOUD_FURNIRO_PREVIEW: CLOUD_FURNIRO_PREVIEW,
  CLOUD_JAUNTY_PREVIEW: CLOUD_JAUNTY_PREVIEW,
  CLOUD_DINKS_PREVIEW: CLOUD_DINKS_PREVIEW,
  PROJECT_DINKSSS01: PROJECT_DINKSSS01,
  PROJECT_DINKSSS02: PROJECT_DINKSSS02,
  PROJECT_DINKSSS03: PROJECT_DINKSSS03,
  PROJECT_DINKSSS04: PROJECT_DINKSSS04,
  PROJECT_FURNIROSS01: PROJECT_FURNIROSS01,
  PROJECT_FURNIROSS02: PROJECT_FURNIROSS02,
  PROJECT_FURNIROSS03: PROJECT_FURNIROSS03,
  PROJECT_FURNIROSS04: PROJECT_FURNIROSS04,
  PROJECT_FURNIROSS05: PROJECT_FURNIROSS05,
  PROJECT_FURNIROSS06: PROJECT_FURNIROSS06,
  PROJECT_FURNIROSS07: PROJECT_FURNIROSS07,
  PROJECT_JAUNTYSS01: PROJECT_JAUNTYSS01,
  PROJECT_JAUNTYSS02: PROJECT_JAUNTYSS02,
  PROJECT_JAUNTYSS03: PROJECT_JAUNTYSS03,
  PROJECT_JAUNTYSS04: PROJECT_JAUNTYSS04,
  PROJECT_MUVISS01: PROJECT_MUVISS01,
  PROJECT_MUVISS02: PROJECT_MUVISS02,
  PROJECT_MUVISS03: PROJECT_MUVISS03,
  PROJECT_MUVISS04: PROJECT_MUVISS04,
  PROJECT_TALKSS01: PROJECT_TALKSS01,
  PROJECT_TALKSS02: PROJECT_TALKSS02,
  PROJECT_TALKSS03: PROJECT_TALKSS03,
  PROJECT_TALKSS04: PROJECT_TALKSS04,
  PROJECT_WILDORASS01: PROJECT_WILDORASS01,
  PROJECT_WILDORASS02: PROJECT_WILDORASS02,
  PROJECT_WILDORASS03: PROJECT_WILDORASS03,
  PROJECT_WILDORASS04: PROJECT_WILDORASS04,
  TECH_BLENDER: TECH_BLENDER,
  TECH_CSS: TECH_CSS,
  TECH_FIGMA: TECH_FIGMA,
  TECH_HTML: TECH_HTML,
  TECH_ILLUSTRATOR: TECH_ILLUSTRATOR,
  TECH_NOTION: TECH_NOTION,
  TECH_PHOTOSHOP: TECH_PHOTOSHOP,
  TECH_SCKETCH: TECH_SCKETCH,
  ICON_300X300_OBJ_BTN_01: ICON_300X300_OBJ_BTN_01,
  ICON_300X300_OBJ_BTN_02: ICON_300X300_OBJ_BTN_02,
  ICON_300X300_OBJ_BTN_03: ICON_300X300_OBJ_BTN_03,
  ICON_300X300_OBJ_CTA_01: ICON_300X300_OBJ_CTA_01,
  ICON_H70_APPR_01: ICON_H70_APPR_01,
  ICON_H70_APPR_02: ICON_H70_APPR_02,
  ICON_H70_APPR_03: ICON_H70_APPR_03,
  BG_404_ERR: BG_404_ERR,
  ILLUSTRATION_360X440_LIST_01: ILLUSTRATION_360X440_LIST_01,
  ILLUSTRATION_360X440_LIST_02: ILLUSTRATION_360X440_LIST_02,
  ILLUSTRATION_360X440_LIST_03: ILLUSTRATION_360X440_LIST_03,
  ILLUSTRATION_360X440_LIST_04: ILLUSTRATION_360X440_LIST_04,
  ILLUSTRATION_800X800_CARD_IMAGE_01: ILLUSTRATION_800X800_CARD_IMAGE_01,
  ILLUSTRATION_800X800_CARD_IMAGE_02: ILLUSTRATION_800X800_CARD_IMAGE_02,
  ILLUSTRATION_800X800_CARD_IMAGE_03: ILLUSTRATION_800X800_CARD_IMAGE_03,
  ILLUSTRATION_800X800_CARD_IMAGE_04: ILLUSTRATION_800X800_CARD_IMAGE_04,
  ILLUSTRATION_800X800_SERVICE_IMAGE_01: ILLUSTRATION_800X800_SERVICE_IMAGE_01,
  ILLUSTRATION_800X800_SERVICE_IMAGE_02: ILLUSTRATION_800X800_SERVICE_IMAGE_02,
  ILLUSTRATION_800X800_SERVICE_IMAGE_03: ILLUSTRATION_800X800_SERVICE_IMAGE_03,
  ILLUSTRATION_800X800_SERVICE_IMAGE_04: ILLUSTRATION_800X800_SERVICE_IMAGE_04,
  CTA_IMG_01: CTA_IMG_01,
  CTA_IMG_02: CTA_IMG_02,
  AVATAR_1400140001: AVATAR_1400140001,
  AVATAR_30030001: AVATAR_30030001,
  AVATAR_30030002: AVATAR_30030002,
  AVATAR_30030003: AVATAR_30030003,
  AVATAR_30030004: AVATAR_30030004,
  FAVICON_APPLE_TOUCH_ICON: FAVICON_APPLE_TOUCH_ICON,
  FAVICON_ICO: FAVICON_ICO,
  FAVICON_SVG: FAVICON_SVG,
  OG_IMAGE: OG_IMAGE,
  MEDIA_CV: MEDIA_CV,
};

// ==========================================
// MASTER IMAGES OBJECT (DEFAULT EXPORT)
// ==========================================
const IMAGES = {
  image,
  getImagePath,
  store: STORE_IMAGES,
  paths: IMAGE_PATHS,
  BANNER_SURAJ_3D,
  CLOUD_MUVI_PREVIEW,
  CLOUD_WILDORA_PREVIEW,
  CLOUD_FURNIRO_PREVIEW,
  CLOUD_JAUNTY_PREVIEW,
  CLOUD_DINKS_PREVIEW,
  PROJECT_DINKSSS01,
  PROJECT_DINKSSS02,
  PROJECT_DINKSSS03,
  PROJECT_DINKSSS04,
  PROJECT_FURNIROSS01,
  PROJECT_FURNIROSS02,
  PROJECT_FURNIROSS03,
  PROJECT_FURNIROSS04,
  PROJECT_FURNIROSS05,
  PROJECT_FURNIROSS06,
  PROJECT_FURNIROSS07,
  PROJECT_JAUNTYSS01,
  PROJECT_JAUNTYSS02,
  PROJECT_JAUNTYSS03,
  PROJECT_JAUNTYSS04,
  PROJECT_MUVISS01,
  PROJECT_MUVISS02,
  PROJECT_MUVISS03,
  PROJECT_MUVISS04,
  PROJECT_TALKSS01,
  PROJECT_TALKSS02,
  PROJECT_TALKSS03,
  PROJECT_TALKSS04,
  PROJECT_WILDORASS01,
  PROJECT_WILDORASS02,
  PROJECT_WILDORASS03,
  PROJECT_WILDORASS04,
  TECH_BLENDER,
  TECH_CSS,
  TECH_FIGMA,
  TECH_HTML,
  TECH_ILLUSTRATOR,
  TECH_NOTION,
  TECH_PHOTOSHOP,
  TECH_SCKETCH,
  ICON_300X300_OBJ_BTN_01,
  ICON_300X300_OBJ_BTN_02,
  ICON_300X300_OBJ_BTN_03,
  ICON_300X300_OBJ_CTA_01,
  ICON_H70_APPR_01,
  ICON_H70_APPR_02,
  ICON_H70_APPR_03,
  BG_404_ERR,
  ILLUSTRATION_360X440_LIST_01,
  ILLUSTRATION_360X440_LIST_02,
  ILLUSTRATION_360X440_LIST_03,
  ILLUSTRATION_360X440_LIST_04,
  ILLUSTRATION_800X800_CARD_IMAGE_01,
  ILLUSTRATION_800X800_CARD_IMAGE_02,
  ILLUSTRATION_800X800_CARD_IMAGE_03,
  ILLUSTRATION_800X800_CARD_IMAGE_04,
  ILLUSTRATION_800X800_SERVICE_IMAGE_01,
  ILLUSTRATION_800X800_SERVICE_IMAGE_02,
  ILLUSTRATION_800X800_SERVICE_IMAGE_03,
  ILLUSTRATION_800X800_SERVICE_IMAGE_04,
  CTA_IMG_01,
  CTA_IMG_02,
  AVATAR_1400140001,
  AVATAR_30030001,
  AVATAR_30030002,
  AVATAR_30030003,
  AVATAR_30030004,
  FAVICON_APPLE_TOUCH_ICON,
  FAVICON_ICO,
  FAVICON_SVG,
  OG_IMAGE,
  MEDIA_CV,
};

export default IMAGES;
