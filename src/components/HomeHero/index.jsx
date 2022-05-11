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
import XX91 from "./assets/images/XX91.svg";
import Button from "../../utilities/Button";

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
          <Button to="/">See product</Button>
        </HeroLeft>
        <HeroRight>
          <HeroHeadphoneImage src={XX91} alt="XX91 headphone" />
        </HeroRight>
      </HeroMain>
    </HeroContainer>
  );
};

export default HomeHero;
