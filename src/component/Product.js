import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.productName}</h3>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
      <Link to={`/product/${product.productName}`}>View Details</Link>
    </div>
  );
};

export default Product;
