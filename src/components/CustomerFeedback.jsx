import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaStar,
  FaRegCommentDots,
  FaBoxOpen,
  FaUndoAlt,
  FaPlane,
} from "react-icons/fa";
import reviews from "../data/reviews";

export default function CustomerFeedback() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Touch swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [visible, setVisible] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  // =========================================
  // RESPONSIVE VISIBLE SLIDES
  // =========================================
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        // Laptop / Desktop
        setVisible(3);
      } else if (width >= 768) {
        // Tablet / iPad
        setVisible(2);
      } else {
        // Mobile
        setVisible(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // =========================================
  // CREATE CLONED SLIDES FOR INFINITE LOOP
  // =========================================
  const slides = React.useMemo(() => {
    if (!reviews || reviews.length === 0) return [];

    if (reviews.length <= visible) {
      return [...reviews];
    }

    const prefix = reviews.slice(-visible);
    const suffix = reviews.slice(0, visible);

    return [...prefix, ...reviews, ...suffix];
  }, [visible]);

  const realStartIndex = React.useMemo(() => {
    return reviews.length <= visible ? 0 : visible;
  }, [visible]);

  // =========================================
  // RESET INDEX WHEN RESPONSIVE BREAKPOINT CHANGES
  // =========================================
  useEffect(() => {
    setCurrentIndex(realStartIndex);
  }, [realStartIndex]);

  // =========================================
  // MEASURE CONTAINER
  // =========================================
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  // =========================================
  // AUTOPLAY
  // =========================================
  useEffect(() => {
    if (!isPlaying) return undefined;

    intervalRef.current = setInterval(() => {
      if (reviews.length > visible) {
        setCurrentIndex((index) => index + 1);
      }
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, visible]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // =========================================
  // PREVIOUS
  // =========================================
  const handlePrev = () => {
    if (reviews.length <= visible) return;

    setCurrentIndex((index) => index - 1);
  };

  // =========================================
  // NEXT
  // =========================================
  const handleNext = () => {
    if (reviews.length <= visible) return;

    setCurrentIndex((index) => index + 1);
  };

  // =========================================
  // TOUCH SWIPE
  // =========================================
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance =
      touchStartX.current - touchEndX.current;

    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) < minSwipeDistance) {
      return;
    }

    // Swipe left
    if (swipeDistance > 0) {
      handleNext();
    }

    // Swipe right
    if (swipeDistance < 0) {
      handlePrev();
    }
  };

  // =========================================
  // SLIDE WIDTH
  // =========================================
  const slideWidthPx =
    containerWidth && visible
      ? containerWidth / visible
      : 0;

  // =========================================
  // INFINITE LOOP TRANSITION
  // =========================================
  const handleTransitionEnd = () => {
    if (reviews.length <= visible) return;

    // Reached cloned slides at end
    if (currentIndex >= reviews.length + visible) {
      setTransitionEnabled(false);

      setCurrentIndex((prev) => prev - reviews.length);

      setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
    }

    // Reached cloned slides at beginning
    if (currentIndex < visible) {
      setTransitionEnabled(false);

      setCurrentIndex((prev) => prev + reviews.length);

      setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
    }
  };

  // =========================================
  // RESET WHEN BREAKPOINT CHANGES
  // =========================================
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }

    setTransitionEnabled(false);
    setCurrentIndex(realStartIndex);

    setTimeout(() => {
      setTransitionEnabled(true);
    }, 20);
  }, [visible, realStartIndex]);

  // =========================================
  // TRACK STYLE
  // =========================================
  const trackStyle = React.useMemo(() => {
    const translate = -currentIndex * slideWidthPx;

    return {
      width: `${slides.length * slideWidthPx}px`,
      transform: `translateX(${translate}px)`,
      transition: transitionEnabled
        ? "transform 700ms ease-in-out"
        : "none",
    };
  }, [
    currentIndex,
    slideWidthPx,
    slides.length,
    transitionEnabled,
  ]);

  // =========================================
  // SLIDE STYLE
  // =========================================
  const slideStyle = {
    width: `${slideWidthPx}px`,
    boxSizing: "border-box",
  };

  if (!reviews || reviews.length === 0) return null;

  // =========================================
  // IF REVIEWS <= VISIBLE
  // =========================================
  if (reviews.length <= visible) {
    return (
      <section className="relative py-8 sm:py-10 md:py-12 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-800 text-center leading-tight">
            Over 1 Million+ Happy Customers
            <span className="ml-1 sm:ml-2">
              ❤️🙏
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 text-center mt-2">
            with thousands of 5-star reviews
          </p>

          {/* Cards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={r.image}
                  alt={r.title}
                  className="
                    w-full
                    object-cover
                    h-48
                    sm:h-52
                    md:h-56
                    lg:h-60
                    rounded-t-xl
                  "
                />

                <div className="p-4 sm:p-5 md:p-6">

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-red-600 text-xs sm:text-sm"
                      />
                    ))}
                  </div>

                  {/* Name */}
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-800">
                      {r.name}
                    </h3>

                    {r.verified && (
                      <span className="text-[10px] sm:text-xs bg-gray-800 text-white px-2 py-1 rounded">
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-center text-xs sm:text-sm font-bold mt-3 text-gray-800">
                    {r.title}
                  </h4>

                  {/* Review */}
                  <p className="text-center mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {r.text}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    );
  }

  // =========================================
  // MAIN COMPONENT
  // =========================================
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 bg-amber-50">

      <div className="max-w-6xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8">

        {/* =====================================
            HEADING
        ====================================== */}
        <h2 className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-4xl
          font-extrabold
          text-gray-800
          text-center
          leading-tight
        ">
          Over 1 Million+ Happy Customers
          <span className="ml-1 sm:ml-2">
            ❤️🙏
          </span>
        </h2>

        <p className="
          text-xs
          sm:text-sm
          text-gray-700
          text-center
          mt-2
        ">
          with thousands of 5-star reviews
        </p>

        {/* =====================================
            CAROUSEL
        ====================================== */}
        <div className="relative mt-6 sm:mt-7 md:mt-8 lg:mt-9">

          {/* LEFT ARROW */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="
              absolute
              left-0
              sm:left-1
              md:left-2
              top-1/2
              -translate-y-1/2
              bg-white
              rounded-full
              w-7
              h-7
              sm:w-8
              sm:h-8
              md:w-9
              md:h-9
              lg:w-10
              lg:h-10
              shadow-md
              flex
              items-center
              justify-center
              text-gray-700
              z-10
              hover:bg-gray-100
              transition
              cursor-pointer
            "
          >
            <FaChevronLeft className="
              text-[10px]
              sm:text-xs
              md:text-sm
            " />
          </button>

          {/* RIGHT ARROW */}
          <button
            aria-label="Next"
            onClick={handleNext}
            className="
              absolute
              right-0
              sm:right-1
              md:right-2
              top-1/2
              -translate-y-1/2
              bg-white
              rounded-full
              w-7
              h-7
              sm:w-8
              sm:h-8
              md:w-9
              md:h-9
              lg:w-10
              lg:h-10
              shadow-md
              flex
              items-center
              justify-center
              text-gray-700
              z-10
              hover:bg-gray-100
              transition
              cursor-pointer
            "
          >
            <FaChevronRight className="
              text-[10px]
              sm:text-xs
              md:text-sm
            " />
          </button>

          {/* =====================================
              CAROUSEL CONTAINER
          ====================================== */}
          <div
            ref={containerRef}
            className="
              overflow-hidden
              mx-1
              sm:mx-3
              md:mx-4
              lg:mx-5
              touch-pan-x
              select-none
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex"
              style={trackStyle}
              onTransitionEnd={handleTransitionEnd}
            >

              {slides.map((r, idx) => (
                <article
                  key={`${r.id}-${idx}`}
                  className="
                    p-1.5
                    sm:p-2
                    md:p-2.5
                    lg:p-3
                    xl:p-4
                    flex-shrink-0
                  "
                  style={slideStyle}
                >
                  <div className="
                    bg-white
                    rounded-xl
                    shadow-lg
                    overflow-hidden
                    h-full
                    flex
                    flex-col
                  ">

                    {/* IMAGE */}
                    <div className="w-full overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="
                          w-full
                          object-cover
                          h-44
                          sm:h-48
                          md:h-52
                          lg:h-60
                          xl:h-64
                          rounded-t-xl
                        "
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="
                      p-4
                      sm:p-5
                      md:p-6
                      lg:p-6
                      flex-1
                      flex
                      flex-col
                      justify-between
                    ">

                      <div>

                        {/* STARS */}
                        <div className="
                          flex
                          items-center
                          justify-center
                          gap-1
                          mb-2
                          sm:mb-3
                        ">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="
                                text-red-600
                                text-[10px]
                                sm:text-xs
                                md:text-sm
                              "
                            />
                          ))}
                        </div>

                        {/* NAME */}
                        <div className="
                          flex
                          items-center
                          justify-center
                          gap-1.5
                          sm:gap-2
                          flex-wrap
                        ">
                          <h3 className="
                            text-xs
                            sm:text-sm
                            font-semibold
                            text-gray-800
                            text-center
                          ">
                            {r.name}
                          </h3>

                          {r.verified && (
                            <span className="
                              text-[9px]
                              sm:text-[10px]
                              md:text-xs
                              bg-gray-800
                              text-white
                              px-1.5
                              sm:px-2
                              py-0.5
                              sm:py-1
                              rounded
                            ">
                              Verified
                            </span>
                          )}
                        </div>

                        {/* TITLE */}
                        <h4 className="
                          text-center
                          text-xs
                          sm:text-sm
                          font-bold
                          mt-2
                          sm:mt-3
                          text-gray-800
                          leading-snug
                        ">
                          {r.title}
                        </h4>

                        {/* REVIEW */}
                        <p className="
                          text-center
                          mt-2
                          text-xs
                          sm:text-sm
                          text-gray-600
                          leading-relaxed
                        ">
                          {r.text}
                        </p>

                      </div>
                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>

          {/* =====================================
              PLAY / PAUSE
          ====================================== */}
          <div className="
            flex
            justify-center
            mt-4
            sm:mt-5
            md:mt-6
          ">
            <button
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={() => setIsPlaying((p) => !p)}
              className="
                bg-white
                w-7
                h-7
                sm:w-8
                sm:h-8
                md:w-9
                md:h-9
                lg:w-10
                lg:h-10
                rounded-full
                shadow-md
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-gray-100
                transition
                cursor-pointer
              "
            >
              {isPlaying ? (
                <FaPause className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                " />
              ) : (
                <FaPlay className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  ml-0.5
                " />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* =========================================
          SUPPORT / SERVICE ROW
      ========================================= */}
      <div className="
        w-full
        mt-10
        sm:mt-14
        md:mt-16
        lg:mt-20
        border-t
        border-[#d8d2c8]
        bg-amber-50
      ">

        <div className="
          max-w-[1330px]
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-10
        ">

          <div className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-x-4
            sm:gap-x-6
            md:gap-x-8
            lg:gap-x-12
            xl:gap-x-20
            gap-y-6
            sm:gap-y-8
            py-5
            sm:py-6
            md:py-7
          ">

            {/* HAPPY TO HELP */}
            <div className="
              flex
              items-center
              gap-2
              sm:gap-3
              md:gap-4
              lg:gap-5
            ">
              <FaRegCommentDots className="
                text-[#2a233d]
                text-[25px]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                shrink-0
              " />

              <div>
                <h3 className="
                  text-[11px]
                  sm:text-xs
                  md:text-sm
                  lg:text-[17px]
                  xl:text-[19px]
                  font-semibold
                  text-[#1f2340]
                  mb-0.5
                  sm:mb-1
                ">
                  Happy to help
                </h3>

                <p className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-sm
                  xl:text-[16px]
                  font-normal
                  text-[#1f2340]
                ">
                  Chat or email
                </p>
              </div>
            </div>

            {/* CHECK ORDER STATUS */}
            <div className="
              flex
              items-center
              gap-2
              sm:gap-3
              md:gap-4
              lg:gap-5
            ">
              <FaBoxOpen className="
                text-[#2a233d]
                text-[25px]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                shrink-0
              " />

              <div>
                <h3 className="
                  text-[11px]
                  sm:text-xs
                  md:text-sm
                  lg:text-[17px]
                  xl:text-[19px]
                  font-semibold
                  text-[#1f2340]
                  mb-0.5
                  sm:mb-1
                ">
                  Check order status
                </h3>

                <p className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-sm
                  xl:text-[16px]
                  font-normal
                  text-[#1f2340]
                ">
                  Updates & tracking
                </p>
              </div>
            </div>

            {/* RETURNS */}
            <div className="
              flex
              items-center
              gap-2
              sm:gap-3
              md:gap-4
              lg:gap-5
            ">
              <FaUndoAlt className="
                text-[#2a233d]
                text-[25px]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                shrink-0
              " />

              <div>
                <h3 className="
                  text-[11px]
                  sm:text-xs
                  md:text-sm
                  lg:text-[17px]
                  xl:text-[19px]
                  font-semibold
                  text-[#1f2340]
                  mb-0.5
                  sm:mb-1
                ">
                  Returns & exchanges
                </h3>

                <p className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-sm
                  xl:text-[16px]
                  font-normal
                  text-[#1f2340]
                ">
                  Quick & hassle-free
                </p>
              </div>
            </div>

            {/* FREE DELIVERY */}
            <div className="
              flex
              items-center
              gap-2
              sm:gap-3
              md:gap-4
              lg:gap-5
            ">
              <FaPlane className="
                text-[#2a233d]
                text-[25px]
                sm:text-[28px]
                md:text-[32px]
                lg:text-[36px]
                shrink-0
              " />

              <div>
                <h3 className="
                  text-[11px]
                  sm:text-xs
                  md:text-sm
                  lg:text-[17px]
                  xl:text-[19px]
                  font-semibold
                  text-[#1f2340]
                  mb-0.5
                  sm:mb-1
                ">
                  Free delivery
                </h3>

                <p className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-sm
                  xl:text-[16px]
                  font-normal
                  text-[#1f2340]
                ">
                  All over India
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}