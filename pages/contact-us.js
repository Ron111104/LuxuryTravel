"use client";

import { useState, useRef, useEffect } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import Footer from "@/components/Footer";

// Modular Sections
import ContactHeroSection from "@/components/Contact-Us/ContactHeroSection";
import GetInTouchSection from "@/components/Contact-Us/GetInTouchSection";
import ChatWithUs from "@/components/ChatWithUs";
import GoToTopButton from "@/components/GoToTopButton";

export default function ContactUs() {
  const heroRef = useRef(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      const isPastHero = window.scrollY >= heroHeight;

      setScrolledPastHero(isPastHero);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* Conditional Navbar */}
      {scrolledPastHero ? <RegularNavbar /> : <HeroNavbar />}

      {/* Hero Section */}
      <section ref={heroRef}>
        <ContactHeroSection />
      </section>

      {/* Get in Touch Form Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GetInTouchSection />
      </section>

      {/* Footer */}
      <Footer className="w-full" />

      {/* Floating Buttons */}
      {scrolledPastHero && (
        <>
          <ChatWithUs />
          <GoToTopButton />
        </>
      )}
    </div>
  );
}
