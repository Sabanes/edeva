"use client";

import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import SplitType from 'split-type'
import { AuroraBackground } from "../ui/aurora-background";
import LanguageSelector from "../../sections/navigation/Langselector";

export function AuroraBackgroundDemo() {


const ourText = new SplitType('.our-text', { types: 'chars' })
const chars = ourText.chars

useGSAP(() => {
  gsap.fromTo(
    chars,
    { 
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 2,
      ease: 'power4.out',
    }
  )
  });

  return (
    <AuroraBackground>

    </AuroraBackground>
  );
}
