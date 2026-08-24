import React from "react";

const stylesData = [
  {
    id: 1,
    image:
      "https://japam.in/cdn/shop/files/Screenshot_2023-12-22_at_9.51.03_AM_Large_455c060e-8e8c-49c1-9600-0923c8ed6a19.jpg?v=1703218891&width=800",
    title: "Everyday Wearables",
    button: "SHOP BRACELETS",
  },
  {
    id: 2,
    image:
      "https://japam.in/cdn/shop/files/3_104c286f-119b-4cc8-b28d-cdaca293e748.jpg?v=1695828380&width=800",
    title: "Elegance Rudraksha Range",
    button: "SHOP WOMEN",
  },
  {
    id: 3,
    image:
      "https://japam.in/cdn/shop/files/damroobracelet_2.jpg?v=1702626942&width=800",
    title: "Premium Designs",
    button: "SHOP PREMIUM",
  },
  {
    id: 4,
    image:
      "https://japam.in/cdn/shop/files/IMG_9674_1_Large_e1fecbc3-28ec-4f0b-89bf-601f099db412.jpg?v=1717439498&width=800",
    title: "Wear With Pride",
    button: "MALAS",
  },
];

const ChooseYourStyle = () => {
  return (
    <section className="bg-[#fff3df] pt-0 pb-0">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2
          className="
            text-[28px]
            sm:text-[36px]
            md:text-[44px]
            lg:text-[56px]
            xl:text-[64px]
            font-bold
            text-[#1f2340]
            mb-5
            sm:mb-6
          "
        >
          Choose Your Style
        </h2>

        {/* 2 Rows x 2 Columns */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:gap-4
            lg:gap-6
            mt-5
            sm:mt-7
          "
        >
          {stylesData.map((item) => (
            <div
              key={item.id}
              className="
                relative
                overflow-hidden
                group
                w-full

                h-[260px]
                sm:h-[320px]
                md:h-[380px]
                lg:h-[520px]
                xl:h-[570px]
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Content */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  sm:bottom-7
                  sm:left-7
                  md:bottom-8
                  md:left-8
                  lg:bottom-10
                  lg:left-10
                "
              >
                <h3
                  className="
                    text-white
                    text-[16px]
                    sm:text-[20px]
                    md:text-[25px]
                    lg:text-[30px]
                    font-bold
                    mb-3
                    sm:mb-4
                    lg:mb-5
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                {/* Button */}
                <button
                  className="
                    relative
                    overflow-hidden
                    border-2
                    border-white
                    text-white
                    px-3
                    sm:px-5
                    md:px-6
                    lg:px-8
                    py-2
                    sm:py-2.5
                    lg:py-3
                    font-semibold
                    tracking-wide
                    uppercase
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    lg:text-[16px]
                    whitespace-nowrap
                    group/button
                  "
                >
                  {/* Shine Effect */}
                  <span
                    className="
                      absolute
                      top-0
                      left-[-120%]
                      w-full
                      h-full
                      bg-white/20
                      skew-x-12
                      transition-all
                      duration-500
                      group-hover/button:left-[120%]
                    "
                  />

                  <span className="relative z-10">
                    {item.button}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourStyle;