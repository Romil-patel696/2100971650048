import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const AllProducts = () => {
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  // Update these states based on user input (not shown for brevity).

  return (
    <div>
      <h1>All Products</h1>
      <ProductList
        company={company}
        category={category}
        top={top}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </div>
  );
};

export default AllProducts;
