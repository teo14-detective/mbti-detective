import { Button } from "@components/common/Button2";
import {
  StyledBackgroundBox,
  StyledContainBox,
} from "@components/common/Container";

import useMakeName from "@hooks/useMakeName";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { Header } from "@components/mainPage/Header";
import ImageSlide from "@components/mainPage/ImageSlide";
import { Footer } from "@components/mainPage/Footer";

export default function QuizMainPage() {
  const { userKey } = useParams();
  const navigate = useNavigate();

  const [serverName, setServerName] = useState("");

  useEffect(() => {
    fetch(`/api/users/${userKey}`)
      .then((response) => response.json())
      .then((data) => {
        setServerName(data.name);
      })
      .catch((err) =>
        alert(`사용자를 불러오는데 문제가 생겼습니다. \n에러내용 ${err}`),
      );
  }, []);

  const { name, changeName } = useMakeName();

  function clickStartButton() {
    if (!name.trim()) return alert("이름를 입력해주세요!");

    localStorage.clear();

    localStorage.setItem("participantName", name.trim());

    navigate(`/${userKey}/participant/quiz`);
  }

  return (
    <StyledContainer>
      <Header />
      <ImageSlide />
      <StyledLable>
        <StyledBoldLable>{serverName} </StyledBoldLable>님의 MBTI를 <br />
        맞추러 오셨군요!
      </StyledLable>
      <StyledNameLable>이름을 입력해주세요.</StyledNameLable>
      <StyledNameInput
        type="text"
        value={name}
        onChange={changeName}
        placeholder="10자 이하로 입력해주세요."
        maxLength={10}
      />
      <StyledNameLable>
        <Button onclick={clickStartButton} text={"start"} className="button" />
      </StyledNameLable>
      <Footer />
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  margin: 0 auto;
  text-align: center;
`;

const StyledNameLable = styled.label`
  display: flex;
  justify-content: center;

  margin: 10px;
  margin-top: 20px;
  width: 320px;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
`;

const StyledLable = styled.label`
  margin: 10px 0;
  width: 320px;
  text-align: center;
  font-size: large;
  line-height: 120%;
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

const StyledBoldLable = styled.label`
  font-size: larger;
  font-weight: 500;
`;
