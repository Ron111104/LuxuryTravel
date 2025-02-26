export default function ContactForm() {
    return (
      <div className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm">
        <form className="space-y-8">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-stone-600"
              htmlFor="name"
            >
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
            <label
              className="block mb-2 text-sm font-medium text-stone-600"
              htmlFor="email"
            >
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
            <label
              className="block mb-2 text-sm font-medium text-stone-600"
              htmlFor="phone"
            >
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
            <label
              className="block mb-2 text-sm font-medium text-stone-600"
              htmlFor="message"
            >
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
    );
  }
  