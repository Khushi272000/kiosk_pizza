import React from "react";
import Navbar from "../NavBar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElement";
const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <Navbar />
        <HeroContent>
          <HeroItems>
            <HeroH1> No waiting in long queue..</HeroH1>
            <HeroP>Get pizza with fingertips </HeroP>
            <HeroBtn
              to="product"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={60}
            >
               Order Now
            </HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
