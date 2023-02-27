import React from "react";
import MainLogo from "/src/assets/images/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <StyledLogoImage
        src={MainLogo}
        alt="MBTI 명탐정"
        onClick={() => navigate("/")}
      />
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
