"use client";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { motion } from "framer-motion";

export function ImagesSliderDemo() {
  const images = [
    "https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/843256/pexels-photo-843256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    "https://images.pexels.com/photos/898220/pexels-photo-898220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
   ];
  return (
    <ImagesSlider className=" w-screen h-screen bg-[vat(--main)]" images={images}>
              <div className="flex justify-center items-center absolute z-50">
                  
                <div className="w-screen h-screen pl-20 flex flex-col justify-end items-start">
                  <motion.h1
                      initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{delay: 2, duration: 1.7}}
                      className="w-full notgeist font-bold text-[7.5rem] leading-none tracking-widest">
                       EVA VIEIRA <br /> DE ALMEIDA
                  </motion.h1>
                  <p className="text-left text-white text-xl">scroll down <span className="text-sm">↓</span></p>
                </div>


{/*                   <motion.button 
                  initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{delay: 2.3, duration: 2}}
                  className="group relative  px-5 py-1 overflow-hidden rounded-full bg-[var(--main)] md:text-md mt-10 text-lg shadow ">
                    <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-white group-hover:text-[#1B1D1C] uppercase "> Explore </span>
                  </motion.button> */}
              </div>
    </ImagesSlider>
  );
}
