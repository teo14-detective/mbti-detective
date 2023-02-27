import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import useMakeMBTI from "./../hooks/useMakeMBTI";
import { Button } from "@components/common/Button2";
import {
  StyledBackgroundBox,
  StyledContainBox,
} from "@components/common/Container";

import useMakeName from "@hooks/useMakeName";
import ImageSlide from "@components/mainPage/ImageSlide";
import { Header } from "@components/mainPage/Header";
import { Footer } from "@components/mainPage/Footer";

export default function MainPage() {
  const navigate = useNavigate();

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

  const { MBTIResultArray, clickMBTIButton } = useMakeMBTI();
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
        name: name.trim(),
        mbti: MBTIResultArray.join(""),
      }),
    })
      .then(async (res) => await res.json())
      .then(async (data) => {
        await localStorage.clear();
        await localStorage.setItem("userKey", `${data.key}`);
        await navigate("/share");
      });
  }

  return (
    <StyledBackgroundBox>
      <StyledContainBox>
        <Header />
        <ImageSlide />
        <StyledLable>이름을 입력해주세요</StyledLable>
        <StyledNameInput
          type="text"
          value={name}
          onChange={changeName}
          placeholder="10자 이하로 입력해주세요."
          maxLength={10}
        />
        <StyledLable>MBTI는 무엇인가요?</StyledLable>

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

        <Button
          onclick={() => clickStartButton()}
          text={"start"}
          className={"bottom"}
        />

        <Footer />
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
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
`;

const StyledNameInput = styled.input`
  margin-bottom: 10px;
  padding: 1px 10px;

  width: 300px;
  height: 40px;

  font-size: 20px;
  background: #ffffff;
  border: 1px solid #ad9777;
  border-radius: 10px;
`;

const StyledCountLable = styled.div`
  width: 50px;
  text-align: center;
`;

const StyledMBTIButton2 = styled.button`
  display: flex;
  margin: 5px 10px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;

  padding: 6px 16px;
  gap: 10px;
  width: 39px;
  height: 38px;

  font-size: 40px;
  border-radius: 6px;

  gap: 10px;

  background: #b7b7b7;
  &:hover {
    background-color: #b89960;
  }

  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.25);

  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;

  color: #554128;
`;
