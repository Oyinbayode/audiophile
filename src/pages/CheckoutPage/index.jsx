import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { CheckoutForm, CheckoutSummary } from "./components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import GoBack from "../../components/GoBack";

const schema = yup.object({
  Name: yup.string().required("Name is required"),
  // Email: yup.string().required("Email is required"),
  // PhoneNumber: yup.string().required("Phone is required"),
  // Address: yup.string().required("Address is required"),
  // City: yup.string().required("City is required"),
  // Country: yup.string().required("Country is required"),
  // Zip: yup.string().required("Zip is required"),
});

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    // console.log(errors);
  };

  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(() => window.innerWidth);
  });

  return (
    <Div>
      <section>
        <GoBack
          style={{
            alignSelf: "flex-start",
            marginLeft: "0",
            marginTop: "0",
          }}
        />
      </section>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Left>
          <H1>Checkout</H1>
          <CheckoutForm
            register={register}
            watch={watch}
            errors={errors}
            getValues={getValues}
          />
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

  section {
    max-width: 1110px;
    width: 100%;
    display: flex;
    justify-content: flex-start;

    margin-top: 71px;

    @media screen and (max-width: 1090px) {
      width: calc(100% - 33%);
      margin-top: 16px;
    }

    @media screen and (max-width: 600px) {
      width: calc(100% - 20%);
    }
  }
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

  @media screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
    margin-bottom: 32px;
  }
`;

const Form = styled.form`
  max-width: 1110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 37px;
  margin-bottom: 141px;

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 116px;
  }

  @media screen and (max-width: 800px) {
    width: 689px;
    margin-top: 12px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 97px;
  }
`;

const Left = styled.div`
  background: #fff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  max-width: 643px;
  width: 100%;
  border-radius: 8px;

  @media screen and (max-width: 1090px) {
    margin-bottom: 32px;
    max-width: 689px;
    padding: 33px;
  }

  @media screen and (max-width: 800px) {
    width: 450px;
  }

  @media screen and (max-width: 600px) {
    width: 279px;
    padding: 24px;
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
    margin-left: 0;
  }

  @media screen and (max-width: 800px) {
    width: 450px;
  }

  @media screen and (max-width: 600px) {
    width: 279px;
    padding: 24px;
  }
`;

export default CheckoutPage;
