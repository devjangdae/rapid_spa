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
  border: 10px #000000;
  margin: 5px;
  width: 1440px;
`;

const notFoundMsg = css`
  font-size: 23px;
`;

function DataEmpty() {
  const status = useSelector((state) => state.search.status);
  const totalData = useSelector((state) => state.search.finalListData.length);
  return (
    <div className="dataBoxEmpty" css={dataBoxEmpty}>
      <Empty
        // image={Empty.PRESENTED_IMAGE_SIMPLE}
        imageStyle={{ height: 100 }}
        description={<span css={notFoundMsg}>Logs Not Found</span>}
      />
    </div>
  );
}

export default DataEmpty;
