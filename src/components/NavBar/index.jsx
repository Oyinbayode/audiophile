import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  Span,
} from "./NavBar.js";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
    console.log(clicked);
  };

  const [cartState, setCartState] = useState(null);

  const cartProducts = useSelector((state) => state.cart.Cart);

  useEffect(() => {
    console.log(cartProducts);
    setCartState(() => cartProducts);
  }, [cartProducts]);

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
          <NavItem to="/categories/Headphones">Headphones</NavItem>
          <NavItem to="/categories/Speakers">Speakers</NavItem>
          <NavItem to="/categories/Earphones">Earphones</NavItem>
        </NavTextItems>
        <NavCart>
          <Cart />
          <Span>{cartState && cartProducts.length}</Span>
        </NavCart>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
