import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { Button } from "@components/common/Button2";
import useMakeName from "@hooks/useMakeName";
import ImageSlide from "@components/mainPage/ImageSlide";
import { Header } from "@components/mainPage/Header";
import { Footer } from "@components/mainPage/Footer";
import MBTIButton from "@components/mainPage/MBTIButton";

export default function MainPage() {
  const navigate = useNavigate();
  const { name, changeName } = useMakeName();

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

  const [MBTIResultArray, setMBTIResultArray] = useState<any[]>([
    "",
    "",
    "",
    "",
  ]);

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
        await navigate(`${data.key}/share`);
      });
  }

  return (
    <>
      <Header />
      <ImageSlide />
      <StyledLable>이름을 입력해주세요</StyledLable>
      <StyledContainer>
        <StyledNameInput
          type="text"
          value={name}
          onChange={changeName}
          placeholder="10자 이하로 입력해주세요."
          maxLength={10}
        />
      </StyledContainer>
      <StyledLable>MBTI는 무엇인가요?</StyledLable>
      <StyledLableDiv>
        <MBTIButton
          mbtiCategory={MBTIIE}
          MBTIResultArray={MBTIResultArray}
          setMBTIResultArray={setMBTIResultArray}
        />
        <MBTIButton
          mbtiCategory={MBTINS}
          MBTIResultArray={MBTIResultArray}
          setMBTIResultArray={setMBTIResultArray}
        />
        <MBTIButton
          mbtiCategory={MBTIFT}
          MBTIResultArray={MBTIResultArray}
          setMBTIResultArray={setMBTIResultArray}
        />
        <MBTIButton
          mbtiCategory={MBTIPJ}
          MBTIResultArray={MBTIResultArray}
          setMBTIResultArray={setMBTIResultArray}
        />
      </StyledLableDiv>
      <StyledLableDiv>
        <Button
          onclick={() => clickStartButton()}
          text={"start"}
          className={"bottom"}
        />
      </StyledLableDiv>
      <Footer />
    </>
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

  width: 320px;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
`;

const StyledNameInput = styled.input`
  margin: 10px 0 30px 0;
  padding: 1px 10px;

  width: 269px;
  height: 40px;

  font-size: 20px;
  background: #ffffff;
  border: 1px solid #ad9777;
  border-radius: 10px;
`;
