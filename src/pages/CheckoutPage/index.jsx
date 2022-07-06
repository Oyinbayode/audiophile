import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { CheckoutForm, CheckoutSummary } from "./components";
import { useForm } from "react-hook-form";
import GoBack from "../../components/GoBack";

const CheckoutPage = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Div>
      <GoBack
        style={{
          marginLeft: "11.45%",
          marginTop: "79px",
        }}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Left>
          <H1>Checkout</H1>
          <CheckoutForm register={register} watch={watch} />
        </Left>
        <Right>
          <CheckoutSummary />
        </Right>
      </Form>
    </Div>
  );
};

const Div = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
  color: #000000;
  margin: 0;
  margin-bottom: 41px;
`;

const Form = styled.form`
  max-width: 1110px;
  width: 100%;
  border: 1px solid black;

  display: flex;
  justify-content: space-between;
  margin-top: 37px;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  background: #fff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  max-width: 643px;
  width: 100%;

  @media screen and (max-width: 1090px) {
    margin-bottom: 32px;
    max-width: 689px;
  }
`;

const Right = styled.div`
  background-color: #fff;
  padding: 33px;
  display: flex;
  flex-direction: column;
  max-width: 284px;
  width: 100%;
  border-radius: 8px;
  height: fit-content;
  margin-left: 16px;

  @media screen and (max-width: 1090px) {
    max-width: 689px;
  }
`;

export default CheckoutPage;
