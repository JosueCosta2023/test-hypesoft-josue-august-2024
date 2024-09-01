"use client"
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-brand-white uppercase flex justify-end z-10 mx-auto w-[1320px] max-w-[100%] h-[96px] py-8">
      <div className="flex flex-col items-end mr-4">
        {/* Botão de Menu para Telas Menores */}
        <button
          className="md:hidden focus:outline-none mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navegação */}
        <nav
          className={`flex flex-col h-[50%] z-50  ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto w-full`}
        >
          <ul className="flex flex-col space-y-5 p-10 bg-brand-secondary md:p-4 md:bg-transparent  md:flex-row md:space-y-0 md:gap-6 mt-4 md:mt-0">
            <li className="hover:text-gray-400">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#service">Services</a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

