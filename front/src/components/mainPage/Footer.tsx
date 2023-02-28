import React from "react";
import styled from "styled-components";
import {
  StyledSnsContainerCircleBox,
  StyledSnsContainerBox,
} from "@components/common/Container";
import ShareToKakao from "./ShareToKakao";
import ShareToLink from "./ShareToLink";
import ShareToTwitter from "./ShareToTwitter";
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
          <ShareToTwitter />
        </StyledSnsContainerCircleBox>
        <StyledSnsContainerCircleBox>
          <ShareToLink />
        </StyledSnsContainerCircleBox>
      </StyledSnsContainerBox>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 10px;
`;

const StyledLableDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
`;

const StyledBoldLable = styled.label`
  display: flex;
  width: 60px;
  font-weight: 500;
`;

const StyledCountLable = styled.div`
  width: auto;
  text-align: center;
`;
