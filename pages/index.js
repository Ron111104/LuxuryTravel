import { useState, useEffect, useRef } from "react";
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
import Cookies from "js-cookie";

export default function Home() {
  const heroRef = useRef(null);
  const bookingRef = useRef(null); // 👈 NEW ref for booking section

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setShowCookiePopup(true);
    } else {
      try {
        const consentData = JSON.parse(cookieConsent);
        setCookiePreferences(consentData);
      } catch (error) {
        console.error("Error parsing cookies:", error);
        setShowCookiePopup(true);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.getBoundingClientRect().bottom;
        setScrolledPastHero(heroHeight < 0);
      }
      setShowFloatingButtons(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const acceptAllCookies = () => {
    Cookies.set(
      "cookieConsent",
      JSON.stringify({
        essential: true,
        analytics: true,
        marketing: true,
      }),
      { expires: 30, path: "/" }
    );
    setShowCookiePopup(false);
  };

  const rejectCookies = () => {
    Cookies.set(
      "cookieConsent",
      JSON.stringify({
        essential: true,
        analytics: false,
        marketing: false,
      }),
      { expires: 30, path: "/" }
    );
    setShowCookiePopup(false);
  };

  const saveCookiePreferences = () => {
    Cookies.set("cookieConsent", JSON.stringify(cookiePreferences), {
      expires: 30,
      path: "/",
    });
    setShowCookieSettings(false);
    setShowCookiePopup(false);
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}
        <HeroSection heroRef={heroRef} bookingRef={bookingRef} />
        <div className="px-4 sm:px-6 lg:px-8">
          <MagicalMemories />
          <TailorMade />
          <AboutUs />
        </div>

        {/* 🔽 Booking Section target (replace with actual booking component) */}
        <div ref={bookingRef} className="py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold text-[#613842] mb-4">Start Planning Your Journey</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            This is where your next luxury experience begins. (Add your booking widget here)
          </p>
        </div>

        <ClientTestimonials />
        <Footer />
      </div>

      {showFloatingButtons && (
        <>
          <ChatWithUs />
          <GoToTopButton />
        </>
      )}

      {showCookiePopup && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 p-4 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col items-center text-center z-50">
          <p className="text-sm">
            We use cookies to enhance your experience. Manage your preferences or read our{" "}
            <a href="/privacy-policy" className="underline">Privacy Policy</a>.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <button onClick={acceptAllCookies} className="bg-yellow-500 px-4 py-2 text-black rounded-lg">Accept Cookies</button>
            <button onClick={() => setShowCookieSettings(true)} className="bg-gray-600 px-4 py-2 text-white rounded-lg">Change my preferences</button>
            <button onClick={rejectCookies} className="bg-red-500 px-4 py-2 text-white rounded-lg">Reject Cookies</button>
          </div>
        </div>
      )}

      {showCookieSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
            <h2 className="text-xl font-semibold mb-4">Manage Cookie Preferences</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center">
                <input type="checkbox" checked={cookiePreferences.essential} disabled className="mr-2" />
                Essential Cookies (Required)
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={() => setCookiePreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className="mr-2"
                />
                Analytics Cookies
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={() => setCookiePreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className="mr-2"
                />
                Marketing Cookies
              </label>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button onClick={() => setShowCookieSettings(false)} className="bg-gray-400 px-4 py-2 text-black rounded-lg">Cancel</button>
              <button onClick={saveCookiePreferences} className="bg-blue-500 px-4 py-2 text-white rounded-lg">Save Preferences</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
