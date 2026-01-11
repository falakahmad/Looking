"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AuctionSection from "@/components/sections/AuctionSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import PremiumAdsSection from "@/components/sections/PremiumAdsSection";
import AppChoiceSection from "@/components/sections/AppChoiceSection";
import LiveAuctionDemo from "@/components/sections/LiveAuctionDemo";
import ExperienceAppSection from "@/components/sections/ExperienceAppSection";
import AuctionExperience from "@/components/sections/AuctionExperience";
import AuctionTipsSection from "@/components/sections/AuctionTipsSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

type Locale = "en" | "ar";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  const dict = locale === "en" ? en : ar;

  const toggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <main>
      <div className="inner-rounded-container" id="home">
        <Navbar
          dict={dict}
          currentLocale={locale}
          onToggleLang={toggleLocale}
        />
        <Hero dict={dict} />
      </div>
      <div id="auction">
        <AuctionSection dict={dict} />
      </div>
      <div id="about">
        <AboutSection dict={dict} />
      </div>
      <CategoriesSection dict={dict} />
      <HowItWorksSection dict={dict} />
      <div id="features">
        <WhyChooseSection dict={dict} />
      </div>
      <PremiumAdsSection dict={dict} />
      <AppChoiceSection dict={dict} />
      <LiveAuctionDemo dict={dict} />
      <div id="preview">
        <ExperienceAppSection dict={dict} />
      </div>
      <AuctionExperience dict={dict} />
      <AuctionTipsSection dict={dict} />
      <div id="faqs">
        <FAQSection dict={dict} />
      </div>
      <Reviews dict={dict} />
      <CTA dict={dict} />
      <Footer dict={dict} />
    </main>
  );
}
