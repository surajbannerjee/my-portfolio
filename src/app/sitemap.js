export default function sitemap() {
  const baseUrl = "https://suraj-banerjee.vercel.app";
  const lastModified = new Date();

  const routes = [
    "",
    "/about-me",
    "/my-works",
    "/services",
    "/pricing",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/my-works" || route === "/services" ? 0.9 : 0.8,
  }));
}
