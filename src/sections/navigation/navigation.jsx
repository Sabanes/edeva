"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/news", label: "News" },
  { path: "/team", label: "Our Team" },
  { path: "/contact", label: "Get in touch" },
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

    className="menu-container m-auto flex justify-center items-center" ref={container}>
      {/* menu-bar */}
      <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 1,
            delay: 2,
          }}
      className="menu-bar max-w-[90vw] m-auto">
        <div className="">
        </div>
        <div className="menu-open" onClick={toggleMenu}>
        <button className="group relative md:left-0 left-5 px-3 py-1 overflow-hidden rounded-full backdrop-blur-xl bg-[#1b211e]/80 md:text-md text-sm shadow border">
            <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white group-hover:text-[var(--main)] uppercase ">Menu &#8599;</span>
          </button>
        </div>
      </motion.div>

      {/* menu-overlay */}
      <div className="menu-overlay  m-auto">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
        <div className="menu-close ">
          </div>
          <button class="group relative right-10 bottom-1 px-3 py-1 overflow-hidden rounded-full bg-gradient-to-br from-[#1b211e] to-[#232a27] md:text-md text-sm shadow border ">
            <div class="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span onClick={toggleMenu} class="relative text-white group-hover:text-[var(--main)] uppercase ">Close</span>
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
          <div className="menu-info text-white">
            <div className="menu-info-col mr-2 cursor-pointer ">
              <a target="_blank" href="https://www.instagram.com/edevaoeiras/">Instagram &#8599;</a>
              <a target="_blank" href="https://www.facebook.com/edevaoeiras">Facebook &#8599;</a>
              <a target="_blank" href="https://twitter.com/edevaoeiras">Twitter &#8599;</a>
            </div>
            <div className="menu-info-col lighter">
              <p><a className=" cursor-pointer underline " href="mailto:evavieiradealmeida@hotmail.com"> Send e-mail</a>  </p>
              <p><a className=" cursor-pointer underline" href="tel:+351214412251">Call us</a></p>
            </div>
          </div>
        </div>
        <div className="menu-preview text-white md:flex hidden lighter underline">
          <p>Our Company</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
