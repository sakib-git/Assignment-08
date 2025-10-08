import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hook/useProducts';

const AppDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();

  console.log('Products data:', products);

  return <div className="p-6">detals</div>;
};

export default AppDetails;
