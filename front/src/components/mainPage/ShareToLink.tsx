import React from "react";
import LinkIcon from "/src/assets/images/icon/icon-link.png";
import styled from "styled-components";

export default function ShareToLink() {
  const clickLinkButton = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("링크가 복사됐습니다!");
    });

    fetch("/api/share/plus", {
      method: "POST",
    }).catch((err) => console.log("Share to Link count err", err));
  };

  return (
    <StyledButton onClick={clickLinkButton}>
      <IconImage src={LinkIcon} alt="링크 공유 버튼" />
    </StyledButton>
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
