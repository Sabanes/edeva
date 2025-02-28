import React from 'react';
import { AnimatedTooltipPreview } from '../../components/spotcomps/toolip';
import Button from '../../components/Button-main/Button';

const Team = () => {
  return (
    <section
      className="w-full h-[42rem] bg-[var(--main)] flex flex-col justify-center items-center mx-auto !px-4 !sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px]"
      role="region"
      aria-labelledby="team-heading"
    >
      {/* Header */}
      <header className="text-center text-white">
        <h2 id="team-heading" className="font-thin text-lg mb-3">
          MEET OUR TEAM
        </h2>
        <h1 className="font-medium text-5xl lg:text-7xl  tracking-widest leading-none">
          THE BEST <br /> TEACHERS
        </h1>
      </header>

      {/* Description */}
      <p className="md:max-w-[50%] text-white max-w-[80%] md:text-lg mt-4 text-center font-regular">
      Our talented and passionate dance instructors bring years of experience, energy, and dedication to every class. Whether you’re a beginner or an advanced dancer, our team is here to guide, inspire, and help you master every move with confidence.
      </p>

      {/* Tooltip Preview */}
      <div className="pt-10" aria-label="Team Member Previews">
        <AnimatedTooltipPreview />
      </div>

      {/* Call-to-Action Button */}
      <div role="contentinfo" className="">
        <Button link="/team" buttonText="Meet Our Team →" />
      </div>
    </section>
  );
};

export default Team;