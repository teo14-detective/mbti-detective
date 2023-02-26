import React from "react";
import LinkIcon from "/src/assets/images/icon/icon-link.png";

export default function ShareToLink() {
  const clickLinkButton = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("링크가 복사됐습니다!");
    });

    fetch("/api/share/plus", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <button onClick={clickLinkButton}>
      <img src={LinkIcon} alt="카카오톡 공유 버튼" />
    </button>
  );
}
