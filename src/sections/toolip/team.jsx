import React from 'react';
import { AnimatedTooltipPreview } from '../../components/spotcomps/toolip';
import Button from '../../components/Button-main/Button';

const Team = () => {
  return (
    <section
      className="w-full h-[42rem] flex flex-col justify-center items-center mx-auto !px-4 !sm:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1920px]"
      role="region"
      aria-labelledby="team-heading"
    >
      {/* Header */}
      <header className="text-center">
        <h2 id="team-heading" className="font-thin text-lg mb-3">
          MEET OUR TEAM
        </h2>
        <h1 className="font-regular text-[9vw] tracking-widest md:text-[7vw] leading-none">
          THE BEST <br /> TEACHERS
        </h1>
      </header>

      {/* Description */}
      <p className="md:max-w-[50%] max-w-[80%] md:text-lg mt-4 text-center font-regular">
        To achieve such great results, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat ad magnam asperiores, aut id numquam
        officia deleniti nesciunt laboriosam quo cum, at aliquid architecto
        quas voluptas alias in ducimus itaque!
      </p>

      {/* Tooltip Preview */}
      <div className="pt-10" aria-label="Team Member Previews">
        <AnimatedTooltipPreview />
      </div>

      {/* Call-to-Action Button */}
      <div role="contentinfo" className="mt-6">
        <Button href="/contact" buttonText="Meet Our Team →" />
      </div>
    </section>
  );
};

export default Team;