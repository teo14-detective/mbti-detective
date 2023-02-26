import { Button } from "@components/common/Button";
import ShareToKakao from "@components/ShareToKakao";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

export default function MainPage() {
  const MBTIFirstRow = [
    { id: "0", mbti: "I" },
    { id: "1", mbti: "N" },
    { id: "2", mbti: "F" },
    { id: "3", mbti: "P" },
  ];
  const MBTISecondRow = [
    { id: "0", mbti: "E" },
    { id: "1", mbti: "S" },
    { id: "2", mbti: "T" },
    { id: "3", mbti: "J" },
  ];

  const [MBTIResultArray, setMBTIResultArray] = useState<string[]>([]);

  function clickStartButton() {
    return MBTIResultArray.length !== 4
      ? alert("MBTI를 완성해주세요!")
      : console.log(MBTIResultArray.join(""));
  }

  function clickMBTIButton(e: React.MouseEvent<HTMLButtonElement>) {
    const id = Number(e.currentTarget.id);

    // id에 맞는 인덱스에 문자가 있다면, 클릭한 문자로 인덱스에 맞는 mbti 성향 바꿔주기
    if (MBTIResultArray[id]) {
      setMBTIResultArray(
        MBTIResultArray.map((mbti, index) =>
          id === index ? e.currentTarget.value : mbti,
        ),
      );
    } else setMBTIResultArray([...MBTIResultArray, e.currentTarget.value]);
  }

  return (
    <StyledBackground>
      <StyledLogoImage src="src/assets/images/logo.png" alt="로고" />
      <div>슬라이드</div>
      <StyledLable>이름을 입력해주세요</StyledLable>
      <StyledNameInput type="text" />
      <StyledLable>MBTI는 무엇인가요?</StyledLable>
      <div>
        {MBTIFirstRow.map((mbtiObject) => (
          <StyledMBTIButton
            onClick={clickMBTIButton}
            id={mbtiObject.id}
            value={mbtiObject.mbti}
          >
            {mbtiObject.mbti}
          </StyledMBTIButton>
        ))}
      </div>
      <div>
        {MBTISecondRow.map((mbtiObject) => (
          <StyledMBTIButton
            onClick={clickMBTIButton}
            id={mbtiObject.id}
            value={mbtiObject.mbti}
          >
            {mbtiObject.mbti}
          </StyledMBTIButton>
        ))}
      </div>

      <Button onclick={clickStartButton} text={"start"} />

      <StyledLableDiv>
        <StyledBoldLable>방문수</StyledBoldLable>
        <StyledCountLable>0</StyledCountLable>
        <StyledBoldLable>공유수</StyledBoldLable>
        <StyledCountLable>0</StyledCountLable>
      </StyledLableDiv>
      <div>
        <ShareToKakao />
        <button>링크</button>
      </div>
    </StyledBackground>
  );
}

const StyledLableDiv = styled.div`
  display: flex;
`;

const StyledBackground = styled.div`
  background-color: #dcbc8c;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLable = styled.label`
  margin: 10px 0;
  width: 320px;
  text-align: center;
`;

const StyledNameInput = styled.input`
  margin-bottom: 10px;
  padding: 1px 10px;

  width: 300px;
  height: 40px;

  font-size: larger;
  background: #ffffff;
  border: 1px solid #ad9777;
  border-radius: 10px;
`;

const StyledLogoImage = styled.img`
  margin-bottom: 50px;
  width: 300px;
`;

const StyledBoldLable = styled.label`
  display: flex;
  width: 50px;
  font-weight: 500;
`;

const StyledCountLable = styled.div`
  width: 50px;
  text-align: center;
`;

const StyledMBTIButton = styled.button`
  margin: 4px;
  width: 50px;
  height: 50px;

  border: 1px solid;
`;
