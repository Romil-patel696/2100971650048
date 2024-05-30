import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
