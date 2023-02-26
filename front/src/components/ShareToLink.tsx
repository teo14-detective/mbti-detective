import styled from "styled-components";

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
  const IconImage = styled.img`
    position: absolute;
    top: 11px;
    left: 11px;
    width: 32px;
    height: 32px;
  `;
  return (
    <button onClick={clickLinkButton}>
      <IconImage
        src="/src/assets/images/icon/icon-link.png"
        alt="카카오톡 공유 버튼"
      />
    </button>
  );
}
