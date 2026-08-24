import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import { rudraksha } from "../data/rudraksha";

const RudrakshaSection = () => {
  const [start, setStart] = useState(0);

  const [visibleCards, setVisibleCards] = useState(4);

  React.useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  React.useEffect(() => {
    const maxStart = Math.max(
      0,
      rudraksha.length - visibleCards
    );

    if (start > maxStart) {
      setStart(maxStart);
    }
  }, [visibleCards, start]);

  const nextSlide = () => {
    const maxStart = Math.max(
      0,
      rudraksha.length - visibleCards
    );

    if (start < maxStart) {
      setStart((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
    }
  };

  const progress =
    rudraksha.length > visibleCards
      ? ((start + visibleCards) / rudraksha.length) * 100
      : 100;

  return (
    <section className="bg-[#FFF3DF] py-6 sm:py-8 lg:py-9 overflow-hidden">
      <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center mb-5 sm:mb-6">
          <h2
            className="
              text-[21px]
              sm:text-[25px]
              md:text-[28px]
              lg:text-[30px]
              font-bold
              text-[#1f2340]
            "
          >
            Single Rudraksha Beads
          </h2>

          <button
            className="
              text-[14px]
              sm:text-[15px]
              md:text-[16px]
              lg:text-[17px]
              text-[#1f2340]
              underline
              whitespace-nowrap
            "
          >
            View all
          </button>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex gap-4 md:gap-5 lg:gap-8">

          {/* ================= LEFT BANNER ================= */}
          <div
            className="
              hidden
              md:block
              md:w-[230px]
              lg:w-[280px]
              xl:w-[350px]
              flex-shrink-0
            "
          >
            <div className="overflow-hidden cursor-pointer">

              <img
                src="https://japam.in/cdn/shop/files/IMG-2146.jpg?v=1702795235&width=900"
                alt="Original Nepali Rudraksha"
                className="
                  w-full
                  h-[260px]
                  lg:h-[310px]
                  xl:h-[370px]
                  object-cover
                "
              />

              <div
                className="
                  bg-[#C63E3A]
                  px-4
                  lg:px-5
                  py-5
                  lg:py-7
                  xl:py-9
                  text-white
                "
              >
                <h3
                  className="
                    text-[17px]
                    lg:text-[20px]
                    xl:text-[24px]
                    font-bold
                    mb-2
                    leading-tight
                  "
                >
                  Original Nepali Rudraksha
                </h3>

                <p
                  className="
                    text-[12px]
                    lg:text-[14px]
                    xl:text-[15px]
                  "
                >
                  1 Mukhi to 11 Mukhi - with certificate
                </p>
              </div>
            </div>
          </div>

          {/* ================= PRODUCT SLIDER ================= */}
          <div className="flex-1 min-w-0 relative">

            <div className="overflow-hidden">

              <div
                className="
                  flex
                  gap-3
                  sm:gap-4
                  lg:gap-5
                "
              >
                {rudraksha
                  .slice(start, start + visibleCards)
                  .map((item) => (

                    <div
                      key={item.id}
                      className="
                        flex-shrink-0
                        w-full
                        sm:w-[calc((100%-12px)/2)]
                        md:w-[calc((100%-32px)/3)]
                        lg:w-[calc((100%-60px)/4)]
                      "
                    >

                      {/* ================= PRODUCT IMAGE ================= */}
                      <div className="relative overflow-hidden">

                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="
                            w-full
                            aspect-square
                            object-cover
                            bg-white
                          "
                        />

                        {/* DISCOUNT */}
                        <div
                          className="
                            absolute
                            top-0
                            left-0
                            bg-[#D64040]
                            text-white
                            px-2
                            py-1
                            text-[10px]
                            sm:text-[11px]
                            md:text-[12px]
                            font-semibold
                          "
                        >
                          {item.discount}
                        </div>

                      </div>

                      {/* ================= TITLE ================= */}
                      <h3
                        className="
                          mt-2
                          sm:mt-3
                          text-[13px]
                          sm:text-[14px]
                          lg:text-[15px]
                          font-semibold
                          text-[#1f2340]
                          leading-5
                          sm:leading-6
                          min-h-[40px]
                          sm:min-h-[48px]
                          lg:min-h-[60px]
                        "
                      >
                        {item.title}
                      </h3>

                      {/* ================= RATING ================= */}
                      <div
                        className="
                          flex
                          items-center
                          gap-0.5
                          sm:gap-1
                          mt-1
                        "
                      >
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            size={11}
                            className="sm:w-[13px] sm:h-[13px]"
                            color="#D64040"
                          />
                        ))}

                        <span
                          className="
                            text-[11px]
                            sm:text-[12px]
                            md:text-[14px]
                            ml-1
                            text-[#1f2340]
                          "
                        >
                          ({item.reviews})
                        </span>
                      </div>

                      {/* ================= PRICE ================= */}
                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-1
                          sm:gap-2
                          mt-1
                          sm:mt-2
                        "
                      >
                        <span
                          className="
                            text-[15px]
                            sm:text-[17px]
                            lg:text-[18px]
                            font-bold
                            text-[#1f2340]
                          "
                        >
                          ₹ {item.price}
                        </span>

                        <span
                          className="
                            line-through
                            text-[11px]
                            sm:text-[13px]
                            lg:text-[14px]
                            text-gray-500
                          "
                        >
                          ₹ {item.oldPrice}
                        </span>
                      </div>

                    </div>
                  ))}
              </div>
            </div>

            {/* ================================================= */}
            {/* OUTER SLIDER ARROWS */}
            {/* ================================================= */}

            {/* NEXT */}
            <button
              onClick={nextSlide}
              disabled={
                start >= rudraksha.length - visibleCards
              }
              className="
                absolute
                right-0
                lg:right-[-10px]
                top-[38%]

                w-8
                h-8
                sm:w-9
                sm:h-9
                lg:w-10
                lg:h-10

                rounded-full
                bg-[#363047]
                text-white

                flex
                items-center
                justify-center

                shadow

                transition-all
                duration-300

                disabled:opacity-30
              "
            >
              <FaChevronRight size={12} />
            </button>

            {/* PREVIOUS */}
            <button
              onClick={prevSlide}
              disabled={start === 0}
              className="
                absolute
                right-0
                lg:right-[-10px]
                top-[52%]

                w-8
                h-8
                sm:w-9
                sm:h-9
                lg:w-10
                lg:h-10

                rounded-full
                bg-[#8b8b8b]
                text-white

                flex
                items-center
                justify-center

                shadow

                transition-all
                duration-300

                disabled:opacity-30
              "
            >
              <FaChevronLeft size={12} />
            </button>

            {/* ================= PROGRESS BAR ================= */}
            <div
              className="
                mt-7
                sm:mt-8
                lg:mt-10
                w-full
                sm:w-[92%]
                lg:w-[88%]
                mx-auto
                h-[2px]
                bg-[#cfc6b9]
              "
            >
              <div
                className="
                  h-full
                  bg-[#1f2340]
                  transition-all
                  duration-300
                "
                style={{
                  width: `${Math.min(progress, 100)}%`,
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RudrakshaSection;