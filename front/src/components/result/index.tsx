import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import goldMedal from "@assets/images/gold-medal.png";
import Chart from "./Chart";
import useResultStore from "@store/resultStore";
import mbtiData from "@assets/data/mbti";
const s3Url = import.meta.env.VITE_S3_URL as string;
const questionCharacter = `${s3Url}/mbti-hat/questionCharacter.png`;

type MBTI = {
  type: string;
  image: string;
  description: string;
};

const Result = () => {
  const user = useResultStore((state) => state.user);
  const { userKey } = useParams();
  const { setUser, MBTIData, setMBTIData, sortedSurveyList } = useResultStore(
    (state) => ({
      ...state,
    }),
  );

  useEffect(() => {
    if (user.mbti) {
      const mbti = user.mbti.toUpperCase();
      setMBTIData(
        mbtiData.filter((type) => Object.keys(type)[0] === mbti)[0][mbti],
      );
    }
  }, [user]);

  return (
    <StyledContainer>
      <StyledCaptureContainer id="capture">
        <StyledTitle>{`${user.name}님의 결과`}</StyledTitle>
        {user.participants.length ? (
          <>
            <StyledResultContainer>
              <StyledImage
                src={MBTIData?.image}
                alt={MBTIData?.type + `캐릭터`}
              />
              <StyledMedalImage src={goldMedal} alt="캐릭터" />
            </StyledResultContainer>
            <StyledList>
              {MBTIData?.description.split(".").map((text, i) => (
                <StyledItem key={i}>{text}</StyledItem>
              ))}
            </StyledList>
          </>
        ) : (
          <>
            <StyledStateImage
              src={questionCharacter}
              alt="고개를 갸웃거리는 탐정 이미지"
            />
            <StyledStateMessage>
              "앗! 아직 아무도 추리를 안했어요!"
            </StyledStateMessage>
          </>
        )}
      </StyledCaptureContainer>
      {user.participants.length > 0 && (
        <>
          <Link
            style={{ width: "100%", marginBottom: "10px" }}
            to={`/${userKey}/result/chart`}
          >
            <StyledButton>통계 보러가기</StyledButton>
          </Link>
          <Link to="/${userKey}/result/compare">
            <StyledButton>실제 MBTI랑 비교하기</StyledButton>
          </Link>
        </>
      )}
    </StyledContainer>
  );
};

export default Result;

/* Result Style */

const StyledStateImage = styled.img`
  width: 128px;
  aspect-ratio: 1/1;
  margin-left: -10px;
  margin-top: 30px;
`;

const StyledStateMessage = styled.strong`
  display: block;
  margin-top: 30px;
  padding: 20px;
  font-size: 20px;
  color: white;
`;

const StyledMedalImage = styled.img`
  position: absolute;
  top: 0;
  right: -20px;
`;

export const StyledCaptureContainer = styled.div`
  width: 100%;
  margin-bottom: 45px;
  padding: 10px;
  background-color: #dcbc8c;
  text-align: center;
`;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledTitle = styled.h2`
  font-family: "blackHanSans";
  font-size: 30px;
  font-weight: 400;
  line-height: 38px;
  text-align: center;
`;

const StyledResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 128px;
  height: 128px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 128px;
  aspect-ratio: 1/1;
  margin-left: -10px;
`;

const StyledList = styled.ul`
  width: 100%;
  padding: 10px 0px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  text-align: center;
`;

const StyledItem = styled.li`
  line-height: 21px;
  font-family: "theJamsil";
  font-size: 16px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 8px 10px;
  border: 2px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(3px 3px 0px #000000);
  background: #ffcd5d;
  font-family: "blackHanSans";
  font-size: 32px;
`;
