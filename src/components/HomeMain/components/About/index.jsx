import React, { useState } from "react";
import {
  AboutContainer,
  AboutFrame,
  AboutText,
  AboutHeader,
  AboutBody,
  AboutImage,
  AboutImg,
} from "./About";
import AudioGear from "./assets/images/Audio-Gear-Image.svg";
import AudioGearTablet from "./assets/images/audio-gear-tab.svg";
import AudioGearMobile from "./assets/images/audio-gear-mobile.svg";

const About = () => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(() => window.innerWidth);
  });

  return (
    <AboutContainer>
      <AboutFrame>
        <AboutText>
          <AboutHeader>
            Bringing you the <span style={{ color: "#D87D4A" }}>best</span>{" "}
            audio gear
          </AboutHeader>
          <AboutBody>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </AboutBody>
        </AboutText>
        <AboutImage>
          <AboutImg
            src={
              size <= 540
                ? AudioGearMobile
                : size <= 1090
                ? AudioGearTablet
                : AudioGear
            }
            alt="Man on Headphones"
          />
        </AboutImage>
      </AboutFrame>
    </AboutContainer>
  );
};

export default About;
