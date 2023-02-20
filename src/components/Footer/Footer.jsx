/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const wrapper = css`
  display: flex;
  height: 55px;
  justify-content: space-between;
  line-height: 55px;
`;

function Footer() {
  return (
    <div>
      <div css={[wrapper]}>
        <div>version 2023.02.06</div>
        <div>copyright(c)</div>
      </div>
    </div>
  );
}

export default Footer;
