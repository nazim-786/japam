import { useRef, useState } from "react";
import combo from "../data/combo";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ITEMS_PER_VIEW = 4;

const SaveCombos = () => {
  const [imageIndexes, setImageIndexes] = useState({});
  const [startIndex, setStartIndex] = useState(0);

  // Mobile product slider
  const mobileSliderRef = useRef(null);

  // Image swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const visibleProducts = combo.slice(
    startIndex,
    startIndex + ITEMS_PER_VIEW
  );

  // -----------------------------
  // DESKTOP PRODUCT SLIDER
  // -----------------------------

  const nextProducts = () => {
    if (startIndex < combo.length - ITEMS_PER_VIEW) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevProducts = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  // -----------------------------
  // PRODUCT IMAGE
  // -----------------------------

  const nextImage = (id, totalImages, e) => {
    e?.stopPropagation();

    setImageIndexes((prev) => ({
      ...prev,
      [id]: Math.min(
        (prev[id] || 0) + 1,
        totalImages - 1
      ),
    }));
  };

  const prevImage = (id, e) => {
    e?.stopPropagation();

    setImageIndexes((prev) => ({
      ...prev,
      [id]: Math.max(
        (prev[id] || 0) - 1,
        0
      ),
    }));
  };

  // -----------------------------
  // MOBILE IMAGE SWIPE
  // -----------------------------

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (id, totalImages) => {
    const distance =
      touchStartX.current - touchEndX.current;

    // Minimum swipe distance
    if (Math.abs(distance) < 40) return;

    if (distance > 0) {
      // Swipe left → next image
      setImageIndexes((prev) => ({
        ...prev,
        [id]: Math.min(
          (prev[id] || 0) + 1,
          totalImages - 1
        ),
      }));
    } else {
      // Swipe right → previous image
      setImageIndexes((prev) => ({
        ...prev,
        [id]: Math.max(
          (prev[id] || 0) - 1,
          0
        ),
      }));
    }
  };

  return (
    <section className="bg-[#fff3df] py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="flex justify-between items-center mb-5 sm:mb-6">
          <h2
            className="
              text-[24px]
              sm:text-[30px]
              md:text-[36px]
              lg:text-[45px]
              !font-bold
              text-[#1F2340]
              leading-[1.2]
            "
            style={{ color: "#000000" }}
          >
            Save More With Combos
          </h2>

          <button
            className="
              shrink-0
              ml-4
              text-[13px]
              sm:text-[15px]
              lg:text-[18px]
              text-[#1F2340]
              border-b
              border-[#1F2340]
              pb-0.5
              hover:opacity-70
              transition
            "
          >
            View all
          </button>
        </div>

        {/* ================= PRODUCT AREA ================= */}

        <div className="relative group">

          {/* DESKTOP SECTION ARROWS */}

          <div
            className="
              hidden
              lg:flex
              absolute
              right-[-45px]
              top-[185px]
              z-40
              flex-col
              gap-3
            "
          >
            <button
              onClick={nextProducts}
              disabled={
                startIndex + ITEMS_PER_VIEW >= combo.length
              }
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
                  startIndex + ITEMS_PER_VIEW >= combo.length
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white hover:scale-105"
                }
              `}
            >
              <FaChevronRight />
            </button>

            <button
              onClick={prevProducts}
              disabled={startIndex === 0}
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
                  startIndex === 0
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white hover:scale-105"
                }
              `}
            >
              <FaChevronLeft />
            </button>
          </div>

          {/* ================================================= */}
          {/* MOBILE PRODUCT SWIPER */}
          {/* 1 CARD FULL + NEXT CARD HALF VISIBLE */}
          {/* ================================================= */}

          <div
            ref={mobileSliderRef}
            className="
              flex
              lg:hidden
              gap-3
              sm:gap-4

              overflow-x-auto
              overflow-y-hidden

              snap-x
              snap-mandatory

              scrollbar-hide

              touch-pan-x

              pb-2

              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {combo.map((item) => {
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
                  className="
                    shrink-0
                    snap-start

                    w-[78%]
                    sm:w-[48%]
                    md:w-[47%]
                  "
                >
                  <ProductCard
                    item={item}
                    currentIndex={currentIndex}
                    images={images}
                    isFirstImage={isFirstImage}
                    isLastImage={isLastImage}
                    nextImage={nextImage}
                    prevImage={prevImage}
                    handleTouchStart={handleTouchStart}
                    handleTouchMove={handleTouchMove}
                    handleTouchEnd={handleTouchEnd}
                  />
                </div>
              );
            })}
          </div>

          {/* ================================================= */}
          {/* DESKTOP PRODUCT GRID */}
          {/* ================================================= */}

          <div
            className="
              hidden
              lg:grid
              grid-cols-4
              gap-5
            "
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
                <ProductCard
                  key={item.id}
                  item={item}
                  currentIndex={currentIndex}
                  images={images}
                  isFirstImage={isFirstImage}
                  isLastImage={isLastImage}
                  nextImage={nextImage}
                  prevImage={prevImage}
                  handleTouchStart={handleTouchStart}
                  handleTouchMove={handleTouchMove}
                  handleTouchEnd={handleTouchEnd}
                />
              );
            })}
          </div>
        </div>

        {/* ================= PROGRESS LINE ================= */}

        <div
          className="
            mt-6
            sm:mt-8
            h-0.5
            bg-[#1F2340]/15
            relative
          "
        >
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
                ((startIndex + ITEMS_PER_VIEW) /
                  combo.length) *
                100
              }%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};


