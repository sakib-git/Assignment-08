import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios('../trendingData.json')
      .then((data) => setProducts(data.data))
      .catch((error) => error)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};

export default useProducts;
