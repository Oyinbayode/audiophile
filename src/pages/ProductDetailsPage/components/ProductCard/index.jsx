import React, { useState } from "react";
import {
  ProductCard,
  ProductCardImage,
  CardImg,
  ProductCardBody,
  NewDiv,
  CardBodyHeading,
  CardBodyParagraph,
  CardBodyPrice,
  CardBodyCart,
  Btn,
  Quantity,
  QtyParagraph,
} from "./Card";
import Button from "../../../../utilities/Button";

const Card = ({ src, alt, name, description, price, New }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (quantity === 1) {
      setQuantity(1);
    }
  };

  const FormatCurrency = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: Math.trunc(Math.abs(number)).toFixed().length,
    }).format(number);
  };

  return (
    <ProductCard>
      <ProductCardImage>
        <CardImg src={src} alt={alt} />
      </ProductCardImage>
      <ProductCardBody>
        {New && <NewDiv>New Product</NewDiv>}

        <CardBodyHeading>{name}</CardBodyHeading>
        <CardBodyParagraph>{description}</CardBodyParagraph>
        <CardBodyPrice>{FormatCurrency(price)}</CardBodyPrice>
        <CardBodyCart>
          <Quantity>
            <Btn onClick={handleDecrement}>-</Btn>
            <QtyParagraph>{quantity}</QtyParagraph>
            <Btn onClick={handleIncrement}>+</Btn>
          </Quantity>
          <Button to="#">Add to Cart</Button>
        </CardBodyCart>
      </ProductCardBody>
    </ProductCard>
  );
};

export default Card;
