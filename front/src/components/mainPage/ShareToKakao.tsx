import React from "react";
import KakaoIcon from "/src/assets/images/icon/icon-kakao.png";
import styled from "styled-components";

export default function ShareToKakao() {
  const shareKakao = () => {
    const { VITE_KAKAO_TEMPLATE_ID, VITE_KAKAO_JS_KEY } = import.meta.env;

    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(VITE_KAKAO_JS_KEY);
      }

      window.Kakao.Share.sendCustom({
        templateId: Number(VITE_KAKAO_TEMPLATE_ID), // 템플릿 아이디 넣기
      });
    }

    fetch("/api/share/plus", {
      method: "POST",
    }).catch((err) => console.log("Share to kakao count err", err));
  };

  return (
    <>
      <StyledButton onClick={shareKakao}>
        <IconImage src={KakaoIcon} alt="카카오톡 공유 버튼" />
      </StyledButton>
    </>
  );
}
const StyledButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  background: #8f754d;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;
