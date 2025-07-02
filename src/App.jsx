import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import InfoBanner from './InfoBanner';
import ProductPage from './ProductPage';
import CategoryBanner from './CategoryBanner';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <InfoBanner />
            <CategoryBanner /> 
          </>
        } />
        <Route path="/products/:subcategory" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
