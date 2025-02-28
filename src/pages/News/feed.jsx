import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Transition from "../../components/transition/Transition";
import Menu from "../../sections/navigation/navigation";


const Feed = () => {
  return (
  
<>
    <Menu />
    <section className="w-full px-8 py-12 pt-32 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
  <div>
    <span className="block text-sm md:text-sm text-[var(--main)] font-medium uppercase tracking-wider">
      Latest Updates
    </span>
    <h3 className="text-5xl font-regular md:text-5xl text-[var(--main)] font-semibold leading-tight mt-2">
      Discover Exciting Events on <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">Instagram</span>
    </h3>
    <p className="text-base font-regular md:text-lg text-slate-700 my-4 md:my-6 max-w-lg">
      Every moment is an opportunity to connect. Explore our curated collection of upcoming events exclusively on our Instagram profile.
    </p>
    <button
      className="group relative px-5 py-3 overflow-hidden rounded-full outline-none mt-2 md:text-md text-sm shadow bg-[#1b211e] font-medium transition-all duration-300 flex items-center justify-center">
      <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="relative text-white group-hover:text-[#1B1D1C] uppercase tracking-wider">Explore Now</span>
    </button>
  </div>
  <ShuffleGrid />
</section>


  </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_auto,h_2000,w_2000/Eva/lsu7iszewib4i38lt7bd",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/e_improve:outdoor/c_crop,g_south,h_0.60,w_1.00/Eva/luhkpfbfomi1zj11afyl",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_auto,h_2000,w_2000/Eva/bbhlmmwkyfyhpqo0ecpd",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/j52qiw9hfcz46vyabb3t",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_south_west,h_0.80,w_1.00/Eva/eznhhifvah1upkehbwxc",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_auto,h_0.80/Eva/jj23dppwcbb8fwcbd81g",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_south_west,h_0.60,w_1.00/Eva/gf4slhhwlvsw9gajsdvr",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/v1/Eva/atx0heyjfvnvxgk4uwjy",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/c_crop,g_center,h_0.70,w_0.70/q_auto:eco/Eva/atx0heyjfvnvxgk4uwjy",
  },

];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      loading="lazy"
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        loading: "lazy"
    }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid md:grid-cols-3 object-center grid-cols-3 grid-rows-3 h-[600px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Transition(Feed);