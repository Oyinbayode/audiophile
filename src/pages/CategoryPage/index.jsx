import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CategoryPageContainer, CategoryPageHeader } from "./Category.js";

const CategoryPage = () => {
  const Products = useSelector((state) => state.Data.ProductData);
  console.log(Products);

  const Params = useParams();

  const CategoryData =
    Products.length !== 0
      ? Products.filter((item) => {
          return item.Category === Params.category;
        })
      : null;

  console.log(CategoryData);

  return (
    <CategoryPageContainer>
      <CategoryPageHeader>{Params.category}</CategoryPageHeader>
    </CategoryPageContainer>
  );
};

export default CategoryPage;
