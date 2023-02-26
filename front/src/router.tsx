import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "@pages/ResultPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
