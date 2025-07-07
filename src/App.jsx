import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import InfoBanner from './InfoBanner';
import ProductPage from './ProductPage';
import Register from './Register';
import Login from './Login';
import UserRegister from './UserRegister';
import CategoryBanner from './CategoryBanner';
import AllProducts from './AllProducts';
import BuyPage from './BuyPage';
import AddressPage from './AddressPage';
import Footer from './Footer';
import GoldBanner from './GoldBanner';
import OriginalBrands from './OriginalBrands';
import BrandCarousel from './BrandCarousel';
import TrendzBanner from './TrendzBanner';
import CategoryCircles from './CategoryCircles';


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
            <GoldBanner />
            <OriginalBrands />
            <BrandCarousel />
            <TrendzBanner />
            <CategoryCircles />
            <Footer />
          </>
        } />

        <Route path="/products/:subcategory" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/address" element={<AddressPage />} />
      </Routes>
    </>
  );
}

export default App;
