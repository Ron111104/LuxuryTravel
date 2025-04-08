import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LuxuryDestinations() {
  const destinations = [
    {
      name: "Coorg",
      image: "/images/coorg.jpg",
      link: "/destinations/coorg",
    },
    {
      name: "Ooty",
      image: "/images/ooty.jpg",
      link: "/destinations/ooty",
    },
    {
      name: "Wayanad",
      image: "/images/wayanad.jpg",
      link: "/destinations/wayanad",
    },
    {
      name: "Kodaikanal",
      image: "/images/kodaikanal.jpg",
      link: "/destinations/kodaikanal",
    },
    {
      name: "Chikmagalur",
      image: "/images/chikmagalur.jpg",
      link: "/destinations/chikmagalur",
    },
    {
      name: "Mysore",
      image: "/images/mysore.jpg",
      link: "/destinations/mysore",
    },
  ];

  const gridClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center font-playfair text-[#613842]">
          Luxury Destinations
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-8">
          Let Toorizo take you on an unforgettable journey, crafting experiences that linger long after your travels.
        </p>

        <div className="grid grid-cols-4 gap-2 auto-rows-[200px]">
          {destinations.map((dest, index) => (
            <Link key={index} href={dest.link} className={`relative ${gridClasses[index]}`}>
              <div className="w-full h-full relative group cursor-pointer">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover rounded-md transition duration-300 group-hover:brightness-90"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 text-sm font-semibold rounded">
                  {dest.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
