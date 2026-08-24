import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ExploreEnergyStones() {
  const [touchStart, setTouchStart] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTouchStart = (e) => {
    if (isAnimating) return;

    setTouchStart(e.touches[0].clientX);
    setDragX(0);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isAnimating) return;

    const currentX = e.touches[0].clientX;
    const difference = currentX - touchStart;

    setDragX(difference);
  };

  const handleTouchEnd = () => {
    if (!isDragging || isAnimating) return;

    setIsDragging(false);

    const minSwipeDistance = 50;

    // Swipe detected
    if (Math.abs(dragX) > minSwipeDistance) {
      setIsAnimating(true);

      // Small delay so the swipe feels smooth
      setTimeout(() => {
        setDragX(0);
        setIsAnimating(false);
      }, 300);
    } else {
      // Not enough swipe → return to original position
      setDragX(0);
    }
  };

  return (
    <section className="bg-[#fff3df] py-4">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="!text-[22px] !font-bold !text-[#1f2940] !sm:text-[24px] !md:text-[28px]"
          style={{ color: "#000000" }}
          >
            Explore Energy Stones
          </h2>

          <button className="text-[16px] text-[#1f2940] underline transition hover:opacity-80 sm:text-[18px]">
            View all
          </button>
        </div>

        {/* Products */}
        <div
          className="
            overflow-hidden
            lg:overflow-visible
          "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`
              grid
              grid-rows-5
              grid-flow-col
              auto-cols-[calc(100%-80px)]
              gap-3

              overflow-x-auto
              snap-x
              snap-mandatory
              scroll-smooth

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              lg:grid-flow-row
              lg:grid-rows-none
              lg:grid-cols-4
              lg:auto-cols-auto
              lg:gap-6
              lg:overflow-visible
              lg:snap-none

              ${
                isDragging
                  ? "transition-none"
                  : "transition-transform duration-300 ease-out"
              }
            `}
            style={{
              transform: `translateX(${dragX}px)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="
                  min-w-0
                  snap-start
                "
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}