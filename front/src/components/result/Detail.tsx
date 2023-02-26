import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import charactor from "@assets/images/mbti-face/ISTP.png";
import useRoute from "@hooks/useRoute";
import Chart from "./Chart";

type PropsType = {
  type: "stats" | "results";
};

const Detail = ({ type }: PropsType) => {
  const { handleRouteBack } = useRoute();

  return (
    <StyledContainer>
      {type == "stats" ? <Stats /> : <Result />}
    </StyledContainer>
  );
};

export default Detail;

/* Detail Style */

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #dcbc8c;
  width: 390px;
  padding: 20px 0px 30px;
`;

const Stats = () => {
  const { handleRouteBack } = useRoute();
  return (
    <>
      <StyledStatsTitle>메이님의 통계</StyledStatsTitle>
      <Chart />
      <StyledStatsResultsContainer>
        <StyledStatsResults>
          <StyledStatsContainer>
            <StyledStatsStrong>닉네임</StyledStatsStrong>
            <StyledStatsList>
              <StyledStatsItem>사라</StyledStatsItem>
              <StyledStatsItem>사라</StyledStatsItem>
              <StyledStatsItem>사라</StyledStatsItem>
              <StyledStatsItem>사라</StyledStatsItem>
            </StyledStatsList>
          </StyledStatsContainer>
          <StyledStatsContainer>
            <StyledStatsStrong>응답 결과</StyledStatsStrong>
            <StyledStatsList>
              <StyledStatsItem>ISTP</StyledStatsItem>
              <StyledStatsItem>ISTP</StyledStatsItem>
              <StyledStatsItem>ISTP</StyledStatsItem>
              <StyledStatsItem>ISTP</StyledStatsItem>
            </StyledStatsList>
          </StyledStatsContainer>
        </StyledStatsResults>
        <StyledMoreButton>더보기</StyledMoreButton>
      </StyledStatsResultsContainer>

      <StyledResultButton onClick={handleRouteBack}>
        이전으로
      </StyledResultButton>
    </>
  );
};

/* Stats Style */

const StyledMoreButton = styled.button`
  text-decoration: underline;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
`;

const StyledStatsContainer = styled.div``;

const StyledStatsList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const StyledStatsTitle = styled.h3`
  font-family: "BlackHanSans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
`;

const StyledStatsStrong = styled.strong`
  display: block;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 10px;
`;

const StyledStatsItem = styled.li`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
`;

const StyledStatsImage = styled.img`
  width: 128px;
  aspect-ratio: 1/1;
  margin-bottom: 12px;
`;

const StyledStatsResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledStatsResults = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  text-align: center;
  margin-bottom: 20px;
`;
const Result = () => {
  const { handleRouteBack } = useRoute();
  return (
    <>
      <StyledResultTitle>메이님의 결과</StyledResultTitle>
      <StyledResultContainer>
        <StyledResultSideContainer>
          <StyledResultStrong>
            친구들이 본<br /> 나의 MBTI
          </StyledResultStrong>
          <StyledResultImage src={charactor} alt="mbti oooo 캐릭터" />
          <StyledResultList>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
          </StyledResultList>
        </StyledResultSideContainer>
        <StyledResultSideContainer>
          <StyledResultStrong>
            실제
            <br /> 나의 MBTI
          </StyledResultStrong>
          <StyledResultImage src={charactor} alt="mbti oooo 캐릭터" />
          <StyledResultList>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
            <StyledResultItem>관심받기싫은관종</StyledResultItem>
          </StyledResultList>
        </StyledResultSideContainer>
      </StyledResultContainer>
      <StyledResultButton onClick={handleRouteBack}>
        이전으로
      </StyledResultButton>
    </>
  );
};

/* Result Style */

const StyledResultTitle = styled.h3`
  margin-bottom: 25px;
  font-family: "blackHanSans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
`;
const StyledResultContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 34px;
`;

const StyledResultSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

const StyledResultStrong = styled.strong`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
`;

const StyledResultImage = styled.img`
  width: 136px;
  aspect-ratio: 1/1;
`;

const StyledResultList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  background: #fcedce;
  list-style-type: initial;
`;

const StyledResultItem = styled.li`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
`;

const StyledResultButton = styled.button`
  width: 33%;
  padding: 8px 0;
  background: #847163;
  border: 2px solid #000000;
  filter: drop-shadow(3px 3px 0px #000000);
  text-align: center;
  font-family: "blackHanSans";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: white;
`;
