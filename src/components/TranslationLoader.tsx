"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TranslationLoader() {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Check if we expect a translation (cookie exists and is not 'en')
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    const targetLang = match ? match[1] : "en";

    // If target is English, or no cookie, no need to show loader
    if (targetLang === "en") {
      // Ensure cloak is removed if it was added by layout script
      document.documentElement.classList.remove("translate-cloak");
      return;
    }

    // If we are here, we expect a translation.
    // Check if it's already applied
    if (
      document.documentElement.classList.contains("translated-ltr") ||
      document.documentElement.classList.contains("translated-rtl")
    ) {
      document.documentElement.classList.remove("translate-cloak");
      return;
    }

    // Observe the HTML element for class changes (indicator of translation finish)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (
            document.documentElement.classList.contains("translated-ltr") ||
            document.documentElement.classList.contains("translated-rtl")
          ) {
            // Translation applied! Fade out.
            document.documentElement.classList.remove("translate-cloak");
            observer.disconnect();
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    // Event listener for manual triggering from Navbar
    const handleStart = () => {
      document.documentElement.classList.add("translate-cloak");
    };
    window.addEventListener("start-translation-loading", handleStart);

    // Fallback timeout in case Google Translate hangs or fails
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("translate-cloak");
      observer.disconnect();
    }, 4500); // 4.5s max

    return () => {
      observer.disconnect();
      window.removeEventListener("start-translation-loading", handleStart);
      clearTimeout(timer);
    };
  }, []);

  // Visuals are now handled purely by global CSS in context of the 'translate-cloak' class
  return null;
}
