/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Col, Row, Statistic } from "antd";
import TableData from "../TableData/index";

const totalWrap = css`
  display: flex;
  padding-top: 16px;
  max-width: 1440px;
  width: 100%;
  padding-left: 60px;
`;

const tableWrap = css`
  display: flex;
  padding: 16px;
  width: 100%;
  max-width: 1408px;
`;

const dataBoxEmpty = css`
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 1440px;
`;

function DataTable() {
  return (
    <div style={{ padding: "0px" }} css={dataBoxEmpty}>
      <div css={totalWrap}>
        <Row gutter={16}>
          <Col span={30}>
            <span style={{ textAlign: "right" }}>
              <Statistic title="Total Result" value={12345} />
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
