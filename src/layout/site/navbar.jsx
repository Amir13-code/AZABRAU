import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <header className="w-full bg-black py-4">
      <div
        className="
          max-w-7xl mx-auto px-6
          flex flex-wrap items-center 
          justify-between md:justify-around
          gap-y-4"
      >
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Link to="/">
            <img
              src="/icon/azabrau-logo.png"
              alt="logo"
              className="w-[53px] h-[65px] object-contain"
            />
          </Link>
        </div>
        <div className="w-full md:w-auto flex justify-center order-4 md:order-none">
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 text-white text-[13px] font-playfair">
              <li><Link className="hover:text-gray-300" to="/about">HAQQIMIZDA</Link></li>
              <li><Link className="hover:text-gray-300" to="/azabrau">AZ ABRAU</Link></li>
              <li><Link className="hover:text-gray-300" to="/salespoints">SATIŞ MƏNTƏQƏLƏRİ</Link></li>
              <li><Link className="hover:text-gray-300" to="/news">XƏBƏRLƏR</Link></li>
              <li><Link className="hover:text-gray-300" to="/contact">ƏLAQƏ</Link></li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-auto flex justify-center md:justify-center">
          <IoSearch className="text-white text-lg cursor-pointer hover:text-gray-300" />
        </div>
        <div className="w-full md:w-auto flex justify-center md:justify-center space-x-6 text-white text-lg">
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
          <FaGlobe className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
