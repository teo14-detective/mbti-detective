import { ShareLink } from "@pages/ShareLink";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/share" element={<ShareLink />} />
        {/* <Route path="/" element={<MainPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
