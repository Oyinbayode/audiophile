import React from "react";
import GoBack from "../../components/GoBack";
import Button from "../../utilities/Button";
import {
  DetailsContainer,
  Frame,
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
} from "./ProductDetails.js";
import Data from "../../Data.json";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const Products = Data.ProductData;

  const Params = useParams();

  const Product =
    Products.length !== 0
      ? Products.find((item) => item.id === Number(Params.id))
      : null;

  console.log(Product, Params);

  return (
    <DetailsContainer>
      <Frame>
        <GoBack />
        <ProductCard>
          <ProductCardImage>
            <CardImg src={Product.images.desktop} alt={Product.slugName} />
          </ProductCardImage>
          <ProductCardBody>
            {Product.new && <NewDiv>New Product</NewDiv>}

            <CardBodyHeading>{Product.name}</CardBodyHeading>
            <CardBodyParagraph>{Product.description}</CardBodyParagraph>
            <CardBodyPrice>{Product.price}</CardBodyPrice>
            <CardBodyCart>
              <Quantity>
                <Btn>-</Btn>
                <QtyParagraph></QtyParagraph>
                <Btn>+</Btn>
              </Quantity>
              <Button to="#">Add to Cart</Button>
            </CardBodyCart>
          </ProductCardBody>
        </ProductCard>
      </Frame>
    </DetailsContainer>
  );
};

export default ProductDetailsPage;
