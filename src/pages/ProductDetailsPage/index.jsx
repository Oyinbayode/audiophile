import React, { useState, useEffect } from "react";
import GoBack from "../../components/GoBack";
import { DetailsContainer, Frame } from "./ProductDetails.js";
import Data from "../../Data.json";
import { useParams } from "react-router-dom";
import Card from "./components/ProductCard";
import Feature from "./components/Features";

const ProductDetailsPage = () => {
  const Products = Data.ProductData;

  const Params = useParams();

  const Product =
    Products.length !== 0
      ? Products.find((item) => item.id === Number(Params.id))
      : null;

  console.log(Product, Params);

  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(() => window.innerWidth);
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [Params]);

  return (
    <DetailsContainer>
      <Frame>
        <GoBack />
        <Card
          src={
            size <= 600
              ? Product.images.mobile
              : size <= 1090
              ? Product.images.tablet
              : Product.images.desktop
          }
          alt={Product.slugName}
          New={Product.new}
          name={Product.name}
          description={Product.description}
          price={Product.price}
        />
        <Feature features={Product.features} items={Product.boxItem} />
      </Frame>
    </DetailsContainer>
  );
};

export default ProductDetailsPage;
