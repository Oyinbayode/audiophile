import styled from "styled-components";

export const Zx9Container = styled.div`
  border-radius: 8px;
  max-width: 1110px;
  width: 100%;
  background-color: #d87d4a;
  background-image: url("./images/ZX9 OvalBG.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  margin-left: 7vw;
  margin-right: 7vw;
  /* background-attachment: fixed; */

  margin-bottom: 100px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1090px) {
    /* max-width: fit-content; */
    /* margin-left: 1vw;
    margin-right: 1vw; */
  }

  @media screen and (max-width: 1090px) {
    background-image: url("./images/mobile-oval-bg.svg");
    background-size: contain;
    max-width: 689px;
  }

  @media screen and (max-width: 600px) {
    background-image: url("./images/iphone-bg.svg");
    background-size: contain;
    max-width: fit-content;
  }
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 133px;
  margin-left: 9vw;
  margin-right: 8vw;
  flex-wrap: wrap;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
    margin-top: 52px;
    margin-bottom: 64px;
  }
`;

export const Zx9Image = styled.div`
  /* margin-left: 7.5vw;
  margin-right: 12vw; */
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;

  @media screen and (max-width: 1090px) {
    max-width: 197px;
    align-self: center;
    margin-bottom: 64px;
  }
`;

export const Zx9Img = styled.img`
  width: 100%;
`;

export const Zx9Body = styled.div`
  /* margin-top: 133px; */
  max-width: 349px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 303px;

  @media screen and (max-width: 1090px) {
    text-align: center;
    align-items: center;
  }
`;

export const Zx9Header = styled.h1`
  max-width: 261px;
  color: white;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;

  @media screen and (max-width: 500px) {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 1.28571px;
    max-width: 200px;
    text-align: center;
  }
`;

export const Zx9Text = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #fff;
  opacity: 0.75;
  margin-bottom: 40px;

  @media screen and (max-width: 500px) {
    margin-bottom: 14px;
    max-width: 280px;
    width: 100%;
  }
`;
