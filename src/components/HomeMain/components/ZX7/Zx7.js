import styled from "styled-components/macro";

export const ZX7Container = styled.div`
  display: flex;
  align-items: flex-start;
  background-image: url("./images/ZX7-Desktop.svg");
  max-width: 1110px;
  width: 100%;
  height: 320px;
  background-size: auto auto;
  border-radius: 8px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1090px) {
    background-image: url("./images/zx7-tablet.svg");
    background-size: contain;
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    background-image: url("./images/zx7-mobile.svg");
    background-size: cover;
    max-width: 85vw;
  }
`;

export const ZX7Frame = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 6.5vw;
  flex-direction: column;
  align-items: flex-start;
  max-width: 204px;
  margin-top: 101px;

  @media screen and (max-width: 600px) {
    margin-left: 6vw;
  }
`;

export const ZX7Header = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 22px;
`;
