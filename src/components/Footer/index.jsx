import React from "react";
import FooterNavigation from "./components/FooterNavigation";
import {
  FooterContainer,
  HR,
  Div,
  FooterText,
  Frame,
  FooterCopyAndLink,
  CopyRight,
  SocialsLink,
  Facebook,
  Twitter,
  Instagram,
} from "./Footer";

const Footer = () => {
  const Today = new Date();

  const Year = Today.getFullYear();

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
        <FooterCopyAndLink>
          <CopyRight> &copy; {Year}. All Rights Reserved</CopyRight>
          <SocialsLink>
            <Facebook />
            <Twitter />
            <Instagram />
          </SocialsLink>
        </FooterCopyAndLink>
      </Frame>
    </FooterContainer>
  );
};

export default Footer;
