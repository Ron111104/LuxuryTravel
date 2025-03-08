import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ChatWithUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Vertical Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-[#8A2642] text-white px-3 py-2 text-sm font-semibold tracking-wider hover:bg-[#701f34] transition-colors origin-left -rotate-90"
      >
        CHAT WITH US
      </button>

      {/* Chat Popup */}
      <div
        className={`fixed top-0 left-0 h-full w-[380px] bg-black text-white shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-lg"
        >
          ✕
        </button>

        {/* Header */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Have a chat with our team</h2>
          <p className="text-sm">
            US Toll Free: <span className="text-gray-300">1-800-894-5712</span>
          </p>
          <p className="text-sm">
            Australia Toll Free: <span className="text-gray-300">1-800-764-042</span>
          </p>
          <p className="text-sm">
            Ireland: <span className="text-gray-300">+353-1-288-9355</span>
          </p>
          <p className="text-sm mt-2">Or fill in the form below and we’ll be in touch.</p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form className="space-y-4">
            {/* First & Last Name */}
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />

            {/* Phone Number */}
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded p-3">
              <Image src="/images/india-flag.jpg" alt="India Flag" width={20} height={15} />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent text-white focus:outline-none ml-3"
                required
              />
            </div>

            {/* Destination */}
            <input
              type="text"
              placeholder="Where would you like to go?"
              className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />

            {/* Newsletter Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm">
                Sign up to receive travel inspiration, exclusive offers & our latest news.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8A2642] text-white py-3 rounded font-medium hover:bg-[#701f34] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
