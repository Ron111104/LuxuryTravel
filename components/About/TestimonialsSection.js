import React from "react";

const TestimonialsSection = () => (
  <section className="bg-gray-100 py-16 px-6 text-center">
    <h2 className="text-4xl font-serif text-[#683838] mb-6">What our clients say</h2>

    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md relative">
      <div className="text-[#683838] text-6xl absolute top-0 left-0 transform -translate-x-3 -translate-y-4">
        &ldquo;
      </div>
      
      <p className="text-lg text-gray-700 italic leading-relaxed">
        I had a lovely conversation with Mr. Eisenhart, and he couldn't say enough about how wonderful their trip was. He gave me some wonderful feedback that I'd love to share with you. They were very pleased with their guide in Ireland, Bill. They said that he was absolutely wonderful. They said that their full-day Connemara music tour was outstanding. Highlight of the trip. Their guide for their walking tour in Dublin, Frankie, was very good – particularly with engaging the kids. They all really enjoyed the bike ride, falconry, and the surfing lesson. Thank you so much for your help in putting this trip together. Mr. Eisenhart really couldn't stop gushing about how this was a trip of a lifetime.
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
);

export default TestimonialsSection;
