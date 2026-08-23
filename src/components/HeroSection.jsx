import { useEffect, useState } from "react";

const heroSlides = [
  {
    image:
      "https://japam.in/cdn/shop/files/Banner_desktop_2.jpg?v=1777975965&width=1400",
    title: "Authentic Energy Stones",
    subtitle:
      "100% Real Energy Stones With Authentication Certificate",
    btnText: "EXPLORE NOW",
    link: "/collections/energy-stones",
  },
  {
    image:
      "https://japam.in/cdn/shop/files/Banner_desktop_3.jpg?v=1777975965&width=1400",
    title: "Karungali - Ebony wood",
    subtitle:
      "Sacred Karungali Beads in everyday wearable designs.",
    btnText: "EXPLORE COLLECTION",
    link: "/collections/karungali",
  },
  {
    image:
      "https://japam.in/cdn/shop/files/ChatGPT_Image_Mar_7_2026_04_42_16_PM_1.png?v=1778058344&width=1400",
    title: "Certified Rudraksha Collection",
    subtitle:
      "Rudraksha wearables crafted for modern, everyday wear.",
    btnText: "EXPLORE NOW",
    link: "/collections/rudraksha",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        w-full
        h-[600px]
        overflow-hidden
        max-w-[100vw]
      "
    >
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-opacity
            duration-1000
            ease-in-out
            ${
              index === current
                ? "opacity-100 z-[2]"
                : "opacity-0 z-[1]"
            }
          `}
        />
      ))}

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          z-[3]
          flex
          items-center
          bg-black/15
        "
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`
              absolute
              top-1/2
              left-[60px]
              -translate-y-1/2
              w-full
              max-w-[500px]
              text-white
              transition-opacity
              duration-700
              ease-in-out

              ${
                index === current
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }

              /* Tablet */
              max-[1024px]:left-[40px]
              max-[1024px]:max-w-[440px]

              /* Mobile */
              max-[768px]:top-auto
              max-[768px]:bottom-0
              max-[768px]:left-0
              max-[768px]:translate-y-0
              max-[768px]:max-w-full
              max-[768px]:px-5
              max-[768px]:pt-8
              max-[768px]:pb-12
            `}
          >
            {/* Title */}
            <h1
              className="
                mb-[15px]
                text-[30px]
                font-medium
                leading-[1.2]
                !text-white

                max-[1024px]:text-[28px]

                max-[768px]:mb-3
                max-[768px]:text-[24px]

                max-[480px]:text-[20px]
              "
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              className="
                mb-[25px]
                text-[18px]
                leading-relaxed
                text-white/95

                max-[1024px]:text-[17px]

                max-[768px]:mb-5
                max-[768px]:text-[16px]

                max-[480px]:text-[14px]
              "
            >
              {slide.subtitle}
            </p>

            {/* Button */}
            <a
              href={slide.link}
              className="
                inline-block
                cursor-pointer
                rounded-[4px]
                border-2
                border-white
                bg-transparent
                px-7
                py-[14px]
                text-[15px]
                font-bold
                tracking-[0.5px]
                text-white
                no-underline
                transition-all
                duration-300
                hover:bg-white
                hover:text-black

                max-[768px]:px-5
                max-[768px]:py-3
                max-[768px]:text-[14px]

                max-[480px]:px-[18px]
                max-[480px]:py-[10px]
              "
            >
              {slide.btnText}
            </a>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-[4]
          flex
          -translate-x-1/2
          items-center
          gap-2
        "
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`
              h-[10px]
              cursor-pointer
              border-0
              p-0
              transition-all
              duration-300

              ${
                index === current
                  ? "w-6 rounded-[5px] bg-white"
                  : "w-[10px] rounded-full bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;