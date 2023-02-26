import { Button } from "@components/common/Button2";
import {
  StyledBackgroundBox,
  StyledContainBox,
  StyledSnsContainerCircleBox,
  StyledSnsContainerBox,
  StyledMBTIButtonContainerBox,
} from "@components/common/Container";

import useMakeName from "@hooks/useMakeName";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { Header } from "@components/mainPage/Header";
import ImageSlide from "@components/mainPage/ImageSlide";
import { Footer } from "@components/mainPage/Footer";

export default function QuizMainPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [serverName, setServerName] = useState("");

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setServerName(data.name);
      })
      .catch((err) => console.log("사용자에러", err));
  }, []);

  const { name, changeName } = useMakeName();

  function clickStartButton() {
    if (!name) return alert("이름를 입력해주세요!");

    localStorage.clear();
    localStorage.setItem(
      "information",
      JSON.stringify({
        userKey: `${id}`,
        participantName: `${name}`,
      }),
    );

    navigate("/participant/quiz");
  }

  return (
    <StyledBackgroundBox>
      <StyledContainBox>
        <Header />
        <ImageSlide />
        <StyledLable>
          <StyledBoldLable>{serverName} </StyledBoldLable>님의 MBTI를 <br />
          맞추러 오셨군요!
        </StyledLable>
        <StyledLable>이름을 입력해주세요.</StyledLable>
        <StyledNameInput type="text" value={name} onChange={changeName} />

        <Button onclick={clickStartButton} text={"start"} className="button" />

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
  font-size: large;
  line-height: 120%;
`;

const StyledNameInput = styled.input`
  margin-bottom: 10px;
  padding: 1px 10px;

  width: 289px;
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
  font-size: larger;
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
