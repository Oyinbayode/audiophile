import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  width: 100%;
  align-items: center;
  margin-top: 77px;
  margin-left: 11.46vw;
  margin-right: 11.46vw;

  border: 1px solid white;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 20px;
    margin-top: 52px;
    align-items: center;
  }
`;

export const FooterNavLogo = styled.div`
  @media screen and (max-width: 600px) {
    align-self: center;
    margin-bottom: 48px;
  }
`;

export const FooterLogo = styled.img``;

export const FooterNavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 429px;
  width: 100%;
  border: 1px solid white;

  @media screen and (max-width: 1090px) {
    margin: 0;
    padding: 0;
    margin-top: 32px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 140px;
    margin-top: 0;
  }
`;

export const FooterNavItem = styled(Link)`
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
