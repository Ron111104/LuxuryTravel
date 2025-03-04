import React from "react";
import Image from "next/image";

export default function LuxuryDestinations() {
  const destinations = [
    {
      name: "Coorg",
      image:
        "/images/coorg.jpg",
    },
    {
      name: "Ooty",
      image:
        "/images/ooty.jpg",
    },
    {
      name: "Wayanad",
      image:
        "/images/wayanad.jpg",
    },
    {
      name: "Kodaikanal",
      image:
        "/images/kodaikanal.jpg",
    },
    {
      name: "Chikmagalur",
      image:
        "/images/chikmagalur.jpg",
    },
    {
      name: "Mysore",
      image:
        "/images/mysore.jpg",
    },
  ];

  // Predefined grid classes for each destination
  // Adjust these values to control which images appear larger.
  // In this pattern:
  // - The first image is a "big" one (spanning 2 columns and 2 rows)
  // - The sixth image spans 2 columns (appearing wider)
  // - The rest remain standard (1x1)
  const gridClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center font-playfair text-[#613842]">
          Luxury Destinations
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-8">
        Let Toorizo take you on an unforgettable journey, crafting experiences that linger long after your travels. Whether you seek a serene escape into nature, an action-packed adventure, a romantic retreat, a family-friendly getaway, or a deep dive into rich cultural landscapes, we curate every detail to perfection. With Toorizo, every destination becomes a story, and every trip a cherished memory.
        </p>

        {/* Rectangular grid with fixed sizes and a gap between images */}
        <div className="grid grid-cols-4 gap-2 auto-rows-[200px]">
          {destinations.map((dest, index) => (
            <div key={index} className={`relative ${gridClasses[index]}`}>
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 text-sm font-semibold">
                {dest.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
