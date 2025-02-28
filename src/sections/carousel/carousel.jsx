import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Moved cards array to top for better readability
const CARDS = [
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto,w_800,h_600/y38lslldzjg7jb2cxacn",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto,w_800,h_600/viataibplcduycrzeqsu",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto,w_800,h_600/mny7h9carrllqurrru50",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto,w_800,h_600/d0rtqo3a5fzwvmo7t9m2",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto,w_800,h_600/r5nytebwq3flwdptecru",
    title: "Title 6",
    id: 6,
  },
];

const Carousel = () => {
  return (
    <section 
      className="w-[99.999%] mx-auto py-40 bg-gradient-to-br from-[#1b211e] to-[#232a27]"
      aria-label="Image carousel section"
    >
      <div className="m-auto relative mx-auto max-w-[1920px]">
        <h1 className="lg:text-8xl font-medium uppercase text-5xl text-white relative text-center">
          Danceplace
        </h1>
      </div>
      
      <HorizontalScrollCarousel />
    </section>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section 
      ref={targetRef} 
      className="relative h-[300vh]"
      role="region" 
      aria-label="Horizontally scrolling content"
    >
      <div className="sticky top-0 flex h-screen w-full items-center !overflow-x-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-4 ml-[-1%]" // Negative margin to compensate initial offset
        >
          {CARDS.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      className="group rounded-[1rem] relative md:h-[550px] md:w-[650px] h-[400px] w-[300px] !overflow-hidden bg-white"
      role="group"
      aria-label={`Image card: ${card.title}`}
    >
      <div
        className="absolute inset-0 z-0 contrast-120 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hidden image for SEO and accessibility */}
        <img
          src={card.url}
          alt={card.title}
          className="hidden contrast-100"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Carousel;