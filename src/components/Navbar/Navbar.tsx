'use client';

import Link from 'next/link';
import { useState } from "react";

const Navbar = () => {
  // Estado para el menú hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el clic en el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[var(--background)] shadow-md p-4 h-16 flex items-center justify-center md:static">
      {/* Navbar pantallas grandes */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Navbar pantalla pequeñas */}
      <div className="md:hidden flex justify-start w-full ml-2">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Menú desplegable */}
        {isMenuOpen && (
          <nav className="absolute top-16 bg-zinc-900 left-0 w-full md:hidden">
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Me</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
