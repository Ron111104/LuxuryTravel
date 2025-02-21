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
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Experience the World with Luxury & Authenticity
        </h2>
        
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          At LuxuryTravel, we craft extraordinary journeys tailored to your desires. Our passion is delivering 
          exclusive, tailor-made travel experiences designed with expertise and authenticity. From private 
          safaris to luxury villa stays, we ensure each trip is one-of-a-kind.
        </p>

        {/* Image & Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/images/luxury-experience.jpg"
              alt="Luxury Travel Experience"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Expertise & Unmatched Access
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team has deep local connections and expertise in crafting unique travel itineraries
              tailored to your preferences. Whether it's a private yacht tour, a royal palace stay, or an 
              off-the-beaten-path adventure, we make it happen.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We believe in sustainable and responsible tourism, ensuring that your experiences are meaningful, 
            luxurious, and culturally immersive. Our mission is to provide world-class journeys while preserving 
            the authenticity of destinations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
