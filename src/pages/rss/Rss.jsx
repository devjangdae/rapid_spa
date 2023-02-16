/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const rssStyle = css`
  font-size: 30px;
  font-weight: 800;
  background-color: #000f45;
  color: white;
  padding: 30px;
`;

function Rss() {
  return (
    <div>
      <div css={[rssStyle]}>Rss페이지</div>
    </div>
  );
}

export default Rss;
