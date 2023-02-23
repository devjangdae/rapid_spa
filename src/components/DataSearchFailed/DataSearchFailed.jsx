/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Result } from "antd";
import { useSelector } from "react-redux";

const dataBoxEmpty = css`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  width: 1440px;
`;
function DataSearchFailed() {
  const status = useSelector((state) => state.search.status);
  const totalData = useSelector((state) => state.search.finalListData.length);
  return (
    <div className="dataBoxEmpty" css={dataBoxEmpty}>
      <Result status="error" title="Search Failed" />
    </div>
  );
}

export default DataSearchFailed;