// ======================================================
// PRODUCT CARD
// ======================================================

const ProductCard = ({
  item,
  currentIndex,
  images,
  isFirstImage,
  isLastImage,
  nextImage,
  prevImage,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) => {
  return (
    <div className="group cursor-pointer min-w-0">

      {/* ================= IMAGE ================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[8px]
          sm:rounded-[10px]
          bg-[#f3e4cd]
          aspect-square
        "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() =>
          handleTouchEnd(item.id, images.length)
        }
      >
        <img
          src={images[currentIndex]}
          alt={item.title}
          draggable="false"
          className="
            w-full
            h-full
            object-cover
            select-none
            transition-all
            duration-300
          "
        />

        {/* ================= DISCOUNT ================= */}

        <span
          className="
            absolute
            top-0
            left-0
            bg-[#D94A43]
            text-white
            text-[10px]
            sm:text-[12px]
            lg:text-[14px]
            font-semibold
            px-2
            sm:px-3
            py-1
            sm:py-1.5
            rounded-br-md
          "
        >
          {item.discount}
        </span>

        {/* ================= DESKTOP IMAGE ARROWS ================= */}

        <button
          onClick={(e) =>
            prevImage(item.id, e)
          }
          disabled={isFirstImage}
          className={`
            hidden
            sm:flex
            absolute
            left-2
            sm:left-4
            top-1/2
            -translate-y-1/2

            w-8
            h-8
            sm:w-10
            sm:h-10

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
          <FaChevronLeft className="text-xs sm:text-sm" />
        </button>

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
            hidden
            sm:flex
            absolute
            right-2
            sm:right-4
            top-1/2
            -translate-y-1/2

            w-8
            h-8
            sm:w-10
            sm:h-10

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
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>

        {/* MOBILE IMAGE DOTS */}

        <div
          className="
            absolute
            bottom-2
            left-1/2
            -translate-x-1/2

            flex
            gap-1

            sm:hidden
          "
        >
          {images.map((_, index) => (
            <span
              key={index}
              className={`
                w-1.5
                h-1.5
                rounded-full
                transition-all
                ${
                  index === currentIndex
                    ? "bg-[#1F2340] w-3"
                    : "bg-white/80"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="pt-3 sm:pt-4">

        <h3
          className="
            text-[13px]
            sm:text-[15px]
            lg:text-[18px]

            font-semibold
            text-[#1F2340]

            leading-5
            sm:leading-6
            lg:leading-7

            line-clamp-3

            min-h-[60px]
            sm:min-h-[72px]
            lg:min-h-[90px]
          "
        >
          {item.title}
        </h3>

        {/* ================= RATING ================= */}

        <div className="flex items-center gap-1.5 sm:gap-2 mt-2">
          <div className="flex text-[#D94A43] text-[11px] sm:text-sm">
            {[...Array(item.rating)].map(
              (_, index) => (
                <FaStar key={index} />
              )
            )}
          </div>

          <span className="text-[10px] sm:text-[12px] text-gray-500">
            ({item.reviews})
          </span>
        </div>

        {/* ================= PRICE ================= */}

        <div className="flex items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
          <span
            className="
              text-[15px]
              sm:text-[17px]
              lg:text-[18px]

              font-bold
              text-[#1F2340]
            "
          >
            ₹{item.price}
          </span>

          <span
            className="
              text-[12px]
              sm:text-[14px]
              lg:text-[16px]

              text-gray-400
              line-through
            "
          >
            ₹{item.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SaveCombos;