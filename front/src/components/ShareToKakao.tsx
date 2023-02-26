import React, { useEffect } from "react";

export default function ShareToKakao() {
  const shareToKatalk = () => {
    // kakao sdk script 부른 후 window.Kakao로 접근
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      // 카카오에서 제공하는 javascript key를 이용하여 initialize
      if (!kakao.isInitialized()) {
        kakao.init("654c98bce67d9c6cda6d5e2ca8cbb578");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "친구의 MBTI를 맞춰보세요!",
          description: "우리는 어린이 MBTI 탐정단~!",
          imageUrl:
            "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcKs7F8%2Fbtr0GLwaPFm%2FsDZ7cnbyG54mFlij8Fio2K%2Fimg.png",
          link: {
            mobileWebUrl: "https://www.16personalities.com/ko",
            webUrl: "https://www.16personalities.com/ko",
          },
        },
      });
    }
  };

  const shareKakao = () => {
    const { VITE_KAKAO_TEMPLATE_ID } = import.meta.env;

    window.Kakao.Link.sendCustom({
      templateId: VITE_KAKAO_TEMPLATE_ID, // 내가 만든 템플릿 아이디를 넣어주면 된다
    });
  };

  return (
    <>
      <button onClick={shareToKatalk}>
        <img
          src="src/assets/images/icon/icon-kakao.png"
          alt="카카오톡 공유 버튼"
        />
      </button>
    </>
  );
}
