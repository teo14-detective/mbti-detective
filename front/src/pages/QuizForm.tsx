import React, { useState } from "react";

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
    if (status < 3) {
      setStatus((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>MBTI 명탐정</h1>
      <h2>Q{status + 1}</h2>
      <p>{status + 1}/4</p>
      <p>{question[status]}</p>
      <div className="buttonCont">
        <button
          onClick={handleNextQuestion}
          value={questionType[status].split("")[0]}
        >
          {answerText[status][0]}
        </button>
        <button
          onClick={handleNextQuestion}
          value={questionType[status].split("")[1]}
        >
          {answerText[status][1]}
        </button>
      </div>
      <div>{...answer}</div>
    </div>
  );
}
