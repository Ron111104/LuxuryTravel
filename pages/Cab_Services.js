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
          <h1 className="text-5xl sm:text-6xl font-bold text-white">Cab Services</h1>
          <p className="text-lg mt-4 text-gray-300">Choose the perfect ride for your journey</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Services Available</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select from our range of well-maintained, luxurious, and comfortable cabs.
        </p>
      </section>

      {/* Rental Cards */}
      <section className="max-w-6xl mx-auto py-6 px-4 grid gap-12">
        {rentals.map((rental, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="w-full md:w-[50%]">
              <Image
                src={rental.image}
                alt={rental.name}
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left w-full md:w-[50%]">
              <h3 className="text-3xl font-semibold">{rental.name}</h3>
              <p className="mt-2 text-lg text-gray-700">{rental.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Review Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center">Leave a Review</h2>

        {/* Rental Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {rentals.map((rental, index) => (
            <button
              key={index}
              onClick={() => handleSelectRental(rental)}
              className={`p-4 rounded-lg shadow-md border transition-all duration-300 ${
                selectedRental?.name === rental.name
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <h4 className="text-lg font-semibold">{rental.name}</h4>
            </button>
          ))}
        </div>

        {/* Review Form */}
        {selectedRental && (
          <div className="bg-white p-6 shadow-lg rounded-lg mt-8">
            <h3 className="text-2xl font-semibold text-center">
              Review {selectedRental.name}
            </h3>

            {/* Star Rating */}
            <div className="flex justify-center mt-4 space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl transition ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  aria-label={`Rate ${star} star`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              className="w-full p-3 mt-4 border border-gray-300 rounded"
              rows={4}
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            {/* Submit */}
            <button
              onClick={handleSubmitReview}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Review
            </button>
          </div>
        )}

        {/* Display Reviews */}
        {selectedRental && reviews[selectedRental.name]?.length > 0 && (
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">
              Reviews for {selectedRental.name}:
            </h4>
            {reviews[selectedRental.name].map((review, idx) => (
              <div
                key={idx}
                className="border border-gray-200 p-4 mb-4 rounded shadow-sm"
              >
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-lg ${
                        star <= review.rating ? "text-yellow-500" : "text-gray-300"
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

      {/* Testimonials */}
      <ClientTestimonials className="w-full bg-gray-50 px-4 py-12" />

      {/* Chat and Footer */}
      <ChatWithUs />
      <Footer className="w-full" />
    </div>
  );
}
