import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { collections } from "../data/collections";

const CollectionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        // Mobile → 2 full + half of 3rd
        setItemsPerView(2.5);
      } else if (window.innerWidth < 1024) {
        // Tablet / iPad → 3 full + half of 4th
        setItemsPerView(3.5);
      } else {
        // Laptop / Desktop → 6 full
        setItemsPerView(6);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  // Maximum possible slide
  const maxIndex = Math.max(
    Math.ceil(collections.length - itemsPerView),
    0
  );

  // Make sure index doesn't go outside after screen resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, maxIndex)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  // -------------------------
  // TOUCH / SWIPE
  // -------------------------

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance =
      touchStartX.current - touchEndX.current;

    const minSwipeDistance = 50;

    // Swipe left → next
    if (distance > minSwipeDistance) {
      nextSlide();
    }

    // Swipe right → previous
    if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Progress
  const totalPositions = maxIndex + 1;

  const progress =
    totalPositions > 0
      ? ((currentIndex + 1) / totalPositions) * 100
      : 0;

  return (
    <section className="bg-[#fff3df] py-8 sm:py-10 lg:py-10 overflow-hidden">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-0">

        <div className="relative group">

          {/* Heading */}
          <h2
            className="
              absolute
              left-2
              sm:left-2
              lg:-left-2
              -top-3
              sm:-top-4
              z-20
              text-[24px]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[42px]
              font-bold
              text-[#16233d]
              whitespace-nowrap
            "
          >
            Shop Our Collections
          </h2>

          {/* -------------------------
              DESKTOP ARROWS
          ------------------------- */}
          <div
            className="
              hidden
              lg:flex
              absolute
              right-[-45px]
              top-[110px]
              z-40
              flex-col
              gap-3
            "
          >
            {/* Next */}
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                shadow-md
                transition-all
                duration-300
                opacity-0
                group-hover:opacity-100
                ${
                  currentIndex >= maxIndex
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white hover:scale-105"
                }
              `}
            >
              <FaChevronRight />
            </button>

            {/* Previous */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                shadow-md
                transition-all
                duration-300
                opacity-0
                group-hover:opacity-100
                ${
                  currentIndex === 0
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white hover:scale-105"
                }
              `}
            >
              <FaChevronLeft />
            </button>
          </div>

          {/* -------------------------
              COLLECTIONS
          ------------------------- */}
          <div
            className="
              overflow-hidden
              pt-10
              sm:pt-10
              lg:pt-8
              touch-pan-y
              select-none
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="
                flex
                transition-transform
                duration-500
                ease-in-out
              "
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {collections.map((item) => (
                <div
                  key={item.id}
                  className={`
                    flex-shrink-0
                    ${
                      itemsPerView === 2.5
                        ? "basis-[40%]"
                        : itemsPerView === 3.5
                        ? "basis-[28.5714%]"
                        : "basis-1/6"
                    }
                    px-2
                    sm:px-2
                    lg:px-3
                    text-center
                    cursor-pointer
                    box-border
                  `}
                >
                  {/* Image */}
                  <div
                    className="
                      w-[105px]
                      h-[105px]
                      mx-auto
                      rounded-full
                      overflow-hidden

                      sm:w-[130px]
                      sm:h-[130px]

                      md:w-[150px]
                      md:h-[150px]

                      lg:w-[160px]
                      lg:h-[160px]

                      xl:w-[190px]
                      xl:h-[190px]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable="false"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-3
                      sm:mt-4
                      text-[13px]
                      sm:text-[15px]
                      md:text-[16px]
                      lg:text-[17px]
                      font-medium
                      text-[#16233d]
                      leading-snug
                      px-1
                    "
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------
              PROGRESS BAR
          ------------------------- */}
          <div
            className="
              mt-8
              sm:mt-10
              lg:mt-12
              w-full
              h-[3px]
              bg-[#d6d6d6]
              overflow-hidden
            "
          >
            <div
              className="
                h-full
                bg-[#16233d]
                transition-all
                duration-500
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollectionCarousel;