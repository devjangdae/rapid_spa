/** @jsxImportSource @emotion/react */
import axios from "axios";
import { css } from "@emotion/react";
import { Table } from "antd";
import qs from "qs";
import { useEffect, useState } from "react";
// import { dataSource } from "../../constants/dataSource";
import { columns } from "../../constants/columns";

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
  const accessToken = sessionStorage.getItem("accessToken");
  const [finalListData, setFinalListData] = useState([]);

  useEffect(() => {
    // SEARCH URL
    let searchId2;
    let resultId2;
    const fetchSearchURL = async () => {
      try {
        const response = await axios.post(
          "/rss/api/ftp/search",
          {
            fabNames: ["Line1"],
            machineNames: ["MPA_208"],
            categoryCodes: ["001"],
            categoryNames: ["RUNNING_STATUS"],
            startDate: "20221001144108",
            endDate: "20230215144113",
            folder: false,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        searchId2 = response.data.searchId;
        try {
          const response = await axios.get(`/rss/api/ftp/search/${searchId2}`, {
            params: { searchId: searchId2 },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          resultId2 = response.data.resultUrl;
          try {
            const response = await axios.get(`${resultId2}`, {
              params: {
                resultUrl: resultId2,
              },
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            // fianlListData 최종데이터(api -> 서치 완성하면 store로 변경필요함.)
            setFinalListData(response.data.lists);
            // /rss/api/ftp/search/result/SFTP-20230221135513619-5137
          } catch (e) {
            // console.log(e);
          }
        } catch (e) {
          // console.log(e);
        }
      } catch (e) {
        // console.log(e);
      }
    };
    fetchSearchURL();
    // SFTP-20230221135043558-5127
  }, []);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const timeoutId = setTimeout(function () {
    console.log("api호출중 setTimeOut..");
  }, 1000);

  const fetchData = () => {
    clearTimeout(timeoutId);

    setLoading(true);
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
            total: 200,
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
