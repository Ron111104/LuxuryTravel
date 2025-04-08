// components/MagicalMemories.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MagicalMemories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Train image */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <div className="relative w-full h-[480px] md:h-[600px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/bryan-walker-v-IkXXcQ0Eo-unsplash-768x960.jpg"
              alt="Train Travel"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 font-playfair text-[#613842] leading-tight">
            Magical memories,<br />
            Bespoke experiences
          </h2>
          <p className="text-gray-700 mb-4">
            Once you have travelled the voyage never ends. Toorizo will open a world of wonders and create magical memories that will stay with you far beyond your travels.
          </p>
          <p className="text-gray-700 mb-6">
            Diverge from the typical tourist destinations in favour of unique, authentic experiences. Experiences designed in the most inspiring surroundings that will be yours, and yours only. Journeys that create memorable moments and Toorizo’s bespoke itineraries will make this happen.
          </p>

          <Link href="/about">
            <button className="px-6 py-3 bg-[#613842] text-white font-semibold uppercase tracking-wider hover:bg-[#8a4c5c] transition rounded">
              Meet our team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
