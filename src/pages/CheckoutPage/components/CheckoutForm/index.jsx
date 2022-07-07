import React from "react";
import { BillingDetails, ShippingDetails, PaymentDetails } from "./components";
import { Div } from "./CheckoutForm";

const CheckoutForm = ({ register, watch, errors, getValues }) => {
  return (
    <Div>
      <BillingDetails register={register} errors={errors} />
      <ShippingDetails register={register} />
      <PaymentDetails register={register} watch={watch} getValues={getValues} />
    </Div>
  );
};

export default CheckoutForm;
