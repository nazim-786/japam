import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ExploreEnergyStones() {
  // Number of products to display in each row
  const productsPerRow = 4;

  // Divide products into separate rows
  const rows = [];

  for (let i = 0; i < products.length; i += productsPerRow) {
    rows.push(products.slice(i, i + productsPerRow));
  }

  // Store a separate scroll container reference for each row
  const rowRefs = useRef([]);

  // Store separate progress values for each row
  const [progress, setProgress] = useState(rows.map(() => 0));

  useEffect(() => {
    // Update the progress bar for the selected row
    const handleScroll = (index) => {
      const container = rowRefs.current[index];

      if (!container) return;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (maxScroll <= 0) {
        setProgress((prev) => {
          const updated = [...prev];
          updated[index] = 0;
          return updated;
        });
        return;
      }

      const currentProgress =
        (container.scrollLeft / maxScroll) * 100;

      setProgress((prev) => {
        const updated = [...prev];
        updated[index] = currentProgress;
        return updated;
      });
    };

    // Store scroll event listeners for each row
    const listeners = [];

    rowRefs.current.forEach((container, index) => {
      if (!container) return;

      const listener = () => handleScroll(index);

      container.addEventListener("scroll", listener, {
        passive: true,
      });

      listeners.push({
        container,
        listener,
      });
    });

    // Remove all scroll event listeners when the component unmounts
    return () => {
      listeners.forEach(({ container, listener }) => {
        container.removeEventListener("scroll", listener);
      });
    };
  }, [rows.length]);

  return (
    <section className="bg-[#fff3df] py-4">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-4 flex items-center justify-between">
          <h2
            className="!text-[22px] !font-bold !text-[#1f2940] sm:!text-[24px] md:!text-[28px]"
            style={{ color: "#000000" }}
          >
            Explore Energy Stones
          </h2>

          <button className="text-[16px] text-[#1f2940] underline transition hover:opacity-80 sm:text-[18px]">
            View all
          </button>
        </div>

        {/* Separate rows */}
        <div className="flex flex-col gap-5">

          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="w-full">

              {/* Individual horizontal slider for each row */}
              <div
                ref={(el) => {
                  rowRefs.current[rowIndex] = el;
                }}
                className="
                  flex
                  gap-3
                  overflow-x-auto
                  snap-x
                  snap-mandatory
                  scroll-smooth
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden

                  lg:grid
                  lg:grid-cols-4
                  lg:gap-6
                  lg:overflow-visible
                  lg:snap-none
                "
              >
                {row.map((product) => (
                  <div
                    key={product.id}
                    className="
                      min-w-[calc(100%-55px)]
                      snap-start

                      sm:min-w-[calc(50%-8px)]

                      md:min-w-[calc(50%-8px)]

                      lg:min-w-0
                    "
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {/* Individual progress bar for each row */}
              <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-[#e1d4c0] lg:hidden">
                <div
                  className="h-full rounded-full bg-[#1f2940] transition-all duration-150"
                  style={{
                    width: `${Math.max(
                      8,
                      progress[rowIndex] || 0
                    )}%`,
                  }}
                />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}