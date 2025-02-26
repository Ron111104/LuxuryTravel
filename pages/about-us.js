import { useState, useRef, useEffect } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import Footer from "@/components/Footer";

import HeroSection from "@/components/About/HeroSection";
import MagicalBespokeSection from "@/components/About/MagicalBespokeSection";
import FullWidthImage from "@/components/About/FullWidthImage";
import WhyChooseSection from "@/components/About/WhyChooseSection";
import OurPromiseSection from "@/components/About/OurPromiseSection";
import OurTeamSection from "@/components/About/OurTeamSection";
import VideoSection from "@/components/About/VideoSection";
import TestimonialsSection from "@/components/About/TestimonialsSection";
import FeaturedPressSection from "@/components/About/FeaturedPressSection";
import WorkWithUsSection from "@/components/About/WorkWithUsSection";

// Import the floating buttons components
import ChatWithUsButton from "@/components/ChatWithUsButton";
import GoToTopButton from "@/components/GoToTopButton";

export default function About() {
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
    <>
      {/* Conditionally render both navbars */}
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}

      {/* Hero Section with a ref to track its height */}
      <HeroSection heroRef={heroRef} />

      {/* Main About Content */}
      <div className="bg-white text-black px-8">
        <MagicalBespokeSection />
        <FullWidthImage />
        <WhyChooseSection />
        <OurPromiseSection />
        <OurTeamSection />
        <VideoSection />
        <TestimonialsSection />
        <FeaturedPressSection />
        <WorkWithUsSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons (shown only after hero section) */}
      {showFloatingButtons && (
        <>
          <ChatWithUsButton />
          <GoToTopButton />
        </>
      )}
    </>
  );
}
