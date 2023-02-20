/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Empty } from "antd";

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
  return (
    <div className="dataBoxEmpty" css={dataBoxEmpty}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span>Please Search for Data</span>}
      />
    </div>
  );
}

export default DataEmpty;
