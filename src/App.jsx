'use client';
import NotDance from './sections/Dance/Home'
import Carousel from './sections/carousel/carousel';
import Team from './sections/toolip/team';
import About from './sections/about/about';
import Menu from './sections/navigation/navigation';
import { InfiniteMovingCardsDemo } from './components/spotcomps/nostopCards';
import Footer from './sections/footer/footer';
import ScrollToTop from './components/totop/Totop';
import Hero from './sections/hero/Hero';
import CMS from "decap-cms-app";

CMS.init()
CMS.registerPreviewTemplate("my-template", MyTemplate);

function App() {

  return (
    <>
    <ScrollToTop>
      <Menu />
        <Hero />
        <About />
        <Carousel />
        <NotDance />
        <Team />
        <InfiniteMovingCardsDemo />
      <Footer />
    </ScrollToTop>
    </>
  );
}

export default App


