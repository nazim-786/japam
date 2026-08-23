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

  // Mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Responsive products count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        // Tablet / iPad
        setItemsPerView(2);
      } else {
        // Desktop
        setItemsPerView(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Reset carousel when screen size changes
  useEffect(() => {
    setStartIndex(0);
    setDragX(0);
  }, [itemsPerView]);

  const visibleProducts = products.slice(
    startIndex,
    startIndex + itemsPerView
  );

  // =========================
  // PRODUCT NAVIGATION
  // =========================

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

  // =========================
  // MOBILE TOUCH START
  // =========================

  const handleTouchStart = (e) => {
    if (window.innerWidth >= 640) return;
    if (isAnimating) return;

    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
  };

  // =========================
  // MOBILE TOUCH MOVE
  // =========================

  const handleTouchMove = (e) => {
    if (window.innerWidth >= 640) return;
    if (!isDragging || isAnimating) return;

    const currentX = e.touches[0].clientX;
    const difference = currentX - touchStart;
    let movement = difference;

    if (startIndex === 0 && movement > 0) {
      movement = movement * 0.25;
    }
    if (
      startIndex >= products.length - itemsPerView &&
      movement < 0
    ) {
      movement = movement * 0.25;
    }

    setDragX(movement);
  };

  // =========================
  // MOBILE TOUCH END
  // =========================

  const handleTouchEnd = () => {
    if (window.innerWidth >= 640) return;
    if (!isDragging || isAnimating) return;

    setIsDragging(false);

    const screenWidth = window.innerWidth;

    /*
      Mobile card width:
      viewport - 120px
    */

    const cardWidth = screenWidth - 120;
    const gap = 12;
    const slideDistance = cardWidth + gap;

    /*
      Minimum swipe distance
    */

    const minSwipeDistance = 50;

    // =========================
    // SWIPE LEFT
    // =========================

    if (
      dragX < -minSwipeDistance &&
      startIndex < products.length - itemsPerView
    ) {
      setIsAnimating(true);
      setDragX(-slideDistance);
      setTimeout(() => {
        setStartIndex((prev) => prev + 1);

        // Animation reset
        setDragX(0);

        setTimeout(() => {
          setIsAnimating(false);
        }, 20);
      }, 300);

      return;
    }

    // =========================
    // SWIPE RIGHT
    // =========================

    if (
      dragX > minSwipeDistance &&
      startIndex > 0
    ) {
      setIsAnimating(true);
      setDragX(slideDistance);
      setTimeout(() => {
        setStartIndex((prev) => prev - 1);

        // Animation reset
        setDragX(0);

        setTimeout(() => {
          setIsAnimating(false);
        }, 20);
      }, 300);

      return;
    }

    // =========================
    // NOT ENOUGH SWIPE
    // CARD BACK TO ORIGINAL POSITION
    // =========================

    setDragX(0);
  };

  // =========================
  // IMAGE NEXT
  // =========================

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

  // =========================
  // IMAGE PREVIOUS
  // =========================

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

  // =========================
  // ARROW STATUS
  // =========================

  const isFirstProduct = startIndex === 0;

  const isLastProduct =
    startIndex + itemsPerView >= products.length;

  // =========================
  // PROGRESS
  // =========================

  const progressWidth =
    products.length > 0
      ? ((startIndex + itemsPerView) /
          products.length) *
        100
      : 0;

  return (
    <section className="bg-[#fff3df] pt-6 pb-10">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flex justify-between items-center mb-4">

          <h2   className="!text-[13px] sm:!text-[21px] lg:!text-[25px] font-bold"
  style={{ color: "#000000" }}
>
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

        {/* =========================
            CAROUSEL AREA
        ========================= */}

        <div className="relative">

          {/* =========================
              SECTION ARROWS

              Mobile hidden
          ========================= */}

          <div
            className="
              hidden
              sm:flex
              absolute
              right-[-12px]
              lg:right-[-24px]
              top-[150px]
              lg:top-[170px]
              z-50
              flex-col
              gap-3
            "
          >

            {/* NEXT */}

            <button
              onClick={nextProducts}
              disabled={isLastProduct}
              className={`
                w-11
                h-11
                lg:w-12
                lg:h-12
                rounded-full
                flex
                items-center
                justify-center
                shadow-md
                transition-all
                duration-300

                ${
                  isLastProduct
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white hover:scale-105"
                }
              `}
            >
              <FaChevronRight />
            </button>

            {/* PREVIOUS */}

            <button
              onClick={prevProducts}
              disabled={isFirstProduct}
              className={`
                w-11
                h-11
                lg:w-12
                lg:h-12
                rounded-full
                flex
                items-center
                justify-center
                shadow-md
                transition-all
                duration-300

                ${
                  isFirstProduct
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-[#2E3148] text-white hover:scale-105"
                }
              `}
            >
              <FaChevronLeft />
            </button>

          </div>

          {/* =========================
              PRODUCTS
          ========================= */}

          <div
            className="
              flex
              sm:grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-3
              sm:gap-5
              overflow-hidden
              select-none
              touch-pan-y
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
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
                  className="
                    group
                    cursor-pointer
                    flex-shrink-0
                    w-[calc(100vw-120px)]
                    sm:w-auto
                    sm:flex-shrink
                  "
                  style={{
                    transform:
                      window.innerWidth < 640
                        ? `translateX(${dragX}px)`
                        : "none",

                    transition:
                      isDragging
                        ? "none"
                        : "transform 300ms ease-out",
                  }}
                >

                  {/* =========================
                      IMAGE
                  ========================= */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[10px]
                    "
                  >

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

                    {/* DISCOUNT */}

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

                    {/* =========================
                        PREVIOUS IMAGE

                        MOBILE HIDDEN
                    ========================= */}

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
                        hidden
                        sm:flex

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

                    {/* =========================
                        NEXT IMAGE

                        MOBILE HIDDEN
                    ========================= */}

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

                  {/* =========================
                      CONTENT
                  ========================= */}

                  <div className="pt-4">

                    {/* TITLE */}

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

                    {/* RATING */}

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

                    {/* PRICE */}

                    <div className="flex items-center gap-3 mt-2">

                      <span
                        className="
                          text-[19px]
                          font-bold
                          text-[#1F2340]
                        "
                      >
                        ₹{item.price}
                      </span>

                      <span
                        className="
                          text-[16px]
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
            })}

          </div>

        </div>

        {/* =========================
            PROGRESS LINE
        ========================= */}

        <div
          className="
            mt-8
            h-[2px]
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
              width: `${Math.min(
                progressWidth,
                100
              )}%`,
            }}
          />

        </div>

      </div>

    </section>
  );
};

export default ProductCarousel;