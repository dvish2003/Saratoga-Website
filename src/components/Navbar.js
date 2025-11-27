/* eslint-disable react-hooks/set-state-in-effect */
'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home", description: "Welcome to Saratoga" },
    { href: "/about", label: "Our Heritage", description: "150 Years of Excellence" },
    { href: "/collection", label: "Collection", description: "Explore Our Products" },
    { href: "/sustainability", label: "Sustainability", description: "Our Environmental Commitment" },
    { href: "/contact", label: "Contact", description: "Get in Touch" },
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-xl shadow-2xl" : "bg-transparent backdrop-blur-3xl"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <div className="shrink-0">
              <h1 className="text-2xl font-bold text-white tracking-widest">SARATOGA</h1>
            </div>
            <div className="hidden md:flex space-x-12 items-center">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-white hover:text-gray-300 transition-all duration-300 group ${
                    pathname === item.href ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : ""
                  }`}></span>
                </Link>
              ))}
              <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold tracking-wide">
                Get Yours Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none relative w-8 h-8"
              >
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}>
                  <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                  <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}>
                  ✕
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 transition-all duration-700 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-700 ${
            isOpen ? "opacity-80" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-linear-to-b from-black to-gray-900 shadow-2xl transform transition-transform duration-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="absolute top-8 right-8 z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl hover:text-gray-300 transition-colors duration-300 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40"
            >
              ✕
            </button>
          </div>

          <div className="h-full flex flex-col justify-center px-12">
            <div className="space-y-8 mb-16">
              {navItems.map((item, index) => (
                <div key={item.href} className="group">
                  <Link
                    href={item.href}
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-4 transform transition-transform duration-500 hover:translate-x-4">
                      <div className={`w-2 h-12 bg-white transform transition-all duration-500 ${
                        pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}></div>
                      <div>
                        <h3 className={`text-3xl font-bold text-white transition-all duration-500 ${
                          pathname === item.href ? "text-white" : "text-gray-400 group-hover:text-white"
                        }`}>
                          {item.label}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-8">
              <button className="w-full py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg tracking-wide shadow-2xl">
                Get Yours Now
              </button>
              <p className="text-gray-400 text-sm text-center mt-4">
                Premium Spring Water Since 1870
              </p>
            </div>

            <div className="mt-12 flex justify-center space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Instagram
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-300">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;