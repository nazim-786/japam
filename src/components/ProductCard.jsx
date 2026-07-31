import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

export default function ProductCard({ product }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(
      (prev) => (prev + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        prev === 0
          ? product.images.length - 1
          : prev - 1
    );
  };

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl">
        
        <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 z-10">
          {product.discount} Off
        </div>

        <img
          src={product.images[currentImage]}
          alt={product.title}
          className="w-full h-[300px] object-cover"
        />

        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center"
        >
          <FaChevronRight />
        </button>
      </div>

      <h3 className="mt-3 font-semibold text-lg">
        {product.title}
      </h3>

      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-red-500" />
        ))}
        <span>({product.reviews})</span>
      </div>

      <div className="mt-2 flex gap-3 items-center">
        <span className="font-bold text-2xl">
          ₹{product.price}
        </span>

        <span className="line-through text-gray-500">
          ₹{product.oldPrice}
        </span>
      </div>
    </div>
  );
}