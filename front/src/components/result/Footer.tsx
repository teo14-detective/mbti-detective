import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import kakaoIcon from "@assets/images/icon/icon-kakao.png";
import linkIcon from "@assets/images/icon/icon-link.png";
import saveIcon from "@assets/images/icon/icon-save.png";
import handleCopyClipBoard from "@utils/copyToClipboard";
import { ResponseFetchUsageLogs } from "@pages/ResultPage";
import useResultStore from "@store/resultStore";
import { ogMBTIImage } from "@assets/data/mbti";
const s3Url = import.meta.env.VITE_S3_URL as string;

type Props = {
  handleCapture: () => void;
  usageLog: ResponseFetchUsageLogs;
};

const Footer = ({ handleCapture, usageLog }: Props) => {
  const onCopyClipBoard = () => {
    handleCopyClipBoard(window.location.origin + window.location.pathname);
  };

  const { userKey } = useParams();

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
        <KakaoShareButton userKey={userKey} />
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

const KakaoShareButton = (props: any) => {
  const sortedSurveyList = useResultStore((state) => {
    return state.sortedSurveyList;
  });
  useEffect(() => {
    let imageUrl = `${s3Url}/share-kakao/resultOG.png`;
    let mbti = "잉프피";
    if (sortedSurveyList.length) {
      mbti = sortedSurveyList[0][0]["user_mbti"].toUpperCase();

      console.log(ogMBTIImage[mbti]);
    }
    createKakaoButton(imageUrl, mbti, props.userKey);
  }, []);

  const createKakaoButton = (
    imageUrl: string,
    mbti: string,
    userKey?: string,
  ) => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(import.meta.env.VITE_KAKAO_KEY);
      }

      const url = userKey
        ? `${window.location.origin}/${userKey}`
        : window.location.origin;
      console.log(url);
      console.log(userKey);

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: `내 이름은 ${mbti}, 탐정이죠`,
          description: "#진실은 #언제나 #하나",
          imageUrl: imageUrl, // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: "탐정이 되어보기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
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

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledDataList = styled.dl`
  display: flex;
  gap: 10px;
`;

const StyledDataTerm = styled.dt`
  font-weight: 500;
  font-size: 16px;
`;

const StyledDataDesc = styled.dd`
  font-weight: 300;
  font-size: 16px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const StyledButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  background: #8f754d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`;
