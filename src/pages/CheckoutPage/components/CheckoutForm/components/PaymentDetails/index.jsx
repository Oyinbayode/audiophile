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
  EMoneyForm,
  ENumber,
  EPin,
  InputText,
  LabelText,
  Delivery,
  DeliveryImage,
  DeliveryImg,
  DeliveryParagraph,
} from "./PaymentDetails";
import DeliveryImageSVG from "./assets/images/Delivery.svg";

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

      {state === "e-Money" ? (
        <EMoneyForm>
          <ENumber>
            <LabelText htmlFor="e-number">e-Money Number</LabelText>
            <InputText
              type="text"
              placeholder="238521993"
              {...register("ENumber")}
            />
          </ENumber>
          <EPin>
            <LabelText htmlFor="e-pin">e-Money PIN</LabelText>
            <InputText type="text" placeholder="6891" {...register("EPin")} />
          </EPin>
        </EMoneyForm>
      ) : state === "Cash on Delivery" ? (
        <Delivery>
          <DeliveryImage>
            <DeliveryImg src={DeliveryImageSVG} alt="" />
          </DeliveryImage>
          <DeliveryParagraph>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </DeliveryParagraph>
        </Delivery>
      ) : (
        ""
      )}
    </Div>
  );
};

export default PaymentDetails;
