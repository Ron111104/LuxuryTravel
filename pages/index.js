import { useState, useRef, useEffect } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import HeroSection from "@/components/Landing/HeroSection";
import MagicalMemories from "@/components/Landing/MagicalMemories";
import TailorMade from "@/components/Landing/TailorMade";
import ClientTestimonials from "@/components/Landing/ClientTestimonials";
import Footer from "@/components/Footer";
import AboutUs from "@/components/Landing/AboutUs";
import ChatWithUs from "@/components/ChatWithUs"; 
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
    <div className="min-h-screen bg-white max-w-full w-full mx-auto overflow-hidden">
      {/* Conditionally render the navbars */}
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}

      {/* Hero Section */}
      <HeroSection heroRef={heroRef} />

      {/* Main Content */}
      <div className="px-8">
        <MagicalMemories />
        <TailorMade />
        <AboutUs />
      </div>

      {/* Client Testimonials Section */}
      <ClientTestimonials className="max-w-full w-full mx-auto" />

      {/* Footer Section */}
      <Footer className="max-w-full w-full mx-auto overflow-hidden" />

      {/* Floating Buttons (shown only after hero section) */}
      {showFloatingButtons && (
        <>
          {/* Chat Component (Chat button is already inside `ChatWithUs`) */}
          <ChatWithUs />

          {/* Go to top button */}
          <GoToTopButton />
        </>
      )}
    </div>
  );
}
