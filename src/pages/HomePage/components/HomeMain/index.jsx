import React from "react";
import { ShopNow } from "../../../../components";
import { ZX7, ZX9, YX1, About } from "./components";
import { Div } from "./HomeMain";

const HomeMain = () => {
  return (
    <Div>
      <ShopNow />
      <ZX9 />
      <ZX7 />
      <YX1 />
      <About />
    </Div>
  );
};

export default HomeMain;
