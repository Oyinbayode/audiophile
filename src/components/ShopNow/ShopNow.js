import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { RiArrowRightSLine } from "react-icons/ri";

export const ShopNowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin: 0 auto;
  grid-gap: 30px;
  max-width: 1110px;
  width: 100%;

  /* flex-wrap: wrap; */
  margin-top: 10rem;

  @media screen and (max-width: 1130px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1090px) {
    max-width: 690px;
    margin-top: 7rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(327px));
    grid-gap: 10px;
    justify-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  border-radius: 8px;
  /* max-width: 350px; */
  width: 100%;
  height: 204px;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  /* margin-top: 200px; */

  /* flex-basis: 350px;
  flex-shrink: 1;
  flex-grow: 1; */
  border: 1px solid black;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1090px) {
    width: 223px;
  }

  @media screen and (max-width: 600px) {
    max-width: 327px;
    width: 100%;
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
  max-width: min-content;
  /* height: 160px; */
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
