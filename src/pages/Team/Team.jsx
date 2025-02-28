import React from "react";
import { motion } from "framer-motion";
import Transition from "../../components/transition/Transition";
import Menu from "../../sections/navigation/navigation";
import { HeroParallaxDemo } from "../../components/spotcomps/herolaxTeam";
import ScrollToTop from '../../components/totop/Totop';
import Footer from "../../sections/footer/footer";
import { ExpandableCardDemo } from "../../components/Team Grid/TeamGrid";

const Contact = () => {
  return (
    <>
      <ScrollToTop>
        <Menu />
        <HeroParallaxDemo />
        <ExpandableCardDemo />
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default Transition(Contact);
