import questions from "@assets/data/question.json";

export const makeRandomQuestion = () => {
  const IEQuestion = questions.IE[~~(Math.random() * questions.IE.length)];
  const SNQuestion = questions.SN[~~(Math.random() * questions.SN.length)];
  const TFQuestion = questions.TF[~~(Math.random() * questions.TF.length)];
  const JPQuestion = questions.JP[~~(Math.random() * questions.JP.length)];
  const questionsList = [
    IEQuestion.question,
    SNQuestion.question,
    TFQuestion.question,
    JPQuestion.question,
  ];
  const answerList = [
    IEQuestion.answer,
    SNQuestion.answer,
    TFQuestion.answer,
    JPQuestion.answer,
  ];
  return [questionsList, answerList];
};
