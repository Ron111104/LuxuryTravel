"use client";

import { useState, useRef, useEffect } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import Footer from "@/components/Footer";

// Import modularized Contact Us components
import ContactHeroSection from "@/components/Contact-Us/ContactHeroSection";
import GetInTouchSection from "@/components/Contact-Us/GetInTouchSection";
import ChatWithUsButton from "@/components/ChatWithUsButton";
import GoToTopButton from "@/components/GoToTopButton";

export default function ContactUs() {
  const heroRef = useRef(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      setScrolledPastHero(window.scrollY >= heroHeight);
      setShowFloatingButtons(window.scrollY >= heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Conditionally render navbars */}
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}

      {/* Hero Section */}
      <ContactHeroSection heroRef={heroRef} />

      {/* Get in Touch Section */}
      <GetInTouchSection />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      {showFloatingButtons && (
        <>
          <ChatWithUsButton />
          <GoToTopButton />
        </>
      )}
    </div>
  );
}
