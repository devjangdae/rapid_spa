/** @jsxImportSource @emotion/react */
import { Col, Row, Statistic } from "antd";
import { useSelector } from "react-redux";
import TableData from "../TableData/index";
import { dataBoxEmpty, tableWrap, totalWrap } from "./styles/index";

function DataTable() {
  const totalData = useSelector((state) => state.search.finalListData.length);

  return (
    <div style={{ padding: "0px" }} css={dataBoxEmpty}>
      <div css={totalWrap}>
        <Row gutter={16}>
          <Col span={30}>
            <span style={{ textAlign: "right" }}>
              <Statistic title="Total Result" value={totalData} />
            </span>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={30}>
            <Statistic title="&nbsp;" value="&nbsp;Files" />
          </Col>
        </Row>
      </div>
      <div css={tableWrap}>
        <TableData />
      </div>
    </div>
  );
}

export default DataTable;
