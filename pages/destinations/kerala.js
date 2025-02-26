import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ExperienceDesigners from "@/components/Landing/ExperienceDesigners";
import Footer from "@/components/Landing/Footer";

export default function Kerala() {
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
        <Link href="/">Home</Link> {">"} <Link href="/destinations">Destinations</Link> {">"} Kerala
      </nav>

      {/* Hero Section */}
      <header className="relative h-[500px] w-full">
        <Image
          src="/images/kerala.jpg"
          alt="Kerala"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Kerala</h1>
        </div>
      </header>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center text-xl leading-relaxed">
        <p>
          Known as "God’s Own Country," Kerala is a paradise of lush greenery, serene backwaters, 
          and breathtaking hill stations. Whether you're cruising on a houseboat in Alleppey, 
          trekking through Munnar's tea gardens, or indulging in authentic Ayurvedic treatments, 
          Kerala offers an unforgettable experience.
        </p>
      </section>

      {/* Experience Selection */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Select experience type <span className="text-lg text-gray-600">(You can select multiple)</span>
        </h2>
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {experiences.map((experience) => (
            <button
              key={experience}
              className={`px-4 py-2 rounded ${
                selectedExperiences.includes(experience) ? "bg-gray-800 text-white" : "border"
              }`}
              onClick={() => toggleExperience(experience)}
            >
              {experience}
            </button>
          ))}
        </div>
      </section>

      {/* Experience Designers Section */}
      <ExperienceDesigners />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
