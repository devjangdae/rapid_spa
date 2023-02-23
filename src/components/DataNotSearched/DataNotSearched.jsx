/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Empty, Result } from "antd";
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
function DataNotSearched() {
  const status = useSelector((state) => state.search.status);
  const totalData = useSelector((state) => state.search.finalListData.length);
  return (
    <div className="dataBoxEmpty" css={dataBoxEmpty}>
      <Result title="Search Has Not Started Yet" />
    </div>
  );
}

export default DataNotSearched;
