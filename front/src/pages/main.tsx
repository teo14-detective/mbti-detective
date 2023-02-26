import React from "react";
import styled, { createGlobalStyle } from "styled-components";

export default function MainPage() {
  return (
    <Container>
      <img src="src/assets/images/logo.png" alt="로고" />
      <div>슬라이드</div>
      <StyledFlexGrid>
        <label>이름을 입력해주세요</label>
        <input type="text" />
      </StyledFlexGrid>
      <label>MBTI는 무엇인가요?</label>
      <StyledFlexGrid>
        <StyledMBTIButton>I</StyledMBTIButton>
        <StyledMBTIButton>N</StyledMBTIButton>
        <StyledMBTIButton>F</StyledMBTIButton>
        <StyledMBTIButton>P</StyledMBTIButton>
      </StyledFlexGrid>
      <StyledFlexGrid>
        <StyledMBTIButton>E</StyledMBTIButton>
        <StyledMBTIButton>S</StyledMBTIButton>
        <StyledMBTIButton>T</StyledMBTIButton>
        <StyledMBTIButton>J</StyledMBTIButton>
      </StyledFlexGrid>
      <StyledFlexGrid>
        <button>start</button>
      </StyledFlexGrid>
      <label>방문수</label> <label>0</label>
      <label>공유수</label> <label>0</label>
      <StyledFlexGrid>
        <button>카카오톡</button>
        <button>링크</button>
      </StyledFlexGrid>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  margin: 16px auto;
  max-width: 430px;
`;

const StyledFlexGrid = styled.div`
  display: flex;
`;

const StyledMBTIButton = styled.button`
  margin: 4px;
  width: 50px;
  height: 50px;

  border: 1px solid;
`;
