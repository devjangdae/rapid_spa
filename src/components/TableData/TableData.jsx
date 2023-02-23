/** @jsxImportSource @emotion/react */
import axios from "axios";
import { css } from "@emotion/react";
import { Table } from "antd";
import qs from "qs";
import { useEffect, useState } from "react";
// import { dataSource } from "../../constants/dataSource";
import { useSelector, useDispatch } from "react-redux";
import { columns } from "../../constants/columns";
import { asyncSearchThunk } from "../../reducers/slices/searchSlice";

const tableStyle = css`
  table-layout: auto;
  width: 100%;
`;

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

function TableData() {
  const dispatch = useDispatch();

  const checkedFabName = useSelector(
    (state) => state.machineData.checkedFabName
  );
  const checkedMachineName = useSelector(
    (state) => state.machineData.checkedMachineName2
  );
  const checkedCategoryCode = useSelector(
    (state) => state.categoryData.checkedCategoryCode
  );
  const checkedCategoryName = useSelector(
    (state) => state.categoryData.checkedCategoryName
  );
  const checkedStartDate = useSelector(
    (state) => state.dateData.checkedStartDate
  );
  const checkedEndDate = useSelector((state) => state.dateData.checkedEndDate);

  const finalListData = useSelector((state) => state.search.finalListData);

  // search 시작
  const thunkParameterArray = [
    checkedFabName,
    checkedMachineName,
    checkedCategoryCode,
    checkedCategoryName,
    checkedStartDate,
    checkedEndDate,
  ];

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    dispatch(asyncSearchThunk(thunkParameterArray));

    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        // console.log(tableParams);
        // console.log(data);
        setLoading(false);
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
      });
  };

  useEffect(() => {
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
