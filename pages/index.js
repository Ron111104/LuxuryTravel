// pages/index.js
import { useState, useRef, useEffect } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import HeroSection from "@/components/Landing/HeroSection";
import MagicalMemories from "@/components/Landing/MagicalMemories";
import TailorMade from "@/components/Landing/TailorMade";
import FeaturedExperiences from "@/components/Landing/FeaturedExperiences";
import LuxuryDestinations from "@/components/Landing/LuxuryDestinations";
import ExperienceDesigners from "@/components/Landing/ExperienceDesigners";
import NewsAndPress from "@/components/Landing/NewsAndPress";
import ClientTestimonials from "@/components/Landing/ClientTestimonials";
import Footer from "@/components/Landing/Footer";
export default function Home() {
  const heroRef = useRef(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  // Track whether to show the floating buttons
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.offsetHeight;

      // Switch navbars
      setScrolledPastHero(window.scrollY >= heroHeight);

      // Show floating buttons after passing the hero
      if (window.scrollY >= heroHeight) {
        setShowFloatingButtons(true);
      } else {
        setShowFloatingButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Conditionally render the navbars */}
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} />

      {/* Main Content */}
      <div className="px-8 bg-white">
        <MagicalMemories />
        <TailorMade />
        <FeaturedExperiences />
        <LuxuryDestinations />
        <ExperienceDesigners />
        <NewsAndPress />
        
      </div>
      <ClientTestimonials />
      <Footer />
      {/* Floating Buttons (shown only after hero section) */}
      {showFloatingButtons && (
        <>
          {/* Vertical "CHAT WITH US" on the left */}
          <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
            <button className="bg-[#613842] text-white px-3 py-2 text-sm font-semibold tracking-wider hover:bg-[#8a4c5c] transition-colors origin-left -rotate-90">
              CHAT WITH US
            </button>
          </div>

          {/* "Go to top" button at bottom-right */}
          <button
            onClick={scrollToTop}
            className="fixed right-4 bottom-4 w-10 h-10 rounded-full bg-[#613842] text-white flex items-center justify-center hover:bg-[#8a4c5c] transition-colors z-50"
          >
            {/* Up Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </>
      )}
    </>
  );
}
