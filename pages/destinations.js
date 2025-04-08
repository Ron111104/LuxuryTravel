import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ClientTestimonials from "@/components/Landing/ClientTestimonials";
import Footer from "@/components/Footer";
import LuxuryDestinations from "@/components/Landing/LuxuryDestinations";
import RegularNavbar from "@/components/RegularNavbar";
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
    <div className="min-h-screen bg-white text-black w-full overflow-hidden">
      {/* Navbar */}
      <RegularNavbar />

      {/* Hero Section */}
      <header
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/d1.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            A World of Wonders Awaits You...
          </h1>
          <p className="text-lg mt-4 text-gray-200">Plan Your Journey</p>
        </div>
      </header>

      {/* Luxury Destinations Section */}
      <LuxuryDestinations className="w-full mx-auto" />

      {/* Travel Date Picker */}
      <section className="text-center py-12 bg-white px-4">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Select Your Travel Date
        </h3>
        <div className="flex justify-center">
          <input
            type="date"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link key={index} href={destination.link} passHref>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer transition transform hover:scale-105 shadow-md border border-gray-200">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <ClientTestimonials className="w-full mx-auto" />

      {/* Floating Chat */}
      <ChatWithUs />

      {/* Footer */}
      <Footer className="w-full mx-auto overflow-hidden" />
    </div>
  );
}
