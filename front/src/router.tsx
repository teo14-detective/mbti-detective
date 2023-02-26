import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "@pages/ResultPage";
import ChartResultPage from "@pages/ChartResultPage";
import CompareResultPage from "@pages/CompareResultPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result/chart" element={<ChartResultPage />} />
        <Route path="/result/compare" element={<CompareResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
