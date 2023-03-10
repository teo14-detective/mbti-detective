import React from "react";
import MainLogo from "/src/assets/images/logo.png";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const { userKey } = useParams();

  return (
    <StyledHeader>
      <StyledLogoImage
        src={MainLogo}
        alt="MBTI 명탐정"
        onClick={() => navigate(`/${userKey}`)}
      />
    </StyledHeader>
  );
};

const StyledHeader = styled.h1`
  cursor: pointer;
`;
const StyledLogoImage = styled.img`
  width: 180px;
  height: 90px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;
