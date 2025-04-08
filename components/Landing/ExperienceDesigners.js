import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceDesigners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side: Image collage (hidden on small screens) */}
          <div className="relative w-full md:w-1/2 mb-10 md:mb-0 hidden md:block">
            <div className="relative w-full aspect-square">
              <div className="absolute top-0 left-0 w-[50%] aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://adamsandbutler.b-cdn.net/app/uploads/2020/06/about_square_bigger@2x-768x768.jpg"
                  alt="Experience Design Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-[30%] left-[30%] w-[50%] aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://adamsandbutler.b-cdn.net/app/uploads/2020/06/about_square_smaller@2x-500x500.jpg"
                  alt="Experience Design Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Carousel for small screens */}
          <div className="w-full md:w-1/2 md:hidden mb-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://adamsandbutler.b-cdn.net/app/uploads/2020/06/about_square_bigger@2x-768x768.jpg"
                  alt="Experience 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://adamsandbutler.b-cdn.net/app/uploads/2020/06/about_square_smaller@2x-500x500.jpg"
                  alt="Experience 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side: Text */}
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2 font-playfair text-gray-800">
              Made to measure
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-[#613842] leading-tight">
              We are Experienced <br />
              Designers
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Our team of highly experienced travel designers will guide you from
              beginning to end as you embark on a tailor-made journey of distinction,
              enjoying truly exclusive and authentic cultural experiences. We can
              fulfill your bucket-list dreams.
            </p>
            <Link href="/about-us">
              <button className="px-6 py-3 bg-[#613842] text-white rounded-full font-semibold hover:bg-[#4e2e35] transition-colors duration-300">
                Meet Our Designers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
