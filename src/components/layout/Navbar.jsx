import React from "react";
import logo from "../../assets/images/logo.png";
import LetsTalk from "../ui/LetsTalk";

const Navbar = () => {
  return (
    <header className="flex justify-center fixed w-full z-50">
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

          <div className="ctas-pulse flex flex-row items-center justify-center gap-6">
<div className="available hidden md:flex text-white items-center justify-center flex-row gap-3"> 
            <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 solid-dot"></span>
            </div>
            Available for Project</div>
          
          
          <div className="cta-hamburger flex flex-row items-center">
            
            <div className="lets-cta">
              <LetsTalk />
            </div>
            <div className="hamburger flex flex-col gap-2 justify-center items-center border-[#2E2E2E] rounded-3xl">
              <span></span>
              <span></span>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
