import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { CheckoutForm, PaymentDetails, CheckoutSummary } from "./components";
import { useForm } from "react-hook-form";

const CheckoutPage = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Left>
          <CheckoutForm register={register} />
          <PaymentDetails register={register} />
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
  justify-content: center;
`;

const Form = styled.form`
  max-width: 1110px;
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-gap: 30px;
`;

const Left = styled.div`
  background: #fff;
  /* max-width: 730px;
  width: 100%; */
`;

const Right = styled.div``;

export default CheckoutPage;
