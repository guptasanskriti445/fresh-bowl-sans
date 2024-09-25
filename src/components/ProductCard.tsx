// ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  rating: string;
  price: string;
  onSubscribe: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, rating, price, onSubscribe }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white border border-gray-200 rounded-lg shadow-md">
      <img className="h-3/5 w-full object-cover rounded-t-lg" src={image} alt={title} />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-emerald-950">{title}</h5>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-lime-200 text-lime-600 text-xs font-semibold px-2.5 py-0.5 rounded">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-emerald-950">{price}</span>
          <button
            onClick={onSubscribe}
            className="text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
