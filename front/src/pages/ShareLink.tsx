import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as PasteButton } from "/src/assets/svgs/paste-button.svg";
import { Header } from "@components/common/Header";
import { Button } from "@components/common/Button";
import { user } from "../../../test-data/get-user.json";

export const ShareLink = () => {
  useEffect(() => {
    // fetch()
    //   .then((response: any) => response.json())
    //   .then((data: any) => {
    //     setIsLoading(true);
    //     setMbti(data.mbti);
    //     setCount(data.participantCount);
    //   })
    //   .catch((error) => alert("데이터를 불러오는데 실패했습니다!"));
  }, []);

  //로딩
  const [isLoading, setIsLoading] = useState<boolean>(false);

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


  if (isLoading) {
    return <div>로딩중</div>;
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
        <Button text={"답변 보러가기"} />
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
