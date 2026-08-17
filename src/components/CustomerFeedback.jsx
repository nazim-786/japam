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
  const [visible, setVisible] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // index on the extended slides array
  const intervalRef = useRef(null);

  // derive slides with clones for infinite looping
  const slides = React.useMemo(() => {
    if (!reviews || reviews.length === 0) return [];
    // when reviews length <= visible, no need to clone
    if (reviews.length <= visible) return [...reviews];
    const prefix = reviews.slice(-visible);
    const suffix = reviews.slice(0, visible);
    return [...prefix, ...reviews, ...suffix];
  }, [visible]);

  const realStartIndex = React.useMemo(() => {
    return reviews.length <= visible ? 0 : visible;
  }, [visible]);

  // initialize currentIndex to the first real slide position
  useEffect(() => {
    setCurrentIndex(realStartIndex);
  }, [realStartIndex]);

  // Measure container width
  useEffect(() => {
    const measure = () => {
      const w = containerRef.current ? containerRef.current.clientWidth : 0;
      setContainerWidth(w);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // handle responsive visible count
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisible(3);
      else if (w >= 768) setVisible(2);
      else setVisible(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // autoplay
  useEffect(() => {
    if (!isPlaying) return undefined;
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, visible]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrev = () => {
    if (reviews.length <= visible) return;
    setCurrentIndex((idx) => idx - 1);
  };
  const handleNext = () => {
    if (reviews.length <= visible) return;
    setCurrentIndex((idx) => idx + 1);
  };

  const slideWidthPx = containerWidth && visible ? containerWidth / visible : 0;

  // on transition end, if we're on cloned slides, jump without transition
  const handleTransitionEnd = () => {
    if (reviews.length <= visible) return;
    // if we've moved past the real slides at the end
    if (currentIndex >= reviews.length + visible) {
      // jump back to the real start
      setTransitionEnabled(false);
      setCurrentIndex((prev) => prev - reviews.length);
      // re-enable transition next tick
      setTimeout(() => setTransitionEnabled(true), 20);
    }
    // if we've moved before the real slides at the start
    if (currentIndex < visible) {
      setTransitionEnabled(false);
      setCurrentIndex((prev) => prev + reviews.length);
      setTimeout(() => setTransitionEnabled(true), 20);
    }
  };

  useEffect(() => {
    if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
    setTransitionEnabled(false);
    setCurrentIndex(realStartIndex);
    setTimeout(() => setTransitionEnabled(true), 20);
  }, [visible]);

  // compute transform in px
  const trackStyle = React.useMemo(() => {
    const translate = -currentIndex * slideWidthPx;
    return {
      width: `${slides.length * slideWidthPx}px`,
      transform: `translateX(${translate}px)`,
      transition: transitionEnabled ? "transform 700ms ease-in-out" : "none",
    };
  }, [currentIndex, slideWidthPx, slides.length, transitionEnabled]);

  // slide element style
  const slideStyle = {
    width: `${slideWidthPx}px`,
    boxSizing: "border-box",
  };

  if (reviews.length === 0) return null;
  if (reviews.length <= visible) {
    return (
      <section className="relative py-12 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 text-center leading-tight">
            Over 1 Million+ Happy Customers <span className="ml-2">❤️🙏</span>
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">with thousands of 5-star reviews</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={r.image} alt={r.title} className="w-full object-cover h-56 rounded-t-xl" />
                <div className="p-6">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-red-600" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-sm font-semibold text-gray-800">{r.name}</h3>
                    {r.verified && <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">Verified</span>}
                  </div>
                  <h4 className="text-center text-sm font-bold mt-3 text-gray-800">{r.title}</h4>
                  <p className="text-center mt-2 text-gray-600 text-sm leading-relaxed">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-12 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-4xl font-extrabold text-gray-800 text-center leading-tight">
          Over 1 Million+ Happy Customers <span className="ml-2">❤️🙏</span>
        </h2>
        <p className="text-sm text-gray-700 text-center mt-2">with thousands of 5-star reviews</p>

        <div className="relative mt-8">
          {/* Left Arrow */}
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-gray-700 z-10"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            aria-label="Next"
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-gray-700 z-10"
          >
            <FaChevronRight />
          </button>

          <div ref={containerRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              style={trackStyle}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((r, idx) => (
                <article key={`${r.id}-${idx}`} className="p-4 flex-shrink-0" style={slideStyle}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                    <div className="w-full overflow-hidden">
                      <img src={r.image} alt={r.title} className="w-full object-cover h-48 md:h-56 lg:h-64 rounded-t-xl" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-red-600" />
                          ))}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <h3 className="text-sm font-semibold text-gray-800">{r.name}</h3>
                          {r.verified && <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">Verified</span>}
                        </div>
                        <h4 className="text-center text-sm font-bold mt-3 text-gray-800">{r.title}</h4>
                        <p className="text-center mt-2 text-gray-600 text-sm leading-relaxed">{r.text}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Play/Pause */}
          <div className="flex justify-center mt-6">
            <button
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={() => setIsPlaying((p) => !p)}
              className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-700"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      </div>

      {/* Support / Service Row  */}

      <div className="w-full mt-20 border-t border-[#d8d2c8] bg-amber-50">
        <div className="max-w-[1330px] mx-auto pl-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 py-5">
            
            {/* Happy to help */}
            <div className="flex items-center gap-5">
              <FaRegCommentDots className="text-[#2a233d] text-[42px] shrink-0" />

              <div>
                <h3 className="text-[19px] font-semibold text-[#1f2340] mb-1">
                  Happy to help
                </h3>
                <p className="text-[16px] font-normal text-[#1f2340]">
                  Chat or email
                </p>
              </div>
            </div>

            {/* Check order status */}
            <div className="flex items-center gap-5">
              <FaBoxOpen className="text-[#2a233d] text-[42px] shrink-0" />

              <div>
                <h3 className="text-[19px] font-semibold text-[#1f2340] mb-1">
                  Check order status
                </h3>
                <p className="text-[16px] font-normal text-[#1f2340]">
                  Updates & tracking
                </p>
              </div>
            </div>

            {/* Returns */}
            <div className="flex items-center gap-5">
              <FaUndoAlt className="text-[#2a233d] text-[42px] shrink-0" />

              <div>
                <h3 className="text-[19px] font-semibold text-[#1f2340] mb-1">
                  Returns & exchanges
                </h3>
                <p className="text-[16px] font-normal text-[#1f2340]">
                  Quick & hassle-free
                </p>
              </div>
            </div>

            {/* Free delivery */}
            <div className="flex items-center gap-5">
              <FaPlane className="text-[#2a233d] text-[42px] shrink-0" />

              <div>
                <h3 className="text-[19px] font-semibold text-[#1f2340] mb-1">
                  Free delivery
                </h3>
                <p className="text-[16px] font-normal text-[#1f2340]">
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
