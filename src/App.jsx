import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import InfoBanner from './InfoBanner';
import ProductPage from './ProductPage';
<<<<<<< HEAD
import Register from './Register';
import Login from './Login';
import UserRegister from './UserRegister';

=======
import CategoryBanner from './CategoryBanner';
>>>>>>> c62f8d3daa77c0478ae66527dd894f129685349b

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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-register" element={<UserRegister />} />

      </Routes>
    </>
  );
}

export default App;
