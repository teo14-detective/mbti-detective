import React, { useState } from "react";
import styled from "styled-components";
import { makeRandomQuestion } from "@utils/makeRandomQuestion";
import iconTarget from "@assets/images/icon/icon-target.png";
import { Button } from "@components/common/Button";
import { Header } from "@components/common/Header";

export default function QuizForm() {
  const [questions, answerText] = makeRandomQuestion();
  const questionType = ["IE", "SN", "TF", "JP"];
  const [status, setStatus] = useState<number>(0);
  const [answer, setAnswer] = useState<string[]>([]);

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnswer([...answer, (e.target as HTMLButtonElement).value]);
    if (status === 3) {
      // api 호출(결과 전송)
    }
    setStatus((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledStatusBox>
          <StyledStatusBarBox width={status * 25}>
            <StyledTargetImage src={iconTarget} />
          </StyledStatusBarBox>
        </StyledStatusBox>
        {status < 4 && questions && answerText ? (
          <StyledQuestionContainer>
            <StyledQuestionTitle>Q{status + 1}</StyledQuestionTitle>
            <StyledStatusSpan>({status + 1}/4)</StyledStatusSpan>
            <StyledQuestionBox>{questions[status]}</StyledQuestionBox>
            <StyledButtonsBox>
              <Button
                className="top"
                onClick={handleNextQuestion}
                value={questionType[status].split("")[0]}
              >
                {answerText[status][0]}
              </Button>
              <Button
                className="bottom"
                onClick={handleNextQuestion}
                value={questionType[status].split("")[1]}
              >
                {answerText[status][1]}
              </Button>
            </StyledButtonsBox>
          </StyledQuestionContainer>
        ) : (
          <></>
        )}
        <div>결과:{...answer}</div>
      </StyledContainer>
    </>
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
