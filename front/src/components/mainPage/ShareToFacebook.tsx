import React from "react";
// import FacebookIcon from "/src/assets/images/icon/~";
import styled from "styled-components";

export default function ShareToFacebook() {
  function clickFacebookShareButton() {
    const url = `${window.location.href}`;
    const title = "친구의 MBTI를 맞춰볼까요? MBTI 명탐정이 돼봐요!";

    const width = 600;
    const height = 800;
    let left = document.body.offsetWidth / 2 - width / 2;
    let tops = document.body.offsetHeight / 2 - height / 2;

    left += window.screenLeft;

    window.open(
      `http://www.facebook.com/sharer.php?u=${url}&t=${title}`,
      "페이스북으로 공유하기",
      `width=${width}, height=${height}, left=${left}, top=${tops}`,
    );

    fetch("/api/share/plus", {
      method: "POST",
    }).catch((err) => console.log("Share to facebook count err", err));
  }

  return (
    <button onClick={clickFacebookShareButton}>
      <div>페이스북</div>
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
