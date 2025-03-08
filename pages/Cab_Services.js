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
    description: "Experience a smooth and comfortable ride with our premium sedans, perfect for city travel or long journeys.",
  },
  {
    name: "SUV",
    image: "/images/suv.jpg",
    description: "Spacious and powerful, our SUVs are ideal for family trips and off-road adventures.",
  },
  {
    name: "Traveler",
    image: "/images/traveler.jpg",
    description: "Best suited for group travels, our Travelers offer ample space, luxury, and a smooth journey.",
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

    setReviews({
      ...reviews,
      [selectedRental.name]: [
        ...(reviews[selectedRental.name] || []),
        { text: reviewText, rating },
      ],
    });

    setReviewText("");
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <RegularNavbar />

      {/* Hero Section with Background Image */}
      <header className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cab-services.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-6xl font-bold text-white">Cab Services</h1>
          <p className="text-lg mt-4 text-gray-300">Choose the perfect ride for your journey</p>
        </div>
      </header>

      {/* Services Available Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Services Available</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Select from our range of well-maintained, luxurious, and comfortable cabs.
        </p>
      </section>

      {/* Cab Services Details */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        {rentals.map((rental, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center mb-12 bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src={rental.image} alt={rental.name} width={500} height={300} className="rounded-lg shadow-md" />
            <div className="md:ml-8 text-center md:text-left mt-6 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800">{rental.name}</h2>
              <p className="text-lg text-gray-700 mt-2">{rental.description}</p>
            </div>
          </div>
        ))}
      </section>
      <ClientTestimonials />

      {/* Review Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center">Leave a Review</h2>

        {/* Rental Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {rentals.map((rental, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg shadow-md border ${
                selectedRental?.name === rental.name ? "border-blue-600 bg-gray-100" : "border-gray-300"
              }`}
              onClick={() => handleSelectRental(rental)}
            >
              <h3 className="text-lg font-semibold">{rental.name}</h3>
            </button>
          ))}
        </div>

        {/* Review Form */}
        {selectedRental && (
          <div className="bg-white p-6 shadow-lg rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-center">Review {selectedRental.name}</h2>

            {/* Star Rating */}
            <div className="flex justify-center mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Review Input */}
            <textarea
              className="w-full p-3 mt-4 border rounded"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmitReview}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg"
            >
              Submit Review
            </button>
          </div>
        )}

        {/* Display Reviews */}
        {selectedRental && reviews[selectedRental.name] && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Reviews for {selectedRental.name}:</h3>
            {reviews[selectedRental.name].map((review, index) => (
              <div key={index} className="border p-4 mt-4 rounded shadow">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-xl ${star <= review.rating ? "text-yellow-500" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <ChatWithUs />
      <Footer />
    </div>
  );
}
