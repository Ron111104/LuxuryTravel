import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ClientTestimonials from "@/components/Landing/ClientTestimonials"; // Import Testimonials
import Footer from "@/components/Footer"; // Import Footer
import LuxuryDestinations from "@/components/Landing/LuxuryDestinations";

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar (Centered) */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 p-4 flex justify-center items-center z-50">
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-gray-300">HOME</Link>
          <Link href="/tailored-experiences" className="hover:text-gray-300">TAILORED EXPERIENCES</Link>
          <Link href="/destinations" className="border-b-2 border-white text-gray-300">DESTINATIONS</Link>
          <Link href="/private-rentals" className="hover:text-gray-300">PRIVATE RENTALS</Link>
          <Link href="/about-us" className="hover:text-gray-300">ABOUT US</Link>
          <Link href="/blog" className="hover:text-gray-300">BLOG & PRESS</Link>
          <Link href="/contact-us" className="hover:text-gray-300">CONTACT US</Link>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed nav */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <header
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/d1.jpg')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">A world of wonders awaits you...</h1>
          <p className="text-lg mt-4 text-white">Plan Your Journey</p>
        </div>
      </header>

      {/* Luxury Destinations Section */}
      <LuxuryDestinations />

      {/* Improved Date Picker Section */}
      <section className="text-center py-8">
        <h3 className="text-2xl font-semibold mb-4">Select Your Travel Date</h3>
        <div className="relative inline-block">
          <input
            type="date"
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button className="bg-white text-black px-6 py-3 rounded-md shadow-md border border-gray-300 hover:bg-gray-200 transition duration-200">
            {selectedDate ? `📅 ${selectedDate}` : "📆 Choose a Date"}
          </button>
        </div>
      </section>

      {/* Destinations Grid Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((destination, index) => (
            <Link key={index} href={destination.link} passHref>
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover transition duration-300 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition" />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-4 py-2 rounded text-lg">
                  {destination.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
