// components/HeroSection.js
import React from "react";

export default function HeroSection({ heroRef, bookingRef }) {
  const scrollToBooking = () => {
    if (bookingRef && bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/Web-Hero-Vid-V2-No-Sound-copy.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-playfair tracking-widest uppercase">
          TOORIZO
        </h1>
        <p className="text-xl md:text-3xl mb-6 tracking-wide">
          Hallmark of Luxury Travel
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={scrollToBooking}
            className="px-8 py-3 bg-[#613842] text-white font-semibold uppercase tracking-wider hover:bg-[#8a4c5c] transition rounded"
          >
            Plan Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
