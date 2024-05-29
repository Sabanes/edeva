import React from 'react';
import { AnimatedTooltipPreview } from '../../components/spotcomps/toolip';

const Team = () => {
  return (
    <main className='w-full m-auto h-[42rem] flex flex-col justify-center items-center'>
      <span className='relative top-0 right-0'>
        <h2 className='geist text-lg text-center underline'>MEET OUR TEAM</h2>
      </span>
      <div>
        <h1 className='text-center md:text-[5vw] text-[8vw] leading-none mt-[2rem]'>
          THE BEST TEACHERS
        </h1>
        <p className='md:max-w-[50%] max-w-[75%] mt-[1rem] text-center m-auto'>
          - To achieve such great results, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad magnam asperiores, aut id numquam officia deleniti nesciunt laboriosam quo cum, at aliquid architecto quas voluptas alias in ducimus itaque!
        </p>
      </div>
      <span className='py-10'>
        <AnimatedTooltipPreview />
      </span>
      <button className="green box group relative px-3 py-2 overflow-hidden rounded-full bg-[var(--main)] md:text-md text-sm shadow border">
        <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-white group-hover:text-[var(--main)] uppercase">→ Know more</span>
      </button>
    </main>
  );
};

export default Team;
