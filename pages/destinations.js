import Link from "next/link";
import Image from "next/image";
import ClientTestimonials from "@/components/Landing/ClientTestimonials"; // Import Testimonials
import Footer from "@/components/Footer"; // Import Footer

const destinations = [
  { name: "Ooty", image: "/images/ooty.jpg", link: "/destinations/ooty" },
  { name: "Coorg", image: "/images/coorg.jpg", link: "/destinations/coorg" },
  { name: "Wayanad", image: "/images/wayanad.jpg", link: "/destinations/wayanad" },
  { name: "Chikmagalur", image: "/images/chikmagalur.jpg", link: "/destinations/chikmagalur" },
  { name: "Kodaikanal", image: "/images/kodaikanal.jpg", link: "/destinations/kodaikanal" },
  { name: "Goa", image: "/images/goa.jpg", link: "/destinations/goa" },
  { name: "Mysore", image: "/images/mysore.jpg", link: "/destinations/mysore" },
  { name: "Kerala", image: "/images/kerala.jpg", link: "/destinations/kerala" },
  { name: "Andaman", image: "/images/andaman.jpg", link: "/destinations/andaman" },
];

export default function Destinations() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold px-6">LuxuryTravel</div>
        <div className="flex space-x-6 px-6">
          <Link href="/">Home</Link>
          <Link href="/tailored-experiences">Tailored Experiences</Link>
          <Link href="/destinations" className="border-b-2 border-white">Destinations</Link>
          <Link href="/private-rentals">Private Rentals</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog & Press</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/d1.jpg')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">A world of wonders awaits you...</h1>
          <p className="text-lg mt-4 text-white">Plan Your Journey</p>
        </div>
      </header>

      {/* Luxury Destinations Section */}
      <section className="bg-[#f8f4f0] text-[#57342e] py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-4">Luxury Destinations</h2>
          <p className="text-lg leading-relaxed">
            Let Adams & Butler open up a world of wonders and create magical memories that will stay with you far beyond your travels. 
            Whatever your travel preference may be, whether you are looking for a cultural city break, a child-friendly family holiday, 
            unlimited adventure, a romantic getaway, or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.
          </p>
        </div>
      </section>

      {/* Destinations Grid Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((destination, index) => (
            <Link key={index} href={destination.link} passHref>
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400} // Adjust width
                  height={300} // Adjust height
                  className="w-full h-52 object-cover transition duration-300 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition" />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-4 py-2 rounded text-lg">
                  {destination.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
