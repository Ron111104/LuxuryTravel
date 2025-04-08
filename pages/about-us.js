import { useState, useRef, useEffect, useCallback } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import Footer from "@/components/Footer";

// About Us Sections
import HeroSection from "@/components/About/HeroSection";
import MagicalBespokeSection from "@/components/About/MagicalBespokeSection";
import FullWidthImage from "@/components/About/FullWidthImage";
import OurPromiseSection from "@/components/About/OurPromiseSection";
import OurTeamSection from "@/components/About/OurTeamSection";
import VideoSection from "@/components/About/VideoSection";
import TestimonialsSection from "@/components/About/TestimonialsSection";
import WorkWithUsSection from "@/components/About/WorkWithUsSection";

// Floating Buttons
import ChatWithUs from "@/components/ChatWithUs";
import GoToTopButton from "@/components/GoToTopButton";

export default function AboutUs() {
  const heroRef = useRef(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    if (!heroRef.current) return;
    const heroHeight = heroRef.current.offsetHeight;
    const scrollY = window.scrollY;

    setScrolledPastHero(scrollY >= heroHeight);
    setShowFloatingButtons(scrollY >= heroHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Dynamic Navbar */}
      {scrolledPastHero ? <RegularNavbar /> : <HeroNavbar />}

      {/* Hero Section with ref for scroll tracking */}
      <HeroSection heroRef={heroRef} />

      {/* Page Content */}
      <div className="bg-white text-black px-8 w-full mx-auto overflow-x-hidden">
        <MagicalBespokeSection />
        <FullWidthImage />
        <OurPromiseSection />
        <OurTeamSection />
        <VideoSection />
        <TestimonialsSection />
        <WorkWithUsSection />
      </div>

      {/* Footer */}
      <Footer className="w-full mx-auto overflow-hidden" />

      {/* Floating Buttons */}
      {showFloatingButtons && (
        <>
          <ChatWithUs />
          <GoToTopButton />
        </>
      )}
    </>
  );
}
