import React from "react";

const WorkWithUsSection = () => (
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
            Join the Toorizo Team
          </a>
          <a href="#" className="block uppercase tracking-wide text-[#683838] font-semibold hover:underline">
            Interested in Partnering?
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WorkWithUsSection;
