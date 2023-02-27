/** @jsxImportSource @emotion/react */
import { Result } from "antd";
import { dataBoxEmpty } from "./styles/index";

function DataSearchFailed() {
  return (
    <div css={dataBoxEmpty}>
      <Result status="error" title="Search Failed" />
    </div>
  );
}

export default DataSearchFailed;
