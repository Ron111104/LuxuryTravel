import { useState, useRef, useEffect } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import Footer from "@/components/Footer";
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

export default function About() {
  const heroRef = useRef(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPosition = window.scrollY;

      // Update state based on scroll position
      setScrolledPastHero(scrollPosition >= heroHeight);
      setShowFloatingButtons(scrollPosition >= heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Ensure navbars switch dynamically */}
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}

      {/* Hero Section with a ref to track height */}
      <HeroSection heroRef={heroRef} />

      {/* Main About Content */}
      <div className="bg-white text-black px-8">
        <MagicalBespokeSection />
        <FullWidthImage />
        
        <OurPromiseSection />
        <OurTeamSection />
        <VideoSection />
        <TestimonialsSection />
        <WorkWithUsSection />
      </div>

      {/* Footer */}
      <Footer />

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
