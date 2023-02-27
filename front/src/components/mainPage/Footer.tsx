import React from "react";
import styled from "styled-components";
import {
  StyledSnsContainerCircleBox,
  StyledSnsContainerBox,
} from "@components/common/Container";
import ShareToKakao from "./ShareToKakao";
import ShareToLink from "./ShareToLink";
import useCounterFetch from "@hooks/useCounterFetch";

export const Footer = () => {
  const { hitCount, shareCount } = useCounterFetch();

  return (
    <>
      <StyledLableDiv>
        <StyledBoldLable>방문수</StyledBoldLable>
        <StyledCountLable>{hitCount}</StyledCountLable>
        <StyledBoldLable>공유수</StyledBoldLable>
        <StyledCountLable>{shareCount}</StyledCountLable>
      </StyledLableDiv>
      <StyledSnsContainerBox>
        <StyledSnsContainerCircleBox>
          <ShareToKakao />
        </StyledSnsContainerCircleBox>
        <StyledSnsContainerCircleBox>
          <ShareToLink />
        </StyledSnsContainerCircleBox>
      </StyledSnsContainerBox>
    </>
  );
};

const StyledLableDiv = styled.div`
  display: flex;
  width: 289px;
  justify-content: space-evenly;
`;

const StyledBoldLable = styled.label`
  display: flex;
  width: 50px;
  font-weight: 500;
`;

const StyledCountLable = styled.div`
  width: 50px;
  text-align: center;
`;
