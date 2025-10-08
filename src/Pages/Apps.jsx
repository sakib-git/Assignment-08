import React, { useState } from 'react';
import useProducts from '../Hook/useProducts';
import ProductCard from '../Component/ProductCard';

const Apps = () => {
  const [search, setSearch] = useState('');
  const { products } = useProducts();
  const term = search.trim().toLowerCase();
  const searchProducts = term ? products.filter((product) => product.title.toLowerCase().includes(term)) : products;

  return (
    <div className="mx-auto max-w-[1440px] py-5">
      <div className="py-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Our All Applications</h2>
        <p className="text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="flex justify-between items-center max-md:px-4 py-3">
        <p className="text-lg font-medium text-gray-700">
          (<span className="font-bold text-black">{searchProducts.length}</span>) Apps Found
        </p>

        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here" className="input" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 max-md:px-4 ">{searchProducts.length > 0 ? searchProducts.map((product) => <ProductCard key={product.id} product={product} />) : <p className="col-span-full text-center text-xl font-semibold text-red-500">No data found</p>}</div>
    </div>
  );
};

export default Apps;
