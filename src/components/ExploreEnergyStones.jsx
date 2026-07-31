import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ExploreEnergyStones() {
  return (
    <section className="bg-[#f3eee5] py-10">
      <div className="max-w-[1320px] mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">
            Explore Energy Stones
          </h2>

          <button className="underline">
            View all
          </button>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}