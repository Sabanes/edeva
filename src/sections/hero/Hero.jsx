"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ImagesSlider } from "../../components/ui/images-slider";
import { motion } from "framer-motion";
import data from "../../data/hero.json";
import Button from "../../components/Button-main/Button";


export default function Hero() {
  const images = [
    "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/Hero",
    "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,h_1.00,w_1.00/Hero-1.jpg",
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
    <main className="bg-[var(--main)] overflow-x-hidden h-lvh w-dvw overflow-y-scroll no-scrollbar relative">
      <section className="clip_path-container absolute inset-0 mt-[100vh] flex justify-center">
        
        <motion.h1
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 3, duration: 2, }}
        className="z-10 w-screen absolute centeredTwo  text-white md:text-[8vw] text-5xl font-bold tracking-wide text-center"> <span className="md:text-[4vw] sm:text-4xl text-3xl uppercase text-white z-10 text-center opacity-100">{data.title_1_part} </span><br /> {data.title_2_part} <br /> {data.title_3_part}
        <br />
        <a href="/news">
        <button className="md:px-10 md:py-4 px-5 py-2 md:relative bottom-8 text-white backdrop-blur-lg border-[1px] rounded-full hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]  text-sm transition duration-200">
          {data.Upcoming_events_Button}
        </button>  
        </a>
        </motion.h1>
        <ImagesSlider images={images} className="bg-center border-2 top-[3rem] rounded-2xl" />

      </section>
    </main>
  );
}
