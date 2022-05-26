import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Hamburger,
  Times,
  Bars,
} from "./NavBar.js";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
    console.log(clicked);
  };

  return (
    <NavContainer>
      <Hamburger onClick={handleClick}>
        {clicked ? <Times /> : <Bars />}
      </Hamburger>
      <NavLogo>
        <Link to="/">
          <Logo src={Audiophile} alt="audiophile" />
        </Link>
      </NavLogo>
      <NavItems>
        <NavTextItems className={clicked ? "active" : null}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/">Headphones</NavItem>
          <NavItem to="/">Speakers</NavItem>
          <NavItem to="/">Earphones</NavItem>
        </NavTextItems>
        <NavCart>
          <Cart />
        </NavCart>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
