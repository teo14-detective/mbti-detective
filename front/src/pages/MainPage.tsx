import { Button } from "@components/common/Button2";
import {
  StyledBackgroundBox,
  StyledContainBox,
  StyledSnsContainerCircleBox,
  StyledSnsContainerBox,
  StyledMBTIButtonContainerBox,
} from "@components/common/Container";
import ShareToKakao from "@components/ShareToKakao";
import ShareToLink from "@components/ShareToLink";
import useMakeName from "@hooks/useMakeName";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import useMakeMBTI from "./../hooks/useMakeMBTI";

export default function MainPage() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://mbti-detective-back.vercel.app/api/share/plus")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("공유/방문자수 받아오는 err", err));
  }, []);

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
    if (MBTIResultArray.includes("") || !name)
      return alert("정보를 입력해주세요!");

    const response = fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mbti: MBTIResultArray.join(""),
      }),
    })
      .then(async (res) => await res.json())
      .then(async (data) => {
        await localStorage.setItem("UserKey", `${data.key}`);
        await navigate("/share");
      });
  }

  return (
    <StyledBackgroundBox>
      <StyledContainBox>
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
        <Button onclick={clickStartButton} text={"start"} className="bottom" />

        <StyledLableDiv>
          <StyledBoldLable>방문수</StyledBoldLable>
          <StyledCountLable>0</StyledCountLable>
          <StyledBoldLable>공유수</StyledBoldLable>
          <StyledCountLable>0</StyledCountLable>
        </StyledLableDiv>
        <StyledSnsContainerBox>
          <ShareToKakao />
          <ShareToLink />
        </StyledSnsContainerBox>
      </StyledContainBox>
    </StyledBackgroundBox>
  );
}

const StyledLableDiv = styled.div`
  display: flex;
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

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 20px;
  gap: 10px;
  width: 340px;
  height: 56px;
  background: #ffcd5d;
  box-shadow: 5px 5px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    background-color: #ff9c4f;
  }
`;
const StyledMBTIButton2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 4px;
  padding: 6px 16px;

  width: 70px;
  height: 70px;

  font-size: 40px;
  border: 1px solid;
  border-radius: 6px;

  gap: 10px;

  background: #b7b7b7;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.25);
`;
