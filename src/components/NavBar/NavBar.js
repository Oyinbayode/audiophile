import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  background: #141414;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  margin-left: 166px;
  margin-right: 166px;
  align-items: center;
`;

export const NavLogo = styled.div``;

export const Logo = styled.img``;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 769px;
  width: 100%;
`;

export const NavTextItems = styled.ul`
  display: flex;
  max-width: 420px;
  width: 100%;
  justify-content: space-between;
  padding: 0;
  border: 1px solid white;
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
`;

export const NavCart = styled.div``;

export const Cart = styled.img``;
