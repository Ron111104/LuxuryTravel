// components/HeroNavbar.js
import Link from "next/link";
import Image from "next/image";
export default function HeroNavbar() {
    return (
      <header className="absolute top-0 left-0 w-full z-50 text-white">
        {/* 
          Optional vertical side tab.
          Adjust text, colors, and positioning to match your exact design. 
        */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full rotate-[-90deg]">
          <button className="bg-[#8A2642] px-4 py-2 font-medium hover:opacity-90 transition">
            GIVE US A CALL
          </button>
        </div>
  
        <nav className="flex items-center justify-between px-8 py-4">
          {/* Brand / Logo */}
          <div className="text-2xl font-bold">
          <Link href="/" className="hover:opacity-80 transition">
  <Image src="/icon.png" alt="Logo" width={60} height={40} />
</Link>
          </div>
  
          {/* Nav Menu Items */}
          <ul className="flex items-center space-x-6 text-sm uppercase tracking-wide font-medium">
            <li>
              <Link href="/tailored-experiences" className="hover:text-gray-200 transition">
                Tailored Experiences
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:text-gray-200 transition">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/private-rentals" className="hover:text-gray-200 transition">
                Private Rentals
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-gray-200 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog-press" className="hover:text-gray-200 transition">
                Blog &amp; Press
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-200 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

