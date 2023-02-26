import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBackgroundBox = styled.div`
  background-color: #dcbc8c;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const StyledContainBox = styled.div`
  width: 430px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTitleContainBox = styled.div`
  width: 390px;
  height: 220px;
  position: relative;
`;
const StyledTitleBox = styled.div`
  position: absolute;
  width: 180px;
  height: 90px;
  left: 105px;
  top: 60px;
  background: url("src/assets/images/logo.png") no-repeat;
  background-size: contain;
`;

const StyledImagesBox = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const StyledImageBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 138px;
  height: 138px;
`;

const StyledParagraphBox = styled.div`
  width: 125px;
  height: 22px;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
`;
interface StyledResultTextInterface {
  isEqual: boolean;
}
const StyledResultTextBox = styled.div<StyledResultTextInterface>`
  text-align: center;
  vertical-align: middle;
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => (props.isEqual ? "#023C9E" : "#9E2311")};
`;
const StyledResultSentenceParagraph = styled.p`
  text-align: center;
  vertical-align: middle;
  white-space: pre-line;
`;
const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 20px;
  gap: 10px;

  width: 340px;
  height: 56px;

  background: #ffcd5d;
  box-shadow: 5px 5px;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledParagraph = styled.p`
  font-family: "blackHanSans";
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  color: #000000;
`;

const StyledResultContainerBox = styled.div`
  width: 316px;
  height: 119px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  /* font-size: 30px; */
  line-height: 33px;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledAnchorBox = styled.div`
  font-family: "theJamsil";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  text-decoration-line: underline;

  color: #666666;
  margin-bottom: 42px;
`;

function ParticipantResult() {
  const participant: string = "사라";
  const user: string = "메이";
  const participantMbti: string = "ISTP";
  const userMbti: string = "ISFP";
  const [isEqual, setIsEqual] = useState<boolean>(participantMbti === userMbti);

  return (
    <StyledBackgroundBox>
      <StyledContainBox>
        <StyledTitleContainBox>
          <StyledTitleBox />
        </StyledTitleContainBox>

        <StyledImagesBox>
          <StyledImageBox>
            <StyledParagraphBox>{participant}의 생각</StyledParagraphBox>
            <StyledImage
              src={`src/assets/images/mbti-text/${participantMbti}.png`}
              alt="내가 생각하는 친구의 mbti 캐릭터 이미지"
            />
          </StyledImageBox>
          <StyledImageBox>
            <StyledParagraphBox>{user}의 MBTI</StyledParagraphBox>
            <StyledImage
              src={`src/assets/images/mbti-text/${userMbti}.png`}
              alt="친구의 실제 mbti 캐릭터 이미지"
            />
          </StyledImageBox>
        </StyledImagesBox>

        <StyledResultContainerBox>
          <StyledResultTextBox isEqual={isEqual}>
            {isEqual ? "정답!" : "땡!"}
          </StyledResultTextBox>
          <StyledResultSentenceParagraph>
            {`${user}님의 MBTI는 ${userMbti}입니다.
          ${participant}님의 응답 결과가
          ${user}님에게 전송되었습니다.`}
          </StyledResultSentenceParagraph>
        </StyledResultContainerBox>

        <StyledAnchorBox>
          <Link to="/result">{user}님의 결과 보기</Link>
        </StyledAnchorBox>

        <Link to="/">
          <StyledButton>
            <StyledParagraph>내 MBTI 물어보러 가기</StyledParagraph>
          </StyledButton>
        </Link>
      </StyledContainBox>
    </StyledBackgroundBox>
  );
}

export default ParticipantResult;
