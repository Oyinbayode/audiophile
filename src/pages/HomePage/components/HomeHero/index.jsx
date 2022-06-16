import React, { useState } from "react";
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
import XX91Mobile from "./assets/images/XX91-mobile-img.svg";
// import XX91Tablet from "./assets/images/XX91-tablet-img.svg";
import Button from "../../../../utilities/Button";

const HomeHero = () => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(() => window.innerWidth);
  });
  return (
    <HeroContainer>
      <HorizontalLine />
      <HeroMain>
        <HeroLeft>
          <HeroParagraph>New Product</HeroParagraph>
          <HeroHeader>XX99 Mark ii headphones</HeroHeader>
          <HeroText>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </HeroText>
          <Button to="/products/1">See product</Button>
        </HeroLeft>
        <HeroRight>
          <HeroHeadphoneImage
            src={size <= 540 ? XX91Mobile : XX91}
            alt="XX91 headphone"
          />
        </HeroRight>
      </HeroMain>
    </HeroContainer>
  );
};

export default HomeHero;
