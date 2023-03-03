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

    fetch("/api/users", {
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
        await localStorage.setItem("userKey", `${data.key}`);
        await navigate(`${data.key}/share`);
      });
  }
  return (
    <StyledContainer>
      <Header />
      <ImageSlide />
      <StyledMain>
        <StyledBox>
          <StyledLable>이름을 입력해주세요</StyledLable>
          <StyledNameInput
            type="text"
            value={name}
            onChange={changeName}
            placeholder="10자 이하로 입력해주세요."
            maxLength={10}
          />
        </StyledBox>
        <StyledBox>
          <StyledLable>MBTI는 무엇인가요?</StyledLable>
          <StyledMBTIButtonBox>
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
          </StyledMBTIButtonBox>
        </StyledBox>
        <Button
          onclick={() => clickStartButton()}
          text={"start"}
          className={"bottom"}
        />
        <StyledBox>
          <Footer />
        </StyledBox>
      </StyledMain>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  margin: 0 auto;
  text-align: center;
  height: 100%;
`;
const StyledMain = styled.main`
  display: flex;
  height: calc(100% - 100px - 80px - 90px);
  flex-direction: column;
  justify-content: space-between;
`;

const StyledMBTIButtonBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const StyledLable = styled.label`
  display: flex;
  justify-content: center;
`;

const StyledNameInput = styled.input`
  width: 90%;
  padding: 10px 12px;
  background: #ffffff;
  border: 1px solid #ad9777;
  border-radius: 10px;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;
