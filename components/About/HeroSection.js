import Image from "next/image";
import React from "react";

const HeroSection = ({ heroRef }) => (
  <section
    ref={heroRef}
    className="relative w-full h-[75vh] sm:h-[80vh] md:h-[90vh] lg:h-screen"
  >
    <Image
      src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/hero-about.jpg"
      alt="About Adams & Butler"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 w-full h-full object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide drop-shadow-md">
        About Toorizo
      </h1>
    </div>
  </section>
);

export default HeroSection;
