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
  margin-top: 61px;
  margin-bottom: 16px;

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

export const One = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    margin-bottom: 17px;
  }
`;

export const Paragraph = styled.p`
  align-self: flex-start;
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
`;

export const Two = styled.div`
  max-width: 309px;
  width: 100%;
  height: 128px;

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const EMoney = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding-left: 16px;
  padding-top: 18px;
  padding-bottom: 19px;

  /* &:focus-within {
    border: 1px solid #d87d4a;
  } */
`;

export const Cash = styled(EMoney)`
  margin-top: 16px;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  border: 1px solid #cfcfcf;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #d87d4a;
    background-color: CanvasText;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.25px;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 16px;
`;

export const PaymentDetailsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

// export const RadioFormDiv = styled.div``;

export const EMoneyForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: 24px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 186px;
  }
`;

export const ENumber = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 309px;
  flex-grow: 1;

  @media screen and (max-width: 600px) {
    margin-top: 16px;
  }
`;

export const EPin = styled(ENumber)`
  margin-left: 16px;

  @media screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export const LabelText = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  margin: 0;
  margin-bottom: 9px;
`;

export const InputText = styled.input`
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

export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  align-items: center;
`;

export const DeliveryImage = styled.div`
  max-width: fit-content;
  width: 100%;
`;

export const DeliveryImg = styled.img`
  width: 100%;
`;

export const DeliveryText = styled.div``;

export const DeliveryParagraph = styled.p`
  margin: 0;
  max-width: 554px;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.5;

  @media screen and (max-width: 600px) {
    max-width: 200px;
    font-size: 13px;
    line-height: 20px;
  }
`;
