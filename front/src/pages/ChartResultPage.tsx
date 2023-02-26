import React from "react";
import styled from "styled-components";
import Detail from "@components/result/Detail";

const ChartResult = () => {
  return (
    <StyledContainer>
      <Detail type="stats" />
    </StyledContainer>
  );
};

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

export default ChartResult;
