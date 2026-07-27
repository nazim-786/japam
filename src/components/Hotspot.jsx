import { FiPlus, FiX } from "react-icons/fi";

export default function Hotspot({
  top,
  left,
  title,
  description,
  isOpen,
  onClick,
}) {
  return (
    <div
      className="absolute z-20"
      style={{
        top,
        left,
      }}
    >
      {/* Plus Button */}

      <button
        onClick={onClick}
        className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center text-xl shadow-lg transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <FiX /> : <FiPlus />}
      </button>

      {/* Popup */}

      {isOpen && (
        <div className="absolute top-14 left-0 w-72 bg-white shadow-2xl p-6 z-30">

          {/* Small Arrow */}

          <div className="absolute -top-2 left-5 w-4 h-4 bg-white rotate-45"></div>

          <h3 className="text-lg font-semibold text-[#23254c] relative z-10">
            {title}
          </h3>

          <p className="mt-3 text-[15px] leading-6 text-gray-600 relative z-10">
            {description}
          </p>

        </div>
      )}
    </div>
  );
}