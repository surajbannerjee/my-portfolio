import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Loader from "@/components/layout/Loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ScrollAnimations from "@/components/common/ScrollAnimations";
import JsonLd from "@/components/common/JsonLd";

export const metadata = {
  metadataBase: new URL("https://suraj-banerjee.vercel.app"),
  title: {
    default: "Suraj Banerjee — Frontend UI & WordPress Developer",
    template: "%s | Suraj Banerjee",
  },
  description:
    "Suraj Banerjee is a professional Frontend UI Developer based in Kolkata, India. Expert in React.js, Next.js, Tailwind CSS, WordPress (Elementor Pro & ACF), and pixel-perfect Figma-to-code translation.",
  keywords: [
    "Suraj Banerjee",
    "Frontend UI Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS Developer",
    "WordPress Developer",
    "Elementor Pro Developer",
    "Figma to React",
    "Figma to Code",
    "UI/UX Web Designer",
    "Web Developer Kolkata",
    "Frontend Developer India",
    "Responsive Web Design",
    "Material UI",
    "Webflow Developer",
  ],
  authors: [{ name: "Suraj Banerjee", url: "https://suraj-banerjee.vercel.app" }],
  creator: "Suraj Banerjee",
  publisher: "Suraj Banerjee",
  alternates: {
    canonical: "https://suraj-banerjee.vercel.app",
  },
  icons: {
    icon: [
      { url: "/img/favicon/favicon.ico", sizes: "any" },
      { url: "/img/favicon/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/img/favicon/apple-touch-icon.png",
  },
  manifest: "/img/favicon/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suraj-banerjee.vercel.app",
    title: "Suraj Banerjee — Frontend UI & WordPress Developer",
    description:
      "Passionate Frontend Developer specializing in intuitive, responsive web applications, modern Next.js/React architectures, custom WordPress, and pixel-perfect UI execution.",
    siteName: "Suraj Banerjee Portfolio",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suraj Banerjee — Frontend UI Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Banerjee — Frontend UI Developer",
    description:
      "Frontend UI Developer bridging the gap between Figma design and high-performance React & Next.js engineering.",
    creator: "@imsurajbanerjee",
    images: ["/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F6" },
    { media: "(prefers-color-scheme: dark)", color: "#161616" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" color-scheme="dark">
      <head>
        <link rel="stylesheet" type="text/css" href="/css/loaders/loader.css" />
        <link rel="stylesheet" type="text/css" href="/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <JsonLd />
      </head>
      <body>
        <SmoothScroll>
          <Loader />
          <Header />
          <ScrollAnimations />
          {children}
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
