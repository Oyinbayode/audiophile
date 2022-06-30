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
  CartButton,
} from "./NavBar.js";
import CartStoreModal from "../CartStoreModal";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const [cartState, setCartState] = useState(null);

  const cartProducts = useSelector((state) => state.cart.Cart);

  useEffect(() => {
    setCartState(() => cartProducts);
  }, [cartProducts]);

  // Modal
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(() => !isOpen);
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
          <NavItem to="/categories/Headphones">Headphones</NavItem>
          <NavItem to="/categories/Speakers">Speakers</NavItem>
          <NavItem to="/categories/Earphones">Earphones</NavItem>
        </NavTextItems>
        <NavCart>
          <CartButton onClick={handleModalOpen}>
            <Cart />
          </CartButton>

          <Span>{cartState && cartProducts.length}</Span>
        </NavCart>
      </NavItems>
      <CartStoreModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavContainer>
  );
};

export default Navbar;
