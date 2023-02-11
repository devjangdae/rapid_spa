/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const basicContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
`;

function BasicContainer() {
  return <div className="basicContainer" css={[basicContainer]} />;
}

export default BasicContainer;
