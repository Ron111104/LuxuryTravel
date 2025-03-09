import { useState } from "react";
import Image from "next/image";
const rentals = [
  { name: "Sedan", image: "/images/sedan.jpg" },
  { name: "SUV", image: "/images/suv.jpg" },
  { name: "Traveler", image: "/images/traveler.jpg" },
];

export default function PrivateRentals() {
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
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Private Rentals</h1>

      {/* Rental Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {rentals.map((rental, index) => (
          <div
            key={index}
            className={`border p-4 rounded-lg text-center cursor-pointer ${
              selectedRental?.name === rental.name ? "border-blue-600" : "border-gray-300"
            }`}
            onClick={() => handleSelectRental(rental)}
          >
            <Image src={rental.image} alt={rental.name} width={300} height={200} className="rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{rental.name}</h2>
          </div>
        ))}
      </div>

      {/* Review Section */}
      {selectedRental && (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
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
            className="w-full p-2 mt-4 border rounded"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmitReview}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded"
          >
            Submit Review
          </button>
        </div>
      )}

      {/* Display Reviews */}
      {selectedRental && reviews[selectedRental.name] && (
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-semibold">Reviews for {selectedRental.name}:</h3>
          {reviews[selectedRental.name].map((review, index) => (
            <div key={index} className="border p-4 mt-4 rounded">
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
    </div>
  );
}
