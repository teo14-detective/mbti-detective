import React, { useEffect, useState } from "react";
import styled from "styled-components";

type MbtiCategoryType = { mbtiCategory: MbtiCategoryObjectType[] };
type MbtiCategoryObjectType = { id: string; mbti: string };

export default function MBTIButton(props: any) {
  const { mbtiCategory, MBTIResultArray, setMBTIResultArray } = props;

  const [MBTIAlphabet, setMBTIAlphabet] = useState("");
  function changeMBTIAlphabetState(event: React.FormEvent<HTMLButtonElement>) {
    const {
      currentTarget: { id },
    } = event;
    setMBTIAlphabet(id);
  }

  function clickMBTIButton(event: React.FormEvent<HTMLButtonElement>) {
    changeMBTIAlphabetState(event);

    // 버튼 css로 인한 MBTI 성향별 인덱스(I/E-0, S/N-1, F/T-2, P/J-3)를 name에서 추출
    const buttonNameIndex = Number(event.currentTarget.name);

    setMBTIResultArray(
      MBTIResultArray.map((mbti: string, index: number) =>
        buttonNameIndex === index
          ? MBTIResultArray.splice(index, 1, event.currentTarget.value)
          : mbti,
      ),
    );

    // id와 맞는 인덱스에 문자가 있다면, 클릭한 문자로 인덱스에 맞는 mbti 성향 바꿔주기
    if (MBTIResultArray[buttonNameIndex]) {
      setMBTIResultArray(
        MBTIResultArray.map((mbti: string, index: number) =>
          buttonNameIndex === index ? event.currentTarget.value : mbti,
        ),
      );
    }
  }

  useEffect(() => {
    if (MBTIAlphabet === "") {
      document.querySelector("button")!.style.background = "#EAEAEA";
    } else {
      const nonTargetedButtonArr = mbtiCategory.filter(
        (item: MbtiCategoryObjectType) => item.mbti != MBTIAlphabet,
      );
      // 클릭시
      document.getElementById(MBTIAlphabet)!.style.background = "#9E2311";
      document.getElementById(MBTIAlphabet)!.style.boxShadow = "none";
      document.getElementById(MBTIAlphabet)!.style.transform =
        "translateX(3%) translateY(3%)";
      document.getElementById(MBTIAlphabet)!.style.color = "#FFEDCB";
      document.getElementById(MBTIAlphabet)!.style.borderColor = "#000000";

      // 클릭되지 않은 버튼
      nonTargetedButtonArr.map((item: MbtiCategoryObjectType) => {
        document.getElementById(item.mbti)!.style.background = "#EAEAEA";
        document.getElementById(item.mbti)!.style.boxShadow = "4px 4px #AEAEAE";
        document.getElementById(item.mbti)!.style.transform = "none";
        document.getElementById(item.mbti)!.style.color = "#AEAEAE";
        document.getElementById(item.mbti)!.style.borderColor = "#AEAEAE";

        return null;
      });
    }
  }, [MBTIAlphabet]);

  return (
    <Container>
      {mbtiCategory.map((mbtiObject: MbtiCategoryObjectType) => (
        <StyledMBTIButton
          onClick={clickMBTIButton}
          id={mbtiObject.mbti}
          value={mbtiObject.mbti}
          name={mbtiObject.id}
        >
          {mbtiObject.mbti}
        </StyledMBTIButton>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 10px;
`;

const StyledMBTIButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 6px 16px;
  gap: 10px;

  width: 44px;
  height: 44px;

  border-radius: 6px;
  border: 2px solid #000000;
  background: #eaeaea;
  &:hover {
    /* background-color: #9e2311; */
    transform: translateX(3%) translateY(3%);
    box-shadow: none;
  }

  box-shadow: 4px 4px #333;

  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
`;
