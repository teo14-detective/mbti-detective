import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "blackHanSans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  background-color: #ffcd5d;
  border: 2px solid black;
  
  margin: 0 auto;

  &:hover,
  :active {
    background-color: #ff9c4f;
    box-shadow: inset 2px 2px 0px #ab7347;
  }

  &.top,
  &.bottom {
    width: 100%;
    height: 100%;
    padding: 40px 20px;
    font-family: "theJamsil";
    font-size: 18px;
    max-width: calc(430px * 0.9);
  }

  &.top {
    background-color: #f498b7;
  }
  &.bottom {
    background-color: #01e3e0;
  }
  box-shadow: 3px 3px 0px 0px black;
  @media (hover: hover) and (pointer: fine) {
    &.top {
      background-color: #db81d4;
      box-shadow: inset 2px 2px 0px #794475;
    }
    &.bottom {
      background-color: #76b0db;
      box-shadow: inset 2px 2px 0px #5683a4;
    }
  }
  
}
`;
