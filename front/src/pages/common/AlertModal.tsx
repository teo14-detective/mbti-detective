import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

export const AlertModal = ({
  text,
  setAlert,
}: {
  text: string;
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // 알럿 3초 후, 사라짐
  useEffect(() => {
    const disAppearModal = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(disAppearModal);
  });

  return <StyledContainer>{text}</StyledContainer>;
};

const smoothAppear = keyframes`
    from {
opacity: 0;
    }
    to {
opacity: 1;
    }
`;

const StyledContainer = styled.section`
  position: absolute;
  top: 230px;
  animation: ${smoothAppear} 600ms linear;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffcd5d;
  border: 1px solid black;
  box-shadow: 3px 3px 0px 0px black;
`;
