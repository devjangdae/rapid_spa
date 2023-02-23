/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Table, Button, Input, Space } from "antd";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { columns } from "../../constants/columns";

const tableStyle = css`
  table-layout: auto;
  width: 100%;
`;

function TableData() {
  const finalListData = useSelector((state) => state.search.finalListData);
  const totalData = useSelector((state) => state.search.finalListData.length);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  useEffect(() => {
    const fetchData = () => {
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: totalData,
        },
      });
    };

    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <Table
      css={tableStyle}
      columns={columns}
      dataSource={finalListData}
      pagination={tableParams.pagination}
      onChange={handleTableChange}
    />
  );
}

export default TableData;
