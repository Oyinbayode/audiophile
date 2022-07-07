import styled from "styled-components/macro";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #d87d4a;
  /* margin-top: 53px; */
  margin-bottom: 16px;
`;

export const One = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: normal;
    height: 186px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 309px;
  flex-grow: 1;
`;

export const Email = styled(Name)`
  margin-left: 1rem;

  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 24px;
  }
`;

export const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  margin: 0;
  margin-bottom: 9px;
`;

export const Input = styled.input`
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 19px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  caret-color: #d87d4a;

  &:focus {
    outline: none;
    border-color: #d87d4a;
  }

  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    color: black;
    opacity: 0.4;
  }
`;

export const Two = styled.div`
  display: flex;
  max-width: 309px;

  @media screen and (max-width: 1090px) {
    max-width: 100%;
    display: grid;
    grid-template-columns: 49% auto;
  }
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
