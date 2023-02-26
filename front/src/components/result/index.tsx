import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import charactor from "@assets/images/mbti-text/ENFJ.png";
import goldMedal from "@assets/images/gold-medal.png";
import Chart from "./Chart";

const Result = () => {
  return (
    <StyledContainer>
      <StyledCaptureContainer id="capture">
        <StyledTitle>메이님의 결과</StyledTitle>
        <StyledResultContainer>
          <StyledImage src={charactor} alt="캐릭터" />
          <StyledMedalImage src={goldMedal} alt="캐릭터" />
        </StyledResultContainer>
        <StyledList>
          <StyledItem>호불호 강함</StyledItem>
          <StyledItem>호불호 강함</StyledItem>
          <StyledItem>호불호 강함</StyledItem>
          <StyledItem>호불호 강함</StyledItem>
          <StyledItem>호불호 강함</StyledItem>
        </StyledList>
      </StyledCaptureContainer>
      <Link style={{ width: "100%", marginBottom: "10px" }} to="/result/chart">
        <StyledButton>통계 보러가기</StyledButton>
      </Link>
      <Link to="/result/compare">
        <StyledButton>실제 MBTI랑 비교하기</StyledButton>
      </Link>
    </StyledContainer>
  );
};

export default Result;

/* Result Style */

const StyledMedalImage = styled.img`
  position: absolute;
  top: 0;
  right: -20px;
`;

const StyledCaptureContainer = styled.div`
  width: 100%;
  margin-bottom: 45px;
  padding: 10px;
  background-color: #dcbc8c;
  text-align: center;
`;

const StyledContainer = styled.section`
  display: flex;
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
  text-align: center;
`;

const StyledResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 128px;
  height: 128px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 128px;
  aspect-ratio: 1/1;
  margin-left: -10px;
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
