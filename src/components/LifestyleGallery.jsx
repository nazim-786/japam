import { useState } from "react";

const LifestyleGallery = () => {
  const galleryRows = [
    {
      smallImages: [
        "https://japam.in/cdn/shop/files/mahakal-mala.jpg?v=1737714515&width=480",
        "https://japam.in/cdn/shop/files/red-sandalwood.jpg?v=1737714584&width=480",
      ],
      largeImage:
        "https://japam.in/cdn/shop/files/dreamy-duo.jpg?v=1737714515&width=800",
    },

    {
      smallImages: [
        "https://japam.in/cdn/shop/files/silver-rudraksha-mala.jpg?v=1737714515&width=480",
        "https://japam.in/cdn/shop/files/golden-beads-modern.jpg?v=1737714515&width=480",
      ],
      largeImage:
        "https://japam.in/cdn/shop/files/Untitled_design_13_94273b77-5172-443b-925e-ae3bb096e008.jpg?v=1763773660&width=800",
    },

    {
      smallImages: [
        "https://japam.in/cdn/shop/files/pyrite-splash.jpg?v=1737714750&width=480",
        "https://japam.in/cdn/shop/files/tiger-eye-om.jpg?v=1737714515&width=480",
      ],
      largeImage:
        "https://japam.in/cdn/shop/files/amethyst-band.jpg?v=1737715154&width=800",
    },
  ];

  // Mobile swipe state for each row
  const [currentIndexes, setCurrentIndexes] = useState(
    galleryRows.map(() => 0)
  );

  const [touchStart, setTouchStart] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeRow, setActiveRow] = useState(null);

  // -------------------------
  // TOUCH START
  // -------------------------
  const handleTouchStart = (e, rowIndex) => {
    if (isAnimating) return;

    setActiveRow(rowIndex);
    setTouchStart(e.touches[0].clientX);
    setDragX(0);
    setIsDragging(true);
  };

  // -------------------------
  // TOUCH MOVE
  // -------------------------
  const handleTouchMove = (e, rowIndex) => {
    if (
      !isDragging ||
      isAnimating ||
      activeRow !== rowIndex
    ) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const difference = currentX - touchStart;

    // Small resistance at first/last image
    const currentIndex = currentIndexes[rowIndex];
    const maxIndex =
      galleryRows[rowIndex].smallImages.length - 1;

    if (
      (currentIndex === 0 && difference > 0) ||
      (currentIndex === maxIndex && difference < 0)
    ) {
      setDragX(difference * 0.25);
      return;
    }

    setDragX(difference);
  };

  // -------------------------
  // TOUCH END
  // -------------------------
  const handleTouchEnd = (rowIndex) => {
    if (
      !isDragging ||
      isAnimating ||
      activeRow !== rowIndex
    ) {
      return;
    }

    setIsDragging(false);

    const minSwipeDistance = 50;

    const currentIndex = currentIndexes[rowIndex];
    const maxIndex =
      galleryRows[rowIndex].smallImages.length - 1;

    // Swipe Left → Next image
    if (dragX < -minSwipeDistance) {
      setIsAnimating(true);

      setCurrentIndexes((prev) => {
        const updated = [...prev];

        updated[rowIndex] = Math.min(
          currentIndex + 1,
          maxIndex
        );

        return updated;
      });

      setDragX(0);

      setTimeout(() => {
        setIsAnimating(false);
        setActiveRow(null);
      }, 300);

      return;
    }

    // Swipe Right → Previous image
    if (dragX > minSwipeDistance) {
      setIsAnimating(true);

      setCurrentIndexes((prev) => {
        const updated = [...prev];

        updated[rowIndex] = Math.max(
          currentIndex - 1,
          0
        );

        return updated;
      });

      setDragX(0);

      setTimeout(() => {
        setIsAnimating(false);
        setActiveRow(null);
      }, 300);

      return;
    }

    // Small movement → reset
    setDragX(0);
    setActiveRow(null);
  };

  return (
    <section className="bg-[#f8e8d1] pt-5 pb-5 md:pb-7 overflow-hidden">

      {/* ================= HEADING ================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 mt-4 mb-5 md:mb-6">
        <h2
          className="
            !text-[20px]
            !sm:text-[26px]
            !md:text-[42px]
            !lg:text-[48px]
            !font-black
            !leading-tight
            !text-[#1F2340]
          "
          style={{ color: "#000000" }}
        >
          Rooted In Tradition, Made For Today
        </h2>
      </div>

      {/* ===================================================== */}
      {/* ===================== MOBILE ======================== */}
      {/* ===================================================== */}

      <div className="block md:hidden overflow-hidden">

        {galleryRows.map((row, rowIndex) => {
          const currentIndex = currentIndexes[rowIndex];

          return (
            <div
              key={rowIndex}
              className="mb-2"
            >

              {/* ===== HORIZONTAL SWIPE ===== */}
              <div
                className="
                  overflow-hidden
                  px-4
                  touch-pan-y
                  select-none
                "
                onTouchStart={(e) =>
                  handleTouchStart(e, rowIndex)
                }
                onTouchMove={(e) =>
                  handleTouchMove(e, rowIndex)
                }
                onTouchEnd={() =>
                  handleTouchEnd(rowIndex)
                }
              >
                <div
                  className={`
                    flex
                    gap-2
                    ${
                      isDragging &&
                      activeRow === rowIndex
                        ? "transition-none"
                        : "transition-transform duration-300 ease-out"
                    }
                  `}
                  style={{
                    transform: `
                      translateX(
                        calc(
                          -${currentIndex * 69}vw
                          -${currentIndex * 8}px
                          + ${activeRow === rowIndex ? dragX : 0}px
                        )
                      )
                    `,
                  }}
                >
                  {row.smallImages.map(
                    (image, index) => (
                      <div
                        key={index}
                        className="
                          flex-none
                          w-[67vw]
                          sm:w-[65vw]
                          overflow-hidden
                          rounded-[6px]
                        "
                      >
                        <img
                          src={image}
                          alt=""
                          draggable="false"
                          className="
                            w-full
                            h-[300px]
                            sm:h-[330px]
                            object-cover
                            block
                          "
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* ===== SINGLE LARGE IMAGE ===== */}
              <div className="px-4 mt-2">
                <div className="overflow-hidden rounded-[6px]">
                  <img
                    src={row.largeImage}
                    alt=""
                    className="
                      w-full
                      h-[300px]
                      sm:h-[340px]
                      object-cover
                      block
                    "
                  />
                </div>
              </div>

            </div>
          );
        })}

      </div>

      {/* ===================================================== */}
      {/* ================= TABLET / IPAD ==================== */}
      {/* ===================================================== */}

      <div className="hidden md:block lg:hidden">

        <div className="max-w-[1100px] mx-auto px-5">

          <div className="grid grid-cols-2 gap-4">

            {galleryRows
              .flatMap((row) => [
                ...row.smallImages,
                row.largeImage,
              ])
              .map((image, index) => (
                <div
                  key={index}
                  className={`
                    overflow-hidden
                    rounded-[10px]
                    ${index % 3 === 2 ? "col-span-2" : ""}
                  `}
                >
                  <img
                    src={image}
                    alt=""
                    className="
                      w-full
                      h-[320px]
                      md:h-[360px]
                      object-cover
                      block
                      transition-all
                      duration-700
                      ease-in-out
                      hover:scale-[1.03]
                    "
                  />
                </div>
              ))}

          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* ===================== DESKTOP ======================= */}
      {/* ===================================================== */}

      <div className="hidden lg:block">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-4 gap-4 lg:gap-5">

            {/* ================= ROW 1 ================= */}

            <div className="overflow-hidden rounded-[12px]">
              <img
                src="https://japam.in/cdn/shop/files/mahakal-mala.jpg?v=1737714515&width=480"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            <div className="overflow-hidden rounded-[12px]">
              <img
                src="https://japam.in/cdn/shop/files/red-sandalwood.jpg?v=1737714584&width=480"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            <div className="overflow-hidden rounded-[12px] lg:col-span-2">
              <img
                src="https://japam.in/cdn/shop/files/dreamy-duo.jpg?v=1737714515&width=800"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            {/* ================= ROW 2 ================= */}

            <div className="overflow-hidden rounded-[12px]">
              <img
                src="https://japam.in/cdn/shop/files/silver-rudraksha-mala.jpg?v=1737714515&width=480"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            <div className="overflow-hidden rounded-[12px]">
              <img
                src="https://japam.in/cdn/shop/files/golden-beads-modern.jpg?v=1737714515&width=480"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            <div className="overflow-hidden rounded-[12px] lg:col-span-2">
              <img
                src="https://japam.in/cdn/shop/files/Untitled_design_13_94273b77-5172-443b-925e-ae3bb096e008.jpg?v=1763773660&width=800"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            {/* ================= ROW 3 ================= */}

            <div className="overflow-hidden rounded-[12px]">
              <img
                src="https://japam.in/cdn/shop/files/pyrite-splash.jpg?v=1737714750&width=480"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            <div className="overflow-hidden rounded-[12px]">
              <img
                src="https://japam.in/cdn/shop/files/tiger-eye-om.jpg?v=1737714515&width=480"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

            <div className="overflow-hidden rounded-[12px] lg:col-span-2">
              <img
                src="https://japam.in/cdn/shop/files/amethyst-band.jpg?v=1737715154&width=800"
                alt=""
                className="
                  w-full
                  h-[340px]
                  object-cover
                  block
                  transition-all
                  duration-700
                  ease-in-out
                  hover:scale-[1.03]
                "
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LifestyleGallery;