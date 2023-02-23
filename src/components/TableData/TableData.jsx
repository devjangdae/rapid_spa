/** @jsxImportSource @emotion/react */
import axios from "axios";
import { css } from "@emotion/react";
import { Table } from "antd";
import { useEffect, useState } from "react";
// import qs from "qs";
// import { dataSource } from "../../constants/dataSource";
import { useSelector } from "react-redux";
import { columns } from "../../constants/columns";

const tableStyle = css`
  table-layout: auto;
  width: 100%;
`;

function TableData() {
  const finalListData = useSelector((state) => state.search.finalListData);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setLoading(false);
        console.log("ccccccccccccccccccccc");
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 2000,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
            // 나중에 토탈 값 넣어줘야 함, sort도
          },
        });
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table
      css={tableStyle}
      columns={columns}
      dataSource={finalListData}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
}

export default TableData;
