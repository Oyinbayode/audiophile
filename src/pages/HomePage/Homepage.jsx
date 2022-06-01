import React from "react";
import styled from "styled-components";
import { HomeHero, HomeMain } from "./components";

const Homepage = () => {
  return (
    <Div>
      <HomeHero />
      <HomeMain />
    </Div>
  );
};

const Div = styled.div``;

export default Homepage;
