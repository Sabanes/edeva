import React from "react";
import Transition from "../../components/transition/Transition";
import AboutFeature from "./media/about-feature.jpg";
import { TextGenerateEffectDemo } from "../../components/spotcomps/textgeneration";

const About = () => {
  return (
    <div className="about smooth-scroll !z-10 max-w-[1500px]" data-scroll-container id="scroll-container">
      <section className="about-us" data-scroll-section>
        <div className="about-us-copy">
          <div className="about-us-copy-p p-10">
            <span className="md:text-7xl text-5xl">About Us</span>
            <br />
            <br />
            <span>
              <TextGenerateEffectDemo words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium?"} />
            </span>
          </div>
          <div className="p-10 flex flex-col">
            <span>EDEVA</span>
            <span>Escola de dança</span>
            <span><a target="_blank" className="underline cursor-pointer" href="https://maps.app.goo.gl/SMmE2kugjkNEE5Gr9">Oeiras, 2780-236</a></span>
            <span><a target="_blank" className="underline cursor-pointer" href="https://maps.app.goo.gl/SMmE2kugjkNEE5Gr9">R. Conde Ferreira 23</a></span>
            <br />
            <span>
              <a className="cursor-pointer underline" href="mailto:email@example.com">evavieiradealmeida@hotmail.com</a>
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
              <p className="pb-10 pt-5 md:text-3xl text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla aliquam tempore totam quo quas tempora ut exercitationem laboriosam veritatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla aliquam tempore totam quo quas tempora ut exercitationem laboriosam veritatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla aliquam tempore totam quo quas tempora ut exercitationem laboriosam veritatis.
              </p>
              <button className="green box group relative px-4 py-2 overflow-hidden rounded-full bg-[#1B1D1C] md:text-md text-sm shadow">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-[#1B1D1C] uppercase">→ Timetable </span>
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
              <p className="pb-10 pt-5 md:text-3xl text-md">
              
                  <TextGenerateEffectDemo words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi error est neque magnam. Doloribus aut omnis laborum hic rerum dignissimos blanditiis expedita facilis consequuntur, voluptate voluptates quasi consequatur accusantium?"} />
        
              </p>
              <button className="green box group relative px-4 py-2 overflow-hidden rounded-full bg-[#1B1D1C] md:text-md text-sm shadow">
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-[#1B1D1C] uppercase">→ Know more </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-img" data-scroll-section>
        <div className="hero-img-container m-auto pt-10">
          <img loading="lazy" className="h-[30rem] object-cover w-[95%] m-auto rounded-2xl" src={AboutFeature} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Transition(About);
