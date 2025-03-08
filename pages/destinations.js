import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ClientTestimonials from "@/components/Landing/ClientTestimonials"; // Import Testimonials
import Footer from "@/components/Footer"; // Import Footer
import LuxuryDestinations from "@/components/Landing/LuxuryDestinations";
import RegularNavbar from "@/components/RegularNavbar"; // Import Regular Navbar
import ChatWithUs from "@/components/ChatWithUs";

const destinations = [
  { name: "Ooty", image: "/images/ooty.jpg", link: "/destinations/ooty" },
  { name: "Coorg", image: "/images/coorg.jpg", link: "/destinations/coorg" },
  { name: "Wayanad", image: "/images/wayanad.jpg", link: "/destinations/wayanad" },
  { name: "Chikmagalur", image: "/images/chikmagalur.jpg", link: "/destinations/chikmagalur" },
  { name: "Kodaikanal", image: "/images/kodaikanal.jpg", link: "/destinations/kodaikanal" },
  { name: "Mysore", image: "/images/mysore.jpg", link: "/destinations/mysore" },
];

export default function Destinations() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Regular Navbar */}
      <RegularNavbar />

      {/* Hero Section */}
      <header
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/d1.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">A World of Wonders Awaits You...</h1>
          <p className="text-lg mt-4 text-gray-300">Plan Your Journey</p>
        </div>
      </header>

      {/* Luxury Destinations Section */}
      <LuxuryDestinations />

      {/* Travel Date Picker */}
      <section className="text-center py-12 bg-white">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Select Your Travel Date</h3>
        <div className="flex justify-center">
          <input
            type="date"
            className="px-4 py-2 border border-gray-400 rounded-md shadow-md text-gray-700"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </section>

      {/* Destinations Grid - White Background */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Link key={index} href={destination.link} passHref>
              <div className="relative group overflow-hidden rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 bg-white shadow-md border border-gray-300">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ClientTestimonials />
      <ChatWithUs />
      {/* Footer Section */}
      <Footer />
      
    </div>
  );
}
