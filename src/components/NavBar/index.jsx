import React from "react";
import CartLogo from "./assets/images/Cart.svg";
import Audiophile from "./assets/images/Audiophile-Logo.svg";

import {
  NavContainer,
  NavLogo,
  Logo,
  NavItems,
  NavTextItems,
  NavItem,
  NavCart,
  Cart,
} from "./NavBar.js";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo>
        <Logo src={Audiophile} alt="audiophile" />
      </NavLogo>
      <NavItems>
        <NavTextItems>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/">Headphones</NavItem>
          <NavItem to="/">Speakers</NavItem>
          <NavItem to="/">Headphones</NavItem>
        </NavTextItems>
        <NavCart>
          <Cart src={CartLogo} alt="cart" />
        </NavCart>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
