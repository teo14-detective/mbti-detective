import { ShareLink } from "@pages/ShareLink";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "@pages/ResultPage";
import ChartResultPage from "@pages/ChartResultPage";
import CompareResultPage from "@pages/CompareResultPage";
import MainPage from "./pages/MainPage";
import QuizMainPage from "@pages/QuizMainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<QuizMainPage />} />
        <Route path="/share" element={<ShareLink />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result/chart" element={<ChartResultPage />} />
        <Route path="/result/compare" element={<CompareResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
