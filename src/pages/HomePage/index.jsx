import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { HomeHero, HomeMain } from "./components";

const Homepage = () => {
  const Params = useParams();

  useEffect(() => {
    document.body.style.overflow = "";
    window.scroll(0, 0);
  }, [Params]);

  return (
    <Div>
      <HomeHero />
      <HomeMain />
    </Div>
  );
};

const Div = styled.div``;

export default Homepage;
