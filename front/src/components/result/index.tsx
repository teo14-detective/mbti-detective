import React from "react";
import styled from "styled-components";
import charactor from "@assets/images/mbti-face/ISTP.png";

const Result = () => {
  return (
    <StyledContainer>
      <StyledTitle>메이님의 결과</StyledTitle>
      <StyledResultContainer>
        <StyledImage src={charactor} alt="캐릭터" />
        <StyledImage src={charactor} alt="캐릭터" />
      </StyledResultContainer>
      <StyledList>
        <StyledItem>호불호 강함</StyledItem>
        <StyledItem>호불호 강함</StyledItem>
        <StyledItem>호불호 강함</StyledItem>
        <StyledItem>호불호 강함</StyledItem>
        <StyledItem>호불호 강함</StyledItem>
      </StyledList>
      <StyledButton>실제 MBTI랑 비교하기</StyledButton>
    </StyledContainer>
  );
};

export default Result;

const StyledContainer = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledTitle = styled.h2`
  font-family: "blackHanSans";
  font-size: 30px;
  font-weight: 400;
  line-height: 38px;
`;

const StyledResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 128px;
  aspect-ratio: 1/1;
`;

const StyledList = styled.ul`
  width: 100%;
  padding: 10px 0px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  text-align: center;
`;

const StyledItem = styled.li`
  line-height: 21px;
  font-family: "theJamsil";
  font-size: 16px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 8px 10px;
  border: 2px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(3px 3px 0px #000000);
  background: #ffcd5d;
  font-family: "blackHanSans";
  font-size: 32px;
`;
