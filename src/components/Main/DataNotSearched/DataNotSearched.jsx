/** @jsxImportSource @emotion/react */
import { Result } from "antd";
import { dataBoxEmpty } from "./styles/index";

function DataNotSearched() {
  return (
    <div css={dataBoxEmpty}>
      <Result title="Search Has Not Started Yet" />
    </div>
  );
}

export default DataNotSearched;
