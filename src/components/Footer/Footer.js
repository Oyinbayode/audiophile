import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
  align-self: center;
`;

export const Div = styled.div`
  display: flex;
  max-width: 1110px;
  width: 100%;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 20px;
    justify-content: center;
  }
`;

export const HR = styled.hr`
  background: #d87d4a;
  border: 4px solid #d87d4a;
  width: 104px;
  /* position: relative; */
  /* left: 0; */
  margin: 0;
  align-self: flex-start;
`;

export const FooterText = styled.p`
  max-width: 540px;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 34px;
  align-self: flex-start;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 20px;
    justify-content: center;
  }
`;

export const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1110px;
`;
