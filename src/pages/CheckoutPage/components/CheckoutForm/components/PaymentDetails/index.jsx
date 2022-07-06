import React, { useState } from "react";
import {
  Div,
  H2,
  One,
  Paragraph,
  Two,
  EMoney,
  Cash,
  Input,
  Label,
  PaymentDetailsForm,
} from "./PaymentDetails";

const PaymentDetails = ({ register, watch }) => {
  const [state, setState] = useState("");

  return (
    <Div>
      <H2>Payment Details</H2>
      <PaymentDetailsForm>
        <One>
          <Paragraph>Payment Method</Paragraph>
        </One>
        <Two>
          <EMoney
            style={
              state === "e-Money"
                ? { border: "1.5px solid #d87d4a" }
                : { border: "1px solid #cfcfcf" }
            }
          >
            <Label htmlFor="e-money">
              <Input
                type="radio"
                name="EMoney"
                id="Emoney"
                {...register("EMoney")}
                value={state === "e-Money" ? "e-Money" : null}
                checked={state === "e-Money"}
                onChange={() => setState("e-Money")}
              />{" "}
              e-Money
            </Label>
          </EMoney>
          <Cash
            style={
              state === "Cash on Delivery"
                ? { border: "1.5px solid #d87d4a" }
                : { border: "1px solid #cfcfcf" }
            }
          >
            <Label htmlFor="cash">
              <Input
                type="radio"
                name="Cash"
                id="Cash"
                {...register("Cash")}
                value={state === "Cash on Delivery" ? "Cash on Delivery" : null}
                checked={state === "Cash on Delivery"}
                onChange={() => setState("Cash on Delivery")}
              />
              Cash on Delivery
            </Label>
          </Cash>
        </Two>
      </PaymentDetailsForm>
      <p>
        {state === "e-Money"
          ? "e-Money"
          : state === "Cash on Delivery"
          ? "Cash on Delivery"
          : ""}
      </p>
    </Div>
  );
};

export default PaymentDetails;
