"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "framer-motion";

export function ThreeDCardDemo() {
  return (
  <div className="py-[5rem] overflow-x-hidden">
      <motion.span     
    initial={{opacity: 0  }}
    whileInView={{opacity: 1}}
    transition={{

        duration: 1,
      }}
      
      className='relative  top-0 right-0 uppercase '><h2 className='geist w-[90%] m-auto md:text-[3vw] text-[6vw] text-center'>What type of Dance you like <span className='notgeist md:text-[3.5vw] text-[6.5vw]'>more</span></h2></motion.span>
      <div className="flex flex-wrap justify-center gap-[5rem] mt-10">
    <motion.span
    initial={{opacity: 0, x: -100, y:50}}
    whileInView={{opacity: 1, x: 0, y:0}}
    transition={{
        type: "spring",
        stiffness: 50,
        duration: 1,
      }}
    > 
    <CardContainer className="inter-var">
      <CardBody className="relative group/card    border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span >   
    <motion.span
        initial={{opacity: 0, x: 100, y:50}}
        whileInView={{opacity: 1, x: 0, y:0}}
        transition={{
            type: "spring",
            stiffness: 50,
            duration: 1,
          }}>
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  glass-effect  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span>
    <motion.span
    initial={{opacity: 0, x: -100, y:50}}
    whileInView={{opacity: 1, x: 0, y:0}}
    transition={{
        type: "spring",
        stiffness: 50,
        duration: 1,
      }}
    > 
    <CardContainer className="inter-var">
      <CardBody className="relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span >   
    <motion.span
        initial={{opacity: 0, x: 100, y:50}}
        whileInView={{opacity: 1, x: 0, y:0}}
        transition={{
            type: "spring",
            stiffness: 50,
            duration: 1,
          }}>
    <CardContainer className="inter-var">
      <CardBody className="relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span>
    <motion.span
    initial={{opacity: 0, x: -100, y:50}}
    whileInView={{opacity: 1, x: 0, y:0}}
    transition={{
        type: "spring",
        stiffness: 50,
        duration: 1,
      }}
    > 
    <CardContainer className="inter-var">
      <CardBody className="relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span >   
    <motion.span
        initial={{opacity: 0, x: 100, y:50}}
        whileInView={{opacity: 1, x: 0, y:0}}
        transition={{
            type: "spring",
            stiffness: 50,
            duration: 1,
          }}>
    <CardContainer className="inter-var">
      <CardBody className="relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span>
    <motion.span
    initial={{opacity: 0, x: -100, y:50}}
    whileInView={{opacity: 1, x: 0, y:0}}
    transition={{
        type: "spring",
        stiffness: 50,
        duration: 1,
      }}
    > 
    <CardContainer className="inter-var">
      <CardBody className="relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span >   
    <motion.span
        initial={{opacity: 0, x: 100, y:50}}
        whileInView={{opacity: 1, x: 0, y:0}}
        transition={{
            type: "spring",
            stiffness: 50,
            duration: 1,
          }}>
    <CardContainer className="inter-var">
      <CardBody className="relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            Try it →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#222] text-[#e2e2e2] text-xs font-bold"
          >
            Watch
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </motion.span>
    </div>
    </div>
  );
}
