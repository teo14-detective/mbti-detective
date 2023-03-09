import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as PasteButton } from "/src/assets/svgs/paste-button.svg";
import { Header } from "@components/common/Header";
import { Button } from "@components/common/Button2";
import Loading from "./common/Loading";
import { useNavigate } from "react-router";
import { AlertModal } from "./common/AlertModal";

const s3Url = import.meta.env.VITE_S3_URL as string;

export const ShareLink = () => {
  const navigate = useNavigate();
  const { userKey } = useParams();

  useEffect(() => {
    fetch(`/api/users/${userKey}`, {
      method: "GET",
    })
      .then((response: any) => response.json())
      .then((data: any) => {
        setIsLoading(false);
        setMbti(data.mbti);
        setUsername(data.name);
        setCount(data.participants.length);
      })
      .catch(() => {
        setAlert(true);
        setAlertText("데이터를 불러오는데 실패했습니다!");
      });
  }, []);

  //로딩
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //알럿모달 상태값
  const [alert, setAlert] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>("");

  // 유저가 설정한 이름
  const [username, setUsername] = useState<string>("");
  // 유저가 설정한 MBTI
  const [mbti, setMbti] = useState<string>("");
  // 유저에게 답변해준 사람들
  const [count, setCount] = useState<number>();

  // 복사링크 div
  const [url, setUrl] = useState<string>(
    `${window.location.href}/${userKey}`,
  );
  //복사링크 핸들러
  const copyTextUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      setAlert(true);
      setAlertText("복사되었습니다.");
    });
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <StyledContainer>
        <Header />
        <StyledAvatarImage
          src={`${s3Url}/mbti-hat/${mbti}.png`}
          alt="MBTI AVATAR"
        />
        <StyledLinkBox>
          <StyledDoneSpan>
            {username}님의 응답 링크가 <br />
            생성되었습니다.
          </StyledDoneSpan>
          <StyledPasteContainer onClick={copyTextUrl}>
            <StyledPasteUrlDiv>{url}</StyledPasteUrlDiv>
            <PasteButton />
          </StyledPasteContainer>
        </StyledLinkBox>
        <StyledReplySpan>
          현재 <StyledCountSpan>{count}</StyledCountSpan> 명에게 <br />
          답변을 받았어요!
        </StyledReplySpan>
        <Button
          text={"답변 보러가기"}
          className={"bottom"}
          onclick={() => navigate(`/${userKey}/result`)}
        />
        {alert && <AlertModal text={alertText} setAlert={setAlert} />}
      </StyledContainer>
    );
  }
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledAvatarImage = styled.img`
  width: 120px;
  height: 120px;
`;
const StyledLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  align-items: center;
`;
const StyledDoneSpan = styled.span`
  text-align: center;
`;

const StyledPasteContainer = styled.div`
  width: 90%;
  height: 22px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  font-weight: 400;
  font-size: 20px;
  background-color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

const StyledPasteUrlDiv = styled.div`
  width: 90%;
  font-size: 14px;
  color: #555;
  font-weight: 300;
  // 말줄임표 처리
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCountSpan = styled.span`
  color: #9e2311;
  font-size: 20px;
`;

const StyledReplySpan = styled.span`
  margin-bottom: 60px;
  text-align: center;
`;
