import React from "react";
import { Button } from "@components/common/Button";
import hmmImg from "@assets/images/hmm.png";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledTitle>404</StyledTitle>
      <StyledImg src={hmmImg} alt="" />
      <p>페이지를 찾을 수 없습니다.</p>
      <Button onClick={() => navigate("")}>홈으로 이동</Button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;
const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
`;
const StyledImg = styled.img`
  width: 30%;
`;
