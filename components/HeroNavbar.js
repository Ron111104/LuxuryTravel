'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Destinations", href: "/destinations" },
    { label: "Cab Services", href: "/Cab_Services" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      {/* Side tab (desktop only) */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full rotate-[-90deg]">
        <button className="bg-[#8A2642] px-4 py-2 font-medium hover:opacity-90 transition">
          GIVE US A CALL
        </button>
      </div>

      <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-transparent">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition">
          <Image src="/icon1.jpg" alt="Logo" width={60} height={40} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8 text-lg uppercase tracking-wide font-semibold">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition hover:text-gray-200 ${
                  pathname === href ? "text-[#F5D7DB]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger menu (mobile only) */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#8A2642] shadow-lg z-40 md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg uppercase font-semibold tracking-wide">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 transition hover:text-gray-200 ${
                      pathname === href ? "text-yellow-200" : "text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
