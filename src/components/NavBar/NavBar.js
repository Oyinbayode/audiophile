import { BiCart } from "react-icons/bi";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-left: 10vw;
  margin-right: 10vw;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 100%;
  display: flex;
  align-self: center;

  @media screen and (max-width: 770px) {
    width: 100%;
    max-width: 143px;
  }
`;

export const NavLogo = styled.div`
  margin-right: 1rem;
  display: flex;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 769px;
  width: 100%;

  @media screen and (max-width: 770px) {
    justify-content: flex-end;
  }

  @media screen and (max-width: 450px) {
    justify-content: flex-end;
    max-width: 50px;
  }
`;

export const NavTextItems = styled.ul`
  display: flex;
  max-width: 420px;
  width: 100%;
  justify-content: space-between;
  padding: 0;

  @media screen and (max-width: 770px) {
    max-width: 100vw;
    flex-direction: column;
    margin-top: 83px;
    align-items: center;
    left: -110%;
    opacity: 0.9;
    position: fixed;
    background: #fff;
    height: 100vh;
    justify-content: flex-start;
    top: 0;
    transition: all 0.5s ease-in-out;

    &.active {
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  }
`;

export const NavItem = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  line-height: 2.5;
  letter-spacing: 2px;
  color: #fff;
  transition: color ease-in-out 0.3s;

  &:hover {
    color: #d87d4a;
    cursor: pointer;
  }

  @media screen and (max-width: 770px) {
    color: black;
  }
`;

export const NavCart = styled.div``;

export const Cart = styled(BiCart)`
  color: #fff;
  font-size: 30px;
  transition: color ease-in-out 0.3s;
  border: 0.5px;

  &:hover {
    color: #d87d4a;
    cursor: pointer;
  }
`;

export const Span = styled.span`
  color: red;
`;

export const Times = styled(FaTimes)`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 770px) {
    display: block;
    margin-right: 42px;
  }
`;
