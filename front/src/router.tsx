import ParticipantResult from "@pages/ParticipantResult/ParticipantResult";
import { ShareLink } from "@pages/ShareLink";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/participant-result" element={<ParticipantResult />} />
        <Route path="/share" element={<ShareLink />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
