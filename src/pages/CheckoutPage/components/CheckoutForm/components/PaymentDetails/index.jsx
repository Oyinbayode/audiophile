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

const PaymentDetails = ({ register, getValues }) => {
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
              getValues("PaymentMethod") === "EMoney"
                ? { border: "1.5px solid #d87d4a" }
                : { border: "1px solid #cfcfcf" }
            }
          >
            <Label htmlFor="EMoney">
              <Input
                type="radio"
                {...register("PaymentMethod")}
                id="EMoney"
                value="EMoney"
                defaultChecked={getValues("PaymentMethod") === "EMoney"}
                // onChange={() => setState("e-Money")}
              />{" "}
              e-Money
            </Label>
          </EMoney>
          <Cash
            style={
              getValues("PaymentMethod") === "Cash"
                ? { border: "1.5px solid #d87d4a" }
                : { border: "1px solid #cfcfcf" }
            }
          >
            <Label htmlFor="Cash">
              <Input
                type="radio"
                {...register("PaymentMethod")}
                id="Cash"
                value="Cash"
                defaultChecked={getValues("PaymentMethod") === "Cash"}
                // onChange={() => setState("Cash on Delivery")}
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
