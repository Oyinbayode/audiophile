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
  Error,
  LabelDiv,
} from "./ShippingDetails";

const ShippingDetails = ({ register, errors }) => {
  return (
    <Div>
      <H2>Shipping info</H2>
      <One>
        <Address>
          <LabelDiv>
            <Label
              style={errors.Address && { color: "#CD2C2C" }}
              htmlFor="address"
            >
              Address
            </Label>
            {errors.Address && <Error>{errors.Address.message}</Error>}
          </LabelDiv>

          <Input
            type="text"
            placeholder="1137 Williams Avenue"
            {...register("Address")}
            style={errors.Address && { border: "1.5px solid #CD2C2C" }}
          />
        </Address>
      </One>
      <Two>
        <Zip>
          <LabelDiv>
            <Label style={errors.Zip && { color: "cd2c2c" }} htmlFor="zip">
              Zip Code
            </Label>
            {errors.Zip && <Error>{errors.Zip.message}</Error>}
          </LabelDiv>

          <Input
            style={errors.Zip && { border: "1.5px solid #CD2C2C" }}
            type="text"
            placeholder="10001"
            {...register("Zip")}
          />
        </Zip>
        <City>
          <LabelDiv>
            <Label style={errors.City && { color: "#CD2C2C" }} htmlFor="city">
              City
            </Label>
            {errors.City && <Error>{errors.City.message}</Error>}
          </LabelDiv>

          <Input
            style={errors.City && { border: "1.5px solid #CD2C2C" }}
            type="text"
            placeholder="New York"
            {...register("City")}
          />
        </City>
      </Two>
      <Three>
        <Country>
          <LabelDiv>
            <Label
              style={errors.Country && { color: "#CD2C2C" }}
              htmlFor="country"
            >
              Country
            </Label>
            {errors.Country && <Error>{errors.Country.message}</Error>}
          </LabelDiv>

          <Input
            type="text"
            placeholder="United States"
            {...register("Country")}
            style={errors.Country && { border: "1.5px solid #CD2C2C" }}
          />
        </Country>
      </Three>
    </Div>
  );
};

export default ShippingDetails;
