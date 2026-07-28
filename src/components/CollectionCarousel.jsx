import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { collections } from "../data/collections";

const ITEMS_PER_VIEW = 5;

const CollectionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(
    collections.length / ITEMS_PER_VIEW
  );

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-[#f4efe6] py-14">
      <div className="max-w-[1320px] mx-auto px-4">

        {/* Heading */}
        <h2 className="text-[45px] md:text-[55px] font-bold text-[#16233d] mb-10">
          Shop Our Collections
        </h2>

        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-[42%] -translate-y-1/2 z-20
            w-11 h-11 rounded-full bg-white shadow-md
            flex items-center justify-center
            disabled:opacity-40"
          >
            <FaChevronLeft
              size={15}
              className="text-[#16233d]"
            />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex === totalSlides - 1}
            className="absolute right-0 top-[42%] -translate-y-1/2 z-20
            w-11 h-11 rounded-full bg-white shadow-md
            flex items-center justify-center
            disabled:opacity-40"
          >
            <FaChevronRight
              size={15}
              className="text-[#16233d]"
            />
          </button>

          {/* Collections */}
          <div className="overflow-hidden px-10">

            <div className="grid grid-cols-5 gap-8">
              {collections
                .slice(
                  currentIndex * ITEMS_PER_VIEW,
                  currentIndex * ITEMS_PER_VIEW + ITEMS_PER_VIEW
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="group text-center cursor-pointer"
                  >
                    <div className="w-[235px] h-[235px] mx-auto rounded-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-all
                          duration-500
                          ease-out
                          group-hover:scale-[1.04]
                        "
                      />
                    </div>

                    <h3
                      className="
                        mt-4
                        text-[18px]
                        font-semibold
                        text-[#16233d]
                        transition-all
                        duration-300
                        group-hover:text-[#7f5b2f]
                      "
                    >
                      {item.title}
                    </h3>
                  </div>
                ))}
            </div>

          </div>

          {/* Progress Bar */}
          <div className="mt-12 w-full h-[2px] bg-[#d6d6d6] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#16233d] transition-all duration-700 ease-in-out"
              style={{
                width: `${100 / totalSlides}%`,
                marginLeft: `${(100 / totalSlides) * currentIndex}%`,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CollectionCarousel;