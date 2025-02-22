import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh]">
        <Image
          src="/images/about adams and butler.jpg"
          alt="About Adams & Butler"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-5xl font-bold uppercase">About Adams & Butler</h1>
        </div>
      </section>

      {/* Magical & Bespoke Experiences */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/mag-exp.jpg"
            alt="Magical Memories"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Magical Experiences</h2>
          <p className="text-lg text-gray-700 mb-4">
            Discover enchanting and exclusive experiences designed for you.
          </p>

          <h2 className="text-4xl font-bold mt-8 mb-6">Bespoke Experiences</h2>
          <p className="text-lg text-gray-700">
            Our curated luxury itineraries are designed to make your travel dreams a reality.
          </p>
        </div>
      </section>

      {/* Full-Width Image */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/images/be-exp.jpg"
          alt="Exclusive Experiences"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </section>

      {/* Why Choose Adams & Butler */}
<section className="max-w-6xl mx-auto px-6 py-16 text-center">
  <h2 className="text-4xl font-bold text-[#683838] mb-8">Why Choose Adams & Butler?</h2>
  <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
    <button className="border-b-2 border-[#683838] text-[#683838] font-semibold px-4 py-2">⭐ Our Promise</button>
    <button className="hover:text-[#683838] px-4 py-2">🌍 Only Irish Virtuoso Agency</button>
    <button className="hover:text-[#683838] px-4 py-2">🏡 Accommodation Amenities</button>
    <button className="hover:text-[#683838] px-4 py-2">🚢 Exclusive Cruise Benefits</button>
    <button className="hover:text-[#683838] px-4 py-2">🚀 Extra Mile</button>
    <button className="hover:text-[#683838] px-4 py-2">🔍 Uncover Your Options</button>
    <button className="hover:text-[#683838] px-4 py-2">♻️ Sustainability</button>
    <button className="hover:text-[#683838] px-4 py-2">🦁 Adams & Butler Africa - Atta</button>
  </div>
</section>

{/* Our Promise */}
<section className="bg-[#f7f5f0] py-16">
  <div className="max-w-4xl mx-auto px-6 text-center bg-white p-8 shadow-md rounded-lg">
    <div className="text-4xl">🤝</div>
    <h2 className="text-3xl font-bold text-[#683838] mt-4">Our Promise</h2>
    <p className="text-lg text-gray-700 mt-4">
      Adams & Butler promises to prioritize your needs and interests first – always. Our unrivalled 
      expertise, long-standing relationships, and extensive knowledge enable us to offer exclusive 
      complimentary benefits, the best rates possible, and unique bucket-list experiences.
    </p>
    <p className="text-lg text-gray-700 mt-4">
      With over a decade of experience in creating travel solutions, Adams & Butler regards our clients’ 
      health, happiness, and well-being as our top priority. We offer a 100% credit postponement policy 
      and a generous cancellation policy to allay any concerns.
    </p>
  </div>
</section>


      {/* Our Team */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-4xl font-bold text-center text-[#683838] mb-8">Our Team</h2>
  <p className="text-lg text-gray-700 text-center mb-12">
    A& B Designers are at our core. They have been carefully handpicked for their talent and trend expertise.
  </p>

  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Team Member Text */}
    <div className="bg-[#f7f5f0] p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-[#683838]">Siobhan Byrne</h3>
      <p className="text-lg font-semibold text-gray-600 mb-4">Founder & CEO</p>
      <p className="text-gray-700 leading-relaxed">
        Siobhan’s passion for travel, Africa, and life-long learning has led her to create Adams & Butler, a luxury 
        travel company. She has been featured in top publications, worked with renowned organizations, and won 
        prestigious awards for her exceptional work in the industry.
      </p>
    </div>

    {/* Team Member Image */}
    <div className="relative flex items-center justify-center">
      <Image 
        src="/images/siobhan.jpg" 
        alt="Siobhan Byrne" 
        width={400} 
        height={500} 
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

      {/* Video Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold mb-6">Discover More</h2>
        <div className="relative w-full max-w-3xl mx-auto aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Adams & Butler Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Client Testimonials */}
      {/* Client Testimonials */}
<section className="bg-gray-100 py-16 px-6 text-center">
  <h2 className="text-4xl font-serif text-[#683838] mb-6">What our clients say</h2>

  <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md relative">
    <div className="text-[#683838] text-6xl absolute top-0 left-0 transform -translate-x-3 -translate-y-4">
      &ldquo;
    </div>
    
    <p className="text-lg text-gray-700 italic leading-relaxed">
      I had a lovely conversation with Mr. Eisenhart, and he couldn't say enough about how wonderful their trip was. 
      He gave me some wonderful feedback that I'd love to share with you. They were very pleased with their guide in Ireland, Bill. 
      They said that he was absolutely wonderful. They said that their full-day Connemara music tour was outstanding. 
      Highlight of the trip. Their guide for their walking tour in Dublin, Frankie, was very good – particularly with engaging the kids. 
      They all really enjoyed the bike ride, falconry, and the surfing lesson. Thank you so much for your help in putting this trip together. 
      Mr. Eisenhart really couldn't stop gushing about how this was a trip of a lifetime.
    </p>

    <div className="text-[#683838] text-6xl absolute bottom-0 right-0 transform translate-x-3 translate-y-4">
      &rdquo;
    </div>
  </div>

  <p className="text-xl font-serif text-[#683838] mt-6">Agent Allison Parker</p>

  {/* Carousel Navigation */}
  <div className="flex justify-center mt-6 space-x-6">
    <button className="w-10 h-10 flex items-center justify-center border border-[#683838] rounded-full text-[#683838] hover:bg-[#683838] hover:text-white transition">
      &larr;
    </button>
    <button className="w-10 h-10 flex items-center justify-center border border-[#683838] rounded-full text-[#683838] hover:bg-[#683838] hover:text-white transition">
      &rarr;
    </button>
  </div>
</section>


     {/* Featured Press Section */}
<section className="py-16 px-6 bg-gray-100">
  <div className="container mx-auto">
    {/* Heading and View All */}
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-4xl font-serif text-[#683838]">Featured Press</h2>
      <a href="/press" className="text-[#683838] uppercase tracking-wide hover:underline">
        View All
      </a>
    </div>

    {/* Featured Articles Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Article 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/images/press1.jpg" alt="Best Villa Rental Agencies" className="w-full h-56 object-cover"/>
        <div className="p-4">
          <p className="text-sm text-gray-500">A&B Press</p>
          <h3 className="text-lg text-[#683838] mt-1 font-serif">Best Villa Rental Agencies</h3>
          <a href="#" className="inline-block mt-2 text-[#683838] hover:underline">
            <span className="sr-only">Read More</span> 
            &#x2197;
          </a>
        </div>
      </div>

      {/* Article 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/images/press2.jpg" alt="The Best Travel Agents for Europe" className="w-full h-56 object-cover"/>
        <div className="p-4">
          <p className="text-sm text-gray-500">A&B Press</p>
          <h3 className="text-lg text-[#683838] mt-1 font-serif">The Best Travel Agents for Europe</h3>
          <a href="#" className="inline-block mt-2 text-[#683838] hover:underline">
            <span className="sr-only">Read More</span> 
            &#x2197;
          </a>
        </div>
      </div>

      {/* Article 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/images/press3.jpg" alt="African Safari Rising Star" className="w-full h-56 object-cover"/>
        <div className="p-4">
          <p className="text-sm text-gray-500">A&B Press</p>
          <h3 className="text-lg text-[#683838] mt-1 font-serif">
            Forget Kenya and South Africa. Here’s the rising star of African safari...
          </h3>
          <a href="#" className="inline-block mt-2 text-[#683838] hover:underline">
            <span className="sr-only">Read More</span> 
            &#x2197;
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Work With Us Section */}
<section className="py-16 px-6 bg-[#f7f5f0]">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    
    {/* Left Image */}
    <div className="md:w-1/2 w-full">
      <img 
        src="/images/work with us.jpg" 
        alt="Work with Us" 
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Right Text Content */}
    <div className="md:w-1/2 w-full md:pl-12 mt-8 md:mt-0">
      <h2 className="text-4xl font-serif text-[#683838] mb-4">Work with us</h2>
      <p className="text-gray-700 text-lg mb-4">
        Interested in a partnership or joining the team? Enquire below or email us at  
        <a href="mailto:sales@adamsandbutler.com" className="text-[#683838] underline ml-1">
          sales@adamsandbutler.com
        </a>.
      </p>

      {/* Links */}
      <div className="mt-6">
        <a href="#" className="block uppercase tracking-wide text-[#683838] font-semibold mb-2 hover:underline">
          Join the A&B Team
        </a>
        <a href="#" className="block uppercase tracking-wide text-[#683838] font-semibold hover:underline">
          Interested in Partnering?
        </a>
      </div>
    </div>

    
</div>
</section>

    </div>
  );
};

export default About;
