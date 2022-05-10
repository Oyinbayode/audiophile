import React from "react";
import {
  HeroContainer,
  HorizontalLine,
  HeroMain,
  HeroParagraph,
  HeroHeader,
  HeroLeft,
  HeroText,
  HeroRight,
  HeroHeadphoneImage,
} from "./HomeHero";

const HomeHero = () => {
  return (
    <HeroContainer>
      <HorizontalLine />
      <HeroMain>
        <HeroLeft>
          <HeroParagraph>New Product</HeroParagraph>
          <HeroHeader>XX91 Mark ii headphones</HeroHeader>
          <HeroText>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </HeroText>
        </HeroLeft>
        <HeroRight>
          <HeroHeadphoneImage />
        </HeroRight>
      </HeroMain>
    </HeroContainer>
  );
};

export default HomeHero;
