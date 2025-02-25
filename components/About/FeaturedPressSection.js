import React from "react";

const FeaturedPressSection = () => (
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
          <img 
            src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/evelyn-paris-WvPQYDd-3Ow-unsplash-500x333.jpg" 
            alt="Best Villa Rental Agencies" 
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500">A&amp;B Press</p>
            <h3 className="text-lg text-[#683838] mt-1 font-serif">Best Villa Rental Agencies</h3>
            <a href="#" className="inline-block mt-2 text-[#683838] hover:underline">
              <span className="sr-only">Read More</span> &#x2197;
            </a>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/photo-1459789587767-1a947412a440-500x331.jpg" 
            alt="The Best Travel Agents for Europe" 
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500">A&amp;B Press</p>
            <h3 className="text-lg text-[#683838] mt-1 font-serif">The Best Travel Agents for Europe</h3>
            <a href="#" className="inline-block mt-2 text-[#683838] hover:underline">
              <span className="sr-only">Read More</span> &#x2197;
            </a>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src="https://adamsandbutler.b-cdn.net/app/uploads/2020/09/2015-09-12_lif_12567220_I2-500x331.jpg" 
            alt="African Safari Rising Star" 
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500">A&amp;B Press</p>
            <h3 className="text-lg text-[#683838] mt-1 font-serif">
              Forget Kenya and South Africa. Here’s the rising star of African safari...
            </h3>
            <a href="#" className="inline-block mt-2 text-[#683838] hover:underline">
              <span className="sr-only">Read More</span> &#x2197;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedPressSection;
