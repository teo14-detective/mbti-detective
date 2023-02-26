import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>{<Route path="/" element={<MainPage />} />}</Routes>
    </BrowserRouter>
  );
};

export default Router;
