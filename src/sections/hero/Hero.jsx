"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ImagesSlider } from "../../components/ui/images-slider";
import { motion } from "framer-motion";
import data from "../../data/hero.json";


export default function Hero() {
  const images = [
    "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,h_1.00,w_1.00/Hero-1.jpg",
    "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/Hero",
    "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/Hero-3",
  ];

  useGSAP(() => {
    const timeline = gsap.timeline()
    const context = gsap.context(() => {
      timeline.to(".clip_path-container", {
        duration: 2.5,
        marginTop: '0',
        ease: 'power2.inOut',
      }).to(".clip_path-container", {
        clipPath: "inset(0%)",
        duration: .5,
        ease: "power4.inOut",
      });
    });
    return () => context.kill();
  }, []);
  return (
    <main className="bg-[vat(--main)] overflow-x-hidden h-screen overflow-y-scroll no-scrollbar relative flex justify-center items-center">
      <section className="clip_path-container absolute inset-0 mt-[100vh] ">
        
        <motion.h1
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 3, duration: 2, }}
        className="z-10 w-screen absolute centeredTwo  text-white md:text-[8vw] sm:text-7xl text-6xl font-bold tracking-wide text-center"> <span className="md:text-[4vw] sm:text-4xl text-3xl uppercase text-white z-10 text-center opacity-100">{data.title_1_part} </span><br /> {data.title_2_part} <br /> {data.title_3_part}</motion.h1>
  
        <ImagesSlider images={images} className="h-[100vh] bg-center" />

        <motion.div
        initial={{ opacity: 0, y: 100, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute max-w-[30rem] pt-3 h-[50px] w-[50vw] sm:h-[60px] sm:w-[45vw] lg:w-[35vw] 2xl:h-[70px] bg-[var(--main)] text-white bottom-0 pb-3 right-0 z-[99] translate-y-px rounded-tl-full font-bold flex items-center justify-center"
      >
        
        <a href="/news">
          <p className="cursor-pointer md:text-lg text-xs relative left-2 top-[2px] uppercase">{data.Upcoming_events_Button}</p>
        </a>
      </motion.div>

  
      </section>
    </main>
  );
}
