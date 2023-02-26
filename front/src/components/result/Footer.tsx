import React from "react";
import styled from "styled-components";
import kakaoIcon from "@assets/images/icon/icon-kakao.png";
import linkIcon from "@assets/images/icon/icon-link.png";
import saveIcon from "@assets/images/icon/icon-save.png";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledDataList>
          <StyledDataTerm>방문수</StyledDataTerm>
          <StyledDataDesc>2121212</StyledDataDesc>
        </StyledDataList>
        <StyledDataList>
          <StyledDataTerm>공유수</StyledDataTerm>
          <StyledDataDesc>121212</StyledDataDesc>
        </StyledDataList>
      </StyledContainer>
      <StyledButtonContainer>
        <StyledButton type="button">
          <StyledImage src={kakaoIcon} alt="카카오톡" />
        </StyledButton>
        <StyledButton type="button">
          <StyledImage src={linkIcon} alt="링크" />
        </StyledButton>
        <StyledButton type="button">
          <StyledImage src={saveIcon} alt="저장" />
        </StyledButton>
      </StyledButtonContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer``;

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
`;

const StyledDataList = styled.dl`
  display: flex;
  gap: 10px;
`;

const StyledDataTerm = styled.dt`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

const StyledDataDesc = styled.dd`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const StyledButton = styled.button`
  width: 38px;
  height: 38px;
  padding: 8px;
  background: #8f754d;
  border-radius: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
