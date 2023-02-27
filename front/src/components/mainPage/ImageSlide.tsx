import React, { useState } from "react";
import MainLogo from "/src/assets/images/logo.png";
import styled, { keyframes } from "styled-components";

import sprite from "/src/assets/images/sprite.png";

type Image = {
  url: string;
};

export default function ImageSlide() {
  return (
    <Container>
      <StyledThirdAnimation url={sprite} />
      <StyledSecondAnimation url={sprite} />
      <StyledFirstAnimation url={sprite} />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 70%;
`;

const firstAnimation = keyframes`
  0% {transform: translateX(0%);}
  100% {transform: translateX(-100%);}
`;

const secondAnimation = keyframes`
  0% {transform: translateX(100%);}
  100% {transform: translateX(0%);}
`;

const thirdAnimation = keyframes`
  0% {transform: translateX(-100%);}
  100% {transform: translateX(-200%);}
`;

const StyledFirstAnimation = styled.div<Image>`
  margin: 40px;
  width: 700%;
  height: 150px;
  animation: ${firstAnimation} 25s 1s infinite linear;
  background-image: url(${(props) => `${props.url}`});
  background-repeat: repeat-x;
  background-size: contain;
  white-space: nowrap;
`;

const StyledSecondAnimation = styled.div<Image>`
  margin: 40px;
  position: absolute;
  top: 0px;
  width: 700%;
  height: 150px;
  animation: ${secondAnimation} 25s 1s infinite linear;
  background-image: url(${(props) => `${props.url}`});
  background-repeat: repeat-x;
  background-size: contain;
  white-space: nowrap;
`;

const StyledThirdAnimation = styled.div<Image>`
  margin: 40px;
  position: absolute;
  top: 0px;
  width: 700%;
  height: 150px;
  animation: ${thirdAnimation} 25s 1s infinite linear;
  background-image: url(${(props) => `${props.url}`});
  background-repeat: repeat-x;
  background-size: contain;
  white-space: nowrap;
`;
