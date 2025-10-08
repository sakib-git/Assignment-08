import React from 'react';
import downloadIcon from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';

const ProductCard = ({ product }) => {
  console.log(product);
  const { title, downloads, ratingAvg, image } = product;

  return (
    <div className="bg-white shadow  flex flex-col">
      <img className="w-full h-40 object-cover" src={image} alt={title} />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <h2 className="font-bold text-2xl">{title}</h2>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2 bg-[#f1f5e8] items-center p-2 text-[#00D390] rounded">
            <img className="w-3 h-3" src={downloadIcon} alt="downloads" />
            <p>{downloads} M</p>
          </div>
          <div className="flex gap-2 bg-[#fff0e1] items-center p-2 text-[#FF8811] rounded">
            <img className="w-3 h-3" src={rating} alt="rating" />
            <p>{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
