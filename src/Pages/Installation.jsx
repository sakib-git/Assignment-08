import React, { useEffect, useState } from 'react';
import downloadimg from '../assets/icon-downloads.png';
import avergeImg from '../assets/icon-ratings.png';
import errorImg from '../assets/App-Error.png';

const Installation = () => {
  const [installPage, setinstallPage] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem('installPage')) || [];
    if (saveList) setinstallPage(saveList);
  }, []);

  const uninstall = (id) => {
    const saveList = JSON.parse(localStorage.getItem('installPage')) || [];
    let updateremove = saveList.filter((r) => r.id !== id);
    setinstallPage(updateremove);
    localStorage.setItem('installPage', JSON.stringify(updateremove));
  };
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center py-10 space-y-5">
          <h3 className="max-md:text-3xl text-4xl font-bold ">Your Installed Apps </h3>
          <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="flex justify-between items-center max-sm:px-4">
          <h2 className="text-2xl font-bold text-gray-600"> {installPage.length} Apps Found</h2>
          <h2>sort</h2>
        </div>
        <div className="mt-10 flex gap-4 flex-col">
          {installPage.length > 0 ? (
            installPage.map((install) => (
              <div key={install.id} className="flex justify-between items-center p-4 bg-white shadow rounded-md mb-4">
                <div className="flex gap-5 items-center">
                  <img className="h-16 w-16 object-cover rounded-lg" src={install.image} alt={install.title} />

                  <div className="flex flex-col justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">{install.title}</h2>

                    <div className="flex items-center gap-8 mt-2">
                      <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={downloadimg} alt="Downloads" />
                        <p className="text-gray-600">{install.downloads}M</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img className="w-4 h-4" src={avergeImg} alt="Rating" />
                        <p className="text-gray-600">{install.ratingAvg}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">{install.Mb}MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button onClick={() => uninstall(install.id)} className="bg-[#00d390] text-white px-2 py-2 w-full max-w-[200px] font-semibold rounded-md text-center max-md:mx-auto">
                    Uninstall
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex col-span-full  justify-center ">
              <img className="object-contain" src={errorImg} alt="No data found" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
