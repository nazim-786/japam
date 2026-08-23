
import { useEffect, useState } from "react";
import { products } from "../data/products";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ProductCarousel = () => {
  const [imageIndexes, setImageIndexes] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Responsive products count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        // Tablet / iPad
        setItemsPerView(2);
      } else {
        // Laptop / Desktop
        setItemsPerView(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleProducts = products.slice(
    startIndex,
    startIndex + itemsPerView
  );

  const nextProducts = () => {
    if (startIndex < products.length - itemsPerView) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevProducts = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // Mobile swipe start
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Mobile swipe end
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
  };

  // Detect swipe direction
  useEffect(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    // Minimum swipe distance
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) {
      return;
    }

    // Swipe left = next product
    if (distance > 0) {
      nextProducts();
    }

    // Swipe right = previous product
    if (distance < 0) {
      prevProducts();
    }

    setTouchStart(0);
    setTouchEnd(0);
  }, [touchEnd]);

  const nextImage = (id, totalImages, e) => {
    e.stopPropagation();

    setImageIndexes((prev) => ({
      ...prev,
      [id]: Math.min(
        (prev[id] || 0) + 1,
        totalImages - 1
      ),
    }));
  };

  const prevImage = (id, totalImages, e) => {
    e.stopPropagation();

    setImageIndexes((prev) => ({
      ...prev,
      [id]: Math.max(
        (prev[id] || 0) - 1,
        0
      ),
    }));
  };

  return (
    <section className="bg-[#fff3df] pt-6 pb-10">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">

          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold">
            Best Rakhi Ever
          </h2>

          <button
            className="
              text-[15px]
              sm:text-[17px]
              text-[#1F2340]
              border-b
              border-[#1F2340]
              pb-[2px]
              hover:opacity-80
              transition-all
              duration-300
            "
          >
            View all
          </button>

        </div>

        <div className="relative">

          {/* Section Slider Arrows
              Desktop + Tablet only
              Hidden on Mobile
          */}

          <div className="hidden sm:flex absolute right-[-12px] lg:right-[-24px] top-[150px] lg:top-[170px] z-50 flex-col gap-3">

            {/* Next Product */}
            <button
              onClick={nextProducts}
              disabled={
                startIndex + itemsPerView >= products.length
              }
              className={`
                w-11 h-11 lg:w-12 lg:h-12
                rounded-full
                flex items-center justify-center
                shadow-md

                ${
                  startIndex + itemsPerView >= products.length
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white"
                }
              `}
            >
              <FaChevronRight />
            </button>

            {/* Previous Product */}
            <button
              onClick={prevProducts}
              disabled={startIndex === 0}
              className={`
                w-11 h-11 lg:w-12 lg:h-12
                rounded-full
                flex items-center justify-center
                shadow-md

                ${
                  startIndex === 0
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white"
                }
              `}
            >
              <FaChevronLeft />
            </button>

          </div>


          {/* Products */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5

              touch-pan-y
              select-none
            "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            {visibleProducts.map((item) => {

              const currentIndex =
                imageIndexes[item.id] || 0;

              const images = item.images;

              const isFirstImage =
                currentIndex === 0;

              const isLastImage =
                currentIndex === images.length - 1;

              return (
                <div
                  key={item.id}
                  className="group cursor-pointer min-w-0"
                >

                  {/* Image */}

                  <div className="relative overflow-hidden rounded-[10px]">

                    <img
                      src={images[currentIndex]}
                      alt={item.title}
                      draggable="false"
                      className="
                        w-full
                        h-[260px]
                        sm:h-[300px]
                        lg:h-[320px]
                        object-cover
                      "
                    />


                    {/* Discount */}

                    <span
                      className="
                        absolute
                        top-0
                        left-0

                        min-w-[80px]
                        px-3
                        h-[32px]

                        bg-[#D94A43]
                        text-white
                        text-[12px]
                        font-semibold

                        flex
                        items-center
                        justify-center

                        rounded-br-md
                      "
                    >
                      {item.discount}
                    </span>


                    {/* Previous Image
                        Hidden on Mobile
                    */}

                    <button
                      onClick={(e) =>
                        prevImage(
                          item.id,
                          images.length,
                          e
                        )
                      }
                      disabled={isFirstImage}
                      className={`
                        hidden sm:flex

                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2

                        w-10
                        h-10
                        rounded-full

                        items-center
                        justify-center

                        opacity-0
                        group-hover:opacity-100

                        transition-all
                        duration-300

                        ${
                          isFirstImage
                            ? "bg-white/80 text-gray-300 cursor-not-allowed"
                            : "bg-white text-[#1F2340] shadow-md"
                        }
                      `}
                    >
                      <FaChevronLeft />
                    </button>


                    {/* Next Image
                        Hidden on Mobile
                    */}

                    <button
                      onClick={(e) =>
                        nextImage(
                          item.id,
                          images.length,
                          e
                        )
                      }
                      disabled={isLastImage}
                      className={`
                        hidden sm:flex

                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2

                        w-10
                        h-10
                        rounded-full

                        items-center
                        justify-center

                        opacity-0
                        group-hover:opacity-100

                        transition-all
                        duration-300

                        ${
                          isLastImage
                            ? "bg-white/80 text-gray-300 cursor-not-allowed"
                            : "bg-white text-[#1F2340] shadow-md"
                        }
                      `}
                    >
                      <FaChevronRight />
                    </button>

                  </div>


                  {/* Content */}

                  <div className="pt-4">

                    <h3
                      className="
                        text-[18px]
                        font-semibold
                        text-[#1F2340]
                        leading-7
                        line-clamp-3
                        min-h-[78px]
                        whitespace-pre-line
                      "
                    >
                      {item.title}
                    </h3>


                    {/* Rating */}

                    <div className="flex items-center gap-2">

                      <div className="flex text-[#D94A43]">

                        {[...Array(item.rating)].map(
                          (_, index) => (
                            <FaStar key={index} />
                          )
                        )}

                      </div>

                      <span className="text-[13px] text-gray-500">
                        ({item.reviews})
                      </span>

                    </div>


                    {/* Price */}

                    <div className="flex items-center gap-3 mt-2">

                      <span className="text-[19px] font-bold text-[#1F2340]">
                        ₹{item.price}
                      </span>

                      <span className="text-[16px] text-gray-400 line-through">
                        ₹{item.oldPrice}
                      </span>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* Progress Line */}

        <div className="mt-8 h-[2px] bg-[#1F2340]/15 relative">

          <div
            className="
              absolute
              top-0
              left-0
              h-full
              bg-[#1F2340]
              transition-all
              duration-300
            "
            style={{
              width: `${
                ((startIndex + itemsPerView) /
                  products.length) *
                100
              }%`,
            }}
          />

        </div>

      </div>

    </section>
  );
};

export default ProductCarousel;
