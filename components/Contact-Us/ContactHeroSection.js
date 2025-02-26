import Image from "next/image";

export default function ContactHeroSection({ heroRef }) {
  return (
    <section ref={heroRef} className="relative w-full h-[85vh]">
      <Image
        src="https://adamsandbutler.b-cdn.net/app/uploads/2020/08/sebastian-staines-O5rFo-cJu94-unsplash-3-2000x1332.jpg"
        alt="Contact Us"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider uppercase mb-6">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-widest uppercase">
          Plan Your Journey
        </p>
      </div>
    </section>
  );
}
