/** @jsxImportSource @emotion/react */
import { Empty } from "antd";
import { notFoundMsg, dataBoxEmpty } from "./styles/index";

function DataEmpty() {
  return (
    <div css={dataBoxEmpty}>
      <Empty
        // image={Empty.PRESENTED_IMAGE_SIMPLE}
        imageStyle={{ height: 100 }}
        description={<span css={notFoundMsg}>Logs Not Found</span>}
      />
    </div>
  );
}

export default DataEmpty;
