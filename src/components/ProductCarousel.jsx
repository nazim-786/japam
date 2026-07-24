import { FaStar, FaTag } from "react-icons/fa";

const ProductCarousel = ({ product }) => {
  return (
    <div className="group rounded-lg bg-white overflow-hidden transition duration-300 hover:shadow-xl cursor-pointer">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={product?.image}
          alt={product?.name ||""}
          className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Discount */}
        <span className="absolute left-3 top-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
          {product ?.discount}
        </span>

        {/* Favourite */}
        <div className="absolute right-3 top-3 bg-[#1d2340] text-yellow-300 text-[10px] font-bold px-3 py-2 rounded-md shadow">
          SHARK'S
          <br />
          FAVOURITE
        </div>
      </div>

      {/* Details */}
      <div className="p-4">

<h3 className="text-[15px] font-semibold text-gray-800 leading-5 line-clamp-2 h-10">
  {product?.name}
</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">

          <div className="flex text-red-500 text-sm">
            {Array.from({ length: product?.rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <span className="text-gray-500 text-sm">
            ({product?.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">

          <span className="text-2xl font-bold text-gray-900">
            ₹ {product?.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹ {product?.originalPrice}
          </span>
        </div>

      </div>
    </div>
  );
};

export default ProductCarousel;