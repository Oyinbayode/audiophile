import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HomeHero, HomeMain } from "./components";
import { fetchProductData } from "../../redux/slices/ProductsSlice";

const Homepage = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.productData.productData);
  console.log(product);

  return (
    <Div>
      <HomeHero />
      <HomeMain />
    </Div>
  );
};

const Div = styled.div``;

export default Homepage;
