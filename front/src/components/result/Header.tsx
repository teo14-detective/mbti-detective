import React from "react";
import styled from "styled-components";
import logo from "@assets/images/logo.png";

const Header = () => {
  return (
    <StyledTitle>
      <StyledImage src={logo} alt="MBTI 명탐정 로고" />
    </StyledTitle>
  );
};

export default Header;

const StyledTitle = styled.h1`
  width: 180px;
  aspect-ratio: 2/1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
