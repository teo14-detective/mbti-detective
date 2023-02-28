import React from "react";
// import TwitterIcon from "/src/assets/images/icon/~";
import styled from "styled-components";

export default function ShareToTwitter() {
  function clickLinkButton() {
    const url = `${window.location.href}`;
    const title = "친구의 MBTI를 맞춰볼까요? MBTI 명탐정이 돼봐요!";
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      "트위터로 공유하기",
      "width=700, height=400",
    );
  }

  return (
    <button onClick={clickLinkButton}>
      <div>트위터</div>
    </button>
  );
}

const IconImage = styled.img`
  position: absolute;
  top: 11px;
  left: 11px;
  width: 32px;
  height: 32px;
`;
