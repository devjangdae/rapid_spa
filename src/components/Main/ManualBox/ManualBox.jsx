/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import SelectBox from "../SelectBox/index";
import DataNotSearched from "../DataNotSearched/index";
import SkeletonBox from "../SkeletonBox/index";
import DataSearchFailed from "../DataSearchFailed/index";
import DataEmpty from "../DataEmpty/index";
import DataTable from "../DataTable/index";
import { selectBoxWrap, contentWrap } from "./styles/index";

function ManualBox() {
  const status = useSelector((state) => state.search.status);
  const totalData = useSelector((state) => state.search.finalListData.length);
  return (
    <div css={contentWrap}>
      <div css={selectBoxWrap}>
        <SelectBox />
      </div>
      <div css={selectBoxWrap}>
        {status === "Welcome!!!" ? (
          <DataNotSearched />
        ) : status === "loading!!!" ? (
          <SkeletonBox />
        ) : status === "fail!!!" ? (
          <DataSearchFailed />
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
