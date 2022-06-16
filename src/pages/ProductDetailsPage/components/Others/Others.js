import styled from "styled-components/macro";

export const OthersContainer = styled.div`
  display: flex;
  max-width: 1110px;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
    height: 480px;
    margin-top: 24px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    max-width: 85vw;
  }
`;

export const OthersHeader = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 64px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.857143px;
    margin-bottom: 40px;
  }
`;

export const OthersBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1090px) {
    max-width: 223px;
  }

  @media screen and (max-width: 600px) {
    max-width: 327px;
    margin-bottom: 56px;
  }
`;

export const CardImage = styled.div`
  background: #f1f1f1;
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 318px;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    height: 120px;
  }
`;

export const CardImg = styled.img`
  max-width: min-content;
  width: 100%;
`;

export const CardText = styled.p`
  margin: 0;
  margin-top: 40px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;
  margin-bottom: 22px;

  @media screen and (max-width: 600px) {
    margin-top: 32px;
  }
`;
