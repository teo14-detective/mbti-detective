import React from "react";
import KakaoIcon from "/src/assets/images/icon/icon-kakao.png";

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
  };

  return (
    <>
      <button onClick={shareKakao}>
        <img src={KakaoIcon} alt="카카오톡 공유 버튼" />
      </button>
    </>
  );
}
