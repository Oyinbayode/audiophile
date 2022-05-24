import React from "react";
import {
  YX1Container,
  YX1Frame,
  YX1Image,
  YX1Img,
  YX1Body,
  YX1Header,
  YX1Text,
} from "./YX1";
import Button from "../../../../utilities/Button";
import YX1Pic from "./assets/images/YX1 Earphones.svg";

const YX1 = () => {
  return (
    <YX1Container>
      <YX1Frame>
        <YX1Image>
          <YX1Img src={YX1Pic} alt="YX1 Earphone" />
        </YX1Image>
        <YX1Body>
          <YX1Text>
            <YX1Header>YX1 earphones</YX1Header>
            <Button transparent to="/">
              See Product
            </Button>
          </YX1Text>
        </YX1Body>
      </YX1Frame>
    </YX1Container>
  );
};

export default YX1;
