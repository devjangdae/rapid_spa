/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Empty } from "antd";
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
function DataEmpty() {
  const status = useSelector((state) => state.search.status);
  const totalData = useSelector((state) => state.search.finalListData.length);
  return (
    <div className="dataBoxEmpty" css={dataBoxEmpty}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          status === "complete!!!" && totalData === 0 ? (
            <span>데이터 0</span>
          ) : (
            <span>Please Search for Data</span>
          )
        }
      />
    </div>
  );
}

export default DataEmpty;
