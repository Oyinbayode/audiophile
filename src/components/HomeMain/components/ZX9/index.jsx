import React from "react";
import Button from "../../../../utilities/Button";
import {
  Zx9Image,
  Zx9Container,
  Zx9Img,
  Zx9Body,
  Zx9Header,
  Zx9Text,
  Frame,
} from "./ZX9";
import ZX9 from "./assets/images/ZX9 Speaker.svg";

const Zx9Speaker = () => {
  return (
    <Zx9Container>
      <Frame>
        <Zx9Image>
          <Zx9Img src={ZX9} alt="ZX9 Speaker" />
        </Zx9Image>
        <Zx9Body>
          <Zx9Header>Zx9 Speaker</Zx9Header>
          <Zx9Text>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Zx9Text>
          <Button black to="/">
            See Product
          </Button>
        </Zx9Body>
      </Frame>
    </Zx9Container>
  );
};

export default Zx9Speaker;
