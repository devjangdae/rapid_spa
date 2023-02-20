/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Table } from "antd";
import { dataSource } from "../../constants/dataSource";
import { columns } from "../../constants/columns";

const totalWrap = css`
  display: flex;
  padding: 16px;
  max-width: 1440px;
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
  gap: 16px;
`;

const tableStyle = css`
  table-layout: auto;
  width: 100%;
`;

function DataTable() {
  return (
    <div style={{ padding: "0px" }} css={dataBoxEmpty}>
      <div css={totalWrap}>
        <div>total</div>
        <div>total</div>
      </div>
      <div css={tableWrap}>
        <Table
          className="tableStyle"
          css={tableStyle}
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default DataTable;
