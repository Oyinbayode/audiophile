import React from "react";
import {
  PhoneInput,
  Error,
  LabelDiv,
  Label,
  Input,
  Div,
  H2,
  One,
  Name,
  Email,
  PhoneNumber,
  Two,
} from "./BillingDetails";

const BillingDetails = ({ register, errors }) => {
  return (
    <Div>
      <H2>Billing Details</H2>
      <One>
        <Name>
          <LabelDiv>
            <Label style={errors.Name && { color: "#CD2C2C" }} htmlFor="name">
              Name
            </Label>
            {errors.Name && <Error>{errors.Name.message}</Error>}
          </LabelDiv>

          <Input
            style={errors.Name && { border: "1.5px solid #CD2C2C" }}
            type="text"
            placeholder="Alexei Ward"
            {...register("Name")}
          />
        </Name>
        <Email>
          <LabelDiv>
            <Label style={errors.Email && { color: "#CD2C2C" }} htmlFor="email">
              Email Address
            </Label>
            {errors.Email && <Error>{errors.Email.message}</Error>}
          </LabelDiv>

          <Input
            type="email"
            style={errors.Email && { border: "1.5px solid #CD2C2C" }}
            placeholder="alexei@mail.com"
            {...register("Email")}
          />
        </Email>
      </One>
      <Two>
        <PhoneNumber>
          <LabelDiv>
            <Label
              style={errors.PhoneNumber && { color: "#CD2C2C" }}
              htmlFor="phone"
            >
              Phone Number
            </Label>
            {errors.PhoneNumber && <Error>{errors.PhoneNumber.message}</Error>}
          </LabelDiv>

          <PhoneInput
            style={errors.PhoneNumber && { border: "1.5px solid #CD2C2C" }}
            type="tel"
            placeholder="+1 (202) 555-0163"
            {...register("PhoneNumber")}
          />
        </PhoneNumber>
      </Two>
    </Div>
  );
};

export default BillingDetails;
