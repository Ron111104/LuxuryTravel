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
import Footer from "@/components/Footer";
import AboutUs from "@/components/Landing/AboutUs";

// Import the new modularized components
import ChatWithUsButton from "@/components/ChatWithUsButton";
import GoToTopButton from "@/components/GoToTopButton";

export default function Home() {
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
        <AboutUs />
      </div>
      
      <ClientTestimonials />
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
