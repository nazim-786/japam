import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import trackorder from "../data/trackordercard";

const TrackOrder = () => {
  const [itemsPerView, setItemsPerView] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const validateForm = () => {
    const newErrors = {};

    // Validate Order Number
    if (!orderNumber.trim()) {
      newErrors.orderNumber = "Please enter your order number.";
    } else {
      const orderPattern = /^#?JPM\d{5}$/;
      if (!orderPattern.test(orderNumber.trim())) {
        newErrors.orderNumber = "Invalid order number. Example: #JPM12345";
      }
    }

    // Validate Phone Number
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid 10 digit phone number.";
    } else if (!/^[6-9]/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid 10 digit phone number.";
    }

    // Check if Order Number and Phone Number are the same
    if (
      orderNumber.trim() &&
      phoneNumber.trim() &&
      orderNumber.trim().replace("#", "") === phoneNumber.trim()
    ) {
      newErrors.general = "Order number and phone number cannot be the same.";
    }

    return newErrors;
  };

  const handleTrackOrder = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage(
        `Tracking request submitted for order ${orderNumber.toUpperCase()}.`
      );
      setOrderNumber("");
      setPhoneNumber("");
      setTimeout(() => setSuccessMessage(""), 5000);
    } else {
      setErrors(validationErrors);
    }
  };


  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setItemsPerView(4);
      } else if (width < 1280) {
        setItemsPerView(6);
      } else {
        setItemsPerView(10);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const maxIndex = Math.max(trackorder.length - itemsPerView, 0);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  const next = () => setCurrentIndex((index) => Math.min(index + 1, maxIndex));
  const prev = () => setCurrentIndex((index) => Math.max(index - 1, 0));

  const touchStartHandler = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const touchMoveHandler = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const touchEndHandler = () => {
    const distance = touchStart.current - touchEnd.current;

    if (Math.abs(distance) > 45) {
      distance > 0 ? next() : prev();
    }

    touchStart.current = 0;
    touchEnd.current = 0;
  };

  const toggleWishlist = (id) => {
    setWishlist((items) =>
      items.includes(id)
        ? items.filter((item) => item !== id)
        : [...items, id]
    );
  };

  const stars = (rating = 5) => (
    <div className="flex items-center gap-[2px]">
      {[0, 1, 2, 3, 4].map((star) => (
        <FaStar
          key={star}
          className={`text-[11px] sm:text-[12px] ${
            star < Math.floor(rating) ? "text-[#d84242]" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const categories = useMemo(() => {
    const data = [
      { title: "Save More With Combos", words: ["combo"] },
      { title: "Newest Items", words: [] },
      { title: "Flash Sale (Limited Stock)", words: [] },
      {
        title: "Energy Stones",
        words: ["stone", "pyrite", "tiger eye", "citrine", "aventurine"],
      },
      { title: "Karungali Wearables", words: ["karungali"] },
      { title: "Rudraksha Bracelets", words: ["bracelet"] },
    ];

    return data.map((category, index) => {
      const match = trackorder.find((product) =>
        category.words.some((word) =>
          (product.name || "").toLowerCase().includes(word)
        )
      );

      return {
        ...category,
        image:
          match?.images?.[0] ||
          trackorder[index % trackorder.length]?.images?.[0],
      };
    });
  }, []);

  const visibleProducts = trackorder.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff8ed] text-[#111b3b]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1225px] px-4 pt-5 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <nav className="flex items-center gap-2 text-[12px] sm:text-[13px]">
          <Link
            to="/"
            className="font-medium hover:text-[#d84242] transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-600">Track Order</span>
        </nav>
      </div>

      {/* Track Order Form Section */}
      <section className="mx-auto max-w-[1225px] px-4 pt-8 pb-10 sm:px-6 md:px-8 md:pt-12 md:pb-14 lg:px-10 xl:px-0">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold mb-2">
          Track Your Order
        </h1>
        <p className="text-[14px] text-gray-600 mb-8">
          Enter your order details to track the delivery status
        </p>

        <form onSubmit={handleTrackOrder} className="max-w-[360px]">
          {/* General Error */}
          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-[13px]">
              {errors.general}
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-700 text-[13px]">
              {successMessage}
            </div>
          )}

          {/* Order Number Field */}
          <div className="mb-5">
            <label className="block text-[13px] sm:text-[14px] font-medium mb-2 text-[#1f2340]">
              Enter your Order Number:
            </label>
            <input
              type="text"
              placeholder="Order Number #JPM"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value.toUpperCase())}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[13px] sm:text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#d84242] transition"
            />
            {errors.orderNumber && (
              <p className="text-red-600 text-[12px] mt-1">{errors.orderNumber}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="mb-6">
            <label className="block text-[13px] sm:text-[14px] font-medium mb-2 text-[#1f2340]">
              Enter your Phone Number:
            </label>
            <input
              type="tel"
              placeholder="10 digit Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
              maxLength="10"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[13px] sm:text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#d84242] transition"
            />
            {errors.phoneNumber && (
              <p className="text-red-600 text-[12px] mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#2d2b3a] text-white font-semibold text-[14px] sm:text-[15px] rounded-lg hover:bg-[#1f1d2a] transition active:scale-95"
          >
            GET TRACKING DETAILS
          </button>
        </form>
      </section>

      {/* Browse Bestsellers */}
      <section className="mx-auto max-w-[1225px] px-4 pb-6 pt-7 sm:px-6 md:px-8 md:pt-9 lg:px-10 xl:px-0">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[22px] sm:text-[25px] md:text-[27px] font-semibold leading-tight">
            Browse Bestsellers
          </h2>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous products"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-[#d84242] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              aria-label="Next products"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-[#d84242] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        <div
          className="touch-pan-y"
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}
        >
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 md:grid-cols-3 md:gap-x-6 xl:grid-cols-5">
            {visibleProducts.map((product) => {
              const liked = wishlist.includes(product.id);

              return (
                <article key={product.id} className="group min-w-0">
                  <div className="relative aspect-square overflow-hidden rounded-[7px] bg-[#eadfce]">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />

                    {product.discount && (
                      <span className="absolute left-0 top-0 bg-[#d84242] px-2 py-[5px] text-[10px] font-semibold leading-none text-white sm:px-2.5 sm:py-1.5 sm:text-[12px]">
                        ◇ {product.discount}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Toggle wishlist"
                      className={`absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition sm:opacity-0 sm:group-hover:opacity-100 ${
                        liked
                          ? "text-[#d84242]"
                          : "text-gray-500 hover:text-[#d84242]"
                      }`}
                    >
                      <FaHeart className="text-xs" />
                    </button>
                  </div>

                  <div className="pt-2">
                    <h2 className="line-clamp-3 min-h-[30px] !text-[17px] font-normal leading-[18px] text-[#101b3b] sm:min-h-[40px] !sm:text-[10px] sm:leading-[20px]">
                      {product.name}
                    </h2>

                    <div className="mt-1.5 flex items-center gap-2">
                      {stars(product.rating)}
                      <span className="text-[10px] text-[#20202b] sm:text-[12px]">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
                      <span className="text-[16px] font-bold leading-none sm:text-[18px]">
                        ₹{Number(product.price || 0).toLocaleString("en-IN")}
                        <sup className="text-[8px] align-super">00</sup>
                      </span>

                      {product.originalPrice && (
                        <span className="text-[11px] text-gray-600 line-through sm:text-[13px]">
                          ₹
                          {Number(product.originalPrice).toLocaleString("en-IN")}
                          <sup className="text-[7px] align-super">00</sup>
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Mobile carousel controls */}
        <div className="mt-5 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={prev}
            disabled={currentIndex === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md disabled:opacity-35"
          >
            <FaChevronLeft className="text-xs" />
          </button>

          <span className="text-[11px] text-gray-500">
            {Math.min(currentIndex + 1, trackorder.length)} / {trackorder.length}
          </span>

          <button
            type="button"
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md disabled:opacity-35"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </section>

      {/* Find What You Love */}
      <section className="mx-auto max-w-[1225px] px-4 pb-10 pt-3 sm:px-6 md:px-8 md:pb-14 lg:px-10 xl:px-0">
        <h2 className="mb-8 text-[21px] sm:text-[24px] md:text-[25px] font-semibold">
          Find What You Love
        </h2>

        <div
          className="flex gap-5 overflow-x-auto pb-2 md:justify-between md:overflow-visible"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setActiveCategory(category.title)}
              className={`flex flex-col items-center text-center transition-transform shrink-0 ${
                activeCategory === category.title ? "scale-[1.03]" : ""
              }`}
            >
              <span
                className={`block rounded-full border-[3px] bg-[#eadfce] transition overflow-hidden h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 ${
                  activeCategory === category.title
                    ? "border-[#d84242] shadow-md"
                    : "border-transparent"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </span>

              <span className="mt-3 text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-[18px] text-[#111b3b] max-w-[200px]">
                {category.title}
              </span>
            </button>
          ))}
        </div>

        {activeCategory && (
          <p className="mt-4 text-center text-xs text-gray-500">
            Selected: <strong className="text-[#13203f]">{activeCategory}</strong>
          </p>
        )}
      </section>
    </main>
  );
};

export default TrackOrder;