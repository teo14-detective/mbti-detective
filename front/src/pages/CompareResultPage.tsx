import React from "react";
import Detail from "@components/result/Detail";
import styled from "styled-components";

const CompareResult = () => {
  return (
    <StyledContainer>
      <Detail type="results" />
    </StyledContainer>
  );
};

export default CompareResult;

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
