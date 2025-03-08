import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: `My recent trip to Kerala, organized by Toorizo, was an absolute dream! From the tranquil backwaters of Alleppey to the misty hills of Munnar, every detail was meticulously planned. Our guide ensured we had a seamless and enriching experience, allowing us to immerse ourselves in the local culture. The personalized touches, like a private houseboat cruise and authentic Kerala cuisine, made this journey unforgettable.`,
    agent: "Aditi Rao",
  },
  {
    id: 2,
    text: `I had an incredible time exploring the vibrant landscapes of Rajasthan with Toorizo. From majestic palaces to bustling markets, every aspect of my journey was curated with perfection. The private tours, personalized itineraries, and seamless travel arrangements made this trip truly special. My favorite experience was a heritage stay in Udaipur with stunning views of Lake Pichola.`,
    agent: "Rohan Mehta",
  },
  {
    id: 3,
    text: `Toorizo planned a perfect getaway for my family in Coorg, and it exceeded all our expectations. The coffee estate stay, plantation tours, and nature treks were just what we needed to escape from the city chaos. The team was attentive to our preferences, ensuring a smooth and luxurious experience throughout. The best part? A surprise candlelit dinner amidst the coffee plantations!`,
    agent: "Priya Sharma",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-serif text-[#683838] mb-6">What our clients say</h2>

      {/* Testimonial Content */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md relative">
        <div className="text-[#683838] text-6xl absolute top-0 left-0 transform -translate-x-3 -translate-y-4">
          &ldquo;
        </div>

        <p className="text-lg text-gray-700 italic leading-relaxed">
          {testimonials[currentIndex].text}
        </p>

        <div className="text-[#683838] text-6xl absolute bottom-0 right-0 transform translate-x-3 translate-y-4">
          &rdquo;
        </div>
      </div>

      <p className="text-xl font-serif text-[#683838] mt-6">
        {testimonials[currentIndex].agent}
      </p>

      {/* Carousel Navigation */}
      <div className="flex justify-center mt-6 space-x-6">
        <button
          onClick={goPrev}
          className="w-10 h-10 flex items-center justify-center border border-[#683838] rounded-full text-[#683838] hover:bg-[#683838] hover:text-white transition"
        >
          &larr;
        </button>
        <button
          onClick={goNext}
          className="w-10 h-10 flex items-center justify-center border border-[#683838] rounded-full text-[#683838] hover:bg-[#683838] hover:text-white transition"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}
