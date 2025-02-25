import Image from "next/image";
import React from "react";

const OurTeamSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold text-center text-[#683838] mb-8">Our Team</h2>
    <p className="text-lg text-gray-700 text-center mb-12">
      A&amp;B Designers are at our core. They have been carefully handpicked for their talent and trend expertise.
    </p>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Team Member Text */}
      <div className="bg-[#f7f5f0] p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-[#683838]">Siobhan Byrne</h3>
        <p className="text-lg font-semibold text-gray-600 mb-4">Founder &amp; CEO</p>
        <p className="text-gray-700 leading-relaxed">
          Siobhan’s passion for travel, Africa, and life-long learning has led her to create Adams & Butler, a luxury travel company. She has been featured in top publications, worked with renowned organizations, and won prestigious awards for her exceptional work in the industry.
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
);

export default OurTeamSection;
