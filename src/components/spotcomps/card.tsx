"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { motion } from 'framer-motion'
import { TextGenerateEffectDemo } from "./textgeneration";

export function ThreeDCardDemo() {
  return (

    <div className="flex flex-row justify-center flex-wrap gap-[7rem] py-10 bg-[#e2e2e2] rounded-2xl overflow-x-hidden">


<motion.div
  initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
      <CardContainer className="inter-var border border-[#c6c6c6] rounded-[1rem]">
      <CardBody className="relative group/card  w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>

<motion.div
  initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
    <CardContainer className="inter-var rounded-[1rem]">
      <CardBody className=" relative group/card border border-[#c6c6c6]   w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>
<motion.div
  initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
      <CardContainer className="inter-var border border-[#c6c6c6] rounded-[1rem]">
      <CardBody className="relative group/card  w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>

<motion.div
  initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
    <CardContainer className="inter-var rounded-[1rem]">
      <CardBody className=" relative group/card border border-[#c6c6c6]   w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>
<motion.div
  initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
      <CardContainer className="inter-var border border-[#c6c6c6] rounded-[1rem]">
      <CardBody className="relative group/card  w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>

<motion.div
  initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
    <CardContainer className="inter-var rounded-[1rem]">
      <CardBody className=" relative group/card border border-[#c6c6c6]   w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>
<motion.div
  initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
      <CardContainer className="inter-var border border-[#c6c6c6] rounded-[1rem]">
      <CardBody className="relative group/card  w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>

<motion.div
  initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{
    ease: "linear",
    duration: .4,
    x: { duration: .6 }
  }}>
    <CardContainer className="inter-var rounded-[1rem]">
      <CardBody className=" relative group/card border border-[#c6c6c6]   w-auto sm:w-[28rem] h-auto rounded-[1rem] p-6 pr-7   ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-[#222] "
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</motion.div>




    </div>
  
  );
}
