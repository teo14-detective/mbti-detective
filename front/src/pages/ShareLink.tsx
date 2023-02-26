import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as PasteButton } from "/src/assets/svgs/paste-button.svg";
import { Header } from "@components/common/Header";
import { Button } from "@components/common/Button";

export const ShareLink = () => {
  // 유저가 설정한 MBTI
  const [mbti, setMbti] = useState<string>("INTJ");
  // 유저에게 답변해준 사람들
  const [count, setCount] = useState<number>(12);

  // 복사링크 div
  const [url, setUrl] = useState<string>(
    "https://www.figma.com/file/QmLCywemGgYQ3WB9SQtjur/MBTI-%EB%AA%85%ED%83%90%EC%A0%95?node-id=5%3A186&t=Gejc0T5t1QIPxOmR-0",
  );
  //복사링크 핸들러

  const copyTextUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("링크 복사 성공");
    });
  };

  return (
    <Container>
      <Header />
      <Avatar
        src={`/src/assets/images/mbti-hat/${mbti}.png`}
        alt="MBTI AVATAR"
      />
      <DoneSpan>응답 링크가 생성되었습니다.</DoneSpan>
      <PasteContainer>
        <PasteUrlDiv>{url}</PasteUrlDiv>
        <PasteButton onClick={copyTextUrl} />
      </PasteContainer>
      <ReplySpan>
        현재 <CountSpan>{count}</CountSpan> 명에게 <br />
        답변을 받았어요!
      </ReplySpan>
      <Button text={"답변 보러가기"} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dcbc8c;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 180px;
  height: 180px;
  margin-top: 42px;
  margin-bottom: 20px;
`;

const DoneSpan = styled.span`
  margin: 20px 0px;
  font-weight: 400;
  font-size: 20px;
`;

const PasteContainer = styled.div`
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

const PasteUrlDiv = styled.div`
  width: 200px;
  // 말줄임표 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CountSpan = styled.span`
  color: #9e2311;
`;

const ReplySpan = styled.span`
  margin-bottom: 60px;
`;
