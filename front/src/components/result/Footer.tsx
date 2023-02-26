import React, { useState, useEffect } from "react";
import styled from "styled-components";
import kakaoIcon from "@assets/images/icon/icon-kakao.png";
import linkIcon from "@assets/images/icon/icon-link.png";
import saveIcon from "@assets/images/icon/icon-save.png";

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(import.meta.env.VITE_KAKAO_KEY);
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "타이틀",
          description: "#나는야 #MBTI #명탐정",
          imageUrl:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/78e62aef-f8dd-4a6f-8c0f-ecae5737813c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230226T114336Z&X-Amz-Expires=86400&X-Amz-Signature=4695abcd0c95d1638e7a552142682b377855e0fc2e7f0825a4dd9b160e709bc7&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        /* social은 optional */
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <StyledButton id="kakao-link-btn" type="button">
      <StyledImage src={kakaoIcon} alt="카카오톡" />
    </StyledButton>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledDataList>
          <StyledDataTerm>방문수</StyledDataTerm>
          <StyledDataDesc>2121212</StyledDataDesc>
        </StyledDataList>
        <StyledDataList>
          <StyledDataTerm>공유수</StyledDataTerm>
          <StyledDataDesc>121212</StyledDataDesc>
        </StyledDataList>
      </StyledContainer>
      <StyledButtonContainer>
        <KakaoShareButton />
        <StyledButton type="button">
          <StyledImage src={linkIcon} alt="링크" />
        </StyledButton>
        <StyledButton type="button">
          <StyledImage src={saveIcon} alt="저장" />
        </StyledButton>
      </StyledButtonContainer>
    </StyledFooter>
  );
};

export default Footer;

/* Footer Style */

const StyledFooter = styled.footer``;

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 12px;
`;

const StyledDataList = styled.dl`
  display: flex;
  gap: 10px;
`;

const StyledDataTerm = styled.dt`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

const StyledDataDesc = styled.dd`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const StyledButton = styled.button`
  width: 38px;
  height: 38px;
  padding: 8px;
  background: #8f754d;
  border-radius: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
