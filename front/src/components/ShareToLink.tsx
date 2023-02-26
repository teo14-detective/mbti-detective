import React from "react";

export default function ShareToLink() {
  const clickLinkButton = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("링크가 복사됐습니다!");
    });
  };

  return (
    <button onClick={clickLinkButton}>
      <img
        src="src/assets/images/icon/icon-link.png"
        alt="카카오톡 공유 버튼"
      />
    </button>
  );
}
