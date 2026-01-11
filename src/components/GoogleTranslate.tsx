"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            includedLanguages: "en,ur,hi,de,zh-CN", // English, Urdu, Hindi, German, Chinese
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="google_translate_element"></div>;
}
