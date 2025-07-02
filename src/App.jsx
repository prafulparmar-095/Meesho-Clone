import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import InfoBanner from './InfoBanner';
import ProductPage from './ProductPage';
import Register from './Register';
import Login from './Login';
import UserRegister from './UserRegister';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <InfoBanner />
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
