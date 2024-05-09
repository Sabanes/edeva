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
    <ImagesSlider className=" max-w-[1500px] w-screen h-full bg-[vat(--main)]" images={images}>

              
              <div className=" absolute max-w-[30rem] pt-3 h-[50px] w-[50vw] sm:h-[60px] sm:w-[45vw]  lg:w-[35vw] 2xl:h-[70px] bg-[var(--main)] text-white bottom-0 pb-3 right-0 z-[99] translate-y-px rounded-tl-full font-bold flex items-center justify-center ">
                <a href="/news"><p className="cursor-pointer  md:text-lg text-xs relative left-2  uppercase ">Upcoming events</p></a>
              </div>

              <motion.h3
              initial={{opacity: 0, y:-10}} animate={{opacity: 1, y: 0}} transition={{delay: 3, duration: 2}}
              className="md:text-3xl text-xl uppercase text-white relative bottom-20">
                        Escola de dança
              </motion.h3>
              
              <div className=" absolute z-50">
                <div className="w-screen h-screen max-w-[1500px] md:pl-20 pl-3 flex flex-col justify-end items-start">
                  <motion.h1
                      initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} transition={{delay: 3, duration: 1.7}}
                      className="w-full relative md:right-10 notgeist font-bold 2xl:text-[7rem] md:text-[9vw] sm:text-[3rem] text-[3rem] md:pb-[3rem] pb-[8rem] leading-none tracking-widest">
                       EVA VIEIRA <br /> DE ALMEIDA
                  </motion.h1>
                </div>
              </div>
    </ImagesSlider>
  );
}
