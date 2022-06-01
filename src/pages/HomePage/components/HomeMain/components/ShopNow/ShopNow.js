import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { RiArrowRightSLine } from "react-icons/ri";

export const ShopNowContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1110px;
  width: 100%;
  margin-left: 10vw;
  margin-right: 10vw;
  flex-wrap: wrap;
  margin-top: 200px;

  @media screen and (max-width: 1080px) {
    max-width: 690px;
  }

  @media screen and (max-width: 728px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  border-radius: 8px;
  max-width: 350px;
  width: 100%;
  height: 204px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
  /* margin-top: 200px; */

  flex-basis: 350px;
  flex-shrink: 1;
  flex-grow: 1;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1080px) {
    max-width: 223px;
  }

  @media screen and (max-width: 728px) {
    max-width: 327px;
  }
`;

export const CardImageDiv = styled.div`
  margin: 0;
  display: flex;
  align-items: flex-start;
  transform: translateY(-16%);
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 122px;
  height: 160px;
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  margin: 0;

  @media screen and (max-width: 540px) {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 1.07143px;
  }
`;

export const CardBtnLink = styled(Link)`
  margin-top: 20px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  transition: color ease-in-out 0.3s;

  &:hover {
    color: #d87d4a;
    opacity: 1;
  }

  p {
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    opacity: 0.5;

    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
`;

export const RightArrow = styled(RiArrowRightSLine)`
  color: #d87d4a;
  font-size: 25px;
`;
