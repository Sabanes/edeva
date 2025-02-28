"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import data from "../../data/hero.json";
import { ImagesSlider } from "../../components/ui/images-slider";

// Static images array
const IMAGES = [
  "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/mtzolmfshprlzihgyspd",
  "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/atx0heyjfvnvxgk4uwjy",
  "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/lsu7iszewib4i38lt7bd",
];

/**
 * AnimatedText Component
 *
 * Splits the provided text into individual characters, then animates each letter
 * using a spring-based transition with fade, slide, scale, and rotation effects.
 */
const AnimatedText = ({ text, className = "" }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 3, // Wait for the GSAP container animation to finish
        staggerChildren: 0.04,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={childVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

/**
 * AnimatedButton Component
 *
 * A motion-enabled button that animates into view using a spring transition,
 * and on hover it levitates with a subtle glow effect underneath.
 */
const AnimatedButton = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 3.8, // Appear after the text animations finish
      },
    },
  };

  return (
    <motion.a href="/news" variants={buttonVariants}>
      <motion.button
        initial="hidden"
        animate="visible"
        whileHover={{
          y: -5,
          scale: 1.05,
          boxShadow: "0px 0px 20px 5px rgba(255,255,255,0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="md:px-10 md:py-4 px-5 py-2 md:relative bottom-8 text-white backdrop-blur-lg border-[1px] rounded-full hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] text-sm transition duration-200"
        aria-label="Upcoming events"
      >
        {data.Upcoming_events_Button}
      </motion.button>
    </motion.a>
  );
};

export default function Hero() {
  // GSAP timeline for the container clip-path animation
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".clip_path-container", {
        duration: 2.5,
        marginTop: "0",
        ease: "power2.inOut",
      })
      .to(".clip_path-container", {
        clipPath: "inset(0%)",
        duration: 0.5,
        ease: "power4.inOut",
      });
    return () => timeline.kill();
  });

  return (
    <main className="overflow-x-hidden h-[100dvh] w-dvw overflow-y-scroll no-scrollbar relative mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-48 max-w-[1920px]">
      <section className="clip_path-container absolute inset-0 mt-[100vh] flex justify-center">
        <ImagesSlider images={IMAGES} className="bg-center" />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="z-10 w-[100dvw] absolute centeredTwo text-white md:text-[8vw] text-5xl font-medium tracking-wide text-center"
        >
          <AnimatedText
            text={data.title_1_part}
            className="md:text-[4vw] font-light sm:text-4xl text-3xl uppercase"
          />
          <AnimatedText text={data.title_2_part} className="mt-3" />
          <AnimatedText text={data.title_3_part} />
          <AnimatedButton />
        </motion.h1>
      </section>
    </main>
  );
}