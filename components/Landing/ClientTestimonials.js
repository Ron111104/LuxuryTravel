import React, { useState } from "react";
import Image from "next/image";

export default function ClientTestimonials() {
  const testimonials = [
    {
      id: 1,
      text: `I had a lovely conversation with Mr. Eisenhart, and he couldn't say enough about how wonderful their trip was. He gave me some wonderful feedback that I'd love to share with you. They were very pleased with their guide in Ireland, Bill. They said that he was absolutely wonderful. They also said that their half-day Connemara music tour was outstanding — the highlight of the trip. Their guide after their walking tour in Dublin, Frankie, was very good, particularly with engaging the kids. They all really enjoyed the bike ride, falconry, and the surfing lesson. Thank you so much for your help in putting this trip together. Mr. Eisenhart really couldn't stop gushing about how this was a trip of a lifetime.`,
      agent: "Agent Allison Parker",
    },
    {
      id: 2,
      text: `"The team at Adams & Butler curated an unforgettable journey for us. From private castle stays to intimate cultural experiences, every detail was handled with impeccable care. We can't wait to travel with them again! In addition, every aspect of the trip was personalized to our needs – from bespoke dining experiences to private tours of historical landmarks. It truly exceeded our expectations."`,
      agent: "Agent John Smith",
    },
    {
      id: 3,
      text: `"We've never felt more looked after on a trip. From the moment we arrived, everything was smooth and tailored to our preferences. Our guides were knowledgeable, friendly, and went the extra mile to ensure our comfort. The level of service and attention to detail made this experience extraordinary, and we left with memories that will last a lifetime."`,
      agent: "Agent Jane Doe",
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
