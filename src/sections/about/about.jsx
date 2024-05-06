import React from "react";


import Transition from "../../components/transition/Transition";

import AboutHero from "./media/about-hero.jpg";
import AboutFeature from "./media/about-feature.jpg";
import Office from "./media/about-office.jpg";
import { TextGenerateEffectDemo } from "../../components/spotcomps/textgeneration";


const About = () => {



  return (


      <div
        className="about smooth-scroll !z-10"
        data-scroll-container
        id="scroll-container"
      >
        <section className="hero-img" data-scroll-section>
          <div className="hero-img-container  m-auto pt-10">
            <img loading="lazy" className="rounded-2xl md:w-[50rem] w-[90%] m-auto" src={AboutHero} alt="" />
          </div>
        </section>

        <section className="about-us " data-scroll-section>
          <div className="about-us-copy ">
            <div className="about-us-copy-p p-10  ">
              <span className="md:text-7xl text-5xl">About Us</span>
              <br />
              <span ><TextGenerateEffectDemo words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium?"} /> </span>
            </div>
            <div className="about-us-copy-p p-10 flex flex-col ">
              <span>Unusual Designs</span>
              <span>Digital Creative Studio</span>
              <span>Toronto 0982</span>
              <span>0912 King street</span>
              <br />
              <span>
                <a href="#">hi@boring.studio</a>
              </span>
            </div>
          </div>
        </section>

        <section id="about-sticky-wrap" data-scroll-section>
          <div
            className="about-sticky about-sticky-1"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#about-sticky-wrap"
          >
            <div className="sticky-content">
              <div className="sitcky-content-h1">
                <h1 className="num md:text-7xl text-5xl">Openclasses</h1>
              </div>
              <div className="sitcky-content-h1 relative ">
                <p className="pb-10 pt-5 md:text-3xl text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  nulla aliquam tempore totam quo quas tempora ut exercitationem
                  laboriosam veritatis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  nulla aliquam tempore totam quo quas tempora ut exercitationem
                  laboriosam veritatis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  nulla aliquam tempore totam quo quas tempora ut exercitationem
                  laboriosam veritatis.
                </p>
                <button class="green box group relative  px-4 py-2 overflow-hidden rounded-full bg-[#1B1D1C] md:text-md  text-sm shadow ">
                  <div class="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span class="relative text-white group-hover:text-[#1B1D1C] uppercase ">→ Timetable </span>
              </button>
              </div>
            </div>
          </div>
          <div className="about-sticky about-sticky-2 py-5">
            <div className="sticky-content">
              <div className="sitcky-content-h1">
                <h1 className="num md:text-7xl text-5xl">Vocationals</h1>
              </div>
              <div className="sitcky-content-h1">
                <p className="pb-10 pt-5">

                <span className=""><TextGenerateEffectDemo words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium?"} /> </span>

                </p>
                <button class="green box group relative  px-4 py-2 overflow-hidden rounded-full bg-white md:text-md  text-sm shadow ">
                  <div class="absolute inset-0 w-0 bg-[#1B1D1C] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span class="relative text-[#1B1D1C] group-hover:text-white uppercase ">→ Read more </span>
              </button>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-img" data-scroll-section>
          <div className="hero-img-container m-auto pt-10">
            <img loading="lazy" className=" md:w-[50rem] w-[90%] m-auto rounded-2xl" src={AboutFeature} alt="" />
          </div>
        </section>


  </div>
    
  );
};

export default Transition(About);
