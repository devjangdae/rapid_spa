/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const outletBox = css`
  font-size: 30px;
  font-weight: 800;
  background-color: #000f45;
  color: white;
  padding: 30px;
`;

function OutletTest() {
  return (
    <div>
      <div css={[outletBox]}>OutletTest페이지</div>
    </div>
  );
}

export default OutletTest;
