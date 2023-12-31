"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about-us", label: "About Us" },
    { href: "products", label: "Products" },
    { href: "contact-us", label: "Contact Us" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="px-2 z-10 w-full bg-white shadow-md">
        <nav className="flex-props-b max-container">
          <Link href="/" className="flex-props-c">
            <Image src={'/icon.png'} height={100} width={120} className="ml-[-2rem]"/>
            <h2 className="text-3xl font-bold ml-[-2rem]">OTS</h2>
          </Link>
          <div className="flex items-center gap-8">
            <ul className="hidden lg:flex gap-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat text-lg text-gray-700 hover:text-gray-900 transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex gap-2 text-lg font-medium font-montserrat">
              <a href="/" className="text-blue-500 hover:underline">
                Sign in
              </a>
              <span>/</span>
              <a href="/" className="text-green-500 hover:underline">
                Sign Up
              </a>
            </div>
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <RiCloseLine className="text-4xl" />
              ) : (
                <RiMenu3Fill className="text-4xl" />
              )}
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden z-10 inset-0 bg-gray-100 absolute top-0 bottom-0 left-0 right-0">
          <div className="flex justify-end p-4">
            <RiCloseLine
              className="text-4xl cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-gray-700 hover:text-gray-900 transition duration-300"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
