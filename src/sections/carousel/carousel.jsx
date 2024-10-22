import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Carousel = () => {
  return (
    <section className=" w-[99.999%] m-auto bg-[var(--main)] rounded-b-2xl">
              <div className="m-auto relative h-20" >
                  <h1 className="md:text-7xl sm:text-6xl  text-white relative md:top-20 top-40 pl-5">Danceplace</h1>
              </div>
              <div className="hero-img-container">
              </div>
          <HorizontalScrollCarousel />

    </section>

  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen w-full  items-center !overflow-x-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group rounded-[1rem] relative md:h-[450px] md:w-[450px] h-[400px] w-[300px] !overflow-hidden bg-white"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>

    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/samples/carousel-1",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/samples/carousel-2",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/samples/carousel-3",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/carousel-4",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/samples/carousel-5",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/carousel-6",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/carousel-7",
    title: "Title 7",
    id: 7,
  },
];