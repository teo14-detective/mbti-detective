import React from "react";
import styled from "styled-components";

export const Button = ({ onclick, text }: { onclick?: any; text: string }) => {
  return <Container onClick={onclick}>{text}</Container>;
};

const Container = styled.button`
  width: 289px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "blackHanSans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  background-color: #ffcd5d;
  border: 1px solid black;
  box-shadow: 3px 3px 0px 0px black;
`;
