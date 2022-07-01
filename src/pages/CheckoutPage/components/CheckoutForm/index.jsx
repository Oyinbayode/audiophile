import React from "react";
import {
  Label,
  Input,
  Div,
  H2,
  One,
  Name,
  Email,
  PhoneNumber,
  Two,
} from "./CheckoutForm";

const CheckoutForm = ({ register }) => {
  return (
    <Div>
      <H2>Billing Details</H2>
      <One>
        <Name>
          <Label htmlFor="name">Name</Label>
          <Input type="text" placeholder="Alexei Ward" {...register("Name")} />
        </Name>
        <Email>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            placeholder="alexei@mail.com"
            {...register("Email")}
          />
        </Email>
      </One>
      <Two>
        <PhoneNumber>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="text"
            placeholder="+1 (202) 555-0163"
            {...register("PhoneNumber")}
          />
        </PhoneNumber>
      </Two>
    </Div>
  );
};

export default CheckoutForm;
