import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ExploreEnergyStones() {
  return (
    <section className="bg-[#fff3df] py-4">
      <div className="mx-auto max-w-[1390px] px-4 sm:px-5 lg:px-8">

        {/* Heading */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[22px] font-bold text-[#1f2940] sm:text-[24px] md:text-[28px]">
            Explore Energy Stones
          </h2>

          <button className="text-[16px] text-[#1f2940] underline transition hover:opacity-80 sm:text-[18px]">
            View all
          </button>
        </div>

        {/* Products */}
        <div
          className="
            grid
            grid-rows-5
            grid-flow-col
            auto-cols-[calc(100%-80px)]
            gap-3

            overflow-x-auto
            snap-x
            snap-mandatory
            scroll-smooth

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            lg:grid-flow-row
            lg:grid-rows-none
            lg:grid-cols-4
            lg:auto-cols-auto
            lg:gap-6
            lg:overflow-visible
            lg:snap-none
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
                min-w-0
                snap-start
              "
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}