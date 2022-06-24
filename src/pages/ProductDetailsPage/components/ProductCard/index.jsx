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
  Button,
} from "./Card";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ src, alt, name, description, price, New, Product }) => {
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

  const dispatch = useDispatch();

  const AddToCart = () => {
    let ProductCart = {
      id: Product.id,
      name: Product.name,
      price: Product.price,
      quantity: quantity,
    };

    dispatch(addProduct(ProductCart));
    setQuantity(1);

    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <ProductCard>
      {/* <ToastContainer /> */}
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
          <Button onClick={AddToCart}>Add to Cart</Button>
        </CardBodyCart>
      </ProductCardBody>
    </ProductCard>
  );
};

export default Card;
