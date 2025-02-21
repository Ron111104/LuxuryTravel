import React from "react";
import Image from "next/image";

export default function LuxuryDestinations() {
  const destinations = [
    {
      name: "Ireland",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/Cliffs-of-Moher-1000x750.jpg",
    },
    {
      name: "UK",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/connor-mollison-3rkosR_Dgfg-unsplash-1000x667.jpg",
    },
    {
      name: "Classic Europe",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/jack-ward-rknrvCrfS1k-unsplash-1-768x681.jpg",
    },
    {
      name: "Africa",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/rsz_loisaba_tented_camp-768x489.jpg",
    },
    {
      name: "The Americas",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/ryk-porras-D5-LrW0cZps-unsplash-768x577.jpg",
    },
    {
      name: "Exotic Islands",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/sorasak-_UIN-pFfJ7c-unsplash-3-500x334.jpg",
    },
    {
      name: "Polar Regions",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/hans-jurgen-mager-CHqbiMhQ_wE-unsplash-500x333.jpg",
    },
    {
      name: "Oceania",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/ian-badenhorst-SuT2MhkdyBQ-unsplash-500x364.jpg",
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
          Let Adams &amp; Butler open up a world of wonders and create magical
          memories that will stay with you far beyond your travels. Whether you
          are looking for a cultural city break, a child-friendly family holiday,
          unlimited adventure, a romantic getaway, or just to escape and uncover
          hidden gems, we are here to handcraft your bespoke journey.
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
