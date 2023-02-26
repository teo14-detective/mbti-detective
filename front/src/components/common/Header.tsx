import React from "react";
import MainLogo from "/src/assets/images/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return <Container src={MainLogo} alt="로고" onClick={() => navigate("/")} />;
};

const Container = styled.img`
  width: 180px;
  height: 90px;
  display: block;
  margin: 0 auto;
  margin-top: 85px;
`;
