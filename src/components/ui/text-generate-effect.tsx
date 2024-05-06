import React, { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/utils";
import { useInView } from "react-intersection-observer";

export const  TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView({ triggerOnce: false });
  const wordsArray = useRef(words.split(" "));

  useEffect(() => {
    if (inView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView]);

  useEffect(() => {
    if (!inView) {
      // Reset animation when leaving view
      animate("span", { opacity: 0 });
    }
  }, [inView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.current.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-[#e2e2e2] text-[#e2e2e2]  opacity-0 "
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-light geist", className)}>
      <div className="" ref={ref}>
        <div className="dark:text-[#e2e2e2] text-[#e2e2e2] pt-5 tracking-wide md:text-3xl text-md">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
