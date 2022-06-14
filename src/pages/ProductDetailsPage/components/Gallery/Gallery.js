import styled from "styled-components/macro";

export const GalleryContainer = styled.div`
  display: flex;
  max-width: 1110px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 160px;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
    height: 368px;
    margin-bottom: 120px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    max-width: 85vw;
    margin-bottom: 88px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 592px;
  justify-content: space-between;

  @media screen and (max-width: 1090px) {
    height: 368px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    max-height: 368px;
  }
`;

export const ImageOne = styled.img`
  max-width: min-content;
  width: 100%;
  border-radius: 8px;
  margin-bottom: auto;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const ImageTwo = styled.img`
  max-width: min-content;
  width: 100%;
  border-radius: 8px;
`;

export const Right = styled.div`
  max-height: 592px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const ImageThree = styled.img`
  max-width: min-content;
  width: 100%;
  border-radius: 8px;
`;
