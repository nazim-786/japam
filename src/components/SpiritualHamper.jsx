import { useEffect, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const hotspots = [
  {
    id: 1,
    top: "68%",
    left: "23%",
    cardTop: "33%",
    cardLeft: "19%",
    title:
      "Silver Plated Eternal Karungali Mala - Natural Ebony Wood (Govt. Certified)",
    price: "₹ 699",
    oldPrice: "₹ 1,399",
  },
  {
    id: 2,
    top: "43%",
    left: "51%",
    cardTop: "12%",
    cardLeft: "43%",
    title: "Authentic Rudraksha Mala - Natural & Energized",
    price: "₹ 999",
    oldPrice: "₹ 1,799",
  },
  {
    id: 3,
    top: "26%",
    left: "78%",
    cardTop: "56%",
    cardLeft: "26%",
    title: "Premium Spiritual Gift Set - Handcrafted Collection",
    price: "₹ 1,299",
    oldPrice: "₹ 1,999",
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
    <section className="bg-[#fff3df] py-5 sm:py-7 lg:py-8">
      <div className="mx-auto max-w-[1250px] px-3 sm:px-4 xl:px-0">
        <div className="grid h-[460px] w-full grid-cols-1 overflow-hidden sm:h-[540px] md:h-[580px] lg:h-[650px] lg:grid-cols-[68%_32%]">
          <div className="relative h-full w-full overflow-hidden">
            <img
              src="https://japam.in/cdn/shop/files/Luxury_Spiritual_Set_4.jpg?v=1729081014&width=896"
              alt="Luxury spiritual hamper"
              className="h-full w-full object-cover"
            />

            {hotspots.map((item) => {
              const isActive = activeHotspot === item.id;

              return (
                <div key={item.id} className="contents">
                  <button
                    type="button"
                    onClick={() => toggleHotspot(item.id)}
                    aria-label={`Toggle product info for ${item.title}`}
                    className="absolute z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#101a36] text-[12px] text-white shadow-md transition-all duration-300 ease-out hover:scale-105 lg:h-11 lg:w-11 lg:text-xl"
                    style={{
                      top: item.top,
                      left: item.left,
                    }}
                  >
                    <span
                      className={`inline-flex transition-transform duration-300 ${
                        isActive ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <FaPlus />
                    </span>
                  </button>

                  {isActive && (
                    <div
                      className={`absolute z-30 w-[min(245px,calc(100vw-90px))] rounded-none bg-[#fff8ee] p-3 text-[#101a36] shadow-[0_18px_36px_rgba(17,24,39,0.18)] transition-all duration-300 ease-out sm:w-[245px] sm:p-4 ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                      style={{
                        top: item.cardTop,
                        left: item.cardLeft,
                      }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="max-w-[185px] text-[14px] font-semibold leading-[1.2] text-[#101a36] sm:text-[15px]">
                          {item.title}
                        </h3>
                        <FaArrowRight className="mt-1 shrink-0 text-[12px] text-[#101a36] sm:text-[13px]" />
                      </div>

                      <div className="mt-3 border-t border-[#d9d0c7] pt-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[20px] font-bold leading-none text-[#101a36] sm:text-[22px]">
                            {item.price}
                          </span>
                          <span className="text-[10px] font-medium text-[#6a6a6a] line-through sm:text-[11px]">
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

          <div className="flex h-full flex-col justify-start bg-[#c83f43] px-5 pt-[38px] text-white sm:px-7 sm:pt-[44px] lg:px-8 lg:pt-[52px]">
            <div className="w-full max-w-[290px] lg:max-w-[300px]">
              <h2 className="text-[22px] font-bold leading-[1.25] text-white sm:text-[23px] lg:text-[24px]">
                Luxury Spiritual Hamper
              </h2>

              <p className="mt-4 text-[14px] font-medium leading-[1.5] text-white/95 sm:text-[15px]">
                Our Essence Of Spirituality Gift Hamper has a range of wearables in
                beautiful packaging - perfect for gifting.
              </p>

              <button
                type="button"
                className="mt-7 flex items-center justify-between gap-4 bg-white px-4 py-3 text-[12px] font-bold tracking-[0.02em] text-[#101a36] transition-transform duration-200 hover:-translate-y-0.5 sm:px-5 sm:text-[13px]"
              >
                <span>BUY NOW</span>
                <FaArrowRight className="text-[12px] sm:text-[13px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualHamper;