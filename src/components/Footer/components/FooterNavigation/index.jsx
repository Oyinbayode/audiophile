import React from "react";
import { Link } from "react-router-dom";
import {
  FooterNav,
  FooterNavLogo,
  FooterLogo,
  FooterNavItems,
  FooterNavItem,
} from "./FooterNavigation.js";

const FooterNavigation = () => {
  return (
    <FooterNav>
      <FooterNavLogo>
        <Link to="/">
          <FooterLogo src="" alt="audiophile" />
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
