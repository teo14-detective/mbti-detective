import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import useMakeMBTI from "./../hooks/useMakeMBTI";
import { Button } from "@components/common/Button2";

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
    <StyledContainer>
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
      <StyleMBTISection>
        {MBTIResultArray.map((mbti, index) => {
          return (
            <StyleMBTIAlphabetSection key={index}>
              <StyleMBTILabel>{mbti}</StyleMBTILabel>
              <div>―</div>
            </StyleMBTIAlphabetSection>
          );
        })}
      </StyleMBTISection>

      <StyledLableDiv>
        <div>
          {MBTIIE.map((mbtiObject) => (
            <StyledMBTIButton
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
              key={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton>
          ))}
        </div>
        <div>
          {MBTINS.map((mbtiObject) => (
            <StyledMBTIButton
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
              key={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton>
          ))}
        </div>
        <div>
          {MBTIFT.map((mbtiObject) => (
            <StyledMBTIButton
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
              key={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton>
          ))}
        </div>
        <div>
          {MBTIPJ.map((mbtiObject) => (
            <StyledMBTIButton
              onClick={clickMBTIButton}
              id={mbtiObject.id}
              value={mbtiObject.mbti}
              key={mbtiObject.mbti}
            >
              {mbtiObject.mbti}
            </StyledMBTIButton>
          ))}
        </div>
      </StyledLableDiv>
      <StyledLableDiv>
        <Button
          onclick={() => clickStartButton()}
          text={"start"}
          className={"bottom"}
        />
      </StyledLableDiv>
      <Footer />
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  margin: 0 auto;
  text-align: center;
`;

const StyledLableDiv = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 10px;
`;

const StyledLable = styled.label`
  display: flex;
  justify-content: center;

  margin: 10px;
  width: 320px;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
`;

const StyledNameInput = styled.input`
  margin-bottom: 10px;
  padding: 1px 10px;

  width: 269px;
  height: 40px;

  font-size: 20px;
  background: #ffffff;
  border: 1px solid #ad9777;
  border-radius: 10px;
`;
const StyleMBTISection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyleMBTIAlphabetSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleMBTILabel = styled.label`
  width: 30px;
  height: 30px;
  font-size: 30px;
  font-weight: 500;
`;

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
