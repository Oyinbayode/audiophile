import React from "react";
import { BillingDetails, ShippingDetails, PaymentDetails } from "./components";
import { Div } from "./CheckoutForm";

const CheckoutForm = ({
  register,
  watch,
  errors,
  getValues,
  control,
  Controller,
}) => {
  return (
    <Div>
      <BillingDetails
        register={register}
        errors={errors}
        control={control}
        Controller={Controller}
      />
      <ShippingDetails register={register} errors={errors} />
      <PaymentDetails
        register={register}
        watch={watch}
        getValues={getValues}
        errors={errors}
      />
    </Div>
  );
};

export default CheckoutForm;
