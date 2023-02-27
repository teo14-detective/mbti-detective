import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "./common/Loading";
import { Header } from "@components/common/Header";
import { Button } from "@components/common/Button2";
import { useNavigate } from "react-router-dom";
import { MBTIImage } from "@assets/data/mbti";

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
  const [isLoading, setisLoading] = useState(true);
  const [MBTIData, setMBTIData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`/api/users/${localStorage.getItem("userKey")}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setFetchData(data);
        setisLoading(false);
      })
      .catch((error) => {
        alert("데이터를 불러오는데 실패했습니다!");
        setisLoading(false);
      });
  }, []);
  const userMbti = fetchData?.mbti;
  const user = fetchData?.name;
  const [isEqual, setIsEqual] = useState<boolean>(
    localStorage.getItem("participantAnswer") === userMbti,
  );
  const participantMbti = MBTIImage.filter(
    (elem) =>
      elem.substring(29, 33) === localStorage.getItem("participantAnswer"),
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <StyledContainer>
            <StyledImagesBox>
              <StyledImageBox>
                <StyledParagraphBox>
                  {localStorage.getItem("participantName")}의 생각
                </StyledParagraphBox>
                <StyledImage
                  src={participantMbti.join("")}
                  alt="내가 생각하는 친구의 mbti 캐릭터 이미지"
                />
              </StyledImageBox>
              <StyledImageBox>
                <StyledParagraphBox>{user}의 MBTI</StyledParagraphBox>
                <StyledImage
                  src={`/src/assets/images/mbti-text/${userMbti}.png`}
                  alt="친구의 실제 mbti 캐릭터 이미지"
                />
              </StyledImageBox>
            </StyledImagesBox>

            <StyledResultContainerBox>
              <StyledResultTextBox isEqual={isEqual}>
                {isEqual ? "정답!" : "땡!"}
              </StyledResultTextBox>
              <StyledResultSentenceParagraph>
                {`${user ?? ""}님의 MBTI는 ${userMbti ?? ""}입니다.\n
                  ${
                    localStorage.getItem("participantName") ?? ""
                  }님의 응답 결과가
                  ${user ?? ""}님에게 전송되었습니다.`}
              </StyledResultSentenceParagraph>
            </StyledResultContainerBox>

            <StyledAnchorBox>
              <Link to="/result">{user ?? ""}님의 결과 보기</Link>
            </StyledAnchorBox>
            <StyledButtonBox>
              <Button
                onclick={() => navigate("/")}
                text={"내 MBTI 물어보기"}
                className={"bottom"}
              />
            </StyledButtonBox>
          </StyledContainer>
        </>
      )}
    </>
  );
}

const StyledContainer = styled.section`
  margin: 0 auto;
  text-align: center;
`;
const StyledImagesBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
  margin-bottom: 2em;
`;
const StyledImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

const StyledImage = styled.img`
  width: 138px;
  height: 138px;
`;
const StyledParagraphBox = styled.div`
  width: 125px;
  font-weight: 500;
  text-align: center;
  white-space: normal;
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
  line-height: 20px; //줄높이가 안맞아서 임의 수정함
`;

const StyledResultContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 2em;
`;

const StyledAnchorBox = styled.div`
  font-weight: 400;
  font-size: 18px;

  text-align: center;
  text-decoration-line: underline;
  color: #666666;
  margin-bottom: 16%;
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 10px;
`;

export default ParticipantResult;
