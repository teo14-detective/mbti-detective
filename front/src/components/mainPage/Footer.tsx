import React from "react";
import styled from "styled-components";
import {
  StyledSnsContainerCircleBox,
  StyledSnsContainerBox,
} from "@components/common/Container";
import useCounterFetch from "@hooks/useCounterFetch";

import ShareToKakao from "./ShareToKakao";
import ShareToLink from "./ShareToLink";
import ShareToTwitter from "./ShareToTwitter";
import ShareToFacebook from "./ShareToFacebook";

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
        {/* <StyledSnsContainerCircleBox>
          <ShareToTwitter />
        </StyledSnsContainerCircleBox> 
        <StyledSnsContainerCircleBox>
          <ShareToFacebook />
        </StyledSnsContainerCircleBox>
        */}
        <StyledSnsContainerCircleBox>
          <ShareToLink />
        </StyledSnsContainerCircleBox>
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
