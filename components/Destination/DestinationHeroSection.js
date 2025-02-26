// /components/Destination/DestinationHeroSection.js

export default function DestinationHeroSection({ heroRef, itineraryImage, destination }) {
    return (
      <div ref={heroRef} className="relative h-[70vh] min-h-[300px] bg-gray-100">
        <img
          src={itineraryImage}
          alt={`${destination} cover`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 capitalize tracking-wide">
            {destination} Itinerary
          </h1>
        </div>
      </div>
    );
  }
  