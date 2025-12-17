import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#E8D3BD] pt-14 pb-6 text-[#1A1A1A]">
      <div
        className="max-w-7xl mx-auto px-6 grid gap-12 
                      md:grid-cols-3"
      >
        <div
          className="grid grid-cols-2 gap-x-10 text-sm leading-7 
                        text-center md:text-left"
        >
          <div className="flex flex-col gap-2 font-semibold">
            <Link to="/about">Haqqımızda</Link>
            <Link to="/">Şəki Şərabları</Link>
            <Link to="/">Abrau-Durso</Link>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <Link to="/salespoints">Satış məntəqələri</Link>
            <Link to="/news">Xəbərlər</Link>
            <Link to="/contact">Əlaqə</Link>
          </div>
        </div>
        <div className="text-sm leading-7 text-center md:text-left">
          <p>
            <span className="font-semibold">Telefon:</span> +994 50 123 45 67
          </p>
          <p>
            <span className="font-semibold">E-Mail:</span> info@azabrau.az
          </p>
          <p>
            <span className="font-semibold">Ünvan:</span> Port Baku, Neftchilar
            Avenue 153, Baku Azerbaijan
          </p>
        </div>
        <div className="flex flex-col justify-center md:justify-start items-end gap-6 text-xl">
          <a href="#" className="hover:text-gray-700">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaWhatsapp />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="w-full border-t border-[#D8C4AE] mt-10"></div>
      <div className="bg-[#F7E8D4] w-full py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">
          <p>2022 Az Abrau</p>
          <div className="flex flex-col items-center">
            <img src="/icon/azabrau-logo.png" alt="Az Abrau" className="w-12 h-12" />
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:underline">
              Məxfilik Siyasəti
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:underline">
              Şərtlər və qaydalar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
