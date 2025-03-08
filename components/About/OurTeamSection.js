import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Vansh",
    role: "Director & Sales Executive Representative | Toorizo",
    description: `Vansh is a dynamic and results-driven professional with a Bachelor of Business Administration (BBA) and a strong background in sales and customer relations. With one year of experience as a Sales Executive Representative, he has honed his skills in client engagement, strategic planning, and business development.

    As the Director and Sales Executive representative of Toorizo, Vansh is committed to delivering exceptional travel experiences, ensuring customer satisfaction, and driving innovation in the travel industry. His leadership and vision play a pivotal role in expanding the agency's reach and enhancing its services, making travel seamless and memorable for clients worldwide.`,
  },
  {
    id: 2,
    name: "Krish",
    role: "Co-Sales Director | Toorizo",
    description: `Krish is an accomplished sales professional with extensive experience in the travel industry and a strong corporate background. With over a year of expertise in sales, he has developed a deep understanding of client relationship management, strategic sales planning, and business growth.

    As the Co-Sales Director of Toorizo, Krish is committed to enhancing the company’s market presence and delivering exceptional travel experiences. His leadership and strategic vision play a crucial role in driving customer satisfaction, optimizing business operations, and fostering long-term client relationships. Through his dedication to innovation and excellence, Krish continues to contribute to the success and expansion of Toorizo in the competitive travel industry.`,
  },
];

export default function OurTeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-[#683838] mb-8">Our Team</h2>
      <p className="text-lg text-gray-700 mb-12">
        Toorizo Designers are at our core. They have been carefully handpicked for their talent and trend expertise.
      </p>

      {/* Team Member Details */}
      <div className="bg-[#f7f5f0] p-8 rounded-lg shadow-md relative">
        <h3 className="text-2xl font-bold text-[#683838]">{teamMembers[currentIndex].name}</h3>
        <p className="text-lg font-semibold text-gray-600 mb-4">{teamMembers[currentIndex].role}</p>
        <p className="text-gray-700 leading-relaxed">{teamMembers[currentIndex].description}</p>
      </div>

      {/* Navigation Arrows */}
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
