import { useEffect, useRef, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

export default function Hotspot({
  top,
  left,
  title,
  description,
  isOpen,
  onClick,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [popupStyle, setPopupStyle] = useState({});

  const buttonRef = useRef(null);

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateMobile();

    window.addEventListener("resize", updateMobile);

    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  useEffect(() => {
    if (!isOpen || !isMobile || !buttonRef.current) return;

    const updatePopupPosition = () => {
      const button = buttonRef.current.getBoundingClientRect();

      const popupWidth = Math.min(window.innerWidth - 24, 380);
      const gap = 10;

      // Button ke center ko popup ka center banayenge
      let popupLeft = button.left + button.width / 2 - popupWidth / 2;

      // Left side se bahar na jaaye
      if (popupLeft < 12) {
        popupLeft = 12;
      }

      // Right side se bahar na jaaye
      if (popupLeft + popupWidth > window.innerWidth - 12) {
        popupLeft = window.innerWidth - popupWidth - 12;
      }

      // Normally popup button ke neeche aayega
      let popupTop = button.bottom + gap;

      // Agar neeche enough space nahi hai,
      // to popup button ke upar aa jayega
      const estimatedPopupHeight = 180;

      if (
        popupTop + estimatedPopupHeight >
        window.innerHeight - 12
      ) {
        popupTop = button.top - estimatedPopupHeight - gap;
      }

      // Top se bhi bahar na jaaye
      if (popupTop < 12) {
        popupTop = 12;
      }

      setPopupStyle({
        left: `${popupLeft}px`,
        top: `${popupTop}px`,
        width: `${popupWidth}px`,
      });
    };

    updatePopupPosition();

    window.addEventListener("resize", updatePopupPosition);
    window.addEventListener("scroll", updatePopupPosition);

    return () => {
      window.removeEventListener("resize", updatePopupPosition);
      window.removeEventListener("scroll", updatePopupPosition);
    };
  }, [isOpen, isMobile]);

  return (
    <div
      className="absolute z-30"
      style={{
        top,
        left,
      }}
    >
      {/* Plus / Close Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        aria-label={isOpen ? "Close information" : "Open information"}
        className="
          flex
          h-9
          w-9
          -translate-x-1/2
          -translate-y-1/2
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-black
          text-lg
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          sm:h-10
          sm:w-10
          sm:text-xl
          md:h-11
          md:w-11
        "
      >
        {isOpen ? <FiX /> : <FiPlus />}
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          style={isMobile ? popupStyle : undefined}
          className={
            isMobile
              ? `
                fixed
                z-[9999]
                rounded-2xl
                bg-white
                px-4
                py-4
                shadow-2xl
                max-h-[60vh]
                overflow-y-auto
                overflow-x-hidden
              `
              : `
                absolute
                left-1/2
                top-14
                z-30
                w-64
                -translate-x-1/2
                rounded-2xl
                bg-white
                p-5
                shadow-2xl
                sm:w-72
              `
          }
        >
          {/* Desktop Arrow */}
          {!isMobile && (
            <div
              className="
                absolute
                -top-2
                left-1/2
                h-4
                w-4
                -translate-x-1/2
                rotate-45
                bg-white
              "
            />
          )}

          {/* Heading */}
          <h3
            className="
              relative
              z-10
              m-0
              w-full
              !min-w-0
              break-words
              [overflow-wrap:anywhere]
              !text-[14px]
              !font-semibold
              leading-5
              !text-black
              !sm:text-lg
              sm:leading-6
              
            "
            style={{ color: "#000000" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              relative
              z-10
              m-0
              mt-2
              w-full
              min-w-0
              break-words
              [overflow-wrap:anywhere]
              text-[12px]
              leading-[18px]
              text-gray-600
              sm:mt-3
              sm:text-[15px]
              sm:leading-6
            "
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}