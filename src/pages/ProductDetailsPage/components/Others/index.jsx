import React, { useState } from "react";
import {
  OthersContainer,
  OthersHeader,
  OthersBody,
  Card,
  CardImage,
  CardImg,
  CardText,
} from "./Others";
import Button from "../../../../utilities/Button";

const Others = ({ items, id }) => {
  const [size, setSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setSize(() => window.innerWidth);
  });

  return (
    <OthersContainer>
      <OthersHeader>You may also like</OthersHeader>
      <OthersBody>
        {items.map((item, index) => (
          <Card key={index}>
            <CardImage>
              <CardImg
                src={size <= 600 ? item.images.mobile : item.images.desktop}
                alt={item.slugName}
              />
            </CardImage>
            <CardText>{item.name}</CardText>
            <Button to={`/products/${item.id}`}>See Product</Button>
          </Card>
        ))}
      </OthersBody>
    </OthersContainer>
  );
};

export default Others;
