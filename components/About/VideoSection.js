import React, { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "dQw4w9WgXcQ";
 // Replace with your video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="text-center py-16">
      <h2 className="text-4xl font-bold mb-6">Discover More</h2>
      <div className="relative w-full max-w-5xl mx-auto aspect-video">
        {!isPlaying ? (
          <div
            className="relative cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnailUrl}
              alt="Video Thumbnail"
              className="w-full h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Adams & Butler Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
