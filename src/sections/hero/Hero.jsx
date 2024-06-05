"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ImagesSlider } from "../../components/ui/images-slider";
import { motion } from "framer-motion";


export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useGSAP(() => {
    /* The code snippet you provided is using the GSAP (GreenSock Animation Platform) library to create
    animations in a React component. Here's an explanation of what the code is doing: */
    const timeline = gsap.timeline();
    const context = gsap.context(() => {
      timeline
        .to(".clip_path-container", {
          duration: 2.5,
          marginTop: "0px",
          ease: "power2.inOut",
        })
        .to(".clip_path-container", {
          ease: "power2.inOut",
          duration: 0.9,
          clipPath: "inset(0%)",
        });
    });
    return () => context.kill();
  }, []);
  return (
    <main className="bg-[vat(--main)] overflow-x-hidden h-screen overflow-y-scroll no-scrollbar relative flex justify-center items-center">
      <section className="clip_path-container absolute inset-0  mt-[100vh] ">
        
        <motion.h1
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{delay: 2.8, duration: 2, }}
        className="z-10 w-screen absolute centeredTwo  text-white md:text-[8vw] sm:text-7xl text-6xl font-bold tracking-wide text-center"> <span className="md:text-[4vw] sm:text-4xl text-3xl uppercase text-white z-10 text-center opacity-100">Escola de dança </span><br /> EVA VIEIRA <br /> DE ALMEIDA</motion.h1>
  
        <ImagesSlider images={images} className="h-[100vh]" />

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

  
      </section>
    </main>
  );
}
/* */