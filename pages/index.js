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
    }
  }, []);

  const acceptAllCookies = () => {
    Cookies.set("cookieConsent", JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
    }), { expires: 30, path: "/" });
    setShowCookiePopup(false);
  };

  const rejectCookies = () => {
    Cookies.set("cookieConsent", JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
    }), { expires: 30, path: "/" });
    setShowCookiePopup(false);
  };

  const saveCookiePreferences = () => {
    Cookies.set("cookieConsent", JSON.stringify(cookiePreferences), { expires: 30, path: "/" });
    setShowCookieSettings(false);
    setShowCookiePopup(false);
  };

  return (
    <div className="min-h-screen bg-white max-w-full w-full mx-auto overflow-hidden">
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}
      <HeroSection heroRef={heroRef} />
      <div className="px-8">
        <MagicalMemories />
        <TailorMade />
        <AboutUs />
      </div>
      <ClientTestimonials className="max-w-full w-full mx-auto" />
      <Footer className="max-w-full w-full mx-auto overflow-hidden" />
      {showFloatingButtons && (
        <>
          <ChatWithUs />
          <GoToTopButton />
        </>
      )}

      {showCookiePopup && (
        <div className="fixed bottom-5 left-5 right-5 p-4 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col items-center text-center">
          <p className="text-sm">
            We use cookies to enhance your experience. Manage your preferences or read our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
          </p>
          <div className="mt-3 flex space-x-3">
            <button onClick={acceptAllCookies} className="bg-green-500 px-4 py-2 text-white rounded-lg">Accept All</button>
            <button onClick={() => setShowCookieSettings(true)} className="bg-gray-600 px-4 py-2 text-white rounded-lg">Manage Cookies</button>
            <button onClick={rejectCookies} className="bg-red-500 px-4 py-2 text-white rounded-lg">Reject All</button>
          </div>
        </div>
      )}

      {showCookieSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Manage Cookie Preferences</h2>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center">
                <input type="checkbox" checked={cookiePreferences.essential} disabled className="mr-2" />
                Essential Cookies (Required)
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={cookiePreferences.analytics} onChange={() => setCookiePreferences(prev => ({ ...prev, analytics: !prev.analytics }))} className="mr-2" />
                Analytics Cookies
              </label>
              <label className="flex items-center">
                <input type="checkbox" checked={cookiePreferences.marketing} onChange={() => setCookiePreferences(prev => ({ ...prev, marketing: !prev.marketing }))} className="mr-2" />
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
