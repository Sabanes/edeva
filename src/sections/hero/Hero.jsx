"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ImagesSliderDemo } from "../../components/spotcomps/slideshow";

export default function Hero() {
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
        <ImagesSliderDemo />
      </section>
    </main>
  );
}
/* */