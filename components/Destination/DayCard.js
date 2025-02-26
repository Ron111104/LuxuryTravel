// /components/Destination/DayCard.js

export default function DayCard({ dayKey, dayData }) {
    return (
      <div className="mb-10 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Day Header */}
        <div className="relative">
          <img
            src={dayData.image}
            alt={`${dayKey} image`}
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-70">
            <h2 className="text-2xl font-serif font-bold text-gray-800">
              {dayKey}: {dayData.title}
            </h2>
          </div>
        </div>
  
        {/* Day Description & Activities */}
        <div className="p-6 space-y-6">
          {/* Display description if present */}
          {dayData.description && (
            <p className="text-gray-700 font-sans leading-relaxed whitespace-pre-line">
              {dayData.description}
            </p>
          )}
  
          {/* Display activities if present */}
          {dayData.activities && dayData.activities.length > 0 && (
            <div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
                Activities:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dayData.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex flex-col bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 bg-gray-200">
                      <img
                        src={activity.image || "/default-image.jpg"}
                        alt={activity.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="block text-lg font-semibold text-gray-800">
                        {activity.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  