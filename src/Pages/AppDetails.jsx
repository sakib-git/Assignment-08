import React from 'react';
import { NavLink, useParams } from 'react-router';
import useProducts from '../Hook/useProducts';
import downloadimg from '../assets/icon-downloads.png';
import avergeImg from '../assets/icon-ratings.png';
import reviewimg from '../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const productFind = products.find((product) => product.id === parseInt(id));

  const { image, description, ratingAvg, ratings, reviews, companyName, title, downloads } = productFind || {};
  const handleInstall = (id) => {
    console.log(id);
    installApp(id);
  };
  return (
    <div>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 max-sm:px-4">
        <div className=" flex max-md:flex-col gap-6 space-y-3">
          <div className="max-md:flex justify-center">
            <img className="w-60 h-60" src={image} alt="" />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-3xl font-bold">{title}</h2>
              <p>
                Developed by <span className="text-violet-600">{companyName}</span>
              </p>
            </div>

            <div className="flex gap-20 mt-5 max-sm:flex-col max-sm:mx-auto">
              <div>
                <img className="w-6 h-6" src={downloadimg} alt="" />
                <p>Downloads</p>
                <p className="font-bold text-2xl">{downloads}M</p>
              </div>

              <div>
                <img className="w-6 h-6" src={avergeImg} alt="" />
                <p>Average Ratings</p>
                <p className="font-bold text-2xl">{ratingAvg}</p>
              </div>

              <div>
                <img className="w-6 h-6" src={reviewimg} alt="" />
                <p>Total Reviews</p>
                <p className="font-bold text-2xl">{reviews}K</p>
              </div>
            </div>

            <NavLink onClick={() => handleInstall(id)} to="/install" className="mt-9 bg-[#00d390] text-white px-2 py-2 w-full max-w-[200px] font-semibold rounded-md text-center max-md:mx-auto">
              Install Now
            </NavLink>
          </div>
        </div>

        <hr className="border-gray-600" />

        <div>
          <h2 className="text-xl font-semibold mb-2">Ratings </h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratings}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Bar dataKey="count" fill="#632EE3" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <hr className="border-gray-600" />
        <div>
          <span className="text-4xl ">Description</span>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
