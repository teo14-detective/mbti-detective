import React from "react";
import styled from "styled-components";
import Header from "@components/result/Header";
import Result from "@components/result";
import Footer from "@components/result/Footer";
import Modal from "@components/result/Modal";

const ResultPage = () => {
  return (
    <StyledContainer>
      <Header />
      <Result />
      <Footer />
    </StyledContainer>
  );
  //  return <Modal />;
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
