'use client';
import React from "react";
import Image from "next/image"; // Import Next.js Image

const WorkWithUsSection = () => (
  <section className="py-16 px-6 bg-[#f7f5f0]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Image */}
      <div className="md:w-1/2 w-full relative h-[300px] md:h-[400px]">
        <Image 
          src="/images/work with us.jpg" 
          alt="Work with Us" 
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right Text Content */}
      <div className="md:w-1/2 w-full text-left">
        <h2 className="text-4xl font-playfair text-[#683838] mb-6">
          Work with us
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Interested in a partnership or joining the team? Enquire below or email us at
          <a href="mailto:sales@adamsandbutler.com" className="text-[#683838] underline ml-1">
            sales@adamsandbutler.com
          </a>.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <a
            href="#"
            className="inline-block bg-[#683838] text-white px-6 py-3 rounded-lg uppercase tracking-wide font-medium text-sm hover:bg-[#8a4c5c] transition"
          >
            Join the Toorizo Team
          </a>
          <a
            href="#"
            className="inline-block border border-[#683838] text-[#683838] px-6 py-3 rounded-lg uppercase tracking-wide font-medium text-sm hover:bg-[#683838] hover:text-white transition"
          >
            Interested in Partnering?
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WorkWithUsSection;
