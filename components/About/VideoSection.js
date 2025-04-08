'use client';
import React, { useState, useEffect } from 'react';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="text-center py-16 bg-gray-50 relative">
      <h2 className="text-4xl font-playfair font-bold mb-8 text-[#613842]">
        Discover More
      </h2>

      <div className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-lg shadow-lg">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(true)}
          className="relative cursor-pointer group outline-none"
          aria-label="Play Video"
        >
          <img
            src={thumbnailUrl}
            alt="Video Thumbnail"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-[#613842]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Luxury Travel Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
              aria-label="Close Video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
