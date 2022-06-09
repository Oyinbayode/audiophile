import styled from "styled-components/macro";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  width: 100%;
  margin-bottom: 200px;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 20px;
  }
`;

export const AboutFrame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1090px) {
    flex-direction: column-reverse;
  }
`;

export const AboutText = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  max-width: 445px;
  width: 100%;

  @media screen and (max-width: 1090px) {
    margin-top: 63px;
    max-width: 573px;

    text-align: center;
  }

  @media screen and (max-width: 600px) {
    margin-top: 40px;
    max-width: 327px;

    text-align: center;
  }
`;

export const AboutHeader = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: 1.42857px;
  text-transform: uppercase;
  margin-bottom: 22px;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
  }
`;

export const AboutBody = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;

  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export const AboutImage = styled.div`
  max-width: 540px;

  @media screen and (max-width: 1090px) {
    max-width: 100%;
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const AboutImg = styled.img`
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 1090px) {
    height: 300px;
  }
`;
