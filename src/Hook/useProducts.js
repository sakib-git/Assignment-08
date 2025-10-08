import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios('./trendingData.json').then((data) => setProducts(data.data));
  }, []);

  return { products };
};

export default useProducts;
