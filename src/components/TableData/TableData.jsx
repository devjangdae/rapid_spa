/** @jsxImportSource @emotion/react */
import axios from "axios";
import { css } from "@emotion/react";
import { Table } from "antd";
import qs from "qs";
import { useEffect, useState } from "react";
// import { dataSource } from "../../constants/dataSource";
import { columns } from "../../constants/columns";

const columns2 = [
  {
    title: "Machine",
    dataIndex: "gender",
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    width: "20%",
  },
  {
    title: "Category",
    dataIndex: "gender",
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    width: "20%",
  },
  {
    title: "File Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Date",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Size",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

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
  // console.log(`엑세스토큰${accessToken}`);

  const [machineList, setMachineList] = useState([]);
  const [uniqueLine, setUniqueLine] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [finalListData, setFinalListData] = useState([]);

  useEffect(() => {
    // MACHINE
    const fetchMachine = async () => {
      try {
        const response = await axios.get("/rss/api/system/machinesInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const arrayUniqueByLine = [
          ...new Map(
            response.data.lists.map((item) => [item.line, item])
          ).values(),
        ];

        setUniqueLine(arrayUniqueByLine);
        setMachineList(response.data.lists);
        // console.log(`machineList${machineList}`);
        // console.log(`uniqueLine${uniqueLine}`);
      } catch (e) {
        // console.log(e);
      }
    };

    fetchMachine();

    // CATEGORY
    const fetchCategory = async () => {
      try {
        const response = await axios.get("/rss/api/system/categoryInfo/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const tempList = [];
        for (let i = 0; i < response.data.lists.length; i += 1) {
          tempList.push(
            `${response.data.lists[i].categoryCode}_${response.data.lists[i].categoryName}`
          );
        }

        setCategoryList(tempList);
        // console.log(`tempList${tempList}`);
      } catch (e) {
        // console.log(e);
      }
    };

    fetchCategory();

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

        // console.log(response.data.searchId);
        searchId2 = response.data.searchId;
        // setSearchId3(response.data.searchId);

        try {
          const response = await axios.get(`/rss/api/ftp/search/${searchId2}`, {
            params: { searchId: searchId2 },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          // console.log(response);
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
            setFinalListData(response.data.lists);
            console.log("@f@");
            console.log(finalListData);
            // /rss/api/ftp/search/result/SFTP-20230221135513619-5137
          } catch (e) {
            console.log(e);
            console.log("@e@");
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

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `/rss/api/ftp/search/result/SFTP-20230221141712552-5171`,
  //         {
  //           params: {
  //             resultUrl:
  //               "/rss/api/ftp/search/result/SFTP-20230221141712552-5171",
  //           },
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  //       finalListData = response.data.lists;
  //       console.log(finalListData);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   loadData();
  // }, []);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const timeoutId = setTimeout(function () {
    console.log("Hello World");
  }, 2000);

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
      // rowKey={(record) => record.login.uuid}
      dataSource={finalListData}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
}

export default TableData;
