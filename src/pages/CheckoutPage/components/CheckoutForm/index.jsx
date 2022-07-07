import React from "react";
import { BillingDetails, ShippingDetails, PaymentDetails } from "./components";
import { Div } from "./CheckoutForm";

const CheckoutForm = ({ register, watch, errors, getValues, control }) => {
  return (
    <Div>
      <BillingDetails register={register} errors={errors} control={control} />
      <ShippingDetails register={register} />
      <PaymentDetails register={register} watch={watch} getValues={getValues} />
    </Div>
  );
};

export default CheckoutForm;
