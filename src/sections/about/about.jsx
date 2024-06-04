import React from "react";
import Transition from "../../components/transition/Transition";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const About = () => {
  return (
    <div className="about smooth-scroll !z-10 max-w-[1500px]" data-scroll-container id="scroll-container">
      <section className="about-us" data-scroll-section>
        <div className="about-us-copy">
          <div className="about-us-copy-p pl-5 pt-5">
            <span className="md:text-7xl text-5xl">About Us</span>
            <br />
            <br />
            <span>
              <TextGenerateEffect className="font-light md:max-w-[90%] max-w-full" words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium?"} />
            </span>
          </div>
          <div className="p-10 flex flex-col">
            <span>EDEVA</span>
            <span>Escola de dança</span>
            <span><a target="_blank" className="underline cursor-pointer" href="https://maps.app.goo.gl/SMmE2kugjkNEE5Gr9">Oeiras, 2780-236</a></span>
            <span><a target="_blank" className="underline cursor-pointer" href="https://maps.app.goo.gl/SMmE2kugjkNEE5Gr9">R. Conde Ferreira 23</a></span>
            <br />
            <span>
              <a className="cursor-pointer underline" href="mailto:evavieiradealmeida@hotmail.com">evavieiradealmeida@hotmail.com</a>
            </span>
          </div>
        </div>
      </section>

      <section className="hero-img pt-10 pb-20" data-scroll-section>
        <div className="hero-img-container m-auto pt-10">
          <img loading="lazy" className="rounded-2xl h-[30rem] object-cover w-[95%] m-auto" src="https://images.pexels.com/photos/119810/pexels-photo-119810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
      </section>

      <section id="about-sticky-wrap" data-scroll-section>
        <div className="about-sticky about-sticky-1" data-scroll data-scroll-sticky data-scroll-target="#about-sticky-wrap">
          <div className="sticky-content">
            <div className="sitcky-content-h1">
              <h1 className="num md:text-7xl text-5xl">Openclasses</h1>
            </div>
            <div className="sitcky-content-h1 relative">
              
              <TextGenerateEffect className=" font-light pb-10 text-[var(--main)] md:max-w-[90%] max-w-full" words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilisnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur expedita facilis consequuntur expedita facilis consequuntur expedita facilis consequuntur"} />

              <button className="green box group relative px-4 py-2 overflow-hidden rounded-full bg-[var(--main)] md:text-md text-sm shadow border">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-[var(--main)] uppercase">→ Timetable </span>
              </button>
            </div>
          </div>
        </div>
        <div className="about-sticky about-sticky-2" data-scroll data-scroll-sticky data-scroll-target="#about-sticky-wrap">
          <div className="sticky-content">
            <div className="sitcky-content-h1">
              <h1 className="num md:text-7xl text-5xl">Vocs</h1>
            </div>
            <div className="sitcky-content-h1 relative">

                  <TextGenerateEffect className="font-light pb-10 md:max-w-[90%] max-w-full" words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium?"} />
        
              <button className="group relative px-4 py-2 overflow-hidden rounded-full bg-white md:text-md text-sm shadow border">
                <div className="absolute inset-0 w-0 bg-[var(--main)] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-[var(--main)] group-hover:text-white uppercase">→ Know more </span>
              </button>

            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Transition(About);
