import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ExperienceDesigners from "@/components/Landing/ExperienceDesigners";
import Footer from "@/components/Footer";
import RegularNavbar from "@/components/RegularNavbar"; // Import Regular Navbar


export default function Ooty() {
  const [selectedExperiences, setSelectedExperiences] = useState([]);

  const experiences = [
    "All experiences",
    "Adventure",
    "Celebration",
    "Culinary",
    "Family",
    "Speciality",
    "Ultraluxe",
  ];

  const toggleExperience = (experience) => {
    if (selectedExperiences.includes(experience)) {
      setSelectedExperiences(selectedExperiences.filter((e) => e !== experience));
    } else {
      setSelectedExperiences([...selectedExperiences, experience]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm py-4 px-6">
        <Link href="/">Home</Link> {">"} <Link href="/destinations">Destinations</Link> {">"} Ooty
      </nav>
     <RegularNavbar />
     
      {/* Hero Section */}
      <header className="relative h-[500px] w-full">
        <Image
          src="/images/ooty.jpg"
          alt="Ooty"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Ooty</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Destination Title */}
        <h1 className="text-4xl font-bold text-center mb-6">Ooty</h1>

        {/* Description (Increased Font Size) */}
        <section className="text-xl leading-relaxed text-center mb-12">
          <p>
            Nestled in the lush Nilgiri Hills, Ooty is a serene escape with rolling tea gardens, misty mountains,
            and picturesque lakes. Whether you’re looking to explore botanical gardens, enjoy a scenic toy train ride,
            or simply relax in a tranquil environment, Ooty has something for everyone.
          </p>
        </section>

        {/* Experience Selection (Increased Font Size) */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Select experience type <span className="text-lg text-gray-600">(You can select multiple)</span>
          </h2>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {experiences.map((experience) => (
              <button
                key={experience}
                className={`px-4 py-2 rounded ${
                  selectedExperiences.includes(experience)
                    ? "bg-gray-800 text-white"
                    : "border"
                }`}
                onClick={() => toggleExperience(experience)}
              >
                {experience}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Experience Designers Section */}
      <ExperienceDesigners />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
