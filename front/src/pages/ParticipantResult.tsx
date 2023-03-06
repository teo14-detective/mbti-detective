import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./common/Loading";
import { Header } from "@components/common/Header";
import { Button } from "@components/common/Button2";
import { useNavigate } from "react-router-dom";
import onCapture from "@utils/captureScreen";
import { ResponseFetchUsageLogs } from "./ResultPage";
import Footer from "@components/result/Footer";
import { StyledCaptureContainer } from "@components/result";
const s3Url = import.meta.env.VITE_S3_URL as string;

function ParticipantResult() {
  type participantsArrayType = {
    uid: number;
    user_mbti: string;
    user_key: string;
    name: string;
  };
  type fetchDataType = {
    create_timestamp: string;
    key: string;
    mbti: string;
    name: string;
    participants: participantsArrayType[];
  };

  const [fetchData, setFetchData] = useState<fetchDataType>();
  const [isLoading, setIsLoading] = useState(true);
  const [usageLog, setUsageLog] = useState<ResponseFetchUsageLogs>({
    hit: 0,
    share: 0,
  });
  const { userKey } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/api/users/${userKey}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setFetchData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("데이터를 불러오는데 실패했습니다!");
        setIsLoading(false);
      });

    const fetchUsageLogs = async () => {
      const res = await fetch("/api/usageLogs");
      const json = await res.json();
      setUsageLog(json);
    };
    fetchUsageLogs();
  }, []);
  const userMbti = fetchData?.mbti;
  const user = fetchData?.name;
  const isEqualMbti = localStorage.getItem("participantAnswer") === userMbti;

  const handleCapture = () => {
    onCapture("capture");
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StyledContainer>
            <Header />
            <StyledMain>
              <StyledCaptureContainer id="capture">
                <StyledImagesBox>
                  <StyledImageBox>
                    <StyledParagraphBox>
                      {localStorage.getItem("participantName")}의 생각
                    </StyledParagraphBox>
                    <StyledImage
                      src={`${s3Url}/mbti-text/${localStorage.getItem(
                        "participantAnswer",
                      )}.png`}
                      alt="내가 생각하는 친구의 mbti 캐릭터 이미지"
                    />
                  </StyledImageBox>
                  <StyledImageBox>
                    <StyledParagraphBox>{user}의 MBTI</StyledParagraphBox>
                    <StyledImage
                      src={`${s3Url}/mbti-text/${userMbti}.png`}
                      alt="친구의 실제 mbti 캐릭터 이미지"
                    />
                  </StyledImageBox>
                </StyledImagesBox>

                <StyledResultContainerBox>
                  <StyledResultTextBox isEqual={isEqualMbti}>
                    {isEqualMbti ? "정답!" : "땡!"}
                  </StyledResultTextBox>
                  <StyledResultSentenceParagraph>
                    {`${user ?? ""}님의 MBTI는 ${userMbti ?? ""}입니다.\n
                  ${
                    localStorage.getItem("participantName") ?? ""
                  }님의 응답 결과가
                  ${user ?? ""}님에게 전송되었습니다.`}
                  </StyledResultSentenceParagraph>
                </StyledResultContainerBox>
              </StyledCaptureContainer>
              <StyledAnchorBox>
                <Link to={`/${userKey}/result`}>
                  {user ?? ""}님의 결과 보기
                </Link>
              </StyledAnchorBox>
              <Button
                onclick={() => navigate("/")}
                text={"내 MBTI 물어보기"}
                className={"bottom"}
              />
              <Footer handleCapture={handleCapture} usageLog={usageLog} />
            </StyledMain>
          </StyledContainer>
        </>
      )}
    </>
  );
}

const StyledContainer = styled.section`
  margin: 0 auto;
  text-align: center;
  height: 100%;
`;
const StyledMain = styled.main`
  display: flex;
  height: calc(100% - 100px - 80px - 90px);
  flex-direction: column;
  justify-content: space-between;
`;
const StyledImagesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10vw;
  margin-bottom: 2vh;
`;
const StyledImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
`;

const StyledImage = styled.img`
  width: 120px;
  height: 120px;
`;
const StyledParagraphBox = styled.div`
  font-weight: 500;
`;
type StyledResultTextType = {
  isEqual: boolean;
};
const StyledResultTextBox = styled.div<StyledResultTextType>`
  font-size: 30px;
  color: ${(props) => (props.isEqual ? "#023C9E" : "#9E2311")};
`;

const StyledResultSentenceParagraph = styled.p`
  white-space: pre-line;
  /* line-height: 20px; //줄높이가 안맞아서 임의 수정함 */
`;

const StyledResultContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledAnchorBox = styled.div`
  font-weight: 400;

  text-align: center;
  text-decoration-line: underline;
  color: #666666;
`;

export default ParticipantResult;
