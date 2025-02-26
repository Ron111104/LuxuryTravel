export default function GoToTopButton() {
    // Smoothly scroll back to top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 w-10 h-10 rounded-full bg-[#613842] text-white flex items-center justify-center hover:bg-[#8a4c5c] transition-colors z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    );
  }
  