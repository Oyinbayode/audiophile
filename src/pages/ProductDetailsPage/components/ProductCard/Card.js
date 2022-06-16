import styled from "styled-components/macro";

export const ProductCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  justify-content: space-between;
  margin-top: 56px;
  margin-bottom: 160px;
  align-items: center;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
    height: 480px;
    margin-top: 24px;
    margin-bottom: 120px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    max-width: 85vw;
    margin-bottom: 88px;
  }
`;

export const ProductCardImage = styled.div`
  max-width: 540px;
  height: 560px;
  width: 100%;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    margin-bottom: 32px;
    height: 327px;
  }

  @media screen and (min-width: 601px) and (max-width: 1090px) {
    max-width: 281px;
    height: 480px;
    margin-right: 10px;
  }
`;

export const CardImg = styled.img`
  max-width: min-content;
  width: 100%;
`;

export const ProductCardBody = styled.div`
  max-width: 445px;
  align-self: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    max-width: 327px;
    align-self: flex-start;
  }

  @media screen and (max-width: 1090px) {
    max-width: 339.5px;
  }
`;

export const NewDiv = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: #d87d4a;
`;

export const CardBodyHeading = styled.h3`
  margin: 0;

  font-weight: 700;
  font-size: 40px;
  line-height: 44px;

  letter-spacing: 1.42857px;
  text-transform: uppercase;

  color: #000000;

  margin-bottom: 16px;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
  }
`;

export const CardBodyParagraph = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 8px;
`;

export const CardBodyPrice = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 1.28571px;
  text-transform: uppercase;
`;

export const CardBodyCart = styled.div`
  display: flex;

  align-items: center;
  max-width: 296px;
  width: 100%;
  justify-content: space-between;
`;

export const Btn = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  width: 40px;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.25;
  transition: color ease-in-out 0.3s, opacity ease-in-out 0.3s;

  &:hover {
    opacity: 1;
    color: #d87d4a;
  }
`;

export const Quantity = styled.div`
  display: flex;
  margin-top: 10px;
  background: #f1f1f1;
  max-width: 120px;
  width: 100%;
  justify-content: space-between;
  align-self: flex-end;
  height: 48px;
  align-items: center;
`;

export const QtyParagraph = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #000000;
`;
