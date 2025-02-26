// /pages/[dest-name]/index.js
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import HeroNavbar from "@/components/HeroNavbar";
import RegularNavbar from "@/components/RegularNavbar";
import Footer from "@/components/Footer";

// Modularized components
import ChatWithUsButton from "@/components/ChatWithUsButton";
import GoToTopButton from "@/components/GoToTopButton";
import DestinationHeroSection from "@/components/Destination/DestinationHeroSection";
import ItineraryContent from "@/components/Destination/ItineraryContent";

export default function DestinationPage() {
  const router = useRouter();
  const { "dest-name": destination } = router.query;

  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState(null);

  const heroRef = useRef(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);

  // Fetch itinerary data
  useEffect(() => {
    if (!destination) return;

    fetch("/data/itineraries.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load itinerary data");
        return res.json();
      })
      .then((data) => {
        // Format destination (capitalizing only first letter)
        const formattedDestination =
          destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase();

        if (data[formattedDestination]) {
          setItinerary(data[formattedDestination]);
        } else {
          setError("Destination not found.");
        }
      })
      .catch((err) => setError(err.message));
  }, [destination]);

  // Handle scrolling to toggle navbars & floating buttons
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

  // Error handling
  if (error) {
    return (
      <>
        {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}
        <div className="flex items-center justify-center h-screen text-xl text-red-500">
          {error}
        </div>
        <Footer />
      </>
    );
  }

  // Main render
  return (
    <>
      {/* Conditionally render the navbars */}
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}

      <div className="bg-white min-h-screen">
        {itinerary ? (
          <>
            {/* Hero Section */}
            <DestinationHeroSection
              heroRef={heroRef}
              itineraryImage={itinerary.image}
              destination={destination}
            />

            {/* Itinerary Content */}
            <ItineraryContent itinerary={itinerary} />
          </>
        ) : (
          <div className="flex items-center justify-center h-screen text-xl">
            Loading...
          </div>
        )}
      </div>

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
