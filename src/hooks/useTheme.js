"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  // Default is dark mode at all times
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Clean up any deprecated legacy storage keys from previous builds
    try {
      localStorage.removeItem("suraj");
      localStorage.removeItem("rayo-theme");
      localStorage.removeItem("suraj_theme");
    } catch (e) {}

    // Check if user explicitly toggled to light mode in the current session/storage
    const saved =
      sessionStorage.getItem("portfolio_theme") ||
      localStorage.getItem("portfolio_theme");

    if (saved === "light") {
      setTheme("light");
      document.documentElement.setAttribute("color-scheme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("color-scheme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("color-scheme", next);
    document.documentElement.setAttribute("data-theme", next);

    // Sync browser theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", next === "light" ? "#FAF7F6" : "#161616");
    }

    try {
      sessionStorage.setItem("portfolio_theme", next);
      localStorage.setItem("portfolio_theme", next);
    } catch (e) {}
  };

  return { theme, toggleTheme, mounted };
}

