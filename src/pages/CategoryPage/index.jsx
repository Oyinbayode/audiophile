import React, { useEffect, useState } from "react";

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
  HeaderText,
  HorizontalLine,
} from "./Category.js";
import Data from "../../Data.json";
import { About, ShopNow } from "../../components";

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

  // State
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(() => window.innerWidth);
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [Params]);

  return (
    <CategoryPageContainer>
      <CategoryPageHeader>
        <HorizontalLine />
        <HeaderText>{Params.category}</HeaderText>
      </CategoryPageHeader>
      <CategoryPageBody>
        {CategoryData.map((item) => (
          <Frame
            key={item.id}
            style={
              size < 1090
                ? { flexDirection: "column" }
                : size > 1090
                ? item.imgStart
                  ? { flexDirection: "row" }
                  : { flexDirection: "row-reverse" }
                : null
            }
          >
            <CategoryPageImage>
              <CategoryPageImg
                src={
                  size <= 600
                    ? item.CategoryImage.Mobile
                    : size <= 1090
                    ? item.CategoryImage.Tablet
                    : item.CategoryImage.Desktop
                }
                alt={CategoryData[0].slugName}
              />
            </CategoryPageImage>
            <CategoryPageText>
              {item.new && <New>New Product</New>}
              <Heading>{item.name}</Heading>
              <Paragraph>{item.description}</Paragraph>
              <Button to={`/products/${item.id}`}>See Product</Button>
            </CategoryPageText>
          </Frame>
        ))}
        <ShopNow />
        <About />
      </CategoryPageBody>
    </CategoryPageContainer>
  );
};

export default CategoryPage;
