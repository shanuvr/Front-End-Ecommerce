import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <h2 className="text-lg font-semibold text-white">MyShop</h2>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/cart" className="hover:text-white">Cart</Link>
          <Link to="/orders" className="hover:text-white">Orders</Link>
          <Link to="/profile" className="hover:text-white">Profile</Link>
        </div>

      
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
