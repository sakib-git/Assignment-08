import React from 'react';
import Banner from '../Component/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto max-w-[1440px] py-10">
        <div className="text-center flex gap-4 flex-col">
          <span className="text-4xl font-bold">Trending Apps</span>
          <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
