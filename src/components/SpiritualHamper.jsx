import { useEffect, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const hotspots = [
  {
    id: 1,
    top: "72%",
    left: "18%",
    title:
      "Silver Plated Eternal Karungali Mala - Natural Ebony Wood (Govt. Certified)",
    price: "₹ 699",
    oldPrice: "₹ 1,399",
    cardPosition: "right",
  },
  {
    id: 2,
    top: "24%",
    left: "50%",
    title: "Authentic Rudraksha Mala - Natural & Energized",
    price: "₹ 999",
    oldPrice: "₹ 1,799",
    cardPosition: "right",
  },
  {
    id: 3,
    top: "72%",
    left: "82%",
    title: "Premium Spiritual Gift Set - Handcrafted Collection",
    price: "₹ 1,299",
    oldPrice: "₹ 1,999",
    cardPosition: "left",
  },
];

const SpiritualHamper = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setActiveHotspot(null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHotspot = (id) => {
    setActiveHotspot((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#fff3df] py-4 sm:py-6 md:py-7 lg:py-8">
      <div className="mx-auto w-full max-w-[1250px] px-3 sm:px-4 md:px-5 lg:px-6 xl:px-0">

        {/* MAIN CONTAINER */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            overflow-hidden

            min-h-[620px]

            sm:min-h-[680px]

            md:min-h-[700px]

            lg:grid-cols-[68%_32%]
            lg:min-h-[560px]

            xl:min-h-[650px]
          "
        >

          {/* ================= IMAGE SECTION ================= */}
          <div
            className="
              relative
              h-[390px]
              w-full
              overflow-visible

              sm:h-[460px]

              md:h-[500px]

              lg:h-full
            "
          >
            <img
              src="https://japam.in/cdn/shop/files/Luxury_Spiritual_Set_4.jpg?v=1729081014&width=896"
              alt="Luxury spiritual hamper"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* ================= HOTSPOTS ================= */}
            {hotspots.map((item) => {
              const isActive = activeHotspot === item.id;

              return (
                <div key={item.id}>

                  {/* HOTSPOT BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggleHotspot(item.id)}
                    aria-label={`Toggle product info for ${item.title}`}
                    className="
                      absolute
                      z-20
                      flex
                      h-7
                      w-7
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-[#101a36]
                      text-[10px]
                      text-white
                      shadow-md
                      transition-all
                      duration-300
                      ease-out
                      hover:scale-110

                      sm:h-8
                      sm:w-8
                      sm:text-[11px]

                      md:h-9
                      md:w-9
                      md:text-[13px]

                      lg:h-10
                      lg:w-10
                      lg:text-[16px]

                      xl:h-11
                      xl:w-11
                      xl:text-xl
                    "
                    style={{
                      top: item.top,
                      left: item.left,
                    }}
                  >
                    <span
                      className={`
                        inline-flex
                        transition-transform
                        duration-300
                        ${isActive ? "rotate-45" : "rotate-0"}
                      `}
                    >
                      <FaPlus />
                    </span>
                  </button>

                  {/* ================= PRODUCT CARD ================= */}
                  {isActive && (
                    <div
                      className={`
                        absolute
                        z-30
                        w-[190px]
                        rounded-none
                        bg-[#fff8ee]
                        p-3
                        text-[#101a36]
                        shadow-[0_18px_36px_rgba(17,24,39,0.18)]
                        transition-all
                        duration-300
                        ease-out

                        sm:w-[215px]
                        sm:p-3.5

                        md:w-[230px]
                        md:p-4

                        lg:w-[245px]

                        ${
                          item.cardPosition === "left"
                            ? "-translate-x-full -ml-4"
                            : "ml-4"
                        }
                      `}
                      style={{
                        top: item.top,
                        left: item.left,
                        transform: "translateY(-50%)",
                      }}
                    >

                      {/* CARD HEADER */}
                      <div className="flex items-start justify-between gap-2 sm:gap-3">
                        <h3
                          className="
                            max-w-[155px]
                            text-[11px]
                            font-semibold
                            leading-[1.3]
                            text-[#101a36]

                            sm:max-w-[175px]
                            sm:text-[13px]

                            md:max-w-[185px]
                            md:text-[14px]

                            lg:text-[15px]
                          "
                        >
                          {item.title}
                        </h3>

                        <FaArrowRight
                          className="
                            mt-1
                            shrink-0
                            text-[9px]
                            text-[#101a36]

                            sm:text-[11px]

                            md:text-[12px]

                            lg:text-[13px]
                          "
                        />
                      </div>

                      {/* PRICE */}
                      <div
                        className="
                          mt-2
                          border-t
                          border-[#d9d0c7]
                          pt-2

                          sm:mt-3
                          sm:pt-3
                        "
                      >
                        <div className="flex items-baseline gap-2">
                          <span
                            className="
                              text-[16px]
                              font-bold
                              leading-none
                              text-[#101a36]

                              sm:text-[18px]

                              md:text-[20px]

                              lg:text-[22px]
                            "
                          >
                            {item.price}
                          </span>

                          <span
                            className="
                              text-[9px]
                              font-medium
                              text-[#6a6a6a]
                              line-through

                              sm:text-[10px]

                              md:text-[11px]
                            "
                          >
                            {item.oldPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ================= CONTENT SECTION ================= */}
          <div
            className="
              flex
              h-auto
              min-h-[230px]
              flex-col
              justify-start
              bg-[#c83f43]
              px-5
              py-7
              text-white

              sm:min-h-[220px]
              sm:px-7
              sm:py-8

              md:min-h-[240px]
              md:px-8
              md:py-9

              lg:h-full
              lg:min-h-0
              lg:px-8
              lg:pt-[52px]
              lg:pb-8
            "
          >
            <div
              className="
                w-full
                max-w-[340px]

                lg:max-w-[300px]
              "
            >

              {/* TITLE */}
              <h2
                className="
                  text-[21px]
                  font-bold
                  leading-[1.25]
                  text-white

                  sm:text-[23px]

                  md:text-[25px]

                  lg:text-[24px]
                "
              >
                Luxury Spiritual Hamper
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-3
                  text-[13px]
                  font-medium
                  leading-[1.55]
                  text-white/95

                  sm:mt-4
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                Our Essence Of Spirituality Gift Hamper has a range of
                wearables in beautiful packaging - perfect for gifting.
              </p>

              {/* BUY BUTTON */}
              <button
                type="button"
                className="
                  mt-5
                  flex
                  w-fit
                  min-w-[135px]
                  items-center
                  justify-between
                  gap-4
                  bg-white
                  px-4
                  py-3
                  text-[11px]
                  font-bold
                  tracking-[0.02em]
                  text-[#101a36]
                  transition-transform
                  duration-200
                  hover:-translate-y-0.5

                  sm:mt-6
                  sm:min-w-[145px]
                  sm:px-5
                  sm:text-[12px]

                  md:text-[13px]

                  lg:mt-7
                "
              >
                <span>BUY NOW</span>

                <FaArrowRight
                  className="
                    text-[10px]

                    sm:text-[11px]

                    md:text-[12px]

                    lg:text-[13px]
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualHamper;