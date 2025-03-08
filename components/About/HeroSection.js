import Image from "next/image";
import React from "react";

const HeroSection = ({ heroRef }) => (
  <section ref={heroRef} className="relative w-full h-[75vh]">
    <Image
      src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/hero-about.jpg"
      alt="About Adams & Butler"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 w-full h-full"
    />
    <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center text-white text-center p-6">
      <h1 className="text-5xl font-bold uppercase">About Toorizo</h1>
    </div>
  </section>
);

export default HeroSection;
