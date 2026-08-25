/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--base)",
        "base-opp": "var(--base-opp)",
        "base-tint": "var(--base-tint)",
        accent: "var(--accent)",
        additional: "var(--additional)",
        primary: "var(--primary)",
        muted: "var(--muted, rgba(255, 255, 255, 0.08))",
        "t-bright": "var(--t-bright)",
        "t-medium": "var(--t-medium)",
        "t-muted": "var(--t-muted)",
        "t-muted-extra": "var(--t-muted-extra)",
        "t-opp-bright": "var(--t-opp-bright)",
        "t-opp-medium": "var(--t-opp-medium)",
        "t-opp-muted": "var(--t-opp-muted)",
      },
      borderRadius: {
        s: "var(--_radius-s)",
        m: "var(--_radius-m)",
        l: "var(--_radius-l)",
      },
      fontFamily: {
        sans: ["var(--_font-default)", "sans-serif"],
        accent: ["var(--_font-accent)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
