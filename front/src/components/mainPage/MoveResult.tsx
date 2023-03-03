import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type UserKey = {
  userKey: string;
};

export default function MoveResult({ userKey }: UserKey) {
  return (
    <Container>
      <StyledLabel>이미 등록을 하신 분인가요?</StyledLabel>
      <StyledTextDiv>
        <Link to={`/${userKey}/result`}>결과 보러가기</Link>
      </StyledTextDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin: 4px 0;
  font-size: small;
  color: #4b4b4b;
`;

const StyledTextDiv = styled.div`
  cursor: pointer;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;
