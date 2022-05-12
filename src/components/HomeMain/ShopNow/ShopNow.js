import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShopNowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  width: 100%;
  margin-left: 10vw;
  margin-right: 10vw;

  @media screen and (max-width: 1080px) {
    max-width: 690px;
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
  margin-top: 200px;
  margin-bottom: 40rem;

  @media screen and (max-width: 1080px) {
    max-width: 223px;
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
`;

export const CardBtnLink = styled(Link)`
  margin-top: 20px;
  margin-bottom: 100px;
`;
