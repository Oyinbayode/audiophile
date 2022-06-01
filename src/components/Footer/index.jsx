import React from "react";
import FooterNavigation from "./components/FooterNavigation";
import { FooterContainer, HR, Div, FooterText, Frame } from "./Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <Frame>
        <Div>
          <HR />
        </Div>
        <FooterNavigation />
        <FooterText>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </FooterText>
      </Frame>
    </FooterContainer>
  );
};

export default Footer;
