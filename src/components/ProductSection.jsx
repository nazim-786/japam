import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCarousel from "./ProductCarousel";
import { products } from "../data/data";

export default function ProductSection() {
  const visibleCards = 5;
  const cardWidth = 260; // Card width + gap

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(products.length - visibleCards, 0);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const progress =
    maxIndex === 0 ? 100 : ((currentIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <section className="bg-[#f8efe3] pt-10 pb-0">
      <div className="max-w-[1320px] mx-auto px-4">

        {/* Heading + Arrows */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[48px] font-bold text-[#23254c]">
            Sharks' Favourites
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center disabled:opacity-40 hover:bg-[#23254c] hover:text-white transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center disabled:opacity-40 hover:bg-[#23254c] hover:text-white transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {products.map((item) => (
              <div key={item.id} className="min-w-[240px] flex-shrink-0">
                <ProductCarousel product={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Line */}
        <div className="mt-8 h-[3px] bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#23254c] transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>
    </section>
  );
}