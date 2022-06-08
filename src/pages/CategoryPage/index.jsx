import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../utilities/Button.jsx";
import {
  CategoryPageContainer,
  CategoryPageHeader,
  CategoryPageBody,
  CategoryPageImage,
  CategoryPageImg,
  CategoryPageText,
  Heading,
  Paragraph,
  New,
  Frame,
} from "./Category.js";
import Data from "../../Data.json";

const CategoryPage = () => {
  const Products = Data.ProductData;

  const Params = useParams();

  const CategoryData =
    Products.length !== 0
      ? Products.filter((item) => {
          return item.Category === Params.category;
        })
      : "loading...";

  console.log(CategoryData);

  return (
    <CategoryPageContainer>
      <CategoryPageHeader>{Params.category}</CategoryPageHeader>

      {CategoryData === "loading..." ? (
        <div>Loading ...</div>
      ) : (
        <CategoryPageBody
          style={
            CategoryData[0].imgStart
              ? { flexDirection: "row" }
              : { flexDirection: "row-reverse" }
          }
        >
          <Frame>
            <CategoryPageImage>
              <CategoryPageImg
                src={CategoryData[0].CategoryImage.Desktop}
                alt={CategoryData[0].slugName}
              />
            </CategoryPageImage>
            <CategoryPageText>
              {CategoryData[0].new && <New>New Product</New>}
              <Heading>{CategoryData[0].name}</Heading>
              <Paragraph>{CategoryData[0].description}</Paragraph>
              <Button to="/">See Product</Button>
            </CategoryPageText>
          </Frame>
        </CategoryPageBody>
      )}
    </CategoryPageContainer>
  );
};

export default CategoryPage;
