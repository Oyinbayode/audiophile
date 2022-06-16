import styled from "styled-components/macro";

export const FeatureContainer = styled.div`
  display: flex;
  max-width: 1110px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 160px;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    max-width: 689px;
    align-items: flex-start;
    margin-bottom: 120px;
  }

  @media screen and (max-width: 600px) {
    height: fit-content;
    max-width: 85vw;
  }
`;

export const Features = styled.div`
  max-width: 635px;
  width: 100%;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
    align-self: flex-start;
    margin-bottom: 120px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 88px;
    max-width: fit-content;
  }
`;

export const FeaturesHeader = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.857143px;
  }
`;

export const FeaturesParagraph = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  margin: 0;
  opacity: 0.5;
  margin-top: 32px;

  @media screen and (max-width: 600px) {
    margin-top: 24px;
    font-size: 14px;
  }
`;

export const InTheBox = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 610px) and (max-width: 1090px) {
    max-width: 549px;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    align-items: flex-start;
  }

  @media screen and (max-width: 600px) {
    align-self: flex-start;
  }
`;

export const InTheBoxHeader = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  /* identical to box height, or 112% */

  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 32px;

  @media screen and (max-width: 1090px) {
    align-self: flex-start;
    margin: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.857143px;
    margin-bottom: 24px;
  }
`;

export const ItemGroup = styled.div``;

export const Item = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  margin-bottom: 8px;
`;

export const ItemQty = styled.p`
  margin: 0;
  margin-right: 24px;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #d87d4a;
`;

export const ItemName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;

  mix-blend-mode: normal;
  opacity: 0.5;
`;
