import Image from "next/image";
import React from "react";

const MagicalBespokeSection = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
    {/* Image Section */}
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/images/mag-exp.jpg"
        alt="Magical Memories"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        priority
      />
    </div>

    {/* Text Section */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
        Magical Experiences
      </h2>
      <p className="text-base sm:text-lg text-gray-700 mb-6">
        Discover enchanting and exclusive experiences designed for you.
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-6 sm:mt-8">
        Bespoke Experiences
      </h2>
      <p className="text-base sm:text-lg text-gray-700">
        Our curated luxury itineraries are designed to make your travel dreams a reality.
      </p>
    </div>
  </section>
);

export default MagicalBespokeSection;
