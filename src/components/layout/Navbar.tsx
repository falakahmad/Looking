"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, ChevronDown, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import GoogleTranslate from "../GoogleTranslate";

interface NavbarProps {
  dict: any;
  currentLocale: string;
  onToggleLang: () => void;
}

export default function Navbar({
  dict,
  currentLocale,
  onToggleLang,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Sync state with Google Translate cookie on load
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (match && match[1]) {
      setLang(match[1]);
    }

    // Observer to detect when translation is reverted (e.g. user clicks "X" on banner)
    const observer = new MutationObserver(() => {
      const isTranslated =
        document.documentElement.classList.contains("translated-ltr") ||
        document.documentElement.classList.contains("translated-rtl");

      if (!isTranslated) {
        // If translation classes are gone, check if cookie is also gone/reset
        const currentCookie = document.cookie.match(
          /googtrans=\/en\/([a-zA-Z-]+)/
        );
        if (!currentCookie) {
          setLang("en");
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const languages = [
    { code: "en", label: "English", flag: "https://flagcdn.com/w80/gb.png" },
    { code: "ur", label: "Urdu", flag: "https://flagcdn.com/w80/pk.png" },
    { code: "hi", label: "Hindi", flag: "https://flagcdn.com/w80/in.png" },
    { code: "de", label: "German", flag: "https://flagcdn.com/w80/de.png" },
    { code: "zh-CN", label: "Chinese", flag: "https://flagcdn.com/w80/cn.png" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navContainer} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Looking Logo"
              width={320}
              height={100}
              className={styles.logoImage}
              priority
              quality={100}
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`${styles.navContent} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <ul className={styles.navLinks}>
            <li className={styles.active}>
              <Link href="#home" onClick={() => setIsMenuOpen(false)}>
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href="#auction" onClick={() => setIsMenuOpen(false)}>
                {dict.nav.auction}
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href="#features" onClick={() => setIsMenuOpen(false)}>
                {dict.nav.features}
              </Link>
            </li>
            <li>
              <Link href="#preview" onClick={() => setIsMenuOpen(false)}>
                {dict.nav.preview}
              </Link>
            </li>
            <li>
              <Link href="#faqs" onClick={() => setIsMenuOpen(false)}>
                {dict.nav.faqs}
              </Link>
            </li>
          </ul>

          <div className={styles.actions}>
            <button className={styles.iconBtn}>
              <Sun size={24} strokeWidth={1.5} />
            </button>
            <button className="btn-blue">{dict.nav.register}</button>
            <div
              className={styles.langWrapper}
              style={{ position: "relative" }}
            >
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={styles.langToggle}
              >
                <div className={styles.flagCircle}>
                  <Image
                    src={
                      languages.find((l) => l.code === lang)?.flag ||
                      "https://flagcdn.com/w80/gb.png"
                    }
                    alt="Flag"
                    width={32}
                    height={32}
                    className={styles.flagImg}
                  />
                </div>
                {languages.find((l) => l.code === lang)?.label || "English"}
                <ChevronDown size={18} strokeWidth={2.5} />
              </button>

              {isLangDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "120%",
                    right: 0,
                    backgroundColor: "white",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    border: "1px solid #eee",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    minWidth: "160px",
                    zIndex: 100,
                  }}
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        window.dispatchEvent(
                          new Event("start-translation-loading")
                        );

                        const googleCombo = document.querySelector(
                          ".goog-te-combo"
                        ) as HTMLSelectElement;

                        if (googleCombo) {
                          googleCombo.value = l.code;
                          googleCombo.dispatchEvent(new Event("change"));
                        } else {
                          document.cookie = `googtrans=/en/${l.code}; path=/`;
                          document.cookie = `googtrans=/en/${l.code}; domain=${window.location.hostname}; path=/`;
                          window.location.reload();
                        }

                        setLang(l.code);
                        setIsLangDropdownOpen(false);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 12px",
                        border: "none",
                        background: lang === l.code ? "#f0f7ff" : "transparent",
                        color: lang === l.code ? "#005ce6" : "#1a1a1c",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "left",
                        fontFamily: "inherit",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        transition: "background 0.2s",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          flexShrink: 0,
                          position: "relative",
                        }}
                      >
                        <Image
                          src={l.flag}
                          alt={l.label}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
              <div className="visually-hidden">
                <GoogleTranslate />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
