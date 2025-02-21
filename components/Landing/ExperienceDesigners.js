import React from "react";
import Image from "next/image";

export default function ExperienceDesigners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left side: Image collage container */}
          <div className="relative w-full md:w-1/2">
            <div className="relative w-full aspect-square">
              {/* First Image */}
              <div className="absolute top-0 left-0 w-[50%] aspect-square">
                <Image
                  src="https://adamsandbutler.b-cdn.net/app/uploads/2020/06/about_square_bigger@2x-768x768.jpg"
                  alt="Experience Design Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Second Image overlapping more */}
              <div className="absolute top-[30%] left-[30%] w-[50%] aspect-square">
                <Image
                  src="https://adamsandbutler.b-cdn.net/app/uploads/2020/06/about_square_smaller@2x-500x500.jpg"
                  alt="Experience Design Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side: Text content, aligned to the top of the collage */}
          <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0  ">
            <h2 className="text-2xl font-bold mb-4 font-playfair text-gray-800">
              Made to measure <br />
            </h2>
            <h2 className="text-6xl font-bold mb-4 font-playfair text-[#613842]">
              We are Experienced <br />
              Designers
            </h2>
            <p className="text-lg text-gray-700">
              Our team of highly experienced travel designers will guide you
              from beginning to end as you embark on a tailor-made journey of
              distinction, enjoying truly exclusive and authentic cultural
              experiences. We can fulfil your bucket-list dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
