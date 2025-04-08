// components/TailorMade.js
import React from "react";
import Image from "next/image";

export default function TailorMade() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 gap-8">
        {/* Elephant image */}
        <div className="w-full md:w-1/2 relative h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/mylon-ollila-j4ocWYAP_cs-unsplash-768x508.jpg"
            alt="Elephant Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-playfair text-[#613842]">
            Tailor Made Journeys
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Toorizo design itineraries for our clients that others simply cannot, whether around a theme or a private experience. Our team of highly experienced consultants listen, understand and then create a tailor-made journey for you.
            <br /><br />
            We believe that travel should not only enrich your perception, understanding, and appreciation of the World, but that it should also allow you to support the local communities you visit. Explore with purpose, enthusiasm, and a new-found appreciation for the art of travel.
          </p>
          <button className="px-6 py-3 bg-black text-white font-semibold uppercase tracking-wider hover:bg-gray-800 transition">
            Our experiences
          </button>
        </div>
      </div>
    </section>
  );
}
