import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import sprite from "/src/assets/images/sprite.png";

type Image = {
  url: string;
};

export default function ImageSlide() {
  return (
    <Container>
      <StyledImageSlide>
        <StyledThirdAnimation url={sprite} />
        <StyledSecondAnimation url={sprite} />
        <StyledFirstAnimation url={sprite} />
      </StyledImageSlide>
    </Container>
  );
}

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

const Container = styled.div`
  overflow: hidden;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

const StyledImageSlide = styled.div`
  position: relative;
  width: 400%;
  height: 90px;
`;

const StyledFirstAnimation = styled.div<Image>`
  position: absolute;
  width: 100%;
  height: 90px;
  animation: ${firstAnimation} 60s 1s infinite linear;
  background-image: url(${(props) => `${props.url}`});
  background-repeat: repeat-x;
  background-size: contain;
  white-space: nowrap;
`;

const StyledSecondAnimation = styled.div<Image>`
  position: absolute;
  width: 100%;
  height: 90px;
  animation: ${secondAnimation} 60s 1s infinite linear;
  background-image: url(${(props) => `${props.url}`});
  background-repeat: repeat-x;
  background-size: contain;
  white-space: nowrap;
`;

const StyledThirdAnimation = styled.div<Image>`
  position: absolute;
  width: 100%;
  height: 90px;
  animation: ${thirdAnimation} 60s 1s infinite linear;
  background-image: url(${(props) => `${props.url}`});
  background-repeat: repeat-x;
  background-size: contain;
  white-space: nowrap;
`;
