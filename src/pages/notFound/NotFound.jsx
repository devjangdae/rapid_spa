/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const notFoundStyle = css`
  font-size: 30px;
  font-weight: 800;
  background-color: #000f45;
  color: white;
  padding: 30px;
`;

function NotFound() {
  return (
    <div>
      <div css={[notFoundStyle]}>404 페이지입니다.</div>
    </div>
  );
}

export default NotFound;
