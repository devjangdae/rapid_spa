/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const titleText = css`
  font-size: 90px;
  font-weight: 800;
  color: #000f45;
`;

const titleTextWrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const titleBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 400px;
`;

function index() {
  return (
    <div className="titleBox" css={[titleBox]}>
      <div className="titleTextWrap" css={[titleTextWrap]}>
        <div className="titleText" css={[titleText]}>
          Rapid
        </div>
        <div className="titleText" css={[titleText]}>
          Collector
        </div>
      </div>
    </div>
  );
}

export default index;
