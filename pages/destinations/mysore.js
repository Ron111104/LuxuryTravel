import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ExperienceDesigners from "@/components/Landing/ExperienceDesigners";
import Footer from "@/components/Footer";
import RegularNavbar from "@/components/RegularNavbar"; // Import Regular Navbar


export default function Mysore() {
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
        <Link href="/">Home</Link> {">"} <Link href="/destinations">Destinations</Link> {">"} Mysore
      </nav>
     <RegularNavbar />
     
      {/* Hero Section */}
      <header className="relative h-[500px] w-full">
        <Image
          src="/images/mysore.jpg"
          alt="Mysore"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Mysore</h1>
        </div>
      </header>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center text-xl leading-relaxed">
        <p>
          Known for its magnificent palaces, royal heritage, and vibrant culture, Mysore is one of 
          South India's most historically rich cities. Whether you're exploring the Mysore Palace, 
          visiting Chamundi Hill, or shopping for silk, Mysore offers a regal experience like no other.
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
