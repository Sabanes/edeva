import React from "react";
import Transition from "../../components/transition/Transition";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Button from "../../components/Button-main/Button"
import data from "../../data/about.json";

const About = () => {

  return (
    <>
    <div className="relative px-7 py-20 ">
      <div className="flex flex-col">
        <h1 className="md:text-8xl text-6xl">{data.title}</h1>
        <p className="pb-3"> <TextGenerateEffect className="font-light md:max-w-[85%]" words={data.About_us_text} /></p>
      </div>
      <span className="flex gap-3">
      <a className="" href="/contact">
          <Button href="/contact" buttonText={data.Reach_us_Button} className=""  />
      </a>
      <a className="" href="/contact">
          <Button href="/contact" buttonText={data.Schedule_Button} className=""  />
      </a>
      </span>
    </div>
    
    </>
  );

  
};

export default Transition(About);
