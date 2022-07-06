import React from "react";
import {
  Div,
  H2,
  One,
  Address,
  Label,
  Input,
  Two,
  Zip,
  City,
  Three,
  Country,
} from "./ShippingDetails";

const ShippingDetails = ({ register }) => {
  return (
    <Div>
      <H2>Shipping info</H2>
      <One>
        <Address>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            placeholder="1137 Williams Avenue"
            {...register("Address")}
          />
        </Address>
      </One>
      <Two>
        <Zip>
          <Label htmlFor="zip">Zip Code</Label>
          <Input type="text" placeholder="10001" {...register("Zip")} />
        </Zip>
        <City>
          <Label htmlFor="city">City</Label>
          <Input type="text" placeholder="New York" {...register("City")} />
        </City>
      </Two>
      <Three>
        <Country>
          <Label htmlFor="country">Country</Label>
          <Input
            type="text"
            placeholder="United States"
            {...register("Country")}
          />
        </Country>
      </Three>
    </Div>
  );
};

export default ShippingDetails;
