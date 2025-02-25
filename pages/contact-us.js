"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import HeroNavbar from "@/components/HeroNavbar"
import RegularNavbar from "@/components/RegularNavbar"
import Footer from "@/components/Footer"

export default function ContactUs() {
  const heroRef = useRef(null)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const heroHeight = heroRef.current.offsetHeight
      setScrolledPastHero(window.scrollY >= heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Conditionally render navbars */}
      {!scrolledPastHero ? <HeroNavbar /> : <RegularNavbar />}

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[85vh]">
        <Image
          src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/sebastian-staines-O5rFo-cJu94-unsplash-3-2000x1332.jpg"
          alt="Contact Us"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0  flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider uppercase mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase">Plan Your Journey</p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide text-stone-800">Get in Touch</h2>
            <p className="text-lg text-stone-600">
              Use the form below to drop us an e-mail. Old fashioned phone calls work too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm">
              <h3 className="text-2xl font-light mb-8 tracking-wide text-stone-800">Contact Details</h3>
              <div className="space-y-6 text-stone-600">
                <p className="flex items-start space-x-4">
                  <span className="font-medium min-w-24">Email:</span>
                  <a href="mailto:sales@adamsandbutler.com" className="hover:text-stone-900 transition-colors">
                    sales@adamsandbutler.com
                  </a>
                </p>
                <p className="flex items-start space-x-4">
                  <span className="font-medium min-w-24">US Toll Free:</span>
                  <a href="tel:1-800-894-5712" className="hover:text-stone-900 transition-colors">
                    1-800-894-5712
                  </a>
                </p>
                <p className="flex items-start space-x-4">
                  <span className="font-medium min-w-24">Australia:</span>
                  <a href="tel:1-800-764-042" className="hover:text-stone-900 transition-colors">
                    1-800-764-042
                  </a>
                </p>
                <p className="flex items-start space-x-4">
                  <span className="font-medium min-w-24">Ireland:</span>
                  <a href="tel:+353-1-288-9355" className="hover:text-stone-900 transition-colors">
                    +353-1-288-9355
                  </a>
                </p>
                <p className="flex items-start space-x-4">
                  <span className="font-medium min-w-24">Address:</span>
                  <span>106 Baggot Street Lower, Dublin 2, D02 DX80, Ireland</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm">
              <form className="space-y-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-stone-900 text-white py-4 px-8 rounded-sm font-medium hover:bg-stone-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

