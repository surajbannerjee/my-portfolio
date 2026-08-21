export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://suraj-banerjee.vercel.app/sitemap.xml",
  };
}
