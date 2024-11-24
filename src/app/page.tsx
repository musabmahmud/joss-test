import AboutUs from "@/pages/AboutUs";
import BoardBanner from "@/pages/BoardBanner";
import BoardsSlider from "@/pages/BoardsSlider";
import Features from "@/pages/Features";
import FirstBanner from "@/pages/FirstBanner";
import GrridStories from "@/pages/GrridStories";
import Hero from "@/pages/Hero";
import MultiBoard from "@/pages/MultiBoard";
import NewsAndEvent from "@/pages/NewsAndEvent";
import SliderProduct from "@/pages/SliderProduct";
import ThirdBanner from "@/pages/ThirdBanner";
import WhatWeAre from "@/pages/WhatWeAre";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Features />
      <BoardsSlider />
      <MultiBoard />
      <SliderProduct />
      <WhatWeAre />
      <GrridStories />
      <FirstBanner />
      <AboutUs />
      <NewsAndEvent />
      <BoardBanner />
      <ThirdBanner />
    </>
  );
}
