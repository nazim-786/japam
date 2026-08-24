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

  return (
    <section className="bg-[#f8e8d1] pt-5 pb-5 md:pb-7 overflow-hidden">

      {/* ================= HEADING ================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-5 md:px-6 lg:px-8 mt-4 mb-5 md:mb-6">
        <h2
          className="
            text-[20px]
            sm:text-[26px]
            md:text-[42px]
            lg:text-[48px]
            font-black
            leading-tight
            text-[#1F2340]
          "
        >
          Rooted In Tradition, Made For Today
        </h2>
      </div>

      {/* ===================================================== */}
      {/* ===================== MOBILE ======================== */}
      {/* ===================================================== */}

      <div className="block md:hidden overflow-hidden">

        {galleryRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="mb-2"
          >

            {/* ===== HORIZONTAL SWIPE ===== */}
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                overflow-y-hidden
                snap-x
                snap-mandatory
                px-4
                touch-pan-x
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >

              {row.smallImages.map((image, index) => (
                <div
                  key={index}
                  className="
                    flex-none
                    w-[67vw]
                    sm:w-[65vw]
                    snap-start
                    overflow-hidden
                    rounded-[6px]
                  "
                >
                  <img
                    src={image}
                    alt=""
                    className="
                      w-full
                      h-[300px]
                      sm:h-[330px]
                      object-cover
                      block
                    "
                  />
                </div>
              ))}

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
        ))}

      </div>

      {/* ===================================================== */}
      {/* ================= TABLET / IPAD ==================== */}
      {/* ===================================================== */}

      <div className="hidden md:block lg:hidden">

        <div className="max-w-[1100px] mx-auto px-5">

          <div className="grid grid-cols-2 gap-4">

            {galleryRows.flatMap((row) => [
              ...row.smallImages,
              row.largeImage,
            ]).map((image, index) => (
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