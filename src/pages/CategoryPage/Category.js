import styled from "styled-components/macro";

export const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HorizontalLine = styled.hr`
  border-top: 0.5px solid #fff;
  opacity: 0.2;
  width: 100%;
`;

export const CategoryPageHeader = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderText = styled.h1`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  line-height: 44px;
  letter-spacing: 1.43px;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    height: 120px;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 2px;
  }
`;

export const CategoryPageBody = styled.div`
  display: flex;
  background: #fff;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const CategoryPageImage = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 540px;
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1090px) {
    max-width: 630px;
    height: 352px;
    margin-bottom: 52px;
  }
`;

export const CategoryPageImg = styled.img`
  max-width: min-content;
  width: 100%;
`;

export const CategoryPageText = styled.div`
  max-width: 445px;
  align-self: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    max-width: 327px;
  }

  @media screen and (max-width: 1090px) {
    text-align: center;
    max-width: 572px;
  }
`;

export const Heading = styled.h2`
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

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 24px;
`;

export const New = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;

  color: #d87d4a;
`;

export const Frame = styled.div`
  max-width: 1110px;
  width: 100%;
  margin-top: 160px;
  margin-bottom: 160px;
  display: flex;
  justify-content: space-between;
  height: 560px;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    margin-top: 120px;
    margin-bottom: 120px;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 64px;
    margin-top: 64px;
  }
`;
