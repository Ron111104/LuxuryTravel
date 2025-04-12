import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import RegularNavbar from "@/components/RegularNavbar";
import ClientTestimonials from "@/components/Landing/ClientTestimonials";
import ChatWithUs from "@/components/ChatWithUs";

const rentals = [
  {
    name: "Sedan",
    image: "/images/sedan.jpg",
    description:
      "Experience a smooth and comfortable ride with our premium sedans, perfect for city travel or long journeys.",
  },
  {
    name: "SUV",
    image: "/images/suv.jpg",
    description:
      "Spacious and powerful, our SUVs are ideal for family trips and off-road adventures.",
  },
  {
    name: "Traveler",
    image: "/images/traveler.jpg",
    description:
      "Best suited for group travels, our Travelers offer ample space, luxury, and a smooth journey.",
  },
];

export default function CabServices() {
  const [selectedRental, setSelectedRental] = useState(null);
  const [reviews, setReviews] = useState({});
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSelectRental = (rental) => {
    setSelectedRental(rental);
    setReviewText("");
    setRating(0);
  };

  const handleSubmitReview = () => {
    if (!selectedRental || !reviewText || rating === 0) return;

    setReviews((prev) => ({
      ...prev,
      [selectedRental.name]: [
        ...(prev[selectedRental.name] || []),
        { text: reviewText, rating },
      ],
    }));

    setReviewText("");
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 w-full overflow-x-hidden">
      <RegularNavbar />

      {/* Hero Section */}
      <header
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center w-full"
        style={{ backgroundImage: "url('/images/cab-services.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
            Cab Services
          </h1>
          <p className="text-xl mt-4 text-gray-200">
            Choose the perfect ride for your journey
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Services Available
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select from our range of well-maintained, luxurious, and comfortable
          cabs.
        </p>
      </section>

      {/* Rental Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid gap-10 md:grid-cols-2">
        {rentals.map((rental, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white shadow-xl transform hover:scale-105 transition duration-300"
          >
            <Image
              src={rental.image}
              alt={rental.name}
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {rental.name}
              </h3>
              <p className="text-gray-600">{rental.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Review Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Leave a Review</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {rentals.map((rental, index) => (
            <button
              key={index}
              onClick={() => handleSelectRental(rental)}
              className={`p-4 rounded-lg shadow-md border transition-all duration-300 font-medium text-lg hover:shadow-lg focus:outline-none ${
                selectedRental?.name === rental.name
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              {rental.name}
            </button>
          ))}
        </div>

        {selectedRental && (
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-4">
              Review: {selectedRental.name}
            </h3>

            <div className="flex justify-center mb-4 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-4xl ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  } transition duration-200 hover:scale-110`}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            <button
              onClick={handleSubmitReview}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium transition"
            >
              Submit Review
            </button>
          </div>
        )}

        {selectedRental && reviews[selectedRental.name]?.length > 0 && (
          <div className="mt-10 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-center">
              Reviews for {selectedRental.name}
            </h4>
            {reviews[selectedRental.name].map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 mb-4 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-lg ${
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-800">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <ClientTestimonials className="w-full bg-gray-100 px-4 py-12" />
      <ChatWithUs />
      <Footer className="w-full" />
    </div>
  );
}
