import styled from "styled-components";

export const YX1Container = styled.div`
  display: flex;
  max-width: 1110px;
  width: 100%;

  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
  border-radius: 8px;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 45vh;
  }
`;

export const YX1Frame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1090px) {
    height: 320px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const YX1Image = styled.div`
  max-width: 540px;
  width: 100%;
  margin-right: 30px;

  @media screen and (max-width: 600px) {
    margin-bottom: 24px;
  }
`;

export const YX1Img = styled.img`
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 1090px) {
    height: 320px;
  }
`;

export const YX1Text = styled.div`
  margin-left: 17%;
  margin-top: 15.6%;
  max-width: 247px;
  width: 100%;

  @media screen and (max-width: 1090px) {
    margin-top: 101px;
    margin-left: 41px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 41px;
    margin-left: 24px;
    margin-bottom: 41px;
  }
`;

export const YX1Body = styled.div`
  background-color: #f1f1f1;
  max-width: 540px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 5px;

  @media screen and (max-width: 1090px) {
    margin-bottom: 0px;
  }
`;

export const YX1Header = styled.h2`
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
