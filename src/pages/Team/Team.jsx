import React from "react";
import { motion } from "framer-motion";
import Transition from "../../components/transition/Transition";
import Menu from "../../sections/navigation/navigation";
import { HeroParallaxDemo } from "../../components/spotcomps/herolaxTeam";
import ScrollToTop from '../../components/totop/Totop';
import Footer from "../../sections/footer/footer";

const Contact = () => {
  return (
    <>
      <ScrollToTop>
        <Menu />
        <HeroParallaxDemo />

        <div className="flex flex-col justify-center items-center md:p-[4rem] py-5  bg-[var(--main)]  rounded-2xl w-[95%] m-auto">

          <button className="uppercase border border-white text-white rounded-full px-4">
            Founder
          </button>
          <h1 className="text-white uppercase pt-5 text-[3rem] text-center">eva vieira de almeida</h1>

          <div className="flex md:flex-row flex-col-reverse flex-1 pb-10 px-7">

            <div className="md:w-[90%] w-full pt-10 m-auto">
              <h3 className="font-bold text-xl pb-5 md:text-left text-center text-white">Alguma Coisa</h3>
              <p className="md:text-left text-center m-auto md:pr-3 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae explicabo quas sapiente, vel excepturi dolore, autem incidunt, rem saepe provident delectus minima commodi in ipsum distinctio accusamus voluptatum accusantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae explicabo quas sapiente, vel excepturi dolore, autem incidunt, rem saepe provident delectus minima commodi in ipsum distinctio accusamus voluptatum accusantium.
              </p>

              <div className="flex md:flex-row flex-col pt-10 md:items-start items-center text-white">
                <a className="md:pr-5 underline lighter" href=""> Instagram &#8599;</a>
                <a className="md:pr-5 underline lighter" href=""> Facebook &#8599;</a>
                <a className="md:pr-5 underline lighter" href=""> Gmail &#8599;</a>
              </div>
            </div>

            <img className="relative top-3 w-[90%] m-auto rounded-2xl" loading="lazy" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />

          </div>
        </div>

        <div className="flex md:flex-row flex-1 flex-col m-auto items-center justify-center flex-wrap py-10 w-screen px-10 ">

          <div className="md:w-[40%] m-auto p-5 bg-[#c6c6c6] rounded-2xl mb-5  ">
            <img className="md:w-[40rem] w-full rounded-2xl" src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 " alt="" />
            <div className="py-5 flex justify-center items-center">
              <button className="border bg-white border-[#1b211e]  rounded-full px-2 mr-3">#HipHop</button>
              <button className="border bg-white border-[#1b211e]  rounded-full px-2 mr-3">#HipHop</button>
              <button className="border bg-white border-[#1b211e]  rounded-full px-2">#HipHop</button>
            </div>
            <p className="w-full md:text-left text-center text-[#1b211e] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut sint itaque cupiditate debitis quasi perspiciatis placeat, amet sapiente inventore officia optio eum, deleniti nihil iste voluptas modi exercitationem officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut sint itaque cupiditate debitis quasi perspiciatis placeat, amet sapiente inventore officia optio eum, deleniti nihil iste voluptas modi exercitationem officiis</p>
          </div>

        </div>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default Transition(Contact);
