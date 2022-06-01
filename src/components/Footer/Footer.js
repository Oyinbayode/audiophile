import styled from "styled-components/macro";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
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
    align-self: auto;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 20px;
    justify-content: center;
    align-self: center;
    text-align: center;
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

export const FooterCopyAndLink = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
    align-self: auto;
  }

  @media screen and (max-width: 600px) {
    max-width: 85vw;
    margin-bottom: 20px;
    margin-top: 28px;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    text-align: center;
  }
`;

export const CopyRight = styled.p`
  color: white;
  font-weight: 700;
  opacity: 0.5;
  font-size: 15px;
  line-height: 25px;

  @media screen and (max-width: 600px) {
    margin-bottom: 48px;
  }
`;

export const SocialsLink = styled.div`
  display: flex;
  max-width: 104px;
  width: 100%;

  justify-content: space-between;
`;

export const Facebook = styled(FaFacebookSquare)`
  color: white;
  font-size: 24px;
  transition: color ease-in-out 0.3s;
  &:hover {
    color: #d87d4a;
    cursor: pointer;
  }
`;

export const Twitter = styled(FaTwitter)`
  color: white;
  font-size: 24px;
  transition: color ease-in-out 0.3s;
  &:hover {
    color: #d87d4a;
    cursor: pointer;
  }
`;

export const Instagram = styled(FaInstagram)`
  color: white;
  font-size: 24px;
  transition: color ease-in-out 0.3s;
  &:hover {
    color: #d87d4a;
    cursor: pointer;
  }
`;
