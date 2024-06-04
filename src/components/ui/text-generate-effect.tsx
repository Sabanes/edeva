import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../utils/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as per your requirement
  });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="md:text-3xl text-2xl leading-snug tracking-wide">
          <motion.div ref={ref}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="opacity-0"
                variants={{
                  visible: { opacity: 1, transition: { duration: 0.4, delay: idx * 0.2 } },
                  hidden: { opacity: 0 },
                }}
                initial="hidden"
                animate={controls}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
