import ParticipantResult from "@pages/ParticipantResult";
import { ShareLink } from "@pages/ShareLink";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "@pages/ResultPage";
import ChartResultPage from "@pages/ChartResultPage";
import CompareResultPage from "@pages/CompareResultPage";
import MainPage from "./pages/MainPage";
import QuizMainPage from "@pages/QuizMainPage";
import QuizForm from "@pages/QuizForm";
import NotFound from "@pages/common/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:userKey" element={<QuizMainPage />} />
        <Route path="/:userKey/share" element={<ShareLink />} />
        <Route path="/:userKey/result" element={<ResultPage />} />
        <Route path="/:userKey/result/chart" element={<ChartResultPage />} />
        <Route
          path="/:userKey/result/compare"
          element={<CompareResultPage />}
        />
        <Route path="/:userKey/participant/quiz" element={<QuizForm />} />
        <Route
          path="/:userKey/participant/result"
          element={<ParticipantResult />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
