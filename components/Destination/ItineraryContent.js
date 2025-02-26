// /components/Destination/ItineraryContent.js
import DayCard from "./DayCard";

export default function ItineraryContent({ itinerary }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {Object.keys(itinerary)
        .filter((key) => key !== "image") // skip the top-level image key
        .map((dayKey, index) => {
          const dayData = itinerary[dayKey];
          return <DayCard key={index} dayKey={dayKey} dayData={dayData} />;
        })}
    </div>
  );
}
