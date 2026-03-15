import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import LetsTalk from "../ui/LetsTalk";

const Navbar = ( elem) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="flex justify-center fixed w-full z-110">
        <div className="container">
          <nav className="navbar py-4 px-2 h-fit flex items-center justify-between">
            <div className="logo flex items-center">
              <img
                src={logo}
                alt="logo"
                loading="eager"
                className="h-4.5 min-w-33"
              />
            </div>

            <div className="ctas-pulse flex flex-row items-center gap-6 justify-center">
              <div className="available hidden md:flex text-white items-center justify-center flex-row gap-3"> 
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 solid-dot"></span>
                </div>
                Available for Project
              </div>

              <div className="nav-cta flex ">

              
              
              <div className="lets-cta flex items-center">
                <LetsTalk />
              </div>

              <button 
                onClick={toggleMenu}
                className="hamburger flex flex-col gap-2 justify-center items-center border-[#2E2E2E] rounded-[50%] transition-all duration-300 hover:bg-[#2E2E2E] z-101"
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5 bg-[#ff4925]' : 'bg-white'}`}></span>
                <span className={`block w-5 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1 bg-[#ff4925]' : 'bg-white'}`}></span>
              </button>

              </div>  
            </div>
          </nav>
        </div>
      </header>

      {/* Desktop Navigation Menu - Left Side */}
      <div className={`fixed right-0 top-0 h-full w-150 bg-black bg-opacity-95 backdrop-blur-sm z-100 transition-all duration-300 transform hidden lg:block ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col justify-between h-full p-12 pt-32">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400 tracking-wider">MENU</span>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`text-lg font-medium text-white transition-all duration-300 hover:text-[#ff4925] ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col hidden space-y-4">
            <a 
              href="mailto:hello@nakula.com" 
              className="text-sm text-gray-400  hover:text-white transition-colors"
            >
              hello@nakula.com
            </a>
            <span className="text-xs text-gray-500">(SOCIALS)</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Full Screen */}
      <div className={`fixed inset-0 z-100 bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 lg:hidden ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col justify-between h-full p-8 pt-32">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400 tracking-wider">MENU</span>
            </div>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`text-2xl font-medium text-white transition-all duration-300 hover:text-[#ff4925] ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className=" flex-col items-center hidden space-y-4">
            <a 
              href="mailto:hello@nakula.com" 
              className="text-sm text-gray-400  hover:text-white transition-colors"
            >
              hello@nakula.com
            </a>
            <span className="text-xs text-gray-500">(SOCIALS)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
