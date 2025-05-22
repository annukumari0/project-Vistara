import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-[80px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 h-auto mix-blend-screen" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold">
          <Link to="/" className="text-white hover:text-orange-600">Home</Link>
          <Link to="/product" className="text-white hover:text-orange-600">Products</Link>
          <Link to="/about" className="text-white hover:text-orange-600">About</Link>
          <Link to="/contact" className="text-white hover:text-orange-600">Contact</Link>
        </div>

        {/* Call Button */}
        <div className="hidden md:block">
          <button className='p-2 font-medium text-sm rounded-md bg-orange-500'>+911144126457</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 font-bold">
          <Link to="/" className="block text-white hover:text-orange-600">Home</Link>
          <Link to="/product" className="block text-white hover:text-orange-600">Products</Link>
          <Link to="/about" className="block text-white hover:text-orange-600">About</Link>
          <Link to="/contact" className="block text-white hover:text-orange-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation