// components/TailorMade.js
import React from "react";
import Image from "next/image";

export default function TailorMade() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Elephant image */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <Image
            src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/mylon-ollila-j4ocWYAP_cs-unsplash-768x508.jpg"
            alt="Elephant Image"
            width={768}
            height={508}
            className="rounded-lg shadow"
          />
        </div>
        {/* Text content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 font-playfair text-[#613842]">
            Tailor Made Journeys
          </h2>
          <p className="text-gray-700 mb-4">
            A&amp;B design itineraries for our clients that others simply
            cannot, whether around a theme or a private experience. Our team
            of highly experienced consultants listen, understand and then
            create a tailor-made journey for you. We believe that travel
            should not only enrich your perception, understanding, and
            appreciation of the World, but that it should also allow you to
            support the local communities you visit. We enable you to explore
            with purpose, enthusiasm, and a new-found appreciation for the art
            of travel. Experience diverse cultures; immerse yourself in
            authentic experiences; take back the moment and reconnect with a
            joyous attitude towards life.
          </p>
          <button className="px-6 py-3 bg-black text-white font-semibold uppercase tracking-wider hover:bg-gray-800 transition">
            Our experiences
          </button>
        </div>
      </div>
    </section>
  );
}
