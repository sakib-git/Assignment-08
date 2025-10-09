import React from 'react';
import Banner from '../Component/Banner';
import useProducts from '../Hook/useProducts';
import ProductCard from '../Component/ProductCard';
import { NavLink } from 'react-router';

const Home = () => {
  const { products, loading } = useProducts();
  // console.log(products);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <span className="loading loading-ring loading-lg text-primary"></span>
        <span className="loading loading-ring loading-lg text-primary"></span>
        <span className="loading loading-ring loading-lg text-primary"></span>
        <span className="loading loading-ring loading-lg text-primary"></span>
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div>
    );
  }
  const someProducts = products.splice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto max-w-[1440px] py-10">
        <div className="text-center flex gap-4 flex-col py-10">
          <span className="text-4xl font-bold">Trending Apps</span>
          <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 max-md:px-4">
          {someProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
        <div className="py-10 text-center">
          <NavLink to="/apps" className="py-2 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 rounded-md">
            show all
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
