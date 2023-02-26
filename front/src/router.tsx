import ParticipantResult from "@pages/ParticipantResult";
import { ShareLink } from "@pages/ShareLink";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "@pages/ResultPage";
import ChartResultPage from "@pages/ChartResultPage";
import CompareResultPage from "@pages/CompareResultPage";
import MainPage from "./pages/MainPage";
import QuizForm from "@pages/QuizForm";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/share" element={<ShareLink />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result/chart" element={<ChartResultPage />} />
        <Route path="/result/compare" element={<CompareResultPage />} />
        <Route path="/participant/quiz" element={<QuizForm />} />
        <Route path="/participant-result" element={<ParticipantResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
