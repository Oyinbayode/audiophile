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
  width: 100px;
  transition: color ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
    border: 1px solid black;
    opacity: 1;
  }
`;

export default GoBack;
