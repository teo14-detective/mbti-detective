import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import goldMedal from "@assets/images/gold-medal.png";
import Chart from "./Chart";
import useResultStore from "@store/resultStore";
import mbtiData from "@assets/data/mbti";
import { HiCursorClick } from "react-icons/hi";
const s3Url = import.meta.env.VITE_S3_URL as string;
const questionCharacter = `${s3Url}/mbti-hat/questionCharacter.png`;
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

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
  const surveyList = useResultStore((state) => state.sortedSurveyList);
  const [surveyMBTI, setSurveyMBTI] = useState<any[]>([]);
  const [surveyData, setSurveyData] = useState<any[]>([]);

  const extractFromObj = () => {
    const list = [];
    for (const key in surveyMBTI[0]) {
      const { type, image, description } = surveyMBTI[0][key];
      list.push(type, image, description);
    }
    return list;
  };

  useEffect(() => {
    if (surveyList.length) {
      setSurveyMBTI(
        mbtiData.filter((el) => el[surveyList[0][0].user_mbti.toUpperCase()]),
      );
    }
  }, []);

  useEffect(() => {
    setSurveyData(extractFromObj());
  }, [surveyMBTI]);

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
              <StyledImage src={surveyData[1]} alt={surveyData[0] + `캐릭터`} />
              <StyledMedalImage src={goldMedal} alt="캐릭터" />
            </StyledResultContainer>
            <StyledList>
              {surveyData[2].split(".").map((text: string, i: number) => (
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
              <br />
              친구에게 링크를 공유해보세요!
            </StyledStateMessage>
          </>
        )}
      </StyledCaptureContainer>
      {user.participants.length > 0 ? (
        <>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton ml="auto" mr="auto" display="block">
                  분석 결과 보러가기&nbsp;(Click!)&nbsp;
                  <HiCursorClick />
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link
                  style={{ width: "100%", marginBottom: "10px" }}
                  to={`/${userKey}/result/chart`}
                >
                  <StyledButton>통계 보러가기</StyledButton>
                </Link>
                <Link to="/${userKey}/result/compare">
                  <StyledButton>실제 MBTI랑 비교하기</StyledButton>
                </Link>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton ml="auto" mr="auto" display="block">
                  내 MBTI 물어보기&nbsp;(Click!)&nbsp;
                  <HiCursorClick />
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Link style={{ width: "100%", marginBottom: "10px" }} to={"/"}>
                  <StyledButton>처음이신가요?</StyledButton>
                </Link>
                <Link to={`/${userKey}/share`}>
                  <StyledButton>{user.name}님이신가요?</StyledButton>
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <Accordion defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton ml="auto" mr="auto" display="block">
                내 MBTI 물어보기&nbsp;
                <HiCursorClick />
                (Click!)&nbsp;
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Link style={{ width: "100%", marginBottom: "10px" }} to={"/"}>
                <StyledButton>처음이신가요?</StyledButton>
              </Link>
              <Link to={`/${userKey}/share`}>
                <StyledButton>{user.name}님이신가요?</StyledButton>
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
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
  width: 40%;
  position: absolute;
  top: 0;
  right: -20px;
`;

export const StyledCaptureContainer = styled.div`
  /* width: 100%; */
  /* padding: 10px; */
  padding: 4vh;
  background-color: #dcbc8c;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-family: "blackHanSans";
  font-size: 30px;
  font-weight: 400;
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
  margin-left: -16px;
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
  font-size: 16px;
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
  margin-bottom: 2vh;
`;
