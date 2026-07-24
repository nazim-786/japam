import ProductCard from "./ProductCarousel";
import { products } from "../data/data";

const ProductSection = () => {
  return (
    <section className="bg-[#f6efe5] py-12">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-[#1f2747] mb-8">
          Sharks' Favourites
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductSection;