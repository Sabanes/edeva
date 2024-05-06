'use client';
import '../i18n'
import NotDance from './sections/Dance/Home'
import Carousel from './sections/carousel/carousel';
import Team from './sections/toolip/team';
import About from './sections/about/about';
import Menu from './sections/navigation/navigation';
import { InfiniteMovingCardsDemo } from './components/spotcomps/nostopCards';
import Footer from './sections/footer/footer';
import ScrollToTop from './components/totop/Totop';



function Home() {
  return (
    <>
    <ScrollToTop>
    <Menu />
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

export default Home


