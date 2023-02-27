import React, { useState, useEffect } from "react";
import styled from "styled-components";
import kakaoIcon from "@assets/images/icon/icon-kakao.png";
import linkIcon from "@assets/images/icon/icon-link.png";
import saveIcon from "@assets/images/icon/icon-save.png";
import handleCopyClipBoard from "@utils/copyToClipboard";
import { ResponseFetchUsageLogs } from "@pages/ResultPage";
import useResultStore from "@store/resultStore";
import questionCharactor from "@assets/images/questionCharactor.png";
import { ogMBTIImage } from "@assets/data/mbti";

type Props = {
  handleCapture: () => void;
  usageLog: ResponseFetchUsageLogs;
};

const Footer = ({ handleCapture, usageLog }: Props) => {
  const onCopyClipBoard = () => {
    const baseUrl = "https://mbti-detective.netlify.app/";
    handleCopyClipBoard(baseUrl + window.location.pathname);
  };

  return (
    <StyledFooter>
      <StyledContainer>
        <StyledDataList>
          <StyledDataTerm>방문수</StyledDataTerm>
          <StyledDataDesc>{usageLog.hit}</StyledDataDesc>
        </StyledDataList>
        <StyledDataList>
          <StyledDataTerm>공유수</StyledDataTerm>
          <StyledDataDesc>{usageLog.share}</StyledDataDesc>
        </StyledDataList>
      </StyledContainer>
      <StyledButtonContainer>
        <KakaoShareButton />
        <StyledButton type="button" onClick={onCopyClipBoard}>
          <StyledImage src={linkIcon} alt="링크" />
        </StyledButton>
        <StyledButton type="button" onClick={handleCapture}>
          <StyledImage src={saveIcon} alt="저장" />
        </StyledButton>
      </StyledButtonContainer>
    </StyledFooter>
  );
};

export default Footer;

/* 카카오톡 공유 버튼 */

const KakaoShareButton = () => {
  const sortedSurveyList = useResultStore((state) => {
    return state.sortedSurveyList;
  });
  useEffect(() => {
    if (sortedSurveyList.length) {
      let mbti = sortedSurveyList[0][0]["user_mbti"].toUpperCase();
      console.log(ogMBTIImage[mbti]);
    }
    createKakaoButton(questionCharactor);
  }, []);

  const createKakaoButton = (url: string) => {
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
          title: "내 이름은 인프피, 탐정이죠",
          description: "#진실은 #언제나 #하나",
          imageUrl:
            "https://github.com/Jxxunnn/mbti-detective-data/blob/main/share-kakao/INFP.png?raw=true", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "탐정이 되어보기",
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
