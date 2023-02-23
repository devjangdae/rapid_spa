/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import SelectBox from "../SelectBox/index";
import DataEmpty from "../DataEmpty/index";
import DataTable from "../DataTable/index";
import SkeletonBox from "../SkeletonBox/index";

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
  padding-left: 50px;
  padding-right: 50px;
`;

function ManualBox() {
  const status = useSelector((state) => state.search.status);
  const totalData = useSelector((state) => state.search.finalListData.length);
  return (
    <div className="contentWrap" css={contentWrap}>
      <div className="row01" css={selectBoxWrap}>
        <SelectBox />
      </div>
      <div className="row02" css={selectBoxWrap}>
        {status === "Welcome!!!" ? (
          <DataEmpty />
        ) : status === "loading!!!" ? (
          <SkeletonBox />
        ) : status === "fail!!!" ? (
          <DataEmpty />
        ) : status === "complete!!!" && totalData === 0 ? (
          <DataEmpty />
        ) : (
          <DataTable /> // "complete!!!"
        )}
      </div>
    </div>
  );
}

export default ManualBox;
