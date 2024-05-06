"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import LanguageSelector from './Langselector'

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
  { path: "/team", label: "Our Team" },
  { path: "/news", label: "News" },

];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div

    className="menu-container" ref={container}>
      {/* menu-bar */}
      <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 1,
            delay: 1,
          }}
      className="menu-bar">
        <div className="menu-logo">
          <Link className="opacity-80" to="/">EDEVA</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
        <button class="green box group relative  px-3 py-1 overflow-hidden rounded-full bg-[#1B1D1C] md:text-md  text-sm shadow ">
            <div class="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-white group-hover:text-[#1B1D1C] uppercase ">→ Menu </span>
          </button>
        </div>
      </motion.div>

      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar flex flex-row justify-between items-center">
        <div className="menu-close ">
          <LanguageSelector />
          </div>
          <button class="green box group relative  px-3 py-1 overflow-hidden rounded-full bg-[#1B1D1C] md:text-md  text-sm shadow ">
            <div class="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span onClick={toggleMenu} class="relative text-white group-hover:text-[#1B1D1C] uppercase ">→ Close </span>
          </button>
        </div>

        {/* menu overlay items */}
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link className="menu-link" to={link.path}>
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col mr-2 ">
              <a href="#">Instagram &#8599;</a>
              <a href="#">Facebook &#8599;</a>
              <a href="#">Mahatma &#8599;</a>
            </div>
            <div className="menu-info-col lighter">
              <p>info@codegrid.com</p>
              <p>0923 3984 23</p>
            </div>
          </div>
        </div>
        <div className="menu-preview md:flex hidden lighter underline">
          <p>Our Company</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
