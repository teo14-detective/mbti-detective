import React from "react";
import MainLogo from "/src/assets/images/logo.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <StyledLogoImage src={MainLogo} alt="로고" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLogoImage = styled.img`
  text-align: center;
  width: 233px;
  height: 116px;
`;
