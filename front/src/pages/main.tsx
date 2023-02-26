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
    <Container>
      <img src="src/assets/images/logo.png" alt="로고" />
      <div>슬라이드</div>
      <StyledFlexGrid>
        <label>이름을 입력해주세요</label>
        <input type="text" />
      </StyledFlexGrid>
      <label>MBTI는 무엇인가요?</label>
      <StyledFlexGrid>
        {MBTIFirstRow.map((mbtiObject) => (
          <StyledMBTIButton
            onClick={clickMBTIButton}
            id={mbtiObject.id}
            value={mbtiObject.mbti}
          >
            {mbtiObject.mbti}
          </StyledMBTIButton>
        ))}
      </StyledFlexGrid>
      <StyledFlexGrid>
        {MBTISecondRow.map((mbtiObject) => (
          <StyledMBTIButton
            onClick={clickMBTIButton}
            id={mbtiObject.id}
            value={mbtiObject.mbti}
          >
            {mbtiObject.mbti}
          </StyledMBTIButton>
        ))}
      </StyledFlexGrid>
      <StyledFlexGrid>
        <button onClick={clickStartButton}>start</button>
      </StyledFlexGrid>
      <label>방문수</label> <label>0</label>
      <label>공유수</label> <label>0</label>
      <StyledFlexGrid>
        <ShareToKakao />
        <button>링크</button>
      </StyledFlexGrid>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
  margin: 16px auto;
  max-width: 430px;
`;

const StyledFlexGrid = styled.div`
  display: flex;
`;

const StyledMBTIButton = styled.button`
  margin: 4px;
  width: 50px;
  height: 50px;

  border: 1px solid;
`;
