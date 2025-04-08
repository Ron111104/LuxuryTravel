'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function RegularNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Destinations", href: "/destinations" },
    { name: "About Us", href: "/about-us" },
    { name: "Cab Services", href: "/Cab_Services" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div>
          <Link href="/" className="hover:opacity-80 transition">
            <Image src="/icon.jpg" alt="Logo" width={60} height={40} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase font-medium tracking-wide">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition ${
                  pathname === href ? "text-[#8A2642]" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-4 text-sm uppercase font-medium tracking-wide">
            {navLinks.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition ${
                    pathname === href ? "text-[#8A2642]" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
