import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Shop Non-Stop */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Shop Non-Stop on Meesho</h3>
            <p className="text-sm mb-4">
              Trusted by more than 10 crore Indians, Meesho is your one-stop online shop for top-quality products at rock-bottom prices.
            </p>
            <div className="flex space-x-4">
              <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&hl=en_IN" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="https://apps.apple.com/in/app/meesho/id1457958492" target="_blank" rel="noopener noreferrer">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
              </a>
            </div>
          </div>

          {/* Section 2: Careers, About Us, etc. */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect with Us</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-pink-600">Careers</a></li>
              <li><a href="#" className="hover:text-pink-600">About Us</a></li>
              <li><a href="#" className="hover:text-pink-600">Meesho Blog</a></li>
              <li><a href="#" className="hover:text-pink-600">Press</a></li>
              <li><a href="#" className="hover:text-pink-600">Meesho Original</a></li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Reach Out</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/meeshosupply" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-600"><FaFacebook /></a>
              <a href="https://www.instagram.com/meeshoapp/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-600"><FaInstagram /></a>
              <a href="https://www.youtube.com/channel/UCaBqKKFCDEgGHonqo_SY-jg" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-600"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/meesho/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-600"><FaLinkedin /></a>
              <a href="https://twitter.com/Meesho_Official" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-600"><FaTwitter /></a>
            </div>
          </div>

          {/* Section 4: More About Meesho */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">More About Meesho</h3>
            <p className="text-sm mb-2">Discover a World of Affordable Fashion & Everyday Essentials</p>
            <p className="text-sm">Upgrade your wardrobe and stock your home with the latest trends and essentials at prices designed for everyday value.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Meesho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;