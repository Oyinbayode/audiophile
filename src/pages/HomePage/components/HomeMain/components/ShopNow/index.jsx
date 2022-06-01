import React from "react";
import {
  ShopNowContainer,
  Card,
  CardImage,
  CardTitle,
  CardBtnLink,
  CardImageDiv,
  RightArrow,
} from "./ShopNow";
import CardsData from "./Cards.json";

const ShopNow = () => {
  const data = CardsData.dataBody;

  return (
    <ShopNowContainer>
      {data.map((item) => (
        <Card key={item.id}>
          <CardImageDiv>
            <CardImage src={`${item.image}`} />
          </CardImageDiv>
          <CardTitle>{item.title}</CardTitle>
          <CardBtnLink to="/">
            <p>shop</p>
            <RightArrow />
          </CardBtnLink>
        </Card>
      ))}
    </ShopNowContainer>
  );
};

export default ShopNow;
