import styled from "styled-components/macro";

export const HeroContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 10.5rem;
`;

export const HorizontalLine = styled.hr`
  border-top: 0.5px solid #fff;
  opacity: 0.2;
  width: 100%;
`;

export const HeroMain = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 126px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 65px;
  }

  @media screen and (min-width: 460px) and (max-width: 560px) {
    margin-top: 70px;
  }
`;

export const HeroParagraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19.12px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #fff;
  opacity: 0.5;
`;

export const HeroHeader = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  letter-spacing: 2px;
  max-width: 396px;
  width: 100%;
  color: white;
  margin: 0;
  margin-top: 24px;
  margin-bottom: 10px;

  @media screen and (max-width: 450px) {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 1.28571px;
    max-width: 328px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    height: 290px;
  }
`;

export const HeroRight = styled.div``;

export const HeroText = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: #fff;
  opacity: 0.75;
  mix-blend-mode: normal;
  max-width: 349px;
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const HeroHeadphoneImage = styled.img`
  position: absolute;
  top: 0;
  right: 10vw;
  z-index: -99;
  max-width: 708.8px;
  width: 100%;

  @media screen and (max-width: 768px) {
    top: 0;
    left: 0;
    right: auto;
    max-width: 100%;
  }

  @media screen and (max-width: 450px) {
    top: 10vh;
    left: 0;
    right: auto;
    transform: scale(1.1);
  }
`;
