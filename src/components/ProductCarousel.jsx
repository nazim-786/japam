import { FaStar } from "react-icons/fa";

const ProductCarousel = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">

      <div className="relative overflow-hidden">
        <img
          src={product?.image}
          alt={product?.name || ""}
          className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded">
          {product?.discount}
        </span>

        <div className="absolute top-3 right-3 bg-[#1d2340] text-yellow-300 text-[10px] font-bold px-3 py-2 rounded-md text-center">
          SHARK'S
          <br />
          FAVOURITE
        </div>
      </div>

      <div className="p-4">

        <h3
          className="text-[15px] font-semibold text-gray-800 leading-5 h-10 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {product?.name}
        </h3>

        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-red-500 text-xs">
            {Array.from({ length: product?.rating || 0 }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            ({product?.reviews})
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-[20px] font-bold text-[#1d2340]">
            ₹{product?.price}
          </span>

          <span className="text-lg text-gray-400 line-through">
            ₹{product?.originalPrice}
          </span>
        </div>

      </div>
    </div>
  );
};

export default ProductCarousel;