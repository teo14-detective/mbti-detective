import { Button } from "@components/common/Button";
import ShareToKakao from "@components/ShareToKakao";
import ShareToLink from "@components/ShareToLink";
import useMakeName from "@hooks/useMakeName";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import useMakeMBTI from "./../hooks/useMakeMBTI";

export default function MainPage() {
  const MBTIIE = [
    { id: "0", mbti: "I" },
    { id: "0", mbti: "E" },
  ];

  const MBTINS = [
    { id: "1", mbti: "N" },
    { id: "1", mbti: "S" },
  ];

  const MBTIFT = [
    { id: "2", mbti: "F" },
    { id: "2", mbti: "T" },
  ];

  const MBTIPJ = [
    { id: "3", mbti: "P" },
    { id: "3", mbti: "J" },
  ];

  // const MBTIFirstRow = [
  //   { id: "0", mbti: "I" },
  //   { id: "1", mbti: "N" },
  //   { id: "2", mbti: "F" },
  //   { id: "3", mbti: "P" },
  // ];
  // const MBTISecondRow = [
  //   { id: "0", mbti: "E" },
  //   { id: "1", mbti: "S" },
  //   { id: "2", mbti: "T" },
  //   { id: "3", mbti: "J" },
  // ];

  const { MBTIResultArray, isClick, clickMBTIButton } = useMakeMBTI();
  const { name, changeName } = useMakeName();

  function clickStartButton() {
    if (MBTIResultArray.includes("")) return alert("MBTI를 완성해주세요!");

    fetch("/api/users", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        mbti: MBTIResultArray.join(""),
      }),
    }).then((response) => console.log(response));
  }

  return (
    <StyledBackground>
      <StyledLogoImage src="src/assets/images/logo.png" alt="로고" />
      <div>슬라이드</div>
      <StyledLable>이름을 입력해주세요</StyledLable>
      <StyledNameInput type="text" value={name} onChange={changeName} />
      <StyledLable>MBTI는 무엇인가요?</StyledLable>
      {/* <div>
        {MBTIFirstRow.map((mbtiObject) => (
          <StyledMBTIButton
            onClick={clickMBTIButton}
            id={mbtiObject.id}
            value={mbtiObject.mbti}
            isClick={isClick}
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
            isClick={isClick}
          >
            {mbtiObject.mbti}
          </StyledMBTIButton>
        ))}
      </div> */}
      <StyledLableDiv>
        <div>
          {MBTIIE.map((mbtiObject) => (
            <StyledMBTIButton2
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton2>
          ))}
        </div>
        <div>
          {MBTINS.map((mbtiObject) => (
            <StyledMBTIButton2
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton2>
          ))}
        </div>
        <div>
          {MBTIFT.map((mbtiObject) => (
            <StyledMBTIButton2
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton2>
          ))}
        </div>
        <div>
          {MBTIPJ.map((mbtiObject) => (
            <StyledMBTIButton2
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton2>
          ))}
        </div>
      </StyledLableDiv>
      <Button onclick={clickStartButton} text={"start"} />

      <StyledLableDiv>
        <StyledBoldLable>방문수</StyledBoldLable>
        <StyledCountLable>0</StyledCountLable>
        <StyledBoldLable>공유수</StyledBoldLable>
        <StyledCountLable>0</StyledCountLable>
      </StyledLableDiv>
      <div>
        <ShareToKakao />
        <ShareToLink />
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
  /* background-color: ${(props) => (props.isClick ? `black` : `white`)}; */
`;

const StyledMBTIButton2 = styled.button`
  display: flex;
  margin: 4px;
  width: 50px;
  height: 50px;

  border: 1px solid;
  /* background-color: ${(props) => (props.isClick ? `black` : `white`)}; */

  align-items: center;
  justify-content: center;
`;
