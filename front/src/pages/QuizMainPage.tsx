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

    localStorage.setItem("participantName", name);

    navigate(`/${userKey}/participant/quiz`);
  }

  return (
    <StyledContainer>
      <Header />
      <ImageSlide />
      <StyledMain>
        <StyledLable>
          <StyledBoldLable>{serverName} </StyledBoldLable>님의 MBTI를 <br />
          맞추러 오셨군요!
        </StyledLable>
        <StyledBox>
          <StyledNameLable>이름을 입력해주세요.</StyledNameLable>
          <StyledNameInput
            type="text"
            value={name}
            onChange={changeName}
            placeholder="10자 이하로 입력해주세요."
            maxLength={10}
          />
        </StyledBox>
        <StyledBox>
          <Button
            onclick={clickStartButton}
            text={"start"}
            className="button"
          />
        </StyledBox>
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
  align-items: center;
`;
const StyledNameLable = styled.label``;

const StyledLable = styled.label``;

const StyledNameInput = styled.input`
  width: 90%;
  padding: 10px 12px;
  background: #ffffff;
  border: 1px solid #ad9777;
  border-radius: 10px;
`;

const StyledBoldLable = styled.label`
  font-size: larger;
  font-weight: 500;
`;
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
  width: 100%;
`;
