import React from "react";
import MainLogo from "/src/assets/images/logo.png";
import styled from "styled-components";

export const Header = () => {
  return <Container src={MainLogo} alt="로고" />;
};

const Container = styled.img`
  width: 300px;
`;
