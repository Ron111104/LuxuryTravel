import React, { useRef } from "react";
import Image from "next/image";

export default function FeaturedExperiences() {
  const sliderRef = useRef(null);

  const experiences = [
    {
      title: "Gorillas in the Mist in Rwanda",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/istock-6973481742-1500x938.jpg",
    },
    {
      title: "Quintessential England: From London to the Cotswolds",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/magda-v-siOgBwEseXY-unsplash-1-1442x2048.jpg",
    },
    {
      title: "Iceland Westfjords – Self-drive adventure",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/linmiao-xu-scxqCJGFnvc-unsplash-1500x1125.jpg",
    },
    {
      title: "Strange Creatures of Madagascar & South Africa",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/09/jamie-haughton-Z05GiksmqYU-unsplash-1500x994.jpg",
    },
    {
      title: "Enchanting Namibia",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/okonjima_sunset-1500x1000.jpg",
    },
    {
      title: "Gay Ireland",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/rsz_irish_ruins_wow_-1500x955.jpg",
    },
    {
      title: "Wild Romance in Madagascar",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/sean-o-KMn4VEeEPR8-unsplash-1500x997.jpg",
    },
    {
      title: "Flavours of Scotland",
      image: "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/rsz_v2osk-ihkbf23a_iw-unsplash-1500x845.jpg",
    },
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= window.innerWidth > 768 ? 400 : 300;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += window.innerWidth > 768 ? 400 : 300;
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center font-playfair text-[#613842]">
          Our Featured Experiences
        </h2>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
          {/* Navigation Buttons */}
          <div className="w-full md:w-1/4 flex md:flex-col justify-center items-center space-y-0 space-x-4 md:space-x-0 md:space-y-6">
            <button
              onClick={scrollLeft}
              className="bg-[#613842] text-white px-4 md:px-6 py-3 md:py-4 text-xl md:text-2xl rounded-full shadow-lg hover:bg-[#613842]/80 transition transform hover:scale-110"
            >
              &larr;
            </button>
            <button
              onClick={scrollRight}
              className="bg-[#613842] text-white px-4 md:px-6 py-3 md:py-4 text-xl md:text-2xl rounded-full shadow-lg hover:bg-[#613842]/80 transition transform hover:scale-110"
            >
              &rarr;
            </button>
          </div>

          {/* Image Carousel */}
          <div
            ref={sliderRef}
            className="w-full md:w-3/4 overflow-x-auto hide-scrollbar scroll-smooth"
          >
            <div className="flex ">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex-none w-[300px] md:w-[400px] h-[400px] md:h-[600px] relative overflow-hidden shadow-lg"
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                  {/* Gradient Overlay & Title */}
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <h3 className="text-white text-sm md:text-lg font-semibold line-clamp-2">
                      {exp.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}