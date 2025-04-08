import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src="/images/about-us-hero.jpg"
          alt="About LuxuryTravel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-playfair font-bold tracking-wide text-center px-4">
            Redefining Luxury Travel
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Intro */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#613842] mb-6">
          Experience the World with Elegance & Authenticity
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          At LuxuryTravel, we specialize in curating once-in-a-lifetime experiences tailored to your desires.
          Whether it’s a tranquil island escape, a cultural deep dive, or an opulent mountain retreat,
          we create seamless journeys where every detail is infused with intention and elegance.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12 w-20 mx-auto" />

        {/* Image & Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/luxury-experience.jpg"
              alt="Luxury Travel Experience"
              className="rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Unparalleled Access & Local Expertise
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Backed by global partners and seasoned experts, our itineraries offer unrivaled access—
              from private châteaux and heritage cruises to immersive culinary trails and art safaris.
              Every trip is a bespoke expression of your lifestyle and aspirations.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are committed to responsible and sustainable tourism—where authenticity is honored, communities
            benefit, and nature is respected. Our mission is to bring luxury with meaning, crafting journeys that leave
            a lasting positive impact on both travelers and the destinations they explore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
