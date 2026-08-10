import { useState } from "react";
import {
  FaPlus,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const hotspots = [
  {
    id: 1,
    top: "42%",
    left: "22%",
    title:"Silver Plated Eternal Karungali Mala - Natural Ebony Wood (Govt. Certified)",
    price: "699",
    oldPrice: "1,399",
  },

  {
    id: 2,
    top: "18%",
    left: "42%",
    title:
      "Premium Spiritual Gift Box With Divine Essentials",
    price: "999",
    oldPrice: "1,999",
  },

  {
    id: 3,
    top: "78%",
    left: "28%",
    title:
      "Sacred Spiritual Collection For Daily Rituals",
    price: "799",
    oldPrice: "1,599",
  },
];

const SpiritualHamper = () => {
  const [activeCard, setActiveCard] =
    useState(null);

  const toggleCard = (id) => {
    setActiveCard((prev) =>
      prev === id ? null : id
    );
  };

  return (
    <section className="bg-[#fff3df] py-9">
      <div className="max-w-[1320px] mx-auto">

        <div className="grid lg:grid-cols-[70%_30%]">

          {/* LEFT IMAGE */}
          <div className="relative h-[870px] overflow-hidden">

            <img
              src="https://japam.in/cdn/shop/files/Luxury_Spiritual_Set_4.jpg?v=1729081014&width=896"
              alt=""
              className="w-full h-full object-cover"
            />

            {hotspots.map((item) => (
              <div key={item.id}>
                {/* PLUS BUTTON */}
                <button
                  onClick={() =>
                    toggleCard(item.id)
                  }
                  className="
                    absolute
                    w-[54px]
                    h-[54px]
                    rounded-full
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                    text-[20px]
                    z-20
                  "
                  style={{
                    top: item.top,
                    left: item.left,
                  }}
                >
                  <FaPlus />
                </button>

                {/* PRODUCT CARD */}
                {activeCard === item.id && (
                  <div
                    className="
                      absolute
                      bg-[#EAE3D8]
                      w-[272px]
                      p-6
                      z-30
                    "
                    style={{
                      top:
                        item.id === 1
                          ? "32%"
                          : item.id === 2
                          ? "8%"
                          : "56%",
                      left:
                        item.id === 1
                          ? "26%"
                          : item.id === 2
                          ? "46%"
                          : "32%",
                    }}
                    >

                    <div className="flex justify-between gap-4">

                      <h3
                        className="
                          text-[#1F2340]
                          text-[18px]
                          font-semibold
                          leading-8
                        "
                      >
                        {item.title}
                      </h3>

                      <FaArrowRight
                        className="
                          text-[#1F2340]
                          mt-3
                          shrink-0
                        "
                      />
                    </div>

                    <div className="border-t border-[#d2c8bb] mt-5 pt-4">

                      <span
                        className="
                          text-[#1F2340]
                          text-[30px]
                          font-bold
                        "
                      >
                        ₹ {item.price}
                      </span>

                      <span
                        className="
                          ml-3
                          text-[#6f6f6f]
                          line-through
                          text-[11px]
                        "
                      >
                        ₹ {item.oldPrice}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              bg-[#C6403D]
    text-white
    px-[38px]
    pt-[42px]
            "
          >
         <h2
  className="
   text-[#000] text-white
  "
>
  Luxury Spiritual Hamper
</h2>

          <p
  className="
    text-[15px]
    text-white
    leading-[1.9]
    mb-10
    max-w-[290px]
  "
>
  Our Essence Of Spirituality Gift Hamper
  has a range of wearables in beautiful
  packaging - perfect for gifting.
</p>

           <button
  className="
    bg-white
    text-[#1F2340]
    font-semibold
    text-[16px]
    px-7
    py-4
    flex
    items-center
    gap-8
    rounded-md
  "
>
  BUY NOW
  <FaArrowRight className="text-[18px]" />
</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpiritualHamper;