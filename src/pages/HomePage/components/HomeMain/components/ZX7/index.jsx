import React from "react";
import { ZX7Container, ZX7Frame, ZX7Header } from "./Zx7";
import Button from "../../../../../../utilities/Button";

const ZX7 = () => {
  return (
    <ZX7Container>
      <ZX7Frame>
        <ZX7Header>zx7 speaker</ZX7Header>
        <Button transparent to="/products/5">
          See Product
        </Button>
      </ZX7Frame>
    </ZX7Container>
  );
};

export default ZX7;
