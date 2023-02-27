import React from "react";
import MainLogo from "/src/assets/images/logo.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoImage src={MainLogo} alt="MBTI 명탐정" />
    </StyledHeader>
  );
};

const StyledHeader = styled.h1``;
const StyledLogoImage = styled.img`
  width: 180px;
  height: 90px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;
