import React from "react";
import { Link } from "react-router-dom";
import {
  FooterNav,
  FooterNavLogo,
  FooterLogo,
  FooterNavItems,
  FooterNavItem,
} from "./FooterNavigation.js";
import Logo from "../../assets/images/Audiophile-Logo.svg";

const FooterNavigation = () => {
  return (
    <FooterNav>
      <FooterNavLogo>
        <Link to="/">
          <FooterLogo src={Logo} alt="audiophile" />
        </Link>
      </FooterNavLogo>
      <FooterNavItems>
        <FooterNavItem to="/">Home</FooterNavItem>
        <FooterNavItem to="/">Headphones</FooterNavItem>
        <FooterNavItem to="/">Speakers</FooterNavItem>
        <FooterNavItem to="/">Earphones</FooterNavItem>
      </FooterNavItems>
    </FooterNav>
  );
};

export default FooterNavigation;
