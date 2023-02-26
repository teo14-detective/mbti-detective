import React, { useState } from "react";
import styled from "styled-components";
import iconTarget from "@assets/images/icon/icon-target.png";

export default function QuizForm() {
  const [status, setStatus] = useState<number>(0);
  const [answer, setAnswer] = useState<string[]>([]);
  const questionType = ["IE", "SN", "TF", "JP"];
  const [question, setQuestion] = useState<string[]>([
    "오랜만에 열린 동창회, 친구는 동창회에 와서 나에게",
    "친구와 새벽에 술을 마시는데 친구에게 갑자기 만약에 여기에 귀신이 있다면 어떨것 같냐고 묻는다면?",
    "내가 교통사고가 나서 병문안을 가게 됐다. 친구의 가장 첫 질문은?",
    "여느때와 같이 평화로운 주말 오후, 갑자기 울린 전화를 받으니 나는 오늘 영화보러 가자고 했다. 친구의 대답은?",
  ]);
  const [answerText, setAnswerText] = useState<string[][]>([
    [
      "최대한 조용하게 나에게 인사한다.",
      "나를 포함해 여러 친구들에게 인사한다.",
    ],
    [
      "내 말에 관심이 없고 그냥 안주나 먹는다.",
      "너무 무서우니 더이상 말하지 말라고 화낸다.",
    ],
    [
      "어쩌다 그랬어? 상대방은 보험처리 한거래?",
      "헉, 너무 아프겠다... 내가 과일사왔는데 좀 먹어.",
    ],
    ["미안한데 나 오늘은 쉬고싶어.", "너무 좋아, 무슨 영화 볼까?"],
  ]);

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnswer([...answer, (e.target as HTMLButtonElement).value]);
    setStatus((prev) => prev + 1);
    // if (status < 3) {
    //   setStatus((prev) => prev + 1);
    // }
  };

  return (
    <StyledContainer>
      <button>뒤로가기</button>
      <h1>MBTI 명탐정</h1>
      <StyledStatusBox>
        <StyledStatusBarBox width={status * 25}>
          <StyledTargetImage src={iconTarget} />
        </StyledStatusBarBox>
      </StyledStatusBox>
      {status < 4 ? (
        <StyledQuestionContainer>
          <StyledQuestionTitle>Q{status + 1}</StyledQuestionTitle>
          <StyledStatusSpan>({status + 1}/4)</StyledStatusSpan>
          <StyledQuestionBox>{question[status]}</StyledQuestionBox>
          <StyledButtonsBox>
            <StyledButton
              className="top"
              onClick={handleNextQuestion}
              value={questionType[status].split("")[0]}
            >
              {answerText[status][0]}
            </StyledButton>
            <StyledButton
              className="bottom"
              onClick={handleNextQuestion}
              value={questionType[status].split("")[1]}
            >
              {answerText[status][1]}
            </StyledButton>
          </StyledButtonsBox>
        </StyledQuestionContainer>
      ) : (
        <></>
      )}
      <div>결과:{...answer}</div>
    </StyledContainer>
  );
}
const StyledContainer = styled.section`
  max-width: 430px;
  margin: 0 auto;
  text-align: center;
`;

const StyledStatusBox = styled.div`
  width: 100%;
  height: 20px;
  border: 2px solid black;
  margin: 20px 0 40px;
`;
const StyledStatusBarBox = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 20px;
  background-color: #9e2311;
  position: relative;
  transition: 0.5s;
`;
const StyledTargetImage = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  right: -18px;
  bottom: -8px;
`;
const StyledQuestionContainer = styled.section`
  position: relative;
`;
const StyledQuestionTitle = styled.h2`
  display: block;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StyledStatusSpan = styled.span`
  display: block;
  font-style: 20px;
  color: #554128;
  margin-bottom: 80px;
`;
const StyledQuestionBox = styled.div`
  font-size: 24px;
  width: 80%;
  margin: 0 auto;
`;
const StyledButtonsBox = styled.div`
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  width: 80%;
  gap: 40px;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 80px;
  padding: 20px;
  font-family: "theJamsil";
  font-size: 20px;
  &.top {
    background-color: #f498b7;
  }
  &.bottom {
    background-color: #01e3e0;
  }
`;
