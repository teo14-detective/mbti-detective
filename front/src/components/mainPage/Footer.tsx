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
        <ShareToKakao />
        <ShareToLink />
      </StyledSnsContainerBox>
    </>
  );
};

const StyledLableDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledBoldLable = styled.label`
  display: flex;
  font-weight: 500;
  font-size: 16px;
`;

const StyledCountLable = styled.div`
  width: auto;
  text-align: center;
  font-size: 16px;
`;
