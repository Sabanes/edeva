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

        
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default Transition(Contact);
