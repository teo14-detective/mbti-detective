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
import { useNavigate, useParams } from "react-router";
import styled, { createGlobalStyle } from "styled-components";
import useMakeMBTI from "./../hooks/useMakeMBTI";

export default function QuizMainPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [serverName, setServerName] = useState("");
  const [mbti, setMbti] = useState("");

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setServerName(data.name);
        setMbti(data.mbti);
      })
      .catch((err) => console.log("사용자에러", err));
  }, []);

  const { name, changeName } = useMakeName();

  function clickStartButton() {
    if (!name) return alert("이름를 입력해주세요!");

    const response = fetch("/api/participants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_key: `${id}`,
        name: name,
        mbti: mbti,
      }),
    })
      .then(async (res) => await res.json())
      .then(async () => await navigate("/participant/quiz"));
  }

  return (
    <StyledBackgroundBox>
      <StyledContainBox>
        <StyledLogoImage src="src/assets/images/logo.png" alt="로고" />
        <div>슬라이드</div>
        <StyledLable>{serverName}님의 MBTI를 맞추러 오셨군요!</StyledLable>
        <StyledLable>이름을 입력해주세요.</StyledLable>
        <StyledNameInput type="text" value={name} onChange={changeName} />

        <Button onclick={clickStartButton} text={"start"} className="button" />

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
  /* background-color: ${(props) => (props.isClick ? `black` : `white`)}; */

  gap: 10px;

  background: #b7b7b7;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.25);
`;
