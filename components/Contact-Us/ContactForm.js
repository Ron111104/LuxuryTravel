import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Something went wrong. Please try again.");

      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm">
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
          />
        </div>

        {/* Message Field with Watermark */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="message">Message <span className="text-gray-500">(Special Requests, if any)</span></label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your special requests here..."
            className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-stone-900 text-white py-4 px-8 rounded-sm font-medium hover:bg-stone-800 transition-colors duration-300"
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>

        {/* Success & Error Messages */}
        {success && <p className="text-green-600 mt-2">{success}</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
}