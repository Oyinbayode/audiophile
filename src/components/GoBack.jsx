import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

const GoBack = () => {
  const Navigate = useNavigate();

  return <Back onClick={() => Navigate(-1)}>Go Back</Back>;
};

const Back = styled.button`
  border: none;
  background: transparent;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;

  transition: color ease-in-out 0.2s, opacity ease-in-out 0.2s;
  cursor: pointer;
  margin-top: 79px;
  height: 30px;
  align-self: flex-start;
  margin-left: 30px;

  &:hover {
    color: #d87d4a;
    opacity: 1;
  }

  @media screen and (max-width: 1090px) {
    margin-top: 33px;
  }
`;

export default GoBack;
