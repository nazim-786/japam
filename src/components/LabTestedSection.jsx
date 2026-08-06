import { useState } from "react";
import Hotspot from "./Hotspot";

const hotspots = [
  {
    id: 1,
    top: "22%",
    left: "58%",
    title: "Quality Packaging",
    description: "We focus heavily on customer experience and delight",
  },
  {
    id: 2,
    top: "72%",
    left: "28%",
    title: "BTR Card",
    description:"We send samples for lab testing and provide Batch Test Reports",
  },
  {
    id: 3,
    top: "67%",
    left: "74%",
    title: "Fit & Finish",
    description:"We put a lot of effort into ensuring our high quality standards",
  },
];

export default function LabTestedSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#f7efe4] pt-8 pb-16">

      {/* Full Box */}
      <div className="max-w-7xl mx-auto bg-[#f6e8d3]">

        {/* Heading Area */}
        <div className="px-10 py-10">

          <h2 className="text-[28px] font-semibold text-[#23254c]">
            Asli Wearables - Lab Tested
          </h2>

          <p className="mt-5 text-[18px] leading-9 text-[#23254c] max-w-3xl">
            We follow our proprietary system of BTR (Batch Test Reports) to
            ensure you always get original and genuine beads and stones.
          </p>

        </div>

        {/* Image */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600"
            alt=""
            className="w-full h-180 object-cover"
          />

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

    </section>
  );
}