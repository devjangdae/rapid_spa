/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SelectBox from "../SelectBox/index";
import DataEmpty from "../DataEmpty/index";
import DataTable from "../DataTable/index";

const contentWrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const selectBoxWrap = css`
  display: flex;
  flex-direction: column;
  width: 1440px;
`;

const dataList = 1;
// 임시

function ManualBox() {
  return (
    <div className="contentWrap" css={contentWrap}>
      <div className="row01" css={selectBoxWrap}>
        <SelectBox />
      </div>
      <div className="row02" css={selectBoxWrap}>
        {dataList === 1 ? <DataTable /> : <DataEmpty />}
      </div>
    </div>
  );
}

export default ManualBox;
