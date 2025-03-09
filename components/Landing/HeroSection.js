// components/HeroSection.js
import React from "react";

export default function HeroSection({ heroRef }) {
  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/Web-Hero-Vid-V2-No-Sound-copy.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 font-playfair tracking-[0.1em] uppercase">
          TOORIZO
        </h1>
        <p className="text-xl md:text-3xl mb-6 font-sans tracking-[0.08em]">
          Hallmark of Luxury Travel
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-8 py-3 text-white font-semibold uppercase tracking-wider">
            Plan Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
