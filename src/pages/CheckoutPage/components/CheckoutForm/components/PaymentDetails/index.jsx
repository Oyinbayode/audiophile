import React from "react";
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
  LabelDiv,
  Error,
} from "./PaymentDetails";
import DeliveryImageSVG from "./assets/images/Delivery.svg";

const PaymentDetails = ({ register, getValues, watch, errors }) => {
  return (
    <Div>
      <H2>Payment Details</H2>
      <PaymentDetailsForm>
        <One>
          <Paragraph>Payment Method</Paragraph>
          {errors.PaymentMethod && (
            <Error
              style={{
                marginTop: "16px",
              }}
            >
              Payment Method Required
            </Error>
          )}
        </One>
        <Two>
          <EMoney
            style={
              watch("PaymentMethod") === "EMoney"
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
              watch("PaymentMethod") === "Cash"
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

      {getValues("PaymentMethod") === "EMoney" ? (
        <EMoneyForm>
          <ENumber>
            <LabelDiv>
              <LabelText
                style={
                  errors.ENumber && {
                    color: "#CD2C2C",
                  }
                }
                htmlFor="ENumber"
              >
                e-Money Number
              </LabelText>
              {errors.ENumber && <Error>{errors.ENumber.message}</Error>}
            </LabelDiv>

            <InputText
              type="text"
              placeholder="238521993"
              {...register("ENumber")}
              style={errors.ENumber && { border: "1.5px solid #CD2C2C" }}
            />
          </ENumber>
          <EPin>
            <LabelDiv>
              <LabelText
                style={
                  errors.EPin && {
                    color: "#CD2C2C",
                  }
                }
                htmlFor="EPin"
              >
                e-Money PIN
              </LabelText>
              {errors.EPin && <Error>{errors.EPin.message}</Error>}
            </LabelDiv>

            <InputText
              style={errors.EPin && { border: "1.5px solid #CD2C2C" }}
              type="text"
              placeholder="6891"
              {...register("EPin")}
            />
          </EPin>
        </EMoneyForm>
      ) : getValues("PaymentMethod") === "Cash" ? (
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
