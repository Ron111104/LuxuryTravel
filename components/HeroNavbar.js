import Link from "next/link";
import Image from "next/image";

export default function HeroNavbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      {/* Optional vertical side tab */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full rotate-[-90deg]">
        <button className="bg-[#8A2642] px-4 py-2 font-medium hover:opacity-90 transition">
          GIVE US A CALL
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Logo on the Left */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:opacity-80 transition">
            <Image src="/icon.jpg" alt="Logo" width={60} height={40} />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <ul className="flex-grow flex justify-center space-x-8 text-lg uppercase tracking-wide font-semibold">
          <li>
            <Link href="/destinations" className="hover:text-gray-200 transition">
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/Cab_Services" className="hover:text-gray-200 transition">
              Cab Services
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-gray-200 transition">
              About Us
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
