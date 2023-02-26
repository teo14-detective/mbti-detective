import React, { useState } from "react";
import styled from "styled-components";
import Header from "@components/result/Header";
import Result from "@components/result";
import Footer from "@components/result/Footer";
import Detail from "@components/result/Detail";
import onCapture from "@utils/captureScreen";

const ResultPage = () => {
  const handleCapture = () => {
    onCapture("capture");
  };

  return (
    <StyledContainer>
      <Header />
      <Result />
      <Footer handleCapture={handleCapture} />
    </StyledContainer>
  );
};

export default ResultPage;

/* styled-components */

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  margin: 0 auto;
  padding: 60px 0px 50px;
  background-color: #dcbc8c;
`;
