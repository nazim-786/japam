import { useEffect, useState } from "react";
import Hotspot from "./Hotspot";

const hotspots = [
  {
    id: 1,
    top: "20%",
    left: "60%",
    title: "Quality Packaging",
    description: "We focus heavily on customer experience and delight.",
  },
  {
    id: 2,
    top: "70%",
    left: "25%",
    title: "BTR Card",
    description:
      "We send samples for lab testing and provide Batch Test Reports.",
  },
  {
    id: 3,
    top: "55%",
    left: "78%",
    title: "Fit & Finish",
    description:
      "We put a lot of effort into ensuring our high quality standards.",
  },
];

export default function LabTestedSection() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setActive(null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#fff3df] py-2 sm:py-3">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          md:px-8
          lg:px-11
        "
      >
        <div
          className="
            overflow-hidden
            bg-[#fff8e6]
            shadow-[0_30px_80px_rgba(0,0,0,0.08)]
          "
        >
          {/* Heading + Description */}
          <div
            className="
              px-5
              py-8
              sm:px-8
              sm:py-10
              md:px-10
              md:py-12
              lg:px-14
              lg:py-14
            "
          >
            <h2
              className="
                text-3xl
                font-semibold
                tracking-tight
                !text-black
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
              style={{ color: "#000000" }}
            >
              Asli Wearables - Lab Tested
            </h2>

            <p
              className="
                mt-4
                max-w-3xl
                text-sm
                leading-7
                text-[#23254c]
                sm:mt-5
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              We follow our proprietary system of BTR (Batch Test Reports) to
              ensure you always get original and genuine beads and stones.
            </p>
          </div>

          {/* Image + Hotspots */}
          <div className="relative w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600"
              alt="Lab tested wearable"
              className="
                block
                h-[300px]
                w-full
                object-cover
                sm:h-[400px]
                md:h-[500px]
                lg:h-[620px]
                xl:h-[670px]
              "
            />

            {/* Hotspots */}
            {hotspots.map((item) => (
              <Hotspot
                key={item.id}
                top={item.top}
                left={item.left}
                title={item.title}
                description={item.description}
                isOpen={active === item.id}
                onClick={() =>
                  setActive(active === item.id ? null : item.id)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}