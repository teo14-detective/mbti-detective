import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Result from "@components/result";
import Footer from "@components/result/Footer";
import onCapture from "@utils/captureScreen";
import useResultStore from "@store/resultStore";
import { Header } from "@components/common/Header";
import Loading from "@pages/common/Loading";
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
  const { userKey } = useParams();
  const [usageLog, setUsageLog] = useState<ResponseFetchUsageLogs>({
    hit: 0,
    share: 0,
  });
  const { user, setUser, storeSurveyList } = useResultStore((state) => ({
    ...state,
  }));

  const [isLoading, setIsLoading] = useState(true);

  const handleCapture = () => {
    onCapture("capture");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const KEY = userKey;
      try {
        const res = await fetch(`/api/users/${KEY}`);
        const json = await res.json();
        setUser(json);
      } catch (err) {
        throw new Error("유저 정보가 없습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();

    const fetchUsageLogs = async () => {
      const res = await fetch("/api/usageLogs");
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledContainer>
          <Header />
          <Result />
          <Footer handleCapture={handleCapture} usageLog={usageLog} />
        </StyledContainer>
      )}
    </>
  );
};

export default ResultPage;

/* styled-components */

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
