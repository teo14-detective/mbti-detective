import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as PasteButton } from "/src/assets/svgs/paste-button.svg";
import { Header } from "@components/common/Header";
import { Button } from "@components/common/Button2";
import { user } from "../../../test-data/get-user.json";
import Loading from "./common/Loading";
import { useNavigate } from "react-router";

export const ShareLink = () => {
  const navigate = useNavigate();
  const key = localStorage.getItem("UserKey");

  useEffect(() => {
    fetch(`/api/users/${key}`, {
      method: "GET",
    })
      .then((response: any) => response.json())
      .then((data: any) => {
        setIsLoading(false);
        setMbti(data.mbti);
        setCount(data.participants.length);
      })
      .catch((error) => alert("데이터를 불러오는데 실패했습니다!"));
  }, []);

  //로딩
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 유저가 설정한 MBTI
  const [mbti, setMbti] = useState<string>("");
  // 유저에게 답변해준 사람들
  const [count, setCount] = useState<number>();

  // 복사링크 div
  const [url, setUrl] = useState<string>(
    `https://mbti-detective.vercel.app/${key}`,
  );
  //복사링크 핸들러
  const copyTextUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("링크 복사 성공");
    });
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <StyledContainer>
        <Header />
        <StyledAvatarImage
          src={`/src/assets/images/mbti-hat/${mbti}.png`}
          alt="MBTI AVATAR"
        />
        <StyledDoneSpan>응답 링크가 생성되었습니다.</StyledDoneSpan>
        <StyledPasteContainer>
          <StyledPasteUrlDiv>{url}</StyledPasteUrlDiv>
          <PasteButton onClick={copyTextUrl} />
        </StyledPasteContainer>
        <StyledReplySpan>
          현재 <StyledCountSpan>{count}</StyledCountSpan> 명에게 <br />
          답변을 받았어요!
        </StyledReplySpan>
        <Button
          text={"답변 보러가기"}
          className={"bottom"}
          onclick={() => navigate("/result")}
        />
      </StyledContainer>
    );
  }
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dcbc8c;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledAvatarImage = styled.img`
  width: 180px;
  height: 180px;
  margin-top: 42px;
  margin-bottom: 20px;
`;

const StyledDoneSpan = styled.span`
  margin: 20px 0px;
  font-weight: 400;
  font-size: 20px;
`;

const StyledPasteContainer = styled.div`
  width: 247px;
  height: 22px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  font-weight: 400;
  font-size: 20px;
  background-color: #ffffff;
`;

const StyledPasteUrlDiv = styled.div`
  width: 200px;
  // 말줄임표 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCountSpan = styled.span`
  color: #9e2311;
`;

const StyledReplySpan = styled.span`
  margin-bottom: 60px;
`;
