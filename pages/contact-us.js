import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      "Putting together this trip to Ireland at the very last minute, to give them this lifelong memory is priceless. I can’t thank you enough for your gracious, warm, and caring nature during the entire process. I could never have done this without you.",
    author: "F. O’Brien",
  },
  {
    quote:
      "Our trip was a dream come true! Everything was planned perfectly, and we had experiences that we could have never arranged on our own.",
    author: "M. Thompson",
  },
];

const ContactUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative w-full min-h-screen pb-20 bg-[#F9F6F2]">
      {/* Background Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/contact-bg.jpg"
          alt="Scenic Coastal View"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-6xl font-bold">Contact Us</h1>
          <Link href="/plan-your-journey">
            <a className="mt-6 px-6 py-3 border border-white text-lg font-semibold hover:bg-white hover:text-black transition">
              PLAN YOUR JOURNEY →
            </a>
          </Link>
        </div>
      </div>

      {/* Side Chat Button */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#683838] text-white px-4 py-2 rotate-90 origin-left cursor-pointer">
        CHAT WITH US
      </div>

      {/* Get in Touch Section */}
      <div className="relative flex flex-col items-center text-center mt-16 px-6">
        <h2 className="text-4xl font-serif text-[#4C2A2A]">Get in touch</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl">
          Use the form below to drop us an e-mail. Old fashioned phone calls work too.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto mt-12 px-6 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="text-left">
          <p className="text-lg text-[#4C2A2A]">
            <strong>Email:</strong> sales@adamsandbutler.com
          </p>
          <p className="mt-2 text-[#4C2A2A]">
            <strong>US Toll Free:</strong> 1-800-894-5712
          </p>
          <p className="mt-1 text-[#4C2A2A]">
            <strong>Australia Toll Free:</strong> 1-800-764-042
          </p>
          <p className="mt-1 text-[#4C2A2A]">
            <strong>Ireland:</strong> +353-1-288-9355
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-md">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 w-full" />
              <input type="text" placeholder="Last Name" className="border p-2 w-full" />
            </div>
            <input type="text" placeholder="📞 Phone" className="border p-2 w-full" />
            <input type="email" placeholder="✉ Email" className="border p-2 w-full" />
            <textarea placeholder="Message" className="border p-2 w-full h-24"></textarea>
            <button className="mt-4 bg-[#683838] text-white px-6 py-2 w-full text-lg">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-20 text-center px-6">
        <h2 className="text-3xl font-serif text-[#4C2A2A]">What our clients say</h2>
        <div className="relative max-w-3xl mx-auto mt-6">
          <p className="text-lg italic text-gray-800">
            “{testimonials[currentTestimonial].quote}”
          </p>
          <p className="mt-4 text-[#4C2A2A] font-semibold">
            — {testimonials[currentTestimonial].author}
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <button onClick={prevTestimonial} className="p-2 border rounded-full text-[#4C2A2A]">◀</button>
            <button onClick={nextTestimonial} className="p-2 border rounded-full text-[#4C2A2A]">▶</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-20 bg-[#1a1a1a] text-white text-sm">
        <div className="text-center py-4 bg-[#e5d3c1] text-black font-medium">
          Get the latest from Adams & Butler: <Link href="#"><a className="underline">Sign up to our Newsletter</a></Link>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center py-6 space-x-6">
          <Image src="/images/luxury-magazine.png" alt="Luxury Travel Magazine" width={120} height={40} />
          <Image src="/images/iaa.png" alt="IAA" width={60} height={40} />
          <Image src="/images/virtuoso.png" alt="Virtuoso" width={100} height={40} />
          <Image src="/images/select.png" alt="Select" width={80} height={40} />
          <Image src="/images/itaa.png" alt="ITAA" width={80} height={40} />
        </div>

        {/* Footer Links */}
        <div className="container mx-auto px-6 md:px-20 py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div><h3 className="font-semibold">Tailored Experiences</h3><p>Adventure<br/>Culinary<br/>Family</p></div>
          <div><h3 className="font-semibold">Destinations</h3><p>UK<br/>Asia<br/>Americas</p></div>
          <div><h3 className="font-semibold">Private Rentals</h3><p>Castles<br/>Estates</p></div>
          <div><h3 className="font-semibold">News & Press</h3><p>Newsletter<br/>Press</p></div>
          <div><h3 className="font-semibold">About Us</h3><p>Why A&B?<br/>Our Team</p></div>
        </div>

        <div className="text-center py-4">
          <p>© 2025 Adams & Butler. <Link href="#"><a className="underline">Terms & Conditions</a></Link></p>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
