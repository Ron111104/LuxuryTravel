import React, { useState } from "react";
import Image from "next/image";

export default function ClientTestimonials() {
  const testimonials = [
    {
      id: 1,
      text: `Our trip to Kodaikanal with Toorizo was nothing short of magical! From the serene beauty of Coaker’s Walk to the breathtaking views at Dolphin’s Nose, everything was perfectly planned. Boating on Kodaikanal Lake during sunset was truly a mesmerizing experience. The visit to Pillar Rocks left us in awe, and the peaceful trek to Vattakanal Falls was refreshing. We even had a cozy bonfire night at our resort, which made the trip extra special. The entire experience was seamless, and Toorizo ensured we had the most comfortable accommodations and personalized service. A trip to remember forever!`,
      agent: "Agent Rohan Mehta",
    },
    {
      id: 2,
      text: `Chikmagalur was an absolute paradise, and thanks to Toorizo, our trip was flawless! The coffee plantation tour was a dream come true – learning about the coffee-making process while strolling through lush greenery was an unforgettable experience. Mullayanagiri Peak, the highest in Karnataka, provided breathtaking views, and our short trek there was totally worth it. We also explored the enchanting Hebbe Falls and relaxed at the serene Hirekolale Lake. From delicious local Malnad cuisine to a beautifully planned itinerary, every moment was perfect. Toorizo made sure we experienced Chikmagalur in the best way possible!`,
      agent: "Agent Priya Sharma",
    },
    {
      id: 3,
      text: `Our trip to Coorg with Toorizo was an absolute delight! From the moment we arrived at our cozy resort surrounded by lush coffee plantations, we knew this was going to be special. The guided coffee estate tour was both informative and fascinating, and the visit to Abbey Falls was breathtaking. We also had an amazing time at Dubare Elephant Camp, where we got to feed and bathe the elephants! The entire itinerary was well-planned, allowing us to experience both adventure and relaxation. Every little detail was handled with care, making this one of the best vacations we've had. Thank you, Toorizo, for an unforgettable experience!`,
      agent: "Agent Ananya Iyer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="https://adamsandbutler.b-cdn.net/app/uploads/2020/06/home_bottom_image@2x-2000x1892.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-[#613842] mb-12">
          What our clients say
        </h2>

        {/* Testimonial Content with fade-in transition */}
        <div key={currentIndex} className="max-w-4xl mx-auto fade-in">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
            {testimonials[currentIndex].text}
          </p>
          <p className="font-semibold text-lg text-[#613842]">
            {testimonials[currentIndex].agent}
          </p>
        </div>
      </div>

      {/* Fixed Carousel Controls Positioned at the Center Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-8">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full bg-[#613842] text-white flex items-center justify-center hover:bg-[#8a4c5c] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full bg-[#613842] text-white flex items-center justify-center hover:bg-[#8a4c5c] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Fade-in Animation Styles */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.7s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
