const SiddhDeliverySection = () => {
  return (
    <section className="bg-[#fae6c4] py-5 sm:py-6 md:py-8 lg:py-10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <h2
          className="
            text-center
            text-[#1f2340]
            !font-black
            font-sans
            tracking-[0.5px]
            leading-[1.1]
            text-[25px]
            sm:text-[32px]
            md:text-[40px]
            lg:text-[50px]
            xl:text-[58px]
          "
          style={{ color: "#000000" }}
        >
          Siddh Products Delivered To Your Home
        </h2>

        {/* Description */}
        <p
          className="
            text-center
            text-[#1f2340]
            font-medium
            leading-relaxed
            mx-auto

            mt-3
            sm:mt-4
            md:mt-5

            text-[12px]
            sm:text-[13px]
            md:text-[14px]
            lg:text-[15px]

            max-w-[95%]
            sm:max-w-[90%]
            md:max-w-4xl
            lg:max-w-5xl
          "
        >
          Each Siddh order comes with a Siddhi Prakriya Report (SPR) with a QR
          code to watch a short video of the Siddhi ceremony of your product.
        </p>

        {/* Video */}
        <div
          className="
            mt-6
            sm:mt-7
            md:mt-8
            lg:mt-10

            flex
            justify-center
            w-full
          "
        >
          <div
            className="
              w-full
              max-w-[100%]
              sm:max-w-[95%]
              md:max-w-5xl
              lg:max-w-6xl
              overflow-hidden
              shadow-lg
              bg-black
            "
          >
            <video
              className="
                block
                w-full
                h-auto
                aspect-video
                object-cover
              "
              autoPlay
              muted
              loop
              controls
              playsInline
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SiddhDeliverySection;