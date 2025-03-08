export default function ContactForm() {
  return (
    <div className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm">
      <form className="space-y-8">
        {/* Name Field */}
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

        {/* Email Field */}
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

        {/* Phone Field */}
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

        {/* Message Field with Watermark */}
        <div>
          <label className="block mb-2 text-sm font-medium text-stone-600" htmlFor="message">
            Message <span className="text-gray-500">(Special Requests, if any)</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Write your special requests here..."
            className="w-full border border-stone-200 rounded-sm p-3 focus:outline-none focus:ring-1 focus:ring-stone-400 transition-shadow resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-stone-900 text-white py-4 px-8 rounded-sm font-medium hover:bg-stone-800 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
