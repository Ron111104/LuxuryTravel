export default function ChatWithUsButton({ onClick }) {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <button
        className="bg-[#613842] text-white px-3 py-2 text-sm font-semibold tracking-wider hover:bg-[#8a4c5c] transition-colors origin-left -rotate-90"
        onClick={onClick}
      >
        CHAT WITH US
      </button>
    </div>
  );
}
