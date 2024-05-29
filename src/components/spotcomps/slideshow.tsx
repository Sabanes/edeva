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
    <ImagesSlider className="max-w-[1500px] w-screen h-full bg-[var(--main)]" images={images}>
      
      <motion.div
        initial={{ opacity: 0, y: 100, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute max-w-[30rem] pt-3 h-[50px] w-[50vw] sm:h-[60px] sm:w-[45vw] lg:w-[35vw] 2xl:h-[70px] bg-[var(--main)] text-white bottom-0 pb-3 right-0 z-[99] translate-y-px rounded-tl-full font-bold flex items-center justify-center"
      >
        <a href="/news">
          <p className="cursor-pointer md:text-lg text-xs relative left-2 top-[2px] uppercase">Upcoming events</p>
        </a>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: [0, 1.1, 1] }}
        transition={{ delay: 2.5, duration: 2, ease: "easeInOut" }}
        className="relative  left-1 md:text-6xl sm:text-4xl text-3xl uppercase text-white z-10 text-center opacity-100"
      >
        Escola de dança <br />
        <span className="md:text-8xl sm:text-7xl text-6xl font-bold tracking-wide">
          EVA VIEIRA <br /> DE ALMEIDA
        </span>
      </motion.h3>

    </ImagesSlider>
  );
}
