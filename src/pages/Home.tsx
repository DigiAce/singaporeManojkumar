import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import UnfilteredCreativity from "../components/UnfilteredCreativity";
import CreatorIntro from "../components/CreatorIntro";
import HeroMobile from "../components/HeroMobile";
// import ModernHero from "../components/ModernHero";
// import ModernMobile from "../components/ModernMobile";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div id="home">
        {/* Desktop Hero (hidden on mobile) */}
        <div className="hidden md:block">
          <Hero />
          {/* <ModernHero /> */}
        </div>

        {/* Mobile Hero (hidden on desktop) */}
        <div className="block md:hidden">
          <HeroMobile />
          {/* <ModernMobile /> */}
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="unfiltered-creativity">
        <UnfilteredCreativity />
      </div>
      <div id="creator-intro">
        <CreatorIntro />
      </div>
    </>
  );
};

export default Home;
