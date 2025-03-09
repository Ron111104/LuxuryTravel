import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Column 1: Logo/Brand Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Toorizo</h3>
            <p className="text-xs text-center">
              Luxury travel. Exclusive experiences. Custom journeys around India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center">
  <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
  <ul className="flex space-x-4 text-xs text-center">
    <li>
      <a href="/" className="hover:underline">
        Home
      </a>
    </li>
    <li>
      <a href="/about-us" className="hover:underline">
        About Us
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline">
        Destinations
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline">
        Experiences
      </a>
    </li>
    <li>
      <a href="contact-us" className="hover:underline">
        Contact
      </a>
    </li>
  </ul>
</div>


          {/* Column 3: Social Media */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.021 3.657 9.167 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.261c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.167 22 17.021 22 12z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 2c-2.5 0-4.52 2.01-4.52 4.5 0 .35.04.7.12 1.03A12.9 12.9 0 0 1 3 3.1a4.48 4.48 0 0 0-.61 2.26 4.5 4.5 0 0 0 2 3.75A4.49 4.49 0 0 1 2 8.5v.05c0 2.2 1.58 4.04 3.68 4.46a4.52 4.52 0 0 1-2.03.08 4.51 4.51 0 0 0 4.2 3.13A9 9 0 0 1 2 19.54a12.75 12.75 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 23 3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.88a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">
          © {new Date().getFullYear()} Toorizo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
