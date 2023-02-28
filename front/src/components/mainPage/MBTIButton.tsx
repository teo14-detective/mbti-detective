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
      document.querySelector("button")!.style.background = "#b7b7b7";
    } else {
      const nonTargetedButtonArr = mbtiCategory.filter(
        (item: MbtiCategoryObjectType) => item.mbti != MBTIAlphabet,
      );
      document.getElementById(MBTIAlphabet)!.style.background = "#b89960";
      document.getElementById(MBTIAlphabet)!.style.boxShadow = "none";
      document.getElementById(MBTIAlphabet)!.style.transform =
        "translateX(3%) translateY(3%)";

      nonTargetedButtonArr.map((item: MbtiCategoryObjectType) => {
        document.getElementById(item.mbti)!.style.background = "#b7b7b7";
        document.getElementById(item.mbti)!.style.boxShadow = "4px 4px #333";
        document.getElementById(item.mbti)!.style.transform = "none";
        return null;
      });
    }
  }, [MBTIAlphabet]);

  return (
    <div>
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
    </div>
  );
}

const StyledMBTIButton = styled.button`
  display: flex;
  margin: 4px;
  width: 65px;
  height: 65px;
  align-items: center;
  justify-content: center;

  font-size: 40px;
  border-radius: 6px;

  background: #b7b7b7;
  &:hover {
    background-color: #b89960;
    transform: translateX(3%) translateY(3%);
    box-shadow: none;
  }

  box-shadow: 4px 4px #333;

  font-family: "theJamsil";
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  line-height: 26px;

  color: #554128;
`;
