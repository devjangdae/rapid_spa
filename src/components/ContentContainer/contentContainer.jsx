/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const contentContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 120px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

function ContentContainer() {
  return <div className="contentContainer" css={[contentContainer]} />;
}

export default ContentContainer;
