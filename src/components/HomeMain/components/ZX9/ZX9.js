import styled from "styled-components";

export const Zx9Container = styled.div`
  border: 1px solid black;
  max-width: 1110px;
  width: 100%;
  background-color: #d87d4a;
  background-image: url("./images/ZX9 OvalBG.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  /* background-attachment: fixed; */

  margin-bottom: 100px;
  display: flex;
  align-items: center;
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 133px;
  margin-left: 9vw;
  margin-right: 8vw;
`;

export const Zx9Image = styled.div`
  /* margin-left: 7.5vw;
  margin-right: 12vw; */
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
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
  border: 1px solid black;
  height: 303px;
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
`;

export const Zx9Text = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #fff;
  opacity: 0.75;
  margin-bottom: 40px;
`;
