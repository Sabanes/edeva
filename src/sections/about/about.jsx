import React from "react";
import Transition from "../../components/transition/Transition";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Button from "../../components/Button-main/Button";
import data from "../../data/about.json";

// Static content moved outside component
const IMAGE_URL = "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_center,h_0.80,w_1.00/ebl6cx8rb4vqya8tzvet";
const SCHEMA_MARKUP = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": data.title,
  "description": data.About_us_text,
  "image": IMAGE_URL,
  // Add more relevant schema properties here
};

const About = () => {
  return (
    <section 
      className="mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px]"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Add structured data */}
      <script type="application/ld+json">
        {JSON.stringify(SCHEMA_MARKUP)}
      </script>

      <div className="relative px-7 py-20">
        <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
          {/* Content container with semantic markup */}
          <div className="flex flex-col lg:w-1/2" itemScope itemProp="mainContent">
            <h1 
              className="lg:text-8xl font-thin uppercase text-5xl text-center"
              itemProp="headline"
            >
              {data.title}
            </h1>

            {/* Optimized image for mobile */}
            <div className="w-full mt-8 mb-8 lg:hidden">
              <img
                src={IMAGE_URL}
                alt={`${data.title} visual representation`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                loading="lazy"
                itemProp="image"
              />
            </div>

            {/* Improved text section accessibility */}
            <div className="prose max-w-none">
              <TextGenerateEffect
                className="font-light"
                words={data.About_us_text}
                itemProp="description"
              />
            </div>

            {/* Accessible button group */}
            <div className="flex gap-3 mt-6" role="group" aria-label="Action buttons">
              <Button 
                link="/contact" 
                buttonText={data.Reach_us_Button}
                aria-label="Contact us for more information"
              />
              <Button
                link="https://drive.google.com/file/d/1hurDCZV4RT-XzaFyXWmXGPcKzIaqVBN0/view?usp=sharing"
                buttonText={data.Schedule_Button}
                aria-label="Schedule an appointment"
              />
            </div>
          </div>

          {/* Enhanced desktop image */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <img
              src={IMAGE_URL}  // Replaced placeholder with actual image
              alt={`${data.title} team photo`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
              itemProp="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transition(About);