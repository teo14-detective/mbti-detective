import React from "react";
import styled, { keyframes } from "styled-components";
import { Header } from "@components/common/Header";
import spriteImg from "@assets/images/sprite.png";

export default function Loading() {
  return (
    <>
      <Header />
      <StyledContainter>
        <StyledAmimationBox />
        <StyledParagraph>LOADING . . .</StyledParagraph>
      </StyledContainter>
    </>
  );
}

const SpriteAnimation = keyframes`
    to {
        background-position: -1440px 0;
    }
`;
const StyledContainter = styled.section`
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const StyledAmimationBox = styled.div`
  width: 90px;
  height: 90px;
  background: url(${spriteImg}) no-repeat 0 0 / auto 90px;
  animation: ${SpriteAnimation} 3s infinite steps(16);
`;
const StyledParagraph = styled.p`
  font-family: "blackHanSans";
  font-size: 28px;
`;
