import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type UserKey = {
  userKey: string;
};

export default function MoveResult({ userKey }: UserKey) {
  console.log(userKey);
  return (
    <Link to={`/${userKey}/result`}>
      <div>결과 보러가기</div>
    </Link>
  );
}
