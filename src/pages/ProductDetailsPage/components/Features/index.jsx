import React from "react";
import {
  FeatureContainer,
  Features,
  FeaturesHeader,
  FeaturesParagraph,
  InTheBox,
  InTheBoxHeader,
  Item,
  ItemQty,
  ItemName,
  ItemGroup,
} from "./Features";

const Feature = ({ features, items }) => {
  return (
    <FeatureContainer>
      <Features>
        <FeaturesHeader>Features</FeaturesHeader>
        {features.map((el, index) => (
          <FeaturesParagraph key={index}>{el}</FeaturesParagraph>
        ))}
      </Features>
      <InTheBox>
        <InTheBoxHeader>In The Box</InTheBoxHeader>
        <ItemGroup>
          {items.map((item, index) => (
            <Item key={index}>
              <ItemQty>{item.qty}x</ItemQty>
              <ItemName>{item.itemName}</ItemName>
            </Item>
          ))}
        </ItemGroup>
      </InTheBox>
    </FeatureContainer>
  );
};

export default Feature;
