import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-[80px]">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 h-auto mix-blend-screen" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/about" className="hover:text-orange-600">About Us</Link>
          <Link to="/services" className="hover:text-orange-600">Services</Link>
          <Link to="/solution" className="hover:text-orange-600">Solution</Link>
          <Link to="/sap-services" className="hover:text-orange-600">SAP Services</Link>
          <Link to="/product-offerings" className="hover:text-orange-600">Product Offerings</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact Us</Link>
        </div>

        {/* Right Actions: Login, Signup, Cart, Get a Quote */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-sm hover:text-orange-500">Login</Link>
          <Link to="/signup" className="text-sm hover:text-orange-500">Signup</Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              3 {/* Replace with dynamic cart count */}
            </span>
          </Link>

          <Link to="/quote">
            <button className="bg-white text-black px-4 py-2 rounded font-semibold text-sm hover:bg-gray-200 transition">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={24} /> : <MdOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 font-bold">
          <Link to="/" className="block hover:text-orange-600">Home</Link>
          <Link to="/about" className="block hover:text-orange-600">About Us</Link>
          <Link to="/services" className="block hover:text-orange-600">Services</Link>
          <Link to="/solution" className="block hover:text-orange-600">Solution</Link>
          <Link to="/sap-services" className="block hover:text-orange-600">SAP Services</Link>
          <Link to="/product-offerings" className="block hover:text-orange-600">Product Offerings</Link>
          <Link to="/contact" className="block hover:text-orange-600">Contact Us</Link>
          <Link to="/login" className="block hover:text-orange-500">Login</Link>
          <Link to="/signup" className="block hover:text-orange-500">Signup</Link>
          <Link to="/cart" className="block hover:text-orange-500">Cart</Link>
          <Link to="/quote" className="block hover:text-orange-500">Get a Quote</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
