import React from "react";
import styled from "styled-components";
import HomeHero from "../components/HomeHero";
import HomeMain from "../components/HomeMain";

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
