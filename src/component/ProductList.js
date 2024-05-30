// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import Product from './Product';

const ProductList = ({ company, category, top, minPrice, maxPrice }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(company, category, top, minPrice, maxPrice);
      setProducts(data);
    };
    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
