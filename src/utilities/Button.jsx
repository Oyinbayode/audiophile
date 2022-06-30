import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <BtnLink to={props.to}>
      <DefaultButton
        onClick={props.onClick}
        transparent={props.transparent}
        black={props.black}
        checkout={props.checkout}
      >
        {props.children}
      </DefaultButton>
    </BtnLink>
  );
};

const BtnLink = styled(Link)`
  margin-top: 10px;
`;

const DefaultButton = styled.button`
  background: #d87d4a;
  border: none;
  color: #fff;
  padding: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 18px;
  padding: 15px 29px 15px 29px;
  max-width: 160px;
  width: 100%;
  transition: background ease-in-out 0.3s;

  &:hover {
    background: #fbaf85;
    cursor: pointer;
  }

  ${(props) =>
    props.black &&
    css`
      background: #000;
      color: white;

      &:hover {
        background: #4c4c4c;
      }
    `}

  ${(props) =>
    props.transparent &&
    css`
      background: transparent;
      border: 1px solid black;
      color: black;

      &:hover {
        background: black;
        color: white;
      }
    `}

   ${(props) =>
    props.checkout &&
    css`
      max-width: 100%;
      margin-bottom: 32px;
    `}
`;

export default Button;
