import Image from "next/image";
import React from "react";

const MagicalBespokeSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
    <div className="relative w-full h-[400px]">
      <Image
        src="/images/mag-exp.jpg"
        alt="Magical Memories"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
      />
    </div>
    <div>
      <h2 className="text-4xl font-bold mb-6">Magical Experiences</h2>
      <p className="text-lg text-gray-700 mb-4">
        Discover enchanting and exclusive experiences designed for you.
      </p>

      <h2 className="text-4xl font-bold mt-8 mb-6">Bespoke Experiences</h2>
      <p className="text-lg text-gray-700">
        Our curated luxury itineraries are designed to make your travel dreams a reality.
      </p>
    </div>
  </section>
);

export default MagicalBespokeSection;
