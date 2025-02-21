import Image from "next/image";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Adams & Butler</title>
        <meta name="description" content="Discover Adams & Butler, Ireland's premier luxury travel designers." />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/about-hero.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <h1 className="text-5xl text-white font-bold relative z-10">About Us</h1>
        </section>

        {/* Why Choose Us */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-6">Why Choose Adams & Butler?</h2>
          <p className="text-lg text-gray-600">
            We provide tailor-made luxury experiences beyond expectations, connecting you with the finest travel designers worldwide.
          </p>
        </section>

        {/* Sustainability */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4">Sustainability</h2>
          <p className="text-gray-700">
            Adams & Butler is committed to responsible travel by focusing on sustainable tourism, supporting local communities, and preserving cultural heritage.
          </p>
        </section>

        {/* Our Promise */}
        <section className="my-12 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
          <p className="text-gray-700">
            With our unrivaled expertise and extensive partnerships, we ensure exclusive benefits, world-class accommodations, and one-of-a-kind travel experiences.
          </p>
        </section>

        {/* Meet the Team */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image src={member.image} width={200} height={200} alt={member.name} className="rounded-full mx-auto" />
                <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="my-12 bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">What Our Clients Say</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="border-l-4 border-gray-400 pl-4">
                <p className="italic text-gray-700">“{testimonial.quote}”</p>
                <cite className="block mt-2 text-right font-semibold">- {testimonial.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Featured Press */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Press</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pressFeatures.map((feature, index) => (
              <div key={index} className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// Team Members Data
const teamMembers = [
  {
    name: "Siobhan Byrne",
    role: "Founder & CEO",
    image: "/team/siobhan.jpg",
  },
  {
    name: "Rachel Herman",
    role: "Chief of Staff",
    image: "/team/rachel.jpg",
  },
  {
    name: "Giovana Polla",
    role: "Business Development Manager",
    image: "/team/giovana.jpg",
  },
];

// Testimonials Data
const testimonials = [
  {
    quote: "Adams & Butler provided the most exclusive travel experiences. Every moment was magical!",
    name: "Candy",
  },
  {
    quote: "Their full-day Connemara music tour was outstanding – the highlight of our trip!",
    name: "Agent Allison Parker",
  },
];

// Featured Press Data
const pressFeatures = [
  {
    title: "Best Villa Rental Agencies",
    description: "Recognized as a top villa rental agency in the world.",
  },
  {
    title: "Best Travel Agents for Europe",
    description: "Listed among the best luxury travel experts for European getaways.",
  },
  {
    title: "The Rising Star of African Safari",
    description: "Showcasing Africa’s hidden gems for an exclusive safari experience.",
  },
];
