import { useState } from "react";

export default function ContactForm() {
<<<<<<< HEAD
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
=======
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
>>>>>>> f3f60a7 (Your commit message here)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
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
=======

    try {
      const response = await fetch("http://localhost:5001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("✅ Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setResponseMessage("❌ Failed to submit form. Please try again.");
>>>>>>> f3f60a7 (Your commit message here)
    }
  };

  return (
    <div className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm">
<<<<<<< HEAD
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
=======
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className="w-full border border-stone-200 rounded-sm p-3"
            value={formData.name} onChange={handleChange} />
>>>>>>> f3f60a7 (Your commit message here)
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="email">Email</label>
<<<<<<< HEAD
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
          />
=======
          <input id="email" name="email" type="email" required className="w-full border border-stone-200 rounded-sm p-3"
            value={formData.email} onChange={handleChange} />
>>>>>>> f3f60a7 (Your commit message here)
        </div>

        {/* Phone Field */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="phone">Phone</label>
<<<<<<< HEAD
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow"
          />
=======
          <input id="phone" name="phone" type="tel" className="w-full border border-stone-200 rounded-sm p-3"
            value={formData.phone} onChange={handleChange} />
>>>>>>> f3f60a7 (Your commit message here)
        </div>

        {/* Message Field */}
        <div>
<<<<<<< HEAD
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
=======
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={5} className="w-full border border-stone-200 rounded-sm p-3"
            value={formData.message} onChange={handleChange}></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-stone-900 text-white py-4 px-8 rounded-sm font-medium hover:bg-stone-800">
          SUBMIT
        </button>

        {/* Response Message */}
        {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
>>>>>>> f3f60a7 (Your commit message here)
      </form>
    </div>
  );
}