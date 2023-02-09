/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Provider, useSelector, useDispatch } from "react-redux";
import {createSlice, configureStore} from '@reduxjs/toolkit';

//template literal
const color = "white";
const EmotionBox = styled.div`
  background-color: yellow;
  font-size: 20px;
  width: 200px;
  padding: 20px;
  margin: 20px;
  color: "black";
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  &:hover {
    background-color: orange;
  }
`;

// object
const EmotionBox2 = styled.div({
  backgroundColor: "blue",
  color: "black",
  fontSize: "20px",
  width: "200px",
  padding: "20px",
  margin: "20px",
  border: "1px solid black",
  borderRadius: "4px",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "navy",
  },
});

const Maintest = () => {
  return (
    <>
      <div>메인test페이지</div>

      <div className="App">
        <EmotionBox>Emotion Box!</EmotionBox>
        <EmotionBox2>Emotion Box!</EmotionBox2>
      </div>

      {/* <div
        className={css`
          padding: 32px;
          background-color: pink;
        `}
      >
        이모션 css방식
      </div> */}

      <div
        css={css`
          margin: 10px;
          padding: 10px;
          background-color: #eee;
        `}
      >
        This is an example of <code>`css`</code> using a tagged template
        literal.
      </div>

      <div>test</div>
    </>
  );
};

export default Maintest;
