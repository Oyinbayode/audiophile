import React from "react";
import { BillingDetails, ShippingDetails, PaymentDetails } from "./components";
import { Div } from "./CheckoutForm";

const CheckoutForm = ({ register, watch }) => {
  return (
    <Div>
      <BillingDetails register={register} />
      <ShippingDetails register={register} />
      <PaymentDetails register={register} watch={watch} />
    </Div>
  );
};

export default CheckoutForm;
