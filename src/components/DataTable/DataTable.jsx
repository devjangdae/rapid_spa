/** @jsxImportSource @emotion/react */
import { Table } from "antd";
import { dataSource } from "../../constants/dataSource";
import { columns } from "../../constants/columns";

function DataTable() {
  return (
    <div style={{ padding: "120px" }}>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default DataTable;
