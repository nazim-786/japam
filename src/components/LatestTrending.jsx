import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { trendingProducts } from "../data/trendingProducts";

const ProductCard = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex(
      (prev) => (prev + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setImageIndex(
      (prev) =>
        prev === 0
          ? product.images.length - 1
          : prev - 1
    );
  };

  return (
    <div className="min-w-0">

      {/* IMAGE CARD */}
      <div className="relative group overflow-hidden rounded-lg">

        {/* Discount Badge */}
        <div
          className="
            absolute
            top-0
            left-0
            z-20
            bg-[#d9534f]
            text-white
            px-2
            sm:px-3
            py-1
            text-[10px]
            sm:text-[12px]
            md:text-[13px]
            lg:text-[14px]
            font-semibold
          "
        >
          🏷 {product.discount} Off
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="
            absolute
            left-2
            sm:left-3
            top-1/2
            -translate-y-1/2
            z-20
            w-7
            h-7
            sm:w-9
            sm:h-9
            lg:w-10
            lg:h-10
            rounded-full
            bg-white/95
            shadow-md
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          <FaChevronLeft className="text-xs sm:text-sm" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="
            absolute
            right-2
            sm:right-3
            top-1/2
            -translate-y-1/2
            z-20
            w-7
            h-7
            sm:w-9
            sm:h-9
            lg:w-10
            lg:h-10
            rounded-full
            bg-white/95
            shadow-md
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>

        {/* Product Image */}
        <img
          src={product.images[imageIndex]}
          alt={product.title}
          className="
            w-full
            aspect-square
            object-cover
            rounded-lg
            transition-transform
            duration-500
            group-hover:scale-[1.02]
          "
        />
      </div>

      {/* Product Title */}
      <h3
        className="
          mt-2
          sm:mt-3
          text-[12px]
          sm:text-[14px]
          md:text-[15px]
          lg:text-[16px]
          xl:text-[17px]
          leading-tight
          font-semibold
          text-[#16233d]
          line-clamp-2
        "
      >
        {product.title}
      </h3>

      {/* Rating */}
      <div
        className="
          flex
          items-center
          gap-1
          mt-1
          text-[#d9534f]
          text-[11px]
          sm:text-xs
          md:text-sm
        "
      >
        ★★★★★
        <span className="text-gray-600 ml-1">(1)</span>
      </div>

      {/* Price */}
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-1
          sm:gap-2
          md:gap-3
          mt-1
          sm:mt-2
        "
      >
        <span
          className="
            text-[13px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[18px]
            font-bold
            text-[#16233d]
          "
        >
          ₹ {product.price}
        </span>

        <span
          className="
            text-gray-500
            line-through
            text-[11px]
            sm:text-[13px]
            md:text-[14px]
            lg:text-[16px]
          "
        >
          ₹ {product.oldPrice}
        </span>
      </div>
    </div>
  );
};

const LatestTrending = () => {
  const products = [
    ...trendingProducts,
    ...trendingProducts,
    ...trendingProducts,
  ];

  // Mobile swipe states
  const [touchStart, setTouchStart] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Current mobile product
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchStart = (e) => {
    if (isAnimating) return;

    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
    setDragX(0);
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

    const swipeThreshold = 50;

    if (Math.abs(dragX) > swipeThreshold) {
      setIsAnimating(true);

      if (dragX < 0) {
        // Swipe Left → Next
        setCurrentIndex((prev) =>
          Math.min(prev + 1, products.length - 1)
        );
      } else {
        // Swipe Right → Previous
        setCurrentIndex((prev) =>
          Math.max(prev - 1, 0)
        );
      }

      setDragX(0);

      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    } else {
      // Small movement → Reset
      setDragX(0);
    }
  };

  return (
    <section className="bg-[#fff3df] pt-0 pb-10">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

        {/* Heading */}
        <h2
          className="
            !text-[22px]
            !sm:text-[24px]
            !md:text-[26px]
            !lg:text-[28px]
            !font-bold
            !text-[#16233d]
            pb-4
            sm:pb-5
          "
          style={{ color: "#000000" }}
        >
          Latest & Trending
        </h2>

        {/* =====================================================
            MOBILE
            Touch Swipe Carousel
        ====================================================== */}
        <div
          className="
            md:hidden
            overflow-hidden
            pb-3
            touch-pan-y
          "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`
              flex
              gap-3
              sm:gap-4
              ${
                isDragging
                  ? "transition-none"
                  : "transition-transform duration-300 ease-out"
              }
            `}
            style={{
              transform: `translateX(calc(-${
                currentIndex * (window.innerWidth >= 640 ? 52 : 81)
              }% + ${dragX}px))`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="
                  flex-none
                  w-[78%]
                  sm:w-[48%]
                "
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            IPAD
            3 products per row
        ====================================================== */}
        <div
          className="
            hidden
            md:grid
            lg:hidden
            grid-cols-3
            gap-5
          "
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>

        {/* =====================================================
            LAPTOP + DESKTOP
            4 products per row
        ====================================================== */}
        <div
          className="
            hidden
            lg:grid
            grid-cols-4
            gap-5
            xl:gap-6
          "
        >
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestTrending;