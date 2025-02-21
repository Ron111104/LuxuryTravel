import React from "react";
import Image from "next/image";

export default function NewsAndPress() {
  const articles = [
    {
      id: 1,
      label: "A&B Press",
      title: "A Dream of One's Own",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2022/02/Cameron-House-on-Loch-Lomond-new-size-500x281.jpg",
      link: "#",
    },
    {
      id: 2,
      label: "A&B Press",
      title:
        "Adams & Butler Offers Luxury Travelers Access to Private Places and Experiences",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/08/Dromoland-Castle-Exterior-Castle-1-500x260.jpg",
      link: "#",
    },
    {
      id: 3,
      label: "A&B Press",
      title: "Seven Great Irish Escapes to Rent",
      image:
        "https://adamsandbutler.b-cdn.net/app/uploads/2020/07/7-500x375.jpg",
      link: "#",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-[#faf9f8]">
      <div className="container mx-auto px-4">
        {/* Heading & "VIEW ALL" link */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-[#613842]">
            News &amp; Press
          </h2>
          <a
            href="#"
            className="text-sm md:text-base font-semibold text-[#613842] uppercase hover:underline"
          >
            VIEW ALL
          </a>
        </div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-40 md:h-44 lg:h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Card Content */}
              <div className="p-4">
                <span className="block text-sm text-gray-500 mb-1">
                  {item.label}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                {/* Bottom-right link with arrow */}
                <div className="flex justify-end">
                  <a
                    href={item.link}
                    className="text-[#613842] hover:text-[#8a4c5c] transition-colors inline-flex items-center"
                  >
                    <span className="mr-1 text-sm font-medium">Read More</span>
                    {/* Arrow Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
