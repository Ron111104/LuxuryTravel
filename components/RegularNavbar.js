import Link from "next/link";
import Image from "next/image";

export default function RegularNavbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-8 py-2">
        {/* Logo (Left Aligned) */}
        <div className="text-2xl font-playfair text-gray-800">
          <Link href="/" className="hover:opacity-80 transition">
            <Image src="/logo2.png" alt="Logo" width={60} height={40} />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-8 text-sm uppercase tracking-wide font-sans font-medium">
            <li>
              <Link href="/experiences" className="text-gray-700 hover:text-gray-900 transition">
                Tailored Experiences
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="text-gray-700 hover:text-gray-900 transition">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/rentals" className="text-gray-700 hover:text-gray-900 transition">
                Private Rentals
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-gray-700 hover:text-gray-900 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/private_rentals" className="text-gray-700 hover:text-gray-900 transition">
                Private Rentals
              </Link>
            </li>

            <li>
              <Link href="/blog-press" className="text-gray-700 hover:text-gray-900 transition">
                Blog & Press
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-gray-700 hover:text-gray-900 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
