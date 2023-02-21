/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Table } from "antd";
import { dataSource } from "../../constants/dataSource";
import { columns } from "../../constants/columns";

const tableStyle = css`
  table-layout: auto;
  width: 100%;
`;

function TableData() {
  return (
    <Table
      className="tableStyle"
      css={tableStyle}
      dataSource={dataSource}
      columns={columns}
    />
  );
}

export default TableData;
