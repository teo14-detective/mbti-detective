import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@components/result/Header";
import Result from "@components/result";
import Footer from "@components/result/Footer";
import Detail from "@components/result/Detail";
import onCapture from "@utils/captureScreen";
import useResultStore from "@store/resultStore";

export type UserType = {
  uid: number;
  key: string;
  name: string;
  mbti: string;
  create_timestamp: string;
};

export type ParticipantsType = {
  name: string;
  uid: number;
  user_key: string;
  user_mbti: string;
};

export type ResponseFetchUser = {
  uid: number;
  key: string;
  name: string;
  mbti: string;
  create_timestamp: string;
  participants: ParticipantsType[];
};

export type ResponseFetchUsageLogs = {
  hit: number;
  share: number;
};

const ResultPage = () => {
  const [usageLog, setUsageLog] = useState<ResponseFetchUsageLogs>({
    hit: 0,
    share: 0,
  });
  const BASE_URL = "https://mbti-detective-back.vercel.app";
  const { user, setUser, storeSurveyList } = useResultStore((state) => ({
    ...state,
  }));

  const handleCapture = () => {
    onCapture("capture");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const KEY = localStorage.getItem("UserKey");
      try {
        const res = await fetch(BASE_URL + "/api/users/" + KEY);
        const json = await res.json();
        setUser(json);
      } catch (err) {
        throw new Error("유저 정보가 없습니다.");
      }
    };
    fetchUser();

    const fetchUsageLogs = async () => {
      const res = await fetch(BASE_URL + "/api/usageLogs");
      const json = await res.json();
      setUsageLog(json);
    };
    fetchUsageLogs();
  }, []);

  useEffect(() => {
    const sortSurveyList = (participants: ParticipantsType[] = []) => {
      const obj: { [key: string]: number } = {};
      participants.forEach((participant) => {
        const mbti = participant.user_mbti;
        obj[mbti] = (obj[mbti] || 0) + 1;
      });
      const list = Object.entries(obj);
      list.sort((a, b) => {
        return b[1] - a[1];
      });
      const sortedList = list.map((item) => item[0]);
      const hashList = sortedList.map((mbti) => {
        return participants.filter((it) => {
          return it.user_mbti == mbti;
        });
      });
      return hashList;
    };
    storeSurveyList(sortSurveyList(user?.participants));
  }, [user]);

  return (
    <StyledContainer>
      <Header />
      <Result />
      <Footer handleCapture={handleCapture} usageLog={usageLog} />
    </StyledContainer>
  );
};

export default ResultPage;

/* styled-components */

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 390px;
  margin: 0 auto;
  padding: 60px 0px 50px;
  background-color: #dcbc8c;
`;
